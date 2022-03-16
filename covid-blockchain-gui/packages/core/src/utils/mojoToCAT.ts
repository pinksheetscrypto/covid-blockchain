import Big from 'big.js';
import Unit from '../constants/Unit';
import covidFormatter from './covidFormatter';

export default function mojoToCAT(mojo: string | number | Big): number {
  return covidFormatter(mojo, Unit.MOJO)
    .to(Unit.CAT)
    .toNumber();
}