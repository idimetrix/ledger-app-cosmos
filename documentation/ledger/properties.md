## Properties

```js
    private readonly options;
    static readonly EVENTS: typeof EVENTS;
    private _transport;
    private _cosmos;
    error: Error | null;
    readonly EVENTS: typeof EVENTS;
    isConnecting: boolean;
    isDisconnecting: boolean;
    private default;
    private static _instance;
    static get instance(): Ledger;
    constructor(options?: LedgerOptions);
    u2f(): Promise<Transport | null>;
    webUSB(request?: boolean): Promise<Transport | null>;
    webHID(request?: boolean): Promise<Transport | null>;
    get transport(): Transport | null;
    get cosmos(): Cosmos | null;
    get device(): Device | null;
    get model(): Model | null;
    connect(request?: boolean, force?: boolean, emit?: boolean): Promise<Transport | null>;
    reconnect(request?: boolean): Promise<Transport | null>;
    disconnect(force?: boolean, emit?: boolean): Promise<boolean>;
    serializeHRP(hrp: string): Buffer | null;
    getBech32FromPK(hrp: string, pk: Buffer): string | null;
    serializePath(path: readonly number[] | string): Promise<Buffer | null>;
    getVersion(): Promise<Version | null>;
    getApplicationInformation(): Promise<ApplicationInformation | null>;
    getDeviceInformation(): Promise<DeviceInformation | null>;
    getPublicKey(path: number[] | string): Promise<PK | null>;
    getAddressAndPublicKey(path: number[] | string, hrp: string, p1?: number, p2?: number): Promise<APK | null>;
    showAddressAndPubKey(path: number[] | string, hrp: string, p1?: number, p2?: number): Promise<APK | null>;
    sign(path: number[] | string, data: any, size?: number): Promise<Signature | null>;
    transporter(request?: boolean): Promise<Transport | null>;
```
