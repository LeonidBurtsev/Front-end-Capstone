// src/controls/MenuNav.jsx
import React, { useState, useContext } from "react";
import "../index.css";
import { BasketContext } from "../pages/_global_";

const menuData = [
  {
    type: "Breakfast",
    options: [
      {
        name: "Greek Salad",
        descr:
          "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "12.59$",
      },
      {
        name: "Italian Salad",
        descr:
          "The famous italian salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "13.59$",
      },
    ],
  },
  {
    type: "Main",
    options: [
      {
        name: "Steak",
        descr:
          "The famous Steak of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "9.59$",
      },
      {
        name: "Italian Steak",
        descr:
          "The famous Italian Steak of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: "108.59$",
      },
    ],
  },
];

export default function MenuNav() {
  const [activeMenuIdx, setActiveMenuIdx] = useState(0);
  const { currentSelection, updateSelection } = useContext(BasketContext);

  // Переключаем вкладку «Breakfast»/«Main» и т.д.
  const handleMenuClick = (idx) => {
    setActiveMenuIdx(idx);
  };

  // Добавляем или убираем пункт из корзины
  const handleOptionToggle = (menuIdx, optionIdx) => {
    const { type, options } = menuData[menuIdx];
    const opt = options[optionIdx];
    const itemTuple = [type, opt.name, opt.descr, opt.price];

    const exists = currentSelection.some(
      (sel) => sel[0] === type && sel[1] === opt.name
    );
    const newSelection = exists
      ? currentSelection.filter(
          (sel) => !(sel[0] === type && sel[1] === opt.name)
        )
      : [...currentSelection, itemTuple];

    updateSelection(newSelection);
  };

  const activeMenu = menuData[activeMenuIdx];

  // Цвета и стили (как у вас было)
  const menu_colors = {
    menu_item_selected: "var(--secondary-color)",
    menu_item_unselected: "var(--main-color)",
    menu_text_unselected: "white",
    menu_text_selected: "black",
    initial_color: "var(--main-color)",
    color_when_selected: "var(--secondary-color)",
    card_hover_over: "var(--third-color)",
    card_main_text: "black",
    card_secondary_text: "white",
    divider: "var(--secondary-color)",
    order_for_delivery: "black",
  };

  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100vw",
    },
    heading: {
      width: "80vw",
      margin: "1vh 0",
      textAlign: "left",
      color: menu_colors.order_for_delivery,
      fontSize: "1vw",
    },
    navBar: {
      display: "flex",
      gap: "3vw",
      justifyContent: "center",
      alignItems: "center",
      overflowX: "auto",
      whiteSpace: "nowrap",
      width: "100%",
      paddingBottom: "1vh",
    },
    navItem: (active) => ({
      cursor: "pointer",
      padding: "0.5vw 1vw",
      borderRadius: 10,
      backgroundColor: active
        ? menu_colors.menu_item_selected
        : menu_colors.menu_item_unselected,
      color: active
        ? menu_colors.menu_text_selected
        : menu_colors.menu_text_unselected,
      fontSize: "1.5vw",
      transition: "background-color 0.3s ease, color 0.3s ease",
      userSelect: "none",
    }),
    verticalList: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "50vw",
      overflowY: "auto",
      color: menu_colors.color_when_selected,
      fontSize: "1.2vw",
    },
    card: (selected) => ({
      display: "flex",
      flexDirection: "column",
      gap: "0.3vh",
      padding: "0.5vw 1vw",
      borderRadius: 10,
      backgroundColor: selected
        ? menu_colors.color_when_selected
        : menu_colors.initial_color,
      color: selected
        ? menu_colors.card_main_text
        : menu_colors.card_secondary_text,
      fontSize: "1.3vw",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      userSelect: "none",
    }),
    divider: {
      width: "100%",
      height: 1,
      backgroundColor: menu_colors.divider,
      margin: "0.5vh 0",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.heading}>
        <h1>Order for delivery!</h1>
      </div>

      {/* Навигация по типам блюд */}
      <div style={styles.navBar}>
        {menuData.map((m, idx) => (
          <div
            key={m.type}
            style={styles.navItem(idx === activeMenuIdx)}
            onClick={() => handleMenuClick(idx)}
          >
            {m.type}
          </div>
        ))}
      </div>

      {/* Список блюд выбранного типа */}
      <div style={styles.verticalList}>
        {activeMenu.options.map((opt, idx) => {
          const selected = currentSelection.some(
            (sel) =>
              sel[0] === activeMenu.type && sel[1] === opt.name
          );
          return (
            <div key={opt.name} style={{ width: "100%" }}>
              <div
                style={styles.card(selected)}
                onClick={() => handleOptionToggle(activeMenuIdx, idx)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    menu_colors.card_hover_over)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = selected
                    ? menu_colors.color_when_selected
                    : menu_colors.initial_color)
                }
              >
                <div>{opt.name}</div>
                <div>{opt.descr}</div>
                <div>{opt.price}</div>
              </div>
              {idx < activeMenu.options.length - 1 && (
                <div style={styles.divider} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
