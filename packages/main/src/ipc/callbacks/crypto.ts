import { sha256 } from '/@/lib';
import type { CryptoAPI, Callbacks } from '/@shared/types';
import { Channels } from '/@shared/types';

const callbacks: Callbacks<CryptoAPI> = {
  [Channels.SHA256]: (e, data) => sha256(data),
};

export default callbacks;
