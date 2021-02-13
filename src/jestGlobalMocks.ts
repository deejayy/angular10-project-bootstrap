/* eslint-disable @typescript-eslint/no-explicit-any */
export interface StorageMockInterface {
  length: number;
  setItem(key: string, value?: any): any;
  getItem(key: string): any;
  removeItem(key: string): any;
  key(index: number): any;
}

export class StorageMock implements StorageMockInterface {
  private storage = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public setItem(key: string, value?: any) {
    this.storage[key] = value || '';
  }

  public getItem(key: string) {
    return key in this.storage ? this.storage[key] : null;
  }

  public removeItem(key: string) {
    delete this.storage[key];
  }

  public get length(): number {
    return Object.keys(this.storage).length;
  }

  public key(index: number) {
    const keys = Object.keys(this.storage);
    return keys[index] || null;
  }
}

Object.defineProperty(window, 'localStorage', { value: new StorageMock() });
Object.defineProperty(window, 'sessionStorage', { value: new StorageMock() });
Object.defineProperty(window, 'gtag', { value: () => {} });
Object.defineProperty(window, 'ga', { value: () => {} });
