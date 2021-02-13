/* eslint-disable @typescript-eslint/no-explicit-any */
export interface StorageMockInterface {
  length: number;
  setItem(key: string, value?: any): any;
  getItem(key: string): any;
  removeItem(key: string): any;
  key(index: number): any;
}

export function storageMock(): StorageMockInterface {
  const storage = {};

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setItem: (key: string, value?: any) => {
      storage[key] = value || '';
    },
    getItem: (key: string) => {
      return key in storage ? storage[key] : null;
    },
    removeItem: (key: string) => {
      delete storage[key];
    },
    get length(): number {
      return Object.keys(storage).length;
    },
    key: (index: number) => {
      const keys = Object.keys(storage);
      return keys[index] || null;
    },
  };
}

Object.defineProperty(window, 'localStorage', { value: storageMock });
Object.defineProperty(window, 'sessionStorage', { value: storageMock });
Object.defineProperty(window, 'gtag', { value: () => {} });
Object.defineProperty(window, 'ga', { value: () => {} });
