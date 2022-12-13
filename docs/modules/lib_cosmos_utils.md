[ledger-app-cosmos](../README.md) / [Exports](../modules.md) / lib/cosmos/utils

# Module: lib/cosmos/utils

## Table of contents

### Functions

- [errorCodeToString](lib_cosmos_utils.md#errorcodetostring)
- [formatPath](lib_cosmos_utils.md#formatpath)
- [isObject](lib_cosmos_utils.md#isobject)
- [processErrorResponse](lib_cosmos_utils.md#processerrorresponse)
- [sortObject](lib_cosmos_utils.md#sortobject)

## Functions

### errorCodeToString

▸ **errorCodeToString**(`code`: *number*): *string*

#### Parameters:

Name | Type |
------ | ------ |
`code` | *number* |

**Returns:** *string*

Defined in: [src/lib/cosmos/utils.ts:31](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/utils.ts#L31)

___

### formatPath

▸ **formatPath**(`path`: readonly *number*[] \| *string*): *number*[]

#### Parameters:

Name | Type |
------ | ------ |
`path` | readonly *number*[] \| *string* |

**Returns:** *number*[]

Defined in: [src/lib/cosmos/utils.ts:60](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/utils.ts#L60)

___

### isObject

▸ **isObject**(`obj`: *unknown*): *boolean*

#### Parameters:

Name | Type |
------ | ------ |
`obj` | *unknown* |

**Returns:** *boolean*

Defined in: [src/lib/cosmos/utils.ts:4](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/utils.ts#L4)

___

### processErrorResponse

▸ **processErrorResponse**(`response`: [*Exception*](lib_cosmos_types.md#exception) \| *any*): [*Exception*](lib_cosmos_types.md#exception)

#### Parameters:

Name | Type |
------ | ------ |
`response` | [*Exception*](lib_cosmos_types.md#exception) \| *any* |

**Returns:** [*Exception*](lib_cosmos_types.md#exception)

Defined in: [src/lib/cosmos/utils.ts:37](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/utils.ts#L37)

___

### sortObject

▸ **sortObject**(`data`: *any*): *any*

#### Parameters:

Name | Type |
------ | ------ |
`data` | *any* |

**Returns:** *any*

Defined in: [src/lib/cosmos/utils.ts:13](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/utils.ts#L13)
