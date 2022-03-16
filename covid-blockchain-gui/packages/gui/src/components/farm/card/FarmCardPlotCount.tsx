import React from 'react';
import { Trans } from '@lingui/macro';
import { FormatLargeNumber, CardSimple } from '@covid/core';
import usePlots from '../../../hooks/usePlots';

export default function FarmCardPlotCount() {
  const { uniquePlots } = usePlots();

  return (
    <CardSimple
      title={<Trans>Plot Count</Trans>}
      value={<FormatLargeNumber value={uniquePlots?.length} />}
      loading={!uniquePlots}
    />
  );
}
