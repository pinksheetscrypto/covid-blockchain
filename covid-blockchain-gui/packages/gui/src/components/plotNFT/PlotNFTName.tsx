import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Trans } from '@lingui/macro';
import styled from 'styled-components';
import type PlotNFT from '../../types/PlotNFT';
import usePlotNFTName from '../../hooks/usePlotNFTName';
import { Address, Flex, TooltipIcon } from '@covid/core';
import PlotNFTExternal from '../../types/PlotNFTExternal';

const StyledTitle = styled(Box)`
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.7);
`;

type Props = {
  nft: PlotNFT | PlotNFTExternal;
  variant?: string;
};

export default function PlotNFTName(props: Props) {
  const {
    variant,
    nft,
    nft: {
      poolState: { p2SingletonPuzzleHash },
    },
  } = props;

  const humanName = usePlotNFTName(nft);

  return (
    <Flex gap={1} alignItems="center">
      <Typography variant={variant} noWrap>
        {humanName}
      </Typography>
      <TooltipIcon interactive>
        <Flex flexDirection="column" gap={1}>
          <StyledTitle>
            <Trans>Autogenerated name from pool contract address</Trans>
          </StyledTitle>
          <Address value={p2SingletonPuzzleHash} copyToClipboard />
        </Flex>
      </TooltipIcon>
    </Flex>
  );
}

PlotNFTName.defaultProps = {
  variant: 'body1',
};