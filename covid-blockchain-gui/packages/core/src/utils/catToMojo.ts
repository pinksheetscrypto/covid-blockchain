import Big from 'big.js';
import Unit from '../constants/Unit';
import covidFormatter from './covidFormatter';

export default function catToMojo(cat: string | number | Big): number {
  return covidFormatter(cat, Unit.CAT)
    .to(Unit.MOJO)
    .toNumber();
}