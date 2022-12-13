[ledger-app-cosmos](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### Enumerations

- [EVENTS](../enums/index.events.md)

### Classes

- [Cosmos](../classes/index.cosmos.md)
- [Ledger](../classes/index.ledger.md)

### Type aliases

- [APK](index.md#apk)
- [ApplicationInformation](index.md#applicationinformation)
- [Device](index.md#device)
- [DeviceInformation](index.md#deviceinformation)
- [Dictionary](index.md#dictionary)
- [Exception](index.md#exception)
- [IDictionary](index.md#idictionary)
- [IKeyValuePair](index.md#ikeyvaluepair)
- [IList](index.md#ilist)
- [IPair](index.md#ipair)
- [KeyValuePair](index.md#keyvaluepair)
- [LedgerOptions](index.md#ledgeroptions)
- [List](index.md#list)
- [Model](index.md#model)
- [PK](index.md#pk)
- [Pair](index.md#pair)
- [Signature](index.md#signature)
- [Version](index.md#version)

### Variables

- [Ledgerer](index.md#ledgerer)

## Type aliases

### APK

Ƭ **APK**: *Partial*<{ `bech32_address`: *string* ; `compressed_pk`: Buffer  }\> & [*Exception*](lib_cosmos_types.md#exception)

Defined in: [src/lib/cosmos/types/index.ts:36](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L36)

___

### ApplicationInformation

Ƭ **ApplicationInformation**: *Partial*<{ `appName`: *string* ; `appVersion`: *string* ; `flagLen`: *number* ; `flag_onboarded`: *boolean* ; `flag_pin_validated`: *boolean* ; `flag_recovery`: *boolean* ; `flag_signed_mcu_code`: *boolean* ; `flagsValue`: *number*  }\> & [*Exception*](lib_cosmos_types.md#exception)

Defined in: [src/lib/cosmos/types/index.ts:57](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L57)

___

### Device

Ƭ **Device**: { `deviceClass`: *number* ; `deviceProtocol`: *number* ; `deviceSubclass`: *number* ; `deviceVersionMajor`: *number* ; `deviceVersionMinor`: *number* ; `deviceVersionSubminor`: *number* ; `manufacturerName`: *string* ; `opened`: *boolean* ; `productId`: *number* ; `productName`: *string* ; `serialNumber`: *string* ; `usbVersionMajor`: *number* ; `usbVersionMinor`: *number* ; `usbVersionSubminor`: *number* ; `vendorId`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`deviceClass` | *number* |
`deviceProtocol` | *number* |
`deviceSubclass` | *number* |
`deviceVersionMajor` | *number* |
`deviceVersionMinor` | *number* |
`deviceVersionSubminor` | *number* |
`manufacturerName` | *string* |
`opened` | *boolean* |
`productId` | *number* |
`productName` | *string* |
`serialNumber` | *string* |
`usbVersionMajor` | *number* |
`usbVersionMinor` | *number* |
`usbVersionSubminor` | *number* |
`vendorId` | *number* |

Defined in: [src/lib/Ledger.ts:43](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L43)

___

### DeviceInformation

Ƭ **DeviceInformation**: *Partial*<{ `flag`: *string* ; `mcuVersion`: *string* ; `seVersion`: *string* ; `targetId`: *string*  }\> & [*Exception*](lib_cosmos_types.md#exception)

Defined in: [src/lib/cosmos/types/index.ts:69](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L69)

___

### Dictionary

Ƭ **Dictionary**<Value\>: [*IDictionary*](lib_cosmos_types.md#idictionary)<Value\>

#### Type parameters:

Name |
------ |
`Value` |

Defined in: [src/lib/cosmos/types/index.ts:7](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L7)

___

### Exception

Ƭ **Exception**: { `error_message`: *string* ; `return_code`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`error_message` | *string* |
`return_code` | *number* |

Defined in: [src/lib/cosmos/types/index.ts:25](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L25)

___

### IDictionary

Ƭ **IDictionary**<Value\>: { [key: string]: Value;  }

#### Type parameters:

Name |
------ |
`Value` |

Defined in: [src/lib/cosmos/types/index.ts:4](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L4)

___

### IKeyValuePair

Ƭ **IKeyValuePair**<K, V\>: { `key`: K ; `value`: V  }

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`K` | *string* \| *number* | - |
`V` | - | *unknown* |

#### Type declaration:

Name | Type |
------ | ------ |
`key` | K |
`value` | V |

Defined in: [src/lib/cosmos/types/index.ts:15](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L15)

___

### IList

Ƭ **IList**<T\>: *ReadonlyArray*<T\>

#### Type parameters:

Name |
------ |
`T` |

Defined in: [src/lib/cosmos/types/index.ts:1](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L1)

___

### IPair

Ƭ **IPair**<Value\>: { [key: string]: Value;  }

#### Type parameters:

Name |
------ |
`Value` |

Defined in: [src/lib/cosmos/types/index.ts:9](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L9)

___

### KeyValuePair

Ƭ **KeyValuePair**<K, V\>: [*IKeyValuePair*](lib_cosmos_types.md#ikeyvaluepair)<K, V\>

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`K` | *string* \| *number* | - |
`V` | - | *unknown* |

Defined in: [src/lib/cosmos/types/index.ts:20](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L20)

___

### LedgerOptions

Ƭ **LedgerOptions**: { `useU2f?`: *boolean* ; `useWebHID?`: *boolean* ; `useWebUSB?`: *boolean*  }

#### Type declaration:

Name | Type |
------ | ------ |
`useU2f?` | *boolean* |
`useWebHID?` | *boolean* |
`useWebUSB?` | *boolean* |

Defined in: [src/lib/Ledger.ts:61](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L61)

___

### List

Ƭ **List**<T\>: *ReadonlyArray*<T\>

#### Type parameters:

Name |
------ |
`T` |

Defined in: [src/lib/cosmos/types/index.ts:2](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L2)

___

### Model

Ƭ **Model**: { `blockSize`: *number* ; `id`: *string* ; `legacyUsbProductId`: *number* ; `memorySize`: *number* ; `productIdMM`: *number* ; `productName`: *string* ; `usbOnly`: *boolean*  }

#### Type declaration:

Name | Type |
------ | ------ |
`blockSize` | *number* |
`id` | *string* |
`legacyUsbProductId` | *number* |
`memorySize` | *number* |
`productIdMM` | *number* |
`productName` | *string* |
`usbOnly` | *boolean* |

Defined in: [src/lib/Ledger.ts:33](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L33)

___

### PK

Ƭ **PK**: *Partial*<{ `compressed_pk`: Buffer ; `pk`: Buffer \| *string*  }\> & [*Exception*](lib_cosmos_types.md#exception)

Defined in: [src/lib/cosmos/types/index.ts:30](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L30)

___

### Pair

Ƭ **Pair**<Value\>: [*IPair*](lib_cosmos_types.md#ipair)<Value\>

#### Type parameters:

Name |
------ |
`Value` |

Defined in: [src/lib/cosmos/types/index.ts:13](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L13)

___

### Signature

Ƭ **Signature**: *Partial*<{ `signature`: Uint8Array \| *null*  }\> & [*Exception*](lib_cosmos_types.md#exception)

Defined in: [src/lib/cosmos/types/index.ts:42](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L42)

___

### Version

Ƭ **Version**: *Partial*<{ `device_locked`: *boolean* ; `major`: *number* ; `minor`: *number* ; `patch`: *number* ; `target_id`: *string* ; `test_mode`: *boolean*  }\> & [*Exception*](lib_cosmos_types.md#exception)

Defined in: [src/lib/cosmos/types/index.ts:47](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L47)

## Variables

### Ledgerer

• `Const` **Ledgerer**: [*Ledger*](../classes/lib/ledger.ledger.md)

Defined in: [src/lib/Ledger.ts:381](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L381)
