export type Exception = {
  error_message: string;
  return_code: number;
};

export type PK = Partial<{
  pk: Buffer | string;
  compressed_pk: Buffer;
}> &
  Exception;

export type APK = Partial<{
  bech32_address: string;
  compressed_pk: Buffer;
}> &
  Exception;

export type Signature = Partial<{
  signature: Uint8Array | null;
}> &
  Exception;

export type Version = Partial<{
  device_locked: boolean;
  major: number;
  minor: number;
  patch: number;
  target_id: string;
  test_mode: boolean;
}> &
  Exception;

export type ApplicationInformation = Partial<{
  appName: string;
  appVersion: string;
  flagLen: number;
  flag_onboarded: boolean;
  flag_pin_validated: boolean;
  flag_recovery: boolean;
  flag_signed_mcu_code: boolean;
  flagsValue: number;
}> &
  Exception;

export type DeviceInformation = Partial<{
  flag: string;
  mcuVersion: string;
  seVersion: string;
  targetId: string;
}> &
  Exception;
