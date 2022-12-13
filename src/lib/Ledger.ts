import events from 'events';

import Transport from '@ledgerhq/hw-transport';
import TransportU2F from '@ledgerhq/hw-transport-u2f';
import TransportWebHID from '@ledgerhq/hw-transport-webhid';
import TransportWebUSB from '@ledgerhq/hw-transport-webusb';

import { ledgerLog as log } from '../log';

import { Cosmos } from './cosmos';
import {
  APK,
  ApplicationInformation,
  DeviceInformation,
  PK,
  Signature,
  Version,
} from './cosmos/types';

const wait: (ms?: number) => Promise<number> = (
  ms: number = 1
): Promise<number> =>
  new Promise(
    (resolve: (value: number | PromiseLike<number>) => void): number =>
      window.setTimeout(resolve, ms)
  );

export enum EVENTS {
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
}

export type Model = {
  blockSize: number;
  id: string;
  legacyUsbProductId: number;
  memorySize: number;
  productIdMM: number;
  productName: string;
  usbOnly: boolean;
};

export type Device = {
  deviceClass: number;
  deviceProtocol: number;
  deviceSubclass: number;
  deviceVersionMajor: number;
  deviceVersionMinor: number;
  deviceVersionSubminor: number;
  manufacturerName: string;
  opened: boolean;
  productId: number;
  productName: string;
  serialNumber: string;
  usbVersionMajor: number;
  usbVersionMinor: number;
  usbVersionSubminor: number;
  vendorId: number;
};

export type LedgerOptions = {
  useU2f?: boolean;
  useWebUSB?: boolean;
  useWebHID?: boolean;
};

/**
 *
 * [[include:ledgerer/properties.md]]
 *
 * [[include:installation.md]]
 *
 * [[include:ledgerer/usage.md]]
 *
 * [[include:ledgerer/demo.md]]
 *
 */
export class Ledger extends events.EventEmitter {
  // --- EVENTS ----------------------------------------------------------------

  public static readonly EVENTS: typeof EVENTS = EVENTS;

  // ---------------------------------------------------------------------------

  private _transport: Transport | null = null;
  private _cosmos: Cosmos | null = null;

  public error: Error | null = null;
  public readonly EVENTS: typeof EVENTS = EVENTS;

  public isConnecting: boolean = false;
  public isDisconnecting: boolean = false;

  private default: LedgerOptions = {
    useU2f: false,
    useWebHID: false,
    useWebUSB: true,
  };

  // --- DEBUG -----------------------------------------------------------------

  public debug(debug: boolean): void {
    if (debug) {
      log.enableAll();
    } else {
      log.disableAll();
    }
  }

  // --- INSTANCE --------------------------------------------------------------

  private static _instance: Ledger | null = null;

  public static get instance(): Ledger {
    return this._instance || (this._instance = new Ledger());
  }

  // ---------------------------------------------------------------------------

  constructor(private readonly options: LedgerOptions = {}) {
    super();

    this.options = { ...this.default, ...(options || {}) };
  }

  // --- TRANSPORT -------------------------------------------------------------

  async u2f(): Promise<Transport | null> {
    if (!this.options.useU2f || !(await TransportU2F.isSupported())) {
      log.log('u2f not supported');

      return null;
    }

    try {
      const transport: TransportU2F = await TransportU2F.create();

      log.log('u2f', { transport });

      return transport;
    } catch (error) {
      log.error('u2f', { error });
    }

    return null;
  }

  async webUSB(request: boolean = false): Promise<Transport | null> {
    if (!this.options.useWebUSB || !(await TransportWebUSB.isSupported())) {
      log.log('webUSB not supported');

      return null;
    }

    try {
      const transport: TransportWebUSB | null = await TransportWebUSB[
        request ? 'request' : 'openConnected'
      ]();

      log.log('webUSB', { transport });

      return transport;
    } catch (error) {
      log.error('webUSB', { error });
    }

    return null;
  }

  async webHID(request: boolean = false): Promise<Transport | null> {
    if (!this.options.useWebHID || !(await TransportWebHID.isSupported())) {
      log.log('webHID not supported');

      return null;
    }

    try {
      const transport: Transport = await TransportWebHID[
        request ? 'request' : 'create'
      ](30 * 1000);

      log.log('webHID', { transport });

      return transport;
    } catch (error) {
      log.error('webHID', { error });
    }

    return null;
  }

  // --- ACTIONS ---------------------------------------------------------------

  get transport(): Transport | null {
    return this._transport;
  }

  get cosmos(): Cosmos | null {
    this._cosmos =
      this._cosmos || (this.transport ? new Cosmos(this.transport) : null);

    return this._cosmos;
  }

  get device(): Device | null {
    return (this?._transport as any)?.device;
  }

  get model(): Model | null {
    return (this?._transport as any)?.deviceModel;
  }

  async connect(
    request: boolean = false,
    force: boolean = false,
    emit: boolean = true
  ): Promise<Transport | null> {
    log.log('connect', { transport: this.transport, request, force, emit });

    if (this.transport && !request && !force) {
      return this.transport;
    }

    this.isConnecting = true;

    try {
      await this.disconnect(true);
    } catch (e) {
      //
    }

    this._transport = await this.transporter(request);

    if (this._transport && emit) {
      this.emit(this.EVENTS.CONNECTED);
    }

    this.isConnecting = false;

    return this._transport;
  }

  async reconnect(request: boolean = false): Promise<Transport | null> {
    return await this.connect(request, true);
  }

  async disconnect(
    force: boolean = false,
    emit: boolean = true
  ): Promise<boolean> {
    log.log('disconnect', { transport: this.transport, force, emit });

    if (!this.transport) {
      return true;
    }

    this.isDisconnecting = true;

    try {
      if (!force) {
        await Promise.race([
          this.transport.close(),
          wait(1500).then((): any => {
            throw 'Timeout';
          }),
        ]);
      }
    } catch (error) {
      log.error('disconnect', { error });

      return false;
    } finally {
      this._transport = null;
      this._cosmos = null;

      this.isDisconnecting = false;

      if (emit) {
        this.emit(this.EVENTS.DISCONNECTED);
      }
    }

    return true;
  }

  // --- COSMOS ----------------------------------------------------------------

  serializeHRP(hrp: string): Buffer | null {
    return this.cosmos?.serializeHRP(hrp) || null;
  }

  getBech32FromPK(hrp: string, pk: Buffer): string | null {
    return this.cosmos?.getBech32FromPK(hrp, pk) || null;
  }

  async serializePath(
    path: readonly number[] | string
  ): Promise<Buffer | null> {
    return (await this.connect(false, true, false))
      ? await this.cosmos!.serializePath(path)
      : null;
  }

  async getVersion(): Promise<Version | null> {
    return (await this.connect(false, true, false))
      ? await this.cosmos!.getVersion()
      : null;
  }

  async getApplicationInformation(): Promise<ApplicationInformation | null> {
    return (await this.connect(false, true, false))
      ? await this.cosmos!.getApplicationInformation()
      : null;
  }

  async getDeviceInformation(): Promise<DeviceInformation | null> {
    return (await this.connect(false, true, false))
      ? await this.cosmos!.getDeviceInformation()
      : null;
  }

  async getPublicKey(path: number[] | string): Promise<PK | null> {
    return (await this.connect(false, true, false))
      ? await this.cosmos!.getPublicKey(path)
      : null;
  }

  async getAddressAndPublicKey(
    path: number[] | string,
    hrp: string,
    p1?: number,
    p2?: number
  ): Promise<APK | null> {
    return (await this.connect(false, true, false))
      ? await this.cosmos!.getAddressAndPublicKey(path, hrp, p1, p2)
      : null;
  }

  async showAddressAndPubKey(
    path: number[] | string,
    hrp: string,
    p1?: number,
    p2?: number
  ): Promise<APK | null> {
    return (await this.connect(false, true, false))
      ? await this.cosmos!.showAddressAndPubKey(path, hrp, p1, p2)
      : null;
  }

  async sign(
    path: number[] | string,
    data: any,
    size?: number
  ): Promise<Signature | null> {
    return (await this.connect(false, true, false))
      ? await this.cosmos!.sign(path, data, size)
      : null;
  }

  // --- PRIVATE ---------------------------------------------------------------

  async transporter(request: boolean = false): Promise<Transport | null> {
    let transport: Transport | null = null;

    transport =
      transport || (this.options.useWebUSB ? await this.webUSB(request) : null);

    transport =
      transport || (this.options.useWebHID ? await this.webHID(request) : null);

    transport = transport || (this.options.useU2f ? await this.u2f() : null);

    return transport;
  }
}

export const Ledgerer: Ledger = Ledger.instance;
