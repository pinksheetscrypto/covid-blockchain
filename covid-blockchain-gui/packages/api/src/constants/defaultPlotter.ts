import PlotterName from './PlotterName';
import optionsForPlotter from '../utils/optionsForPlotter';
import defaultsForPlotter from '../utils/defaultsForPlotter';

export default {
  displayName: 'Covid Proof of Space',
  options: optionsForPlotter(PlotterName.COVIDPOS),
  defaults: defaultsForPlotter(PlotterName.COVIDPOS),
  installInfo: { installed: true },
};
