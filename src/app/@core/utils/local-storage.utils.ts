export enum StorageItem {
  Auth = 'App/auth',
  Theme = 'App/theme',
}

export const getItem = (itemName: StorageItem): unknown | null => {
  const item = sessionStorage.getItem(itemName);
  return item ? JSON.parse(item) : null;
};

export const setItem = (itemName: StorageItem, value: unknown): void => {
  sessionStorage.setItem(itemName, JSON.stringify(value));
};

export const removeItem = (itemName: StorageItem): void => {
  sessionStorage.removeItem(itemName);
};
