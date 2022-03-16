import React, { useMemo, ReactElement } from 'react';
import { Trans } from '@lingui/macro';
import { useGetWalletBalanceQuery } from '@covid/api-react';
import { CardSimple } from '@covid/core';
import useWallet from '../../hooks/useWallet';
import getWalletHumanValue from '../../utils/getWalletHumanValue';

type Props = {
  walletId: number;
  tooltip?: ReactElement<any>;
};

export default function WalletCardPendingBalance(props: Props) {
  const { walletId, tooltip } = props;
  const { 
    data: walletBalance, 
    isLoading: isLoadingWalletBalance,
    error,
  } = useGetWalletBalanceQuery({
    walletId,
  }, {
    pollingInterval: 10000,
  });

  const { wallet, unit = '', loading } = useWallet(walletId);

  const isLoading = loading || isLoadingWalletBalance;
  const value = walletBalance?.pendingBalance;

  const humanValue = useMemo(() => wallet && value !== undefined
      ? `${getWalletHumanValue(wallet, value)} ${unit}`
      : ''
  ,[value, wallet, unit]);

  return (
    <CardSimple
      loading={isLoading}
      valueColor="secondary"
      title={<Trans>Pending Balance</Trans>}
      tooltip={tooltip}
      value={humanValue}
      error={error}
    />
  );
}