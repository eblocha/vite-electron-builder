import type { Callbacks, CombinedAPI } from '/@shared/types';
import windowSlice from './window';

export const callbacks: Callbacks<CombinedAPI> = {
  ...windowSlice,
};
