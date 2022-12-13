[ledger-app-cosmos](../README.md) / [Exports](../modules.md) / lib/Ledger

# Module: lib/Ledger

## Table of contents

### Enumerations

- [EVENTS](../enums/lib/ledger.events.md)

### Classes

- [Ledger](../classes/lib/ledger.ledger.md)

### Type aliases

- [Device](lib_ledger.md#device)
- [LedgerOptions](lib_ledger.md#ledgeroptions)
- [Model](lib_ledger.md#model)

### Variables

- [Ledgerer](lib_ledger.md#ledgerer)

## Type aliases

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

## Variables

### Ledgerer

• `Const` **Ledgerer**: [*Ledger*](../classes/lib/ledger.ledger.md)

Defined in: [src/lib/Ledger.ts:381](https://github.com/dfinance/ledger/blob/452c093/src/lib/Ledger.ts#L381)
