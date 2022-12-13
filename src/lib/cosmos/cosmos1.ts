import Transport from '@ledgerhq/hw-transport';
import { signatureImport } from 'secp256k1';

import { cosmosLog as log } from '../../log';

import { CLA, ERROR_CODE, INS } from './constants';
import { PK, Signature } from './types';
import { errorCodeToString, formatPath, processErrorResponse } from './utils';

export function serializePathv1(path: readonly number[] | string): Buffer {
  path = formatPath(path);

  if (!Array.isArray(path) || path.length < 3) {
    throw new Error('Invalid path.');
  }

  if (path.length > 10) {
    throw new Error('Invalid path. Length should be >= 3 and <= 10');
  }

  const buffer: Buffer = Buffer.alloc(1 + 4 * path.length);

  buffer.writeUInt8(path.length, 0);

  for (let i: number = 0; i < path.length; i++) {
    buffer.writeInt32LE(i < 3 ? path[i] | 0x80000000 : path[i], 1 + i * 4);
  }

  return buffer;
}

export async function signSendChunkv1(
  transport: Transport,
  chunkIdx: number,
  chunkNum: number,
  chunk: Buffer
): Promise<Signature> {
  try {
    const response: Buffer = await transport.send(
      CLA,
      INS.SIGN_SECP256K1,
      chunkIdx,
      chunkNum,
      chunk,
      [ERROR_CODE.NoError, 0x6984, 0x6a80]
    );

    log.log('signSendChunkv1', { response });

    const codes: Buffer = response.slice(-2);
    const code: number = codes[0] * 256 + codes[1];

    let error: string = errorCodeToString(code);

    if (code === 0x6a80 || code === 0x6984) {
      error = `${error} : ${response
        .slice(0, response.length - 2)
        .toString('ascii')}`;
    }

    return {
      error_message: error,
      return_code: code,
      signature:
        response.length > 2
          ? signatureImport(response.slice(0, response.length - 2))
          : null,
    };
  } catch (error) {
    log.error('signSendChunkv1', { error });

    return processErrorResponse(error);
  }
}

function compressPublicKey(pk: Buffer): Buffer {
  if (pk.length !== 65) {
    throw new Error('decompressed public key length should be 65 bytes');
  }
  const y: Buffer = pk.slice(33, 65);

  const z: Buffer = Buffer.from([2 + (y[y.length - 1] & 1)]);

  return Buffer.concat([z, pk.slice(1, 33)]);
}

export async function publicKeyv1(
  transport: Transport,
  data: Buffer
): Promise<PK> {
  try {
    const response: Buffer = await transport.send(
      CLA,
      INS.INS_PUBLIC_KEY_SECP256K1,
      0,
      0,
      data,
      [ERROR_CODE.NoError]
    );

    log.log('publicKeyv1', { response });

    const codes: Buffer = response.slice(-2);
    const code: number = codes[0] * 256 + codes[1];

    const pk: Buffer = Buffer.from(response.slice(0, 65));

    return {
      compressed_pk: compressPublicKey(pk),
      error_message: errorCodeToString(code),
      pk,
      return_code: code,
    };
  } catch (error) {
    log.error('publicKeyv1', { error });

    return processErrorResponse(error);
  }
}
