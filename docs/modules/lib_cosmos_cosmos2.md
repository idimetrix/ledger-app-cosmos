[ledger-app-cosmos](../README.md) / [Exports](../modules.md) / lib/cosmos/cosmos2

# Module: lib/cosmos/cosmos2

## Table of contents

### Functions

- [publicKeyv2](lib_cosmos_cosmos2.md#publickeyv2)
- [serializePathv2](lib_cosmos_cosmos2.md#serializepathv2)
- [signSendChunkv2](lib_cosmos_cosmos2.md#signsendchunkv2)

## Functions

### publicKeyv2

▸ **publicKeyv2**(`transport`: Transport, `data`: Buffer): *Promise*<[*PK*](lib_cosmos_types.md#pk)\>

#### Parameters:

Name | Type |
------ | ------ |
`transport` | Transport |
`data` | Buffer |

**Returns:** *Promise*<[*PK*](lib_cosmos_types.md#pk)\>

Defined in: [src/lib/cosmos/cosmos2.ts:45](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/cosmos2.ts#L45)

___

### serializePathv2

▸ **serializePathv2**(`path`: readonly *number*[] \| *string*): Buffer

#### Parameters:

Name | Type |
------ | ------ |
`path` | readonly *number*[] \| *string* |

**Returns:** Buffer

Defined in: [src/lib/cosmos/cosmos2.ts:10](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/cosmos2.ts#L10)

___

### signSendChunkv2

▸ **signSendChunkv2**(`transport`: Transport, `chunkIdx`: *number*, `chunkNum`: *number*, `chunk`: Buffer): *Promise*<[*Signature*](lib_cosmos_types.md#signature)\>

#### Parameters:

Name | Type |
------ | ------ |
`transport` | Transport |
`chunkIdx` | *number* |
`chunkNum` | *number* |
`chunk` | Buffer |

**Returns:** *Promise*<[*Signature*](lib_cosmos_types.md#signature)\>

Defined in: [src/lib/cosmos/cosmos2.ts:27](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/cosmos2.ts#L27)
