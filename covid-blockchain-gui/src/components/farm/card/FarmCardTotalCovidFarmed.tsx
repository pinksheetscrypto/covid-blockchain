import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../modules/rootReducer';
import FarmCard from './FarmCard';
import { mojo_to_covid } from '../../../util/covid';
import useCurrencyCode from '../../../hooks/useCurrencyCode';
import { FormatLargeNumber } from '@covid/core';

export default function FarmCardTotalCovidFarmed() {
  const currencyCode = useCurrencyCode();

  const loading = useSelector(
    (state: RootState) => !state.wallet_state.farmed_amount,
  );

  const farmedAmount = useSelector(
    (state: RootState) => state.wallet_state.farmed_amount?.farmed_amount,
  );

  const totalCovidFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      const val = BigInt(farmedAmount.toString());
      return mojo_to_covid(val);
    }
  }, [farmedAmount]);

  return (
    <FarmCard
      title={<Trans>{currencyCode} Total Covid Farmed</Trans>}
      value={<FormatLargeNumber value={totalCovidFarmed} />}
      loading={loading}
    />
  );
}
