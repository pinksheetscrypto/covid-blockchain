import type { Wallet } from '@covid/api';
import { WalletType } from '@covid/api';
import { mojoToCATLocaleString, mojoToCovidLocaleString } from '@covid/core';

export default function getWalletHumanValue(wallet: Wallet, value: number): string {
  return wallet.type === WalletType.CAT
    ? mojoToCATLocaleString(value)
    : mojoToCovidLocaleString(value);
}
