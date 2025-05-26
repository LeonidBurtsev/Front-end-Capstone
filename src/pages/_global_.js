// _global_.js
import React, { createContext, useState } from 'react';

// 1) Создаём Context с дефолтным значением
export const BasketContext = createContext({
  currentSelection: [],
  updateSelection: () => {}
});

// 2) Провайдер, который будет оборачивать всё приложение
export function BasketProvider({ children }) {
  const [currentSelection, setCurrentSelection] = useState([]);
  const updateSelection = newSel => setCurrentSelection(newSel);

  return (
    <BasketContext.Provider value={{ currentSelection, updateSelection }}>
      {children}
    </BasketContext.Provider>
  );
}

const basket_object = { };
export default basket_object;