## Properties

```js
    readonly scrambleKey: string;
    private _transport;
    private _version;
    private _applicationInformation;
    private _deviceInformation;
    constructor(transport: Transport, scrambleKey?: string);
    get transport(): Transport;
    set transport(transport: Transport);
    serializeHRP(hrp: string): Buffer;
    getBech32FromPK(hrp: string, pk: Buffer): string;
    serializePath(path: readonly number[] | string): Promise<Buffer>;
    getVersion(): Promise<Version>;
    getApplicationInformation(): Promise<ApplicationInformation>;
    getDeviceInformation(): Promise<DeviceInformation>;
    getPublicKey(path: number[] | string): Promise<PK>;
    getAddressAndPublicKey(path: number[] | string, hrp: string, p1?: number, p2?: number): Promise<APK>;
    showAddressAndPubKey(path: number[] | string, hrp: string, p1?: number, p2?: number): Promise<APK>;
    sign(path: number[] | string, data: any, size?: number): Promise<Signature>;
    private send;
    private version;
    private signGetChunks;
    private signSendChunk;
```
