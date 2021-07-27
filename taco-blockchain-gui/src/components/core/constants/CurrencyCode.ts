import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.COVID]: IS_MAINNET ? 'XTX' : 'TXTX',
};
