import Transport from '@ledgerhq/hw-transport';

import { cosmosLog as log } from '../../log';

import { CLA, ERROR_CODE, INS, PAYLOAD_TYPE } from './constants';
import { signSendChunkv1 } from './cosmos1';
import { PK, Signature } from './types';
import { errorCodeToString, formatPath, processErrorResponse } from './utils';

export function serializePathv2(path: readonly number[] | string): Buffer {
  path = formatPath(path);

  if (!Array.isArray(path) || path.length !== 5) {
    throw new Error('Invalid path.');
  }

  const buffer: Buffer = Buffer.alloc(20);
  buffer.writeUInt32LE(0x80000000 + path[0], 0);
  buffer.writeUInt32LE(0x80000000 + path[1], 4);
  buffer.writeUInt32LE(0x80000000 + path[2], 8);
  buffer.writeUInt32LE(path[3], 12);
  buffer.writeUInt32LE(path[4], 16);

  return buffer;
}

export async function signSendChunkv2(
  transport: Transport,
  chunkIdx: number,
  chunkNum: number,
  chunk: Buffer
): Promise<Signature> {
  return signSendChunkv1(
    transport,
    chunkIdx === chunkNum
      ? PAYLOAD_TYPE.LAST
      : chunkIdx === 1
      ? PAYLOAD_TYPE.INIT
      : PAYLOAD_TYPE.ADD,
    0,
    chunk
  );
}

export async function publicKeyv2(
  transport: Transport,
  data: Buffer
): Promise<PK> {
  try {
    const response: Buffer = await transport.send(
      CLA,
      INS.GET_ADDR_SECP256K1,
      0,
      0,
      data,
      [ERROR_CODE.NoError]
    );

    log.log('publicKeyv2', { response });

    const codes: Buffer = response.slice(-2);
    const code: number = codes[0] * 256 + codes[1];

    return {
      compressed_pk: Buffer.from(response.slice(0, 33)),
      error_message: errorCodeToString(code),
      pk: 'OBSOLETE PROPERTY',
      return_code: code,
    };
  } catch (error) {
    log.error('publicKeyv2', { error });

    return processErrorResponse(error);
  }
}
