## [Demo](https://ledger-app-cosmos.netlify.app/)

### [Try online demo](https://ledger-app-cosmos.netlify.app/)

### es module
```js
import { Cosmos } from 'ledger-app-cosmos'

const path = [44, 118, 0, 0, 0];

const hrp = 'wallet';

const sign = {
    a: 1,
    account_number: 123,
    b: '2',
    c: true,
    chain_id: 123,
    fee: 123,
    memo: '',
    msgs: 'Message',
    number: 123,
    sequence: 123,
};

const transport = null; // NOTE here you must use one of @ledgerhq/hw-transport-* - https://github.com/LedgerHQ/ledgerjs

const cosmos = new Cosmos(transport);

const version = await cosmos.getVersion();
// => Version

const deviceInformation = await cosmos.getDeviceInformation();
// => DeviceInformation

const applicationInformation = await cosmos.getApplicationInformation();
// => ApplicationInformation

const pk = await cosmos.getPublicKey(path);
// => PK

const gapk = await cosmos.getAddressAndPublicKey(path, hrp);
// => APK

const sapk = await cosmos.showAddressAndPubKey(path, hrp);
// => APK

const sign = await cosmos.sign(path, JSON.stringify(sign));
// => Signature

```

### commonjs
```js
var Cosmos = require('ledger-app-cosmos').Cosmos;

var path = [44, 118, 0, 0, 0];

var hrp = 'wallet';

var sign = {
    a: 1,
    account_number: 123,
    b: '2',
    c: true,
    chain_id: 123,
    fee: 123,
    memo: '',
    msgs: 'Message',
    number: 123,
    sequence: 123,
}

var transport = null; // NOTE here you must use one of @ledgerhq/hw-transport-* - https://github.com/LedgerHQ/ledgerjs

var cosmos = new Cosmos(transport);

cosmos.getVersion().then(function(version) { console.log(version); }).catch(function(error) { console.error(error); })

cosmos.getDeviceInformation().then(function(deviceInformation) { console.log(deviceInformation); }).catch(function(error) { console.error(error); })

cosmos.getApplicationInformation().then(function(applicationInformation) { console.log(applicationInformation); }).catch(function(error) { console.error(error); })

cosmos.getPublicKey(path).then(function(pk) { console.log(pk); }).catch(function(error) { console.error(error); })

cosmos.getAddressAndPublicKey(path, hrp).then(function(gapk) { console.log(gapk); }).catch(function(error) { console.error(error); })

cosmos.showAddressAndPubKey(path, hrp).then(function(sapk) { console.log(sapk); }).catch(function(error) { console.error(error); })

cosmos.sign(path, sign).then(function(signed) { console.log(signed); }).catch(function(error) { console.error(error); })
```
