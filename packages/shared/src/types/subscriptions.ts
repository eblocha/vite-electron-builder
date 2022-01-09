import type { Channels } from './channels';

/** Runs when an event is recieved */
type Callback<A extends unknown[]> = (...args: A) => void;

/**
 * Defines the available events that can be subscribed to.
 * This should be of the form Record<string, Callback>
 */
export type Subscriptions = {
  [Channels.MAXIMIZED]: Callback<[]>;
  [Channels.UNMAXIMIZED]: Callback<[]>;
};
