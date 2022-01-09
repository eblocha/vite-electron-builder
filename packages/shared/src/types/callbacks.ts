import type { API, Implementation } from './util';

/** This represents all the callbacks as the renderer sees them */
export type Callbacks<A extends API> = {
  [K in keyof A]: Implementation<A, K>;
};
