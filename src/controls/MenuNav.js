// src/controls/MenuNav.jsx
import React, { useState, useContext, useRef, useEffect } from "react";
import { menuData } from './MenuItems';
import styles from '../styles/MenuNav.module.css';
import MyTwoButtons from "./MyTwoButtons";
import { BasketContext } from "../pages/_global_";

export default function MenuNav() {
  const [activeMenuIdx, setActiveMenuIdx] = useState(0);
  const { currentSelection, updateSelection } = useContext(BasketContext);
  const navRef = useRef(null);

  // Mount on center if needed.
  useEffect(() => {
    const el = navRef.current;
    if (el && el.scrollWidth > el.clientWidth) {
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    }
  }, [menuData.length]);

  const handleMenuClick = (idx) => {
    setActiveMenuIdx(idx);
  };

  const handleAdd = (menuIdx, optionIdx) => {
    const { type, options } = menuData[menuIdx];
    const opt = options[optionIdx];
    const exists = currentSelection.find(
      (item) => item.type === type && item.name === opt.name
    );

    let newSel;
    if (exists) {
      newSel = currentSelection.map((item) =>
        item.type === type && item.name === opt.name
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    } else {
      newSel = [
        ...currentSelection,
        { type, name: opt.name, descr: opt.descr, price: opt.price, qty: 1 },
      ];
    }
    updateSelection(newSel);
  };

  const handleRemove = (menuIdx, optionIdx) => {
    const { type, options } = menuData[menuIdx];
    const opt = options[optionIdx];
    const exists = currentSelection.find(
      (item) => item.type === type && item.name === opt.name
    );
    if (!exists) return;

    let newSel;
    if (exists.qty > 1) {
      newSel = currentSelection.map((item) =>
        item.type === type && item.name === opt.name
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    } else {
      newSel = currentSelection.filter(
        (item) => !(item.type === type && item.name === opt.name)
      );
    }
    updateSelection(newSel);
  };

  const activeMenu = menuData[activeMenuIdx];

  return (
    <div className={styles.wrapper}>
      {/* Gradient ? */}
      <div className={styles.navWrapper}>
        {/* Navigate by types */}
        <div className={styles.navBar} ref={navRef}>
          {menuData.map((m, idx) => (
            <div
              key={m.type}
              className={`${styles.navItem} ${
                idx === activeMenuIdx ? styles.active : styles.inactive
              }`}
              onClick={() => handleMenuClick(idx)}
            >
              {m.type}
            </div>
          ))}
        </div>
      </div>

      {/* Menu list */}
      <div className={styles.listContainer}>
        {activeMenu.options.map((opt, idx) => {
          const inBasket = currentSelection.find(
            (item) =>
              item.type === activeMenu.type && item.name === opt.name
          );
          const qty = inBasket ? inBasket.qty : 0;

          return (
            <div key={opt.name} className={styles.row}>
              <div className={styles.textContainer}>
                <div>{opt.name}</div>
                <div>{opt.price}</div>
              </div>

              <div className={styles.buttonsContainer}>
                <MyTwoButtons
                  onAdd={() => handleAdd(activeMenuIdx, idx)}
                  onRemove={() => handleRemove(activeMenuIdx, idx)}
                />
              </div>

              <div className={styles.qtyContainer}>
                {qty > 0 ? qty : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}