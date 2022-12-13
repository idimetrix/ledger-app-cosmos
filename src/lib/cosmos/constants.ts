// https://github.com/cosmos/ledger-cosmos/blob/master/docs/APDUSPEC.md

export const CLA: number = 0x55;
export const SIZE: number = 250;
export const APPLICATION: string = 'COSMOS';

export const INS: Record<string, number> = {
  GET_ADDR_SECP256K1: 0x04,
  GET_VERSION: 0x00,
  INS_PUBLIC_KEY_SECP256K1: 0x01,
  // Obsolete
  SIGN_SECP256K1: 0x02,
};

export const PAYLOAD_TYPE: Record<string, number> = {
  ADD: 0x01,
  INIT: 0x00,
  LAST: 0x02,
};

export const P1_VALUES: Record<string, number> = {
  ONLY_RETRIEVE: 0x00,
  SHOW_ADDRESS_IN_DEVICE: 0x01,
};

export const ERROR_CODE: Record<string, number> = {
  NoError: 0x9000,
};

export const ERROR_DESCRIPTION: Record<string, string> = {
  1: 'U2F: Unknown',
  14: 'Timeout',
  2: 'U2F: Bad request',
  0x6400: 'Execution Error',
  0x6700: 'Wrong Length',
  0x6802: 'Error deriving keys',
  0x6804: 'Device is blocked',
  0x6982: 'Empty Buffer',
  0x6983: 'Output buffer too small',
  0x6984: 'Data is invalid',
  0x6985: 'Conditions not satisfied',
  0x6986: 'Transaction rejected',
  0x6a80: 'Bad key handle',
  0x6b00: 'Invalid P1/P2',
  0x6d00: 'Instruction not supported',
  0x6e00: 'App does not seem to be open',
  0x6f00: 'Unknown error',
  0x6f01: 'Sign/verify error',
  3: 'U2F: Configuration unsupported',
  0x9000: 'No errors',
  0x9001: 'Device is busy',
  4: 'U2F: Device Ineligible',
  5: 'U2F: Timeout',
};
