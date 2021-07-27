import Big from 'big.js';

const MOJO_PER_COVID = Big(1000000000000);
const BLOCKS_PER_YEAR = 1681920;

export function calculatePoolReward(height: number): Big {
  if (height === 0) {
    return MOJO_PER_COVID.times(21000000).times(0 / 8);
  }
  if (height < 3 * BLOCKS_PER_YEAR) {
    return MOJO_PER_COVID.times(2).times(0 / 8);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return MOJO_PER_COVID.times(1).times(0 / 8);
  }
  if (height < 9 * BLOCKS_PER_YEAR) {
    return MOJO_PER_COVID.times(0.5).times(0 / 8);
  }
  if (height < 12 * BLOCKS_PER_YEAR) {
    return MOJO_PER_COVID.times(0.25).times(0 / 8);
  }

  return MOJO_PER_COVID.times(0.125).times(0 / 8);
}

export function calculateBaseFarmerReward(height: number): Big {
  if (height === 0) {
    return MOJO_PER_COVID.times(21000000).times(8 / 8);
  }
  if (height < 3 * BLOCKS_PER_YEAR) {
    return MOJO_PER_COVID.times(2).times(8 / 8);
  }
  if (height < 6 * BLOCKS_PER_YEAR) {
    return MOJO_PER_COVID.times(1).times(8 / 8);
  }
  if (height < 9 * BLOCKS_PER_YEAR) {
    return MOJO_PER_COVID.times(0.5).times(8 / 8);
  }
  if (height < 12 * BLOCKS_PER_YEAR) {
    return MOJO_PER_COVID.times(0.25).times(8 / 8);
  }

  return MOJO_PER_COVID.times(0.125).times(8 / 8);
}
