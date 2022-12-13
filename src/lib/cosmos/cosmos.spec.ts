import Transport from '@ledgerhq/hw-transport';
import test, { ExecutionContext } from 'ava';

import { APPLICATION } from './constants';

import { Cosmos } from './';

test('APPLICATION', (t: ExecutionContext<any>): void => {
  t.is(APPLICATION, 'COSMOS');
});

test('Test empty transport ', (t: ExecutionContext<any>): void => {
  t.throws((): any => {
    const transport: Transport | null = null;

    new Cosmos(transport as any);
  });
});
