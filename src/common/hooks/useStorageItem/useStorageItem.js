import { useCallback, useEffect, useState } from 'react';

export const useStorageItem = (itemKey) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    try {
      const item = localStorage.getItem(itemKey);

      setState(item);
    } catch {
      //
    }
  }, [itemKey]);

  const setItem = useCallback((value) => {
    try {
      localStorage.setItem(itemKey, value);

      setState(value);
    } catch {
      //
    }
  }, [itemKey]);

  const removeItem = useCallback(() => {
    try {
      localStorage.removeItem(itemKey);

      setState(null);
    } catch {
      //
    }
  }, [itemKey]);

  return {
    item: state,
    setItem,
    removeItem,
  };
};
