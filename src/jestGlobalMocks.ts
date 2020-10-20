export interface StorageMockInterface {
  length: number;
  // tslint:disable-next-line:no-any
  setItem(key: string, value?: any): void;
  getItem(key: string): void;
  removeItem(key: string): void;
  key(index: number): void;
}

export function storageMock(): StorageMockInterface {
  const storage = {};

  return {
    // tslint:disable-next-line:no-any
    setItem: (key: string, value?: any) => {
      storage[key] = value || '';
    },
    getItem: (key: string) =>
      key in storage ? storage[key] : null,
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
