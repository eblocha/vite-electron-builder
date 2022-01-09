import type { Callbacks, CombinedAPI } from '/@shared/types';
import windowSlice from './window';
import cryptoSlice from './crypto';

export const callbacks: Callbacks<CombinedAPI> = {
  ...windowSlice,
  ...cryptoSlice,
};
