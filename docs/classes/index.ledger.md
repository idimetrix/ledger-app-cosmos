[ledger-app-cosmos](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / Ledger

# Class: Ledger

[index](../modules/index.md).Ledger

[[include:ledgerer/properties.md]]

[[include:installation.md]]

[[include:ledgerer/usage.md]]

[[include:ledgerer/demo.md]]

## Hierarchy

* *EventEmitter*

  ↳ **Ledger**

## Table of contents

### Constructors

- [constructor](index.ledger.md#constructor)

### Properties

- [EVENTS](index.ledger.md#events)
- [\_cosmos](index.ledger.md#_cosmos)
- [\_transport](index.ledger.md#_transport)
- [default](index.ledger.md#default)
- [error](index.ledger.md#error)
- [isConnecting](index.ledger.md#isconnecting)
- [isDisconnecting](index.ledger.md#isdisconnecting)
- [EVENTS](index.ledger.md#events)
- [\_instance](index.ledger.md#_instance)
- [defaultMaxListeners](index.ledger.md#defaultmaxlisteners)
- [errorMonitor](index.ledger.md#errormonitor)

### Accessors

- [cosmos](index.ledger.md#cosmos)
- [device](index.ledger.md#device)
- [instance](index.ledger.md#instance)
- [model](index.ledger.md#model)
- [transport](index.ledger.md#transport)

### Methods

- [addListener](index.ledger.md#addlistener)
- [connect](index.ledger.md#connect)
- [debug](index.ledger.md#debug)
- [disconnect](index.ledger.md#disconnect)
- [emit](index.ledger.md#emit)
- [eventNames](index.ledger.md#eventnames)
- [getAddressAndPublicKey](index.ledger.md#getaddressandpublickey)
- [getApplicationInformation](index.ledger.md#getapplicationinformation)
- [getBech32FromPK](index.ledger.md#getbech32frompk)
- [getDeviceInformation](index.ledger.md#getdeviceinformation)
- [getMaxListeners](index.ledger.md#getmaxlisteners)
- [getPublicKey](index.ledger.md#getpublickey)
- [getVersion](index.ledger.md#getversion)
- [listenerCount](index.ledger.md#listenercount)
- [listeners](index.ledger.md#listeners)
- [off](index.ledger.md#off)
- [on](index.ledger.md#on)
- [once](index.ledger.md#once)
- [prependListener](index.ledger.md#prependlistener)
- [prependOnceListener](index.ledger.md#prependoncelistener)
- [rawListeners](index.ledger.md#rawlisteners)
- [reconnect](index.ledger.md#reconnect)
- [removeAllListeners](index.ledger.md#removealllisteners)
- [removeListener](index.ledger.md#removelistener)
- [serializeHRP](index.ledger.md#serializehrp)
- [serializePath](index.ledger.md#serializepath)
- [setMaxListeners](index.ledger.md#setmaxlisteners)
- [showAddressAndPubKey](index.ledger.md#showaddressandpubkey)
- [sign](index.ledger.md#sign)
- [transporter](index.ledger.md#transporter)
- [u2f](index.ledger.md#u2f)
- [webHID](index.ledger.md#webhid)
- [webUSB](index.ledger.md#webusb)
- [listenerCount](index.ledger.md#listenercount)

## Constructors

### constructor

\+ **new Ledger**(`options?`: [*LedgerOptions*](../modules/lib_ledger.md#ledgeroptions)): [*Ledger*](lib/ledger.ledger.md)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`options` | [*LedgerOptions*](../modules/lib_ledger.md#ledgeroptions) | ... |

**Returns:** [*Ledger*](lib/ledger.ledger.md)

Defined in: [src/lib/Ledger.ts:116](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L116)

## Properties

### EVENTS

• `Readonly` **EVENTS**: *typeof* [*EVENTS*](../enums/lib/ledger.events.md)

Defined in: [src/lib/Ledger.ts:89](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L89)

___

### \_cosmos

• `Private` **\_cosmos**: *null* \| [*Cosmos*](lib/cosmos.cosmos.md)= null

Defined in: [src/lib/Ledger.ts:86](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L86)

___

### \_transport

• `Private` **\_transport**: *null* \| *Transport*<*string*\>= null

Defined in: [src/lib/Ledger.ts:85](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L85)

___

### default

• `Private` **default**: [*LedgerOptions*](../modules/lib_ledger.md#ledgeroptions)

Defined in: [src/lib/Ledger.ts:94](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L94)

___

### error

• **error**: *null* \| Error= null

Defined in: [src/lib/Ledger.ts:88](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L88)

___

### isConnecting

• **isConnecting**: *boolean*= false

Defined in: [src/lib/Ledger.ts:91](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L91)

___

### isDisconnecting

• **isDisconnecting**: *boolean*= false

Defined in: [src/lib/Ledger.ts:92](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L92)

___

### EVENTS

▪ `Readonly` `Static` **EVENTS**: *typeof* [*EVENTS*](../enums/lib/ledger.events.md)

Defined in: [src/lib/Ledger.ts:81](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L81)

___

### \_instance

▪ `Private` `Static` **\_instance**: *null* \| [*Ledger*](lib/ledger.ledger.md)= null

Defined in: [src/lib/Ledger.ts:112](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L112)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Defined in: node_modules/@types/node/events.d.ts:45

___

### errorMonitor

▪ `Readonly` `Static` **errorMonitor**: *typeof* [*errorMonitor*](lib/ledger.ledger.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Defined in: node_modules/@types/node/events.d.ts:55

## Accessors

### cosmos

• **cosmos**(): *null* \| [*Cosmos*](lib/cosmos.cosmos.md)

**Returns:** *null* \| [*Cosmos*](lib/cosmos.cosmos.md)

Defined in: [src/lib/Ledger.ts:204](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L204)

___

### device

• **device**(): *null* \| [*Device*](../modules/lib_ledger.md#device)

**Returns:** *null* \| [*Device*](../modules/lib_ledger.md#device)

Defined in: [src/lib/Ledger.ts:211](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L211)

___

### instance

• **instance**(): [*Ledger*](lib/ledger.ledger.md)

**Returns:** [*Ledger*](lib/ledger.ledger.md)

Defined in: [src/lib/Ledger.ts:114](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L114)

___

### model

• **model**(): *null* \| [*Model*](../modules/lib_ledger.md#model)

**Returns:** *null* \| [*Model*](../modules/lib_ledger.md#model)

Defined in: [src/lib/Ledger.ts:215](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L215)

___

### transport

• **transport**(): *null* \| *Transport*<*string*\>

**Returns:** *null* \| *Transport*<*string*\>

Defined in: [src/lib/Ledger.ts:200](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L200)

## Methods

### addListener

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ledger*](lib/ledger.ledger.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ledger*](lib/ledger.ledger.md)

Defined in: node_modules/@types/node/events.d.ts:62

___

### connect

▸ **connect**(`request?`: *boolean*, `force?`: *boolean*, `emit?`: *boolean*): *Promise*<*null* \| *Transport*<*string*\>\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`request` | *boolean* | false |
`force` | *boolean* | false |
`emit` | *boolean* | true |

**Returns:** *Promise*<*null* \| *Transport*<*string*\>\>

Defined in: [src/lib/Ledger.ts:219](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L219)

___

### debug

▸ **debug**(`debug`: *boolean*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`debug` | *boolean* |

**Returns:** *void*

Defined in: [src/lib/Ledger.ts:102](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L102)

___

### disconnect

▸ **disconnect**(`force?`: *boolean*, `emit?`: *boolean*): *Promise*<*boolean*\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`force` | *boolean* | false |
`emit` | *boolean* | true |

**Returns:** *Promise*<*boolean*\>

Defined in: [src/lib/Ledger.ts:253](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L253)

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`...args` | *any*[] |

**Returns:** *boolean*

Defined in: node_modules/@types/node/events.d.ts:72

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Defined in: node_modules/@types/node/events.d.ts:77

___

### getAddressAndPublicKey

▸ **getAddressAndPublicKey**(`path`: *string* \| *number*[], `hrp`: *string*, `p1?`: *number*, `p2?`: *number*): *Promise*<*null* \| [*APK*](../modules/lib_cosmos_types.md#apk)\>

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* \| *number*[] |
`hrp` | *string* |
`p1?` | *number* |
`p2?` | *number* |

**Returns:** *Promise*<*null* \| [*APK*](../modules/lib_cosmos_types.md#apk)\>

Defined in: [src/lib/Ledger.ts:332](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L332)

___

### getApplicationInformation

▸ **getApplicationInformation**(): *Promise*<*null* \| [*ApplicationInformation*](../modules/lib_cosmos_types.md#applicationinformation)\>

**Returns:** *Promise*<*null* \| [*ApplicationInformation*](../modules/lib_cosmos_types.md#applicationinformation)\>

Defined in: [src/lib/Ledger.ts:314](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L314)

___

### getBech32FromPK

▸ **getBech32FromPK**(`hrp`: *string*, `pk`: *Buffer*): *null* \| *string*

#### Parameters:

Name | Type |
------ | ------ |
`hrp` | *string* |
`pk` | *Buffer* |

**Returns:** *null* \| *string*

Defined in: [src/lib/Ledger.ts:296](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L296)

___

### getDeviceInformation

▸ **getDeviceInformation**(): *Promise*<*null* \| [*DeviceInformation*](../modules/lib_cosmos_types.md#deviceinformation)\>

**Returns:** *Promise*<*null* \| [*DeviceInformation*](../modules/lib_cosmos_types.md#deviceinformation)\>

Defined in: [src/lib/Ledger.ts:320](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L320)

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:69

___

### getPublicKey

▸ **getPublicKey**(`path`: *string* \| *number*[]): *Promise*<*null* \| [*PK*](../modules/lib_cosmos_types.md#pk)\>

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* \| *number*[] |

**Returns:** *Promise*<*null* \| [*PK*](../modules/lib_cosmos_types.md#pk)\>

Defined in: [src/lib/Ledger.ts:326](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L326)

___

### getVersion

▸ **getVersion**(): *Promise*<*null* \| [*Version*](../modules/lib_cosmos_types.md#version)\>

**Returns:** *Promise*<*null* \| [*Version*](../modules/lib_cosmos_types.md#version)\>

Defined in: [src/lib/Ledger.ts:308](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L308)

___

### listenerCount

▸ **listenerCount**(`type`: *string* \| *symbol*): *number*

#### Parameters:

Name | Type |
------ | ------ |
`type` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:73

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:70

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ledger*](lib/ledger.ledger.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ledger*](lib/ledger.ledger.md)

Defined in: node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ledger*](lib/ledger.ledger.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ledger*](lib/ledger.ledger.md)

Defined in: node_modules/@types/node/events.d.ts:63

___

### once

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ledger*](lib/ledger.ledger.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ledger*](lib/ledger.ledger.md)

Defined in: node_modules/@types/node/events.d.ts:64

___

### prependListener

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ledger*](lib/ledger.ledger.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ledger*](lib/ledger.ledger.md)

Defined in: node_modules/@types/node/events.d.ts:75

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ledger*](lib/ledger.ledger.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ledger*](lib/ledger.ledger.md)

Defined in: node_modules/@types/node/events.d.ts:76

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |

**Returns:** Function[]

Defined in: node_modules/@types/node/events.d.ts:71

___

### reconnect

▸ **reconnect**(`request?`: *boolean*): *Promise*<*null* \| *Transport*<*string*\>\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`request` | *boolean* | false |

**Returns:** *Promise*<*null* \| *Transport*<*string*\>\>

Defined in: [src/lib/Ledger.ts:249](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L249)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*Ledger*](lib/ledger.ledger.md)

#### Parameters:

Name | Type |
------ | ------ |
`event?` | *string* \| *symbol* |

**Returns:** [*Ledger*](lib/ledger.ledger.md)

Defined in: node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Ledger*](lib/ledger.ledger.md)

#### Parameters:

Name | Type |
------ | ------ |
`event` | *string* \| *symbol* |
`listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Ledger*](lib/ledger.ledger.md)

Defined in: node_modules/@types/node/events.d.ts:65

___

### serializeHRP

▸ **serializeHRP**(`hrp`: *string*): *null* \| *Buffer*

#### Parameters:

Name | Type |
------ | ------ |
`hrp` | *string* |

**Returns:** *null* \| *Buffer*

Defined in: [src/lib/Ledger.ts:292](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L292)

___

### serializePath

▸ **serializePath**(`path`: *string* \| readonly *number*[]): *Promise*<*null* \| *Buffer*\>

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* \| readonly *number*[] |

**Returns:** *Promise*<*null* \| *Buffer*\>

Defined in: [src/lib/Ledger.ts:300](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L300)

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*Ledger*](lib/ledger.ledger.md)

#### Parameters:

Name | Type |
------ | ------ |
`n` | *number* |

**Returns:** [*Ledger*](lib/ledger.ledger.md)

Defined in: node_modules/@types/node/events.d.ts:68

___

### showAddressAndPubKey

▸ **showAddressAndPubKey**(`path`: *string* \| *number*[], `hrp`: *string*, `p1?`: *number*, `p2?`: *number*): *Promise*<*null* \| [*APK*](../modules/lib_cosmos_types.md#apk)\>

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* \| *number*[] |
`hrp` | *string* |
`p1?` | *number* |
`p2?` | *number* |

**Returns:** *Promise*<*null* \| [*APK*](../modules/lib_cosmos_types.md#apk)\>

Defined in: [src/lib/Ledger.ts:343](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L343)

___

### sign

▸ **sign**(`path`: *string* \| *number*[], `data`: *any*, `size?`: *number*): *Promise*<*null* \| [*Signature*](../modules/lib_cosmos_types.md#signature)\>

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* \| *number*[] |
`data` | *any* |
`size?` | *number* |

**Returns:** *Promise*<*null* \| [*Signature*](../modules/lib_cosmos_types.md#signature)\>

Defined in: [src/lib/Ledger.ts:354](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L354)

___

### transporter

▸ **transporter**(`request?`: *boolean*): *Promise*<*null* \| *Transport*<*string*\>\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`request` | *boolean* | false |

**Returns:** *Promise*<*null* \| *Transport*<*string*\>\>

Defined in: [src/lib/Ledger.ts:366](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L366)

___

### u2f

▸ **u2f**(): *Promise*<*null* \| *Transport*<*string*\>\>

**Returns:** *Promise*<*null* \| *Transport*<*string*\>\>

Defined in: [src/lib/Ledger.ts:128](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L128)

___

### webHID

▸ **webHID**(`request?`: *boolean*): *Promise*<*null* \| *Transport*<*string*\>\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`request` | *boolean* | false |

**Returns:** *Promise*<*null* \| *Transport*<*string*\>\>

Defined in: [src/lib/Ledger.ts:174](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L174)

___

### webUSB

▸ **webUSB**(`request?`: *boolean*): *Promise*<*null* \| *Transport*<*string*\>\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`request` | *boolean* | false |

**Returns:** *Promise*<*null* \| *Transport*<*string*\>\>

Defined in: [src/lib/Ledger.ts:150](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L150)

___

### listenerCount

▸ `Static`**listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters:

Name | Type |
------ | ------ |
`emitter` | *EventEmitter* |
`event` | *string* \| *symbol* |

**Returns:** *number*

Defined in: node_modules/@types/node/events.d.ts:44
