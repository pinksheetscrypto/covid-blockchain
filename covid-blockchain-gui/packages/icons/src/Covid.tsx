import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import CovidIcon from './images/covid.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={CovidIcon} viewBox="0 0 150 58" {...props} />;
}
