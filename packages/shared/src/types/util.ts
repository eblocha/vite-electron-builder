/** Unwraps nested promises */
export type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

/** This represents the callbacks available to the renderer process */
export type API = Record<string, (...args: unknown[]) => unknown>;

/** This is an implementation of a callback in the main process */
export type Implementation<T extends API, C extends keyof T> = (
  e: Electron.IpcMainInvokeEvent,
  ...args: Parameters<T[C]>
) => ReturnType<T[C]> | Awaited<ReturnType<T[C]>>;
