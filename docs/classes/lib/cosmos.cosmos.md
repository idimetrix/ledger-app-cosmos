[ledger-app-cosmos](../../README.md) / [Exports](../../modules.md) / [lib/cosmos](../../modules/lib_cosmos.md) / Cosmos

# Class: Cosmos

[lib/cosmos](../../modules/lib_cosmos.md).Cosmos

[[include:cosmos/properties.md]]

[[include:installation.md]]

[[include:cosmos/usage.md]]

[[include:cosmos/demo.md]]

## Hierarchy

* **Cosmos**

## Table of contents

### Constructors

- [constructor](cosmos.cosmos.md#constructor)

### Properties

- [\_applicationInformation](cosmos.cosmos.md#_applicationinformation)
- [\_deviceInformation](cosmos.cosmos.md#_deviceinformation)
- [\_transport](cosmos.cosmos.md#_transport)
- [\_version](cosmos.cosmos.md#_version)
- [scrambleKey](cosmos.cosmos.md#scramblekey)

### Accessors

- [transport](cosmos.cosmos.md#transport)

### Methods

- [debug](cosmos.cosmos.md#debug)
- [getAddressAndPublicKey](cosmos.cosmos.md#getaddressandpublickey)
- [getApplicationInformation](cosmos.cosmos.md#getapplicationinformation)
- [getBech32FromPK](cosmos.cosmos.md#getbech32frompk)
- [getDeviceInformation](cosmos.cosmos.md#getdeviceinformation)
- [getPublicKey](cosmos.cosmos.md#getpublickey)
- [getVersion](cosmos.cosmos.md#getversion)
- [send](cosmos.cosmos.md#send)
- [serializeHRP](cosmos.cosmos.md#serializehrp)
- [serializePath](cosmos.cosmos.md#serializepath)
- [showAddressAndPubKey](cosmos.cosmos.md#showaddressandpubkey)
- [sign](cosmos.cosmos.md#sign)
- [signGetChunks](cosmos.cosmos.md#signgetchunks)
- [signSendChunk](cosmos.cosmos.md#signsendchunk)
- [version](cosmos.cosmos.md#version)

## Constructors

### constructor

\+ **new Cosmos**(`transport`: *Transport*<*string*\>, `scrambleKey?`: *string*): [*Cosmos*](cosmos.cosmos.md)

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`transport` | *Transport*<*string*\> | - |
`scrambleKey` | *string* | ... |

**Returns:** [*Cosmos*](cosmos.cosmos.md)

Defined in: [src/lib/cosmos/index.ts:58](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L58)

## Properties

### \_applicationInformation

• `Private` **\_applicationInformation**: *null* \| [*ApplicationInformation*](../../modules/lib_cosmos_types.md#applicationinformation)= null

Defined in: [src/lib/cosmos/index.ts:57](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L57)

___

### \_deviceInformation

• `Private` **\_deviceInformation**: *null* \| [*DeviceInformation*](../../modules/lib_cosmos_types.md#deviceinformation)= null

Defined in: [src/lib/cosmos/index.ts:58](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L58)

___

### \_transport

• `Private` **\_transport**: *Transport*<*string*\>

Defined in: [src/lib/cosmos/index.ts:54](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L54)

___

### \_version

• `Private` **\_version**: *null* \| [*Version*](../../modules/lib_cosmos_types.md#version)= null

Defined in: [src/lib/cosmos/index.ts:56](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L56)

___

### scrambleKey

• `Readonly` **scrambleKey**: *string*

## Accessors

### transport

• **transport**(): *Transport*<*string*\>

**Returns:** *Transport*<*string*\>

Defined in: [src/lib/cosmos/index.ts:91](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L91)

• **transport**(`transport`: *Transport*<*string*\>): *void*

#### Parameters:

Name | Type |
------ | ------ |
`transport` | *Transport*<*string*\> |

**Returns:** *void*

Defined in: [src/lib/cosmos/index.ts:95](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L95)

## Methods

### debug

▸ **debug**(`debug`: *boolean*): *void*

#### Parameters:

Name | Type |
------ | ------ |
`debug` | *boolean* |

**Returns:** *void*

Defined in: [src/lib/cosmos/index.ts:81](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L81)

___

### getAddressAndPublicKey

▸ **getAddressAndPublicKey**(`path`: *string* \| *number*[], `hrp`: *string*, `p1?`: *number*, `p2?`: *number*): *Promise*<[*APK*](../../modules/lib_cosmos_types.md#apk)\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`path` | *string* \| *number*[] | - |
`hrp` | *string* | - |
`p1` | *number* | ... |
`p2` | *number* | 0 |

**Returns:** *Promise*<[*APK*](../../modules/lib_cosmos_types.md#apk)\>

Defined in: [src/lib/cosmos/index.ts:356](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L356)

___

### getApplicationInformation

▸ **getApplicationInformation**(): *Promise*<[*ApplicationInformation*](../../modules/lib_cosmos_types.md#applicationinformation)\>

**Returns:** *Promise*<[*ApplicationInformation*](../../modules/lib_cosmos_types.md#applicationinformation)\>

Defined in: [src/lib/cosmos/index.ts:179](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L179)

___

### getBech32FromPK

▸ **getBech32FromPK**(`hrp`: *string*, `pk`: *Buffer*): *string*

#### Parameters:

Name | Type |
------ | ------ |
`hrp` | *string* |
`pk` | *Buffer* |

**Returns:** *string*

Defined in: [src/lib/cosmos/index.ts:136](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L136)

___

### getDeviceInformation

▸ **getDeviceInformation**(): *Promise*<[*DeviceInformation*](../../modules/lib_cosmos_types.md#deviceinformation)\>

**Returns:** *Promise*<[*DeviceInformation*](../../modules/lib_cosmos_types.md#deviceinformation)\>

Defined in: [src/lib/cosmos/index.ts:246](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L246)

___

### getPublicKey

▸ **getPublicKey**(`path`: *string* \| *number*[]): *Promise*<[*PK*](../../modules/lib_cosmos_types.md#pk)\>

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* \| *number*[] |

**Returns:** *Promise*<[*PK*](../../modules/lib_cosmos_types.md#pk)\>

Defined in: [src/lib/cosmos/index.ts:328](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L328)

___

### getVersion

▸ **getVersion**(): *Promise*<[*Version*](../../modules/lib_cosmos_types.md#version)\>

**Returns:** *Promise*<[*Version*](../../modules/lib_cosmos_types.md#version)\>

Defined in: [src/lib/cosmos/index.ts:163](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L163)

___

### send

▸ `Private`**send**(`cla`: *number*, `ins`: *number*, `p1`: *number*, `p2`: *number*, `data?`: *Buffer*, `statusList?`: readonly *number*[], `ms?`: *number*): *Promise*<*Uint8Array*\>

#### Parameters:

Name | Type |
------ | ------ |
`cla` | *number* |
`ins` | *number* |
`p1` | *number* |
`p2` | *number* |
`data?` | *Buffer* |
`statusList?` | readonly *number*[] |
`ms?` | *number* |

**Returns:** *Promise*<*Uint8Array*\>

Defined in: [src/lib/cosmos/index.ts:444](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L444)

___

### serializeHRP

▸ **serializeHRP**(`hrp`: *string*): *Buffer*

#### Parameters:

Name | Type |
------ | ------ |
`hrp` | *string* |

**Returns:** *Buffer*

Defined in: [src/lib/cosmos/index.ts:123](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L123)

___

### serializePath

▸ **serializePath**(`path`: *string* \| readonly *number*[]): *Promise*<*Buffer*\>

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* \| readonly *number*[] |

**Returns:** *Promise*<*Buffer*\>

Defined in: [src/lib/cosmos/index.ts:148](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L148)

___

### showAddressAndPubKey

▸ **showAddressAndPubKey**(`path`: *string* \| *number*[], `hrp`: *string*, `p1?`: *number*, `p2?`: *number*): *Promise*<[*APK*](../../modules/lib_cosmos_types.md#apk)\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`path` | *string* \| *number*[] | - |
`hrp` | *string* | - |
`p1` | *number* | ... |
`p2` | *number* | 0 |

**Returns:** *Promise*<[*APK*](../../modules/lib_cosmos_types.md#apk)\>

Defined in: [src/lib/cosmos/index.ts:394](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L394)

___

### sign

▸ **sign**(`path`: *string* \| *number*[], `data`: *any*, `size?`: *number*): *Promise*<[*Signature*](../../modules/lib_cosmos_types.md#signature)\>

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`path` | *string* \| *number*[] | - |
`data` | *any* | - |
`size` | *number* | ... |

**Returns:** *Promise*<[*Signature*](../../modules/lib_cosmos_types.md#signature)\>

Defined in: [src/lib/cosmos/index.ts:403](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L403)

___

### signGetChunks

▸ `Private`**signGetChunks**(`path`: *string* \| *number*[], `message`: *string*, `size`: *number*): *Promise*<*Buffer*[]\>

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* \| *number*[] |
`message` | *string* |
`size` | *number* |

**Returns:** *Promise*<*Buffer*[]\>

Defined in: [src/lib/cosmos/index.ts:521](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L521)

___

### signSendChunk

▸ `Private`**signSendChunk**(`chunkIdx`: *number*, `chunkNum`: *number*, `chunk`: *Buffer*): *Promise*<[*Signature*](../../modules/lib_cosmos_types.md#signature)\>

#### Parameters:

Name | Type |
------ | ------ |
`chunkIdx` | *number* |
`chunkNum` | *number* |
`chunk` | *Buffer* |

**Returns:** *Promise*<[*Signature*](../../modules/lib_cosmos_types.md#signature)\>

Defined in: [src/lib/cosmos/index.ts:543](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L543)

___

### version

▸ `Private`**version**(): *Promise*<[*Version*](../../modules/lib_cosmos_types.md#version)\>

**Returns:** *Promise*<[*Version*](../../modules/lib_cosmos_types.md#version)\>

Defined in: [src/lib/cosmos/index.ts:475](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/index.ts#L475)
