import Big from 'big.js';
import Unit from '../constants/Unit';
import covidFormatter from './covidFormatter';

export default function covidToMojo(covid: string | number | Big): number {
  return covidFormatter(covid, Unit.COVID)
    .to(Unit.MOJO)
    .toNumber();
}