[ledger-app-cosmos](../README.md) / [Exports](../modules.md) / lib/cosmos/cosmos1

# Module: lib/cosmos/cosmos1

## Table of contents

### Functions

- [publicKeyv1](lib_cosmos_cosmos1.md#publickeyv1)
- [serializePathv1](lib_cosmos_cosmos1.md#serializepathv1)
- [signSendChunkv1](lib_cosmos_cosmos1.md#signsendchunkv1)

## Functions

### publicKeyv1

▸ **publicKeyv1**(`transport`: Transport, `data`: Buffer): *Promise*<[*PK*](lib_cosmos_types.md#pk)\>

#### Parameters:

Name | Type |
------ | ------ |
`transport` | Transport |
`data` | Buffer |

**Returns:** *Promise*<[*PK*](lib_cosmos_types.md#pk)\>

Defined in: [src/lib/cosmos/cosmos1.ts:87](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/cosmos1.ts#L87)

___

### serializePathv1

▸ **serializePathv1**(`path`: readonly *number*[] \| *string*): Buffer

#### Parameters:

Name | Type |
------ | ------ |
`path` | readonly *number*[] \| *string* |

**Returns:** Buffer

Defined in: [src/lib/cosmos/cosmos1.ts:10](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/cosmos1.ts#L10)

___

### signSendChunkv1

▸ **signSendChunkv1**(`transport`: Transport, `chunkIdx`: *number*, `chunkNum`: *number*, `chunk`: Buffer): *Promise*<[*Signature*](lib_cosmos_types.md#signature)\>

#### Parameters:

Name | Type |
------ | ------ |
`transport` | Transport |
`chunkIdx` | *number* |
`chunkNum` | *number* |
`chunk` | Buffer |

**Returns:** *Promise*<[*Signature*](lib_cosmos_types.md#signature)\>

Defined in: [src/lib/cosmos/cosmos1.ts:32](https://github.com/dfinance/ledger/blob/452c093/src/lib/cosmos/cosmos1.ts#L32)
