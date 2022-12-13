[ledger-app-cosmos](../README.md) / [Exports](../modules.md) / lib/cosmos/types

# Module: lib/cosmos/types

## Table of contents

### Type aliases

- [APK](lib_cosmos_types.md#apk)
- [ApplicationInformation](lib_cosmos_types.md#applicationinformation)
- [DeviceInformation](lib_cosmos_types.md#deviceinformation)
- [Dictionary](lib_cosmos_types.md#dictionary)
- [Exception](lib_cosmos_types.md#exception)
- [IDictionary](lib_cosmos_types.md#idictionary)
- [IKeyValuePair](lib_cosmos_types.md#ikeyvaluepair)
- [IList](lib_cosmos_types.md#ilist)
- [IPair](lib_cosmos_types.md#ipair)
- [KeyValuePair](lib_cosmos_types.md#keyvaluepair)
- [List](lib_cosmos_types.md#list)
- [PK](lib_cosmos_types.md#pk)
- [Pair](lib_cosmos_types.md#pair)
- [Signature](lib_cosmos_types.md#signature)
- [Version](lib_cosmos_types.md#version)

## Type aliases

### APK

Ƭ **APK**: *Partial*<{ `bech32_address`: *string* ; `compressed_pk`: Buffer  }\> & [*Exception*](lib_cosmos_types.md#exception)

Defined in: [src/lib/cosmos/types/index.ts:36](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L36)

___

### ApplicationInformation

Ƭ **ApplicationInformation**: *Partial*<{ `appName`: *string* ; `appVersion`: *string* ; `flagLen`: *number* ; `flag_onboarded`: *boolean* ; `flag_pin_validated`: *boolean* ; `flag_recovery`: *boolean* ; `flag_signed_mcu_code`: *boolean* ; `flagsValue`: *number*  }\> & [*Exception*](lib_cosmos_types.md#exception)

Defined in: [src/lib/cosmos/types/index.ts:57](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L57)

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

### List

Ƭ **List**<T\>: *ReadonlyArray*<T\>

#### Type parameters:

Name |
------ |
`T` |

Defined in: [src/lib/cosmos/types/index.ts:2](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/types/index.ts#L2)

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
