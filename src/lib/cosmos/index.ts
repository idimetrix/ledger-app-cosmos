import crypto from 'crypto';

import Transport from '@ledgerhq/hw-transport';
import { bech32 } from 'bech32';
import Ripemd160 from 'ripemd160';

import { cosmosLog as log } from '../../log';

import {
  APPLICATION,
  CLA,
  ERROR_CODE,
  INS,
  P1_VALUES,
  SIZE,
} from './constants';
import { publicKeyv1, serializePathv1, signSendChunkv1 } from './cosmos1';
import { publicKeyv2, serializePathv2, signSendChunkv2 } from './cosmos2';
import {
  APK,
  ApplicationInformation,
  DeviceInformation,
  PK,
  Signature,
  Version,
} from './types';
import {
  errorCodeToString,
  isArrayOrTypedArray,
  isObject,
  processErrorResponse,
  sortObject,
} from './utils';

const wait: (ms?: number) => Promise<number> = (
  ms: number = 1
): Promise<number> =>
  new Promise(
    (resolve: (value: number | PromiseLike<number>) => void): number =>
      window.setTimeout(resolve, ms)
  );

/**
 *
 * [[include:cosmos/properties.md]]
 *
 * [[include:installation.md]]
 *
 * [[include:cosmos/usage.md]]
 *
 * [[include:cosmos/demo.md]]
 *
 */
export class Cosmos {
  private _transport: Transport = null as any;

  private _version: Version | null = null;
  private _applicationInformation: ApplicationInformation | null = null;
  private _deviceInformation: DeviceInformation | null = null;

  // --- INSTANCE --------------------------------------------------------------

  // private static _instance: Cosmos | null = null;
  //
  // public static get instance(): Cosmos {
  //   return this._instance || (this._instance = new Cosmos());
  // }

  // ---------------------------------------------------------------------------

  constructor(
    transport: Transport,
    public readonly scrambleKey: string = APPLICATION
  ) {
    this.transport = transport;

    log.log('Cosmos created', { transport });
  }

  // --- DEBUG -----------------------------------------------------------------

  public debug(debug: boolean): void {
    log.log('Cosmos:debug', { debug });

    if (debug) {
      log.enableAll();
    } else {
      log.disableAll();
    }
  }

  // --- PUBLIC ----------------------------------------------------------------

  public get transport(): Transport {
    return this._transport;
  }

  public set transport(transport: Transport) {
    log.log('Cosmos:transport', { transport });

    if (!transport) {
      throw new Error('Transport has not been defined');
    }

    this._version = null;
    this._applicationInformation = null;
    this._deviceInformation = null;

    this._transport = transport;

    transport.decorateAppAPIMethods(
      this,
      [
        'getVersion',
        'getApplicationInformation',
        'getDeviceInformation',
        'getPublicKey',
        'getAddressAndPublicKey',
        'showAddressAndPublicKey',
        'sign',
      ],
      this.scrambleKey
    );
  }

  // --- PUBLIC

  public serializeHRP(hrp: string): Buffer {
    log.log('Cosmos:serializeHRP', { hrp });

    if (!hrp || hrp.length < 3 || hrp.length > 83) {
      throw new Error('Invalid HRP');
    }

    const buffer: Buffer = Buffer.alloc(1 + hrp.length);

    buffer.writeUInt8(hrp.length, 0);
    buffer.write(hrp, 1);

    return buffer;
  }

  public getBech32FromPK(hrp: string, pk: Buffer): string {
    log.log('Cosmos:getBech32FromPK', { hrp, pk });

    if (pk.length !== 33) {
      throw new Error('expected compressed public key [31 bytes]');
    }

    const hashSha256: Buffer = crypto.createHash('sha256').update(pk).digest();

    const hashRip: Buffer = new Ripemd160().update(hashSha256).digest();

    return bech32.encode(hrp, bech32.toWords(hashRip));
  }

  public async serializePath(
    path: readonly number[] | string
  ): Promise<Buffer> {
    log.log('Cosmos:serializePath', { path });

    const version: Version = await this.version();

    switch (version.major) {
      case 1:
        return serializePathv1(path);
      case 2:
        return serializePathv2(path);
      default:
        throw version;
    }
  }

  public async getVersion(force: boolean = true): Promise<Version> {
    try {
      log.log('Cosmos:getVersion request');

      const version: Version = await this.version(force);

      log.log('Cosmos:getVersion response', { version });

      return version;
    } catch (error) {
      log.error('Cosmos:getVersion', { error });

      return processErrorResponse(error);
    }
  }

  public async getApplicationInformation(): Promise<ApplicationInformation> {
    if (this?._applicationInformation?.return_code === ERROR_CODE.NoError) {
      return this._applicationInformation;
    }

    try {
      log.log('Cosmos:getApplicationInformation request');

      const response: Uint8Array = await this.send(0xb0, 0x01, 0, 0);

      log.log('Cosmos:getApplicationInformation', { response });

      const codes: Uint8Array = response.slice(-2);
      const code: number = codes[0] * 256 + codes[1];

      if (response[0] !== 1) {
        // Ledger responds with format ID 1. There is no spec for any format != 1
        throw {
          error_message: 'response format ID not recognized',
          return_code: 0x9001,
        };
      }

      const appNameLen: number = response[1];

      const appName: string = Buffer.from(
        response.slice(2, 2 + appNameLen)
      ).toString('ascii');

      let idx: number = 2 + appNameLen;

      const appVersionLen: number = response[idx];

      idx += 1;

      const appVersion: string = Buffer.from(
        response.slice(idx, idx + appVersionLen)
      ).toString('ascii');

      idx += appVersionLen;

      const appFlagsLen: number = response[idx];

      idx += 1;

      const flagLen: number = appFlagsLen;
      const flagsValue: number = response[idx];

      return (this._applicationInformation = {
        appName,
        appVersion,
        error_message: errorCodeToString(code),
        flagLen,
        flag_onboarded: (flagsValue & 4) !== 0,
        flag_pin_validated: (flagsValue & 128) !== 0,
        flag_recovery: (flagsValue & 1) !== 0,
        flag_signed_mcu_code: (flagsValue & 2) !== 0,
        flagsValue,
        return_code: code,
      });
    } catch (error) {
      log.error('Cosmos:getApplicationInformation', { error });

      return processErrorResponse(error);
    }
  }

  public async getDeviceInformation(): Promise<DeviceInformation> {
    if (this?._deviceInformation?.return_code === ERROR_CODE.NoError) {
      return this._deviceInformation;
    }

    try {
      log.log('Cosmos:getDeviceInformation request');

      const response: Uint8Array = await this.send(
        0xe0,
        0x01,
        0,
        0,
        Buffer.from([]),
        [ERROR_CODE.NoError, 0x6e00]
      );

      log.log('Cosmos:getDeviceInformation', { response });

      const codes: Uint8Array = response.slice(-2);
      const code: number = codes[0] * 256 + codes[1];

      if (code === 0x6e00) {
        throw {
          error_message: 'This command is only available in the Dashboard',
          return_code: code,
        };
      }

      const targetId: string = Buffer.from(response.slice(0, 4)).toString(
        'hex'
      );

      let pos: number = 4;

      const secureElementVersionLen: number = response[pos];

      pos += 1;

      const seVersion: string = response
        .slice(pos, pos + secureElementVersionLen)
        .toString();

      pos += secureElementVersionLen;

      const flagsLen: number = response[pos];

      pos += 1;

      const flag: string = Buffer.from(
        response.slice(pos, pos + flagsLen)
      ).toString('hex');

      pos += flagsLen;

      const mcuVersionLen: number = response[pos];
      pos += 1;

      // Patch issue in mcu version
      let tmp: Uint8Array = response.slice(pos, pos + mcuVersionLen);

      if (tmp[mcuVersionLen - 1] === 0) {
        tmp = response.slice(pos, pos + mcuVersionLen - 1);
      }

      const mcuVersion: string = tmp.toString();

      return (this._deviceInformation = {
        error_message: errorCodeToString(code),
        flag,
        mcuVersion,
        return_code: code,
        seVersion,
        targetId,
      });
    } catch (error) {
      log.error('Cosmos:getDeviceInformation', { error });

      return processErrorResponse(error);
    }
  }

  public async getPublicKey(path: number[] | string): Promise<PK> {
    try {
      log.log('Cosmos:getPublicKey request', { path });

      const version: Version = await this.version();

      switch (version.major) {
        case 1:
          return publicKeyv1(this.transport, await this.serializePath(path));
        case 2: {
          return publicKeyv2(
            this.transport,
            Buffer.concat([
              this.serializeHRP('cosmos'),
              await this.serializePath(path),
            ])
          );
        }
        default:
          throw version;
      }
    } catch (error) {
      log.error('Cosmos:getPublicKey', { error });

      return processErrorResponse(error);
    }
  }

  public async getAddressAndPublicKey(
    path: number[] | string,
    hrp: string,
    p1: number = P1_VALUES.ONLY_RETRIEVE,
    p2: number = 0
  ): Promise<APK> {
    try {
      log.log('Cosmos:getAddressAndPublicKey request', { path, hrp, p1, p2 });

      const serializedPath: Buffer = await this.serializePath(path);

      const response: Uint8Array = await this.send(
        CLA,
        INS.GET_ADDR_SECP256K1,
        p1,
        p2,
        Buffer.concat([this.serializeHRP(hrp), serializedPath]),
        [ERROR_CODE.NoError]
      );

      log.log('Cosmos:getAddressAndPublicKey response', { response });

      const codes: Uint8Array = response.slice(-2);
      const code: number = codes[0] * 256 + codes[1];

      return {
        bech32_address: Buffer.from(response.slice(33, -2)).toString(),
        compressed_pk: Buffer.from(response.slice(0, 33)),
        error_message: errorCodeToString(code),
        return_code: code,
      };
    } catch (error) {
      log.error('Cosmos:getAddressAndPublicKey', { error });

      return processErrorResponse(error);
    }
  }

  public async showAddressAndPubKey(
    path: number[] | string,
    hrp: string,
    p1: number = P1_VALUES.SHOW_ADDRESS_IN_DEVICE,
    p2: number = 0
  ): Promise<APK> {
    return this.getAddressAndPublicKey(path, hrp, p1, p2);
  }

  public async sign(
    path: number[] | string,
    data: any,
    size: number = SIZE
  ): Promise<Signature> {
    data = isArrayOrTypedArray(data)
      ? data
      : isObject(data)
      ? JSON.stringify(sortObject(data))
      : String(data);

    try {
      log.log('Cosmos:sign request', { path, data, size });

      const chunks: Buffer[] = await this.signGetChunks(path, data, size);

      log.log('Cosmos:sign response', { chunks });

      const signatures: Signature[] = [];

      for (let i: number = 0; i < chunks.length; i++) {
        signatures[i] = await this.signSendChunk(
          1 + i,
          chunks.length,
          chunks[i]
        );

        if (signatures[i].return_code !== ERROR_CODE.NoError)
          return signatures[i];
      }

      const signature: Signature = signatures[signatures.length - 1];

      log.log('Cosmos:sign', { signatures, signature });

      return signature;
    } catch (error) {
      log.error('Cosmos:sign', { error });

      return processErrorResponse(error);
    }
  }

  // --- PRIVATE ---------------------------------------------------------------

  private async send(
    cla: number,
    ins: number,
    p1: number,
    p2: number,
    data?: Buffer,
    statusList?: number[],
    ms?: number
  ): Promise<Uint8Array> {
    if (!ms || ms === Infinity) {
      return (await this.transport.send(
        cla,
        ins,
        p1,
        p2,
        data,
        statusList
      )) as Uint8Array;
    }

    return await Promise.race<Promise<Uint8Array>>([
      this.transport.send(cla, ins, p1, p2, data, statusList),
      wait(ms).then((): any => {
        throw {
          error_message: errorCodeToString(14),
          return_code: 14,
        };
      }),
    ]);
  }

  private async version(force: boolean = true): Promise<Version> {
    if (this?._version?.return_code === ERROR_CODE.NoError && !force) {
      return this._version;
    }

    try {
      log.log('getVersion request');

      const response: Uint8Array = await this.send(
        CLA,
        INS.GET_VERSION,
        0,
        0,
        undefined,
        undefined,
        10 * 1000
      );

      log.log('getVersion response', { response });

      const codes: Uint8Array = response.slice(-2);
      const code: number = codes[0] * 256 + codes[1];

      this._version = {
        device_locked: response[4] === 1,
        error_message: errorCodeToString(code),
        major: response[1],
        minor: response[2],
        patch: response[3],
        return_code: code,
        target_id: (response.length >= 9
          ? (response[5] << 24) +
            (response[6] << 16) +
            (response[7] << 8) +
            (response[8] << 0)
          : 0
        ).toString(16),
        test_mode: response[0] !== 0,
      };

      log.log('getVersion version', { version: this._version });

      return this._version;
    } catch (error) {
      log.error('getVersion', { error });

      return processErrorResponse(error);
    }
  }

  private async signGetChunks(
    path: number[] | string,
    data: string | Uint8Array | ReadonlyArray<number>,
    size: number
  ): Promise<Buffer[]> {
    const serializedPath: Buffer = await this.serializePath(path);

    const chunks: Buffer[] = [serializedPath];

    const buffer: Buffer = Buffer.from(data as any);

    // const buffer: Buffer = crypto.createHash('sha256').update(data as Uint8Array).digest()

    for (let i: number = 0; i < buffer.length; i += size) {
      let end: number = i + size;
      if (i > buffer.length) {
        end = buffer.length;
      }
      chunks.push(buffer.slice(i, end));
    }

    return chunks;
  }

  private async signSendChunk(
    chunkIdx: number,
    chunkNum: number,
    chunk: Buffer
  ): Promise<Signature> {
    const version: Version = await this.version();

    switch (version.major) {
      case 1:
        return signSendChunkv1(this.transport, chunkIdx, chunkNum, chunk);
      case 2:
        return signSendChunkv2(this.transport, chunkIdx, chunkNum, chunk);
      default:
        throw version;
    }
  }
}
