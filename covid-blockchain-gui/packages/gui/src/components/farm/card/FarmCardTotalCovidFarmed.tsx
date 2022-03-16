import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useCurrencyCode, mojoToCovidLocaleString, CardSimple } from '@covid/core';
import { useGetFarmedAmountQuery } from '@covid/api-react';

export default function FarmCardTotalCovidFarmed() {
  const currencyCode = useCurrencyCode();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalCovidFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToCovidLocaleString(farmedAmount)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount]);

  return (
    <CardSimple
      title={<Trans>Total Covid Farmed</Trans>}
      value={totalCovidFarmed}
      loading={isLoading}
      error={error}
    />
  );
}
