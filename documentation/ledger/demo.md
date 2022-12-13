## [Demo](https://ledger-app-cosmos.netlify.app/)

### [Try online demo](https://ledger-app-cosmos.netlify.app/)

### es module
```js
import { Ledgerer } from 'ledger-app-cosmos'

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

const version = await Ledgerer.getVersion();
// => Version

const deviceInformation = await Ledgerer.getDeviceInformation();
// => DeviceInformation

const applicationInformation = await Ledgerer.getApplicationInformation();
// => ApplicationInformation

const pk = await Ledgerer.getPublicKey(path);
// => PK

const gapk = await Ledgerer.getAddressAndPublicKey(path, hrp);
// => APK

const sapk = await Ledgerer.showAddressAndPubKey(path, hrp);
// => APK

const sign = await Ledgerer.sign(path, JSON.stringify(sign));
// => Signature

```

### commonjs
```js
var Ledgerer = require('ledger-app-cosmos').Ledgerer;

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
};

Ledgerer.getVersion().then(function(version) { console.log(version); }).catch(function(error) { console.error(error); })

Ledgerer.getDeviceInformation().then(function(deviceInformation) { console.log(deviceInformation); }).catch(function(error) { console.error(error); })

Ledgerer.getApplicationInformation().then(function(applicationInformation) { console.log(applicationInformation); }).catch(function(error) { console.error(error); })

Ledgerer.getPublicKey(path).then(function(pk) { console.log(pk); }).catch(function(error) { console.error(error); })

Ledgerer.getAddressAndPublicKey(path, hrp).then(function(gapk) { console.log(gapk); }).catch(function(error) { console.error(error); })

Ledgerer.showAddressAndPubKey(path, hrp).then(function(sapk) { console.log(sapk); }).catch(function(error) { console.error(error); })

Ledgerer.sign(path, sign).then(function(signed) { console.log(signed); }).catch(function(error) { console.error(error); })
```
