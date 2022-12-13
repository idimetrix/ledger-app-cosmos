import { Logger } from 'logvis';

const cosmosLog: Logger = new Logger('COSMOS');
const ledgerLog: Logger = new Logger('LEDGER');

process.env.NODE_ENV !== 'production'
  ? cosmosLog.enableAll()
  : cosmosLog.disableAll();

process.env.NODE_ENV !== 'production'
  ? ledgerLog.enableAll()
  : ledgerLog.disableAll();

export { ledgerLog, cosmosLog };
