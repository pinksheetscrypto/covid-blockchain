import Big from 'big.js';
import Unit from '../constants/Unit';
import covidFormatter from './covidFormatter';

export default function mojoToCovidLocaleString(mojo: string | number | Big) {
  return covidFormatter(Number(mojo), Unit.MOJO)
    .to(Unit.COVID)
    .toLocaleString();
}