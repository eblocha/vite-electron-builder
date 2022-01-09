import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

const mockedAPI: typeof window.main = {
  lib: {
    sha256sum: jest.fn(async x => x),
  },
  title: {
    close: jest.fn(),
    isMaximized: jest.fn(),
    maximize: jest.fn(),
    minimize: jest.fn(),
    onMaximized: jest.fn(),
    onUnMaximized: jest.fn(),
    restore: jest.fn(),
  },
};

Object.defineProperty(window, 'main', mockedAPI);
