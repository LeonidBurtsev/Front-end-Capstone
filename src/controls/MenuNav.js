import { useState, useEffect, useContext } from "react";
import "../index.css";
import "../pages/_global_";
import { BasketContext } from '../pages/_global_';

/**
 * MenuNav component (v2)
 * - multi‑select with toggle
 * - grey hover, red selected
 * - divider between cards
 * - send_contextAPIselection logs currentSelection whenever it changes
 */
export default function MenuNav() {
  /* ------------------------------------------------------------------
   *   DATA & STATE
   * ------------------------------------------------------------------ */
  const initialMenu = [
    {
      type: "Breakfast",
      options: [
        {
          name: "Greek Salad",
          descr:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
          price: "12.59$",
          selected: false,
        },
        {
          name: "Italian Salad",
          descr:
            "The famous italian salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
          price: "13.59$",
          selected: false,
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
          selected: false,
        },
        {
          name: "Italian Steak",
          descr:
            "The famous Italian Steak of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
          price: "108.59$",
          selected: false,
        },
      ],
    },
  ];

  const [menus, setMenus] = useState(initialMenu);
  const [activeMenuIdx, setActiveMenuIdx] = useState(0);
  const [currentSelection, setCurrentSelection] = useState([]); // [[type,name,descr,price], …]
  const activeMenu = menus[activeMenuIdx];

  /* ------------------------------------------------------------------
   *   External‑API helper
   * ------------------------------------------------------------------ */
  const { updateSelection } = useContext(BasketContext);

  // Функция, которая принимает новое состояние корзины и записывает его в Context
  const send_contextAPIselection = (sel) => {
    // Обновляем контекст
    updateSelection(sel);
    // Логируем для отладки
    console.log('contextAPI selection updated:', sel);
  };

  // Whenever currentSelection changes, push it to the (mock) Context/API
  useEffect(() => {
    send_contextAPIselection(currentSelection);
  }, [currentSelection]);

  /* ------------------------------------------------------------------
   *   HANDLERS
   * ------------------------------------------------------------------ */
  const handleMenuClick = (idx) => setActiveMenuIdx(idx);

  const handleOptionToggle = (menuIdx, optionIdx) => {
    setMenus((prev) => {
      // Toggle the clicked option
      const next = prev.map((m, mIdx) => {
        if (mIdx !== menuIdx) return m;
        const newOptions = m.options.map((opt, oIdx) =>
          oIdx === optionIdx ? { ...opt, selected: !opt.selected } : opt
        );
        return { ...m, options: newOptions };
      });

      // Build new selection list (flatten all selected dishes)
      const newSelection = next.flatMap(({ type, options }) =>
        options
          .filter((o) => o.selected)
          .map((o) => [type, o.name, o.descr, o.price])
      );

      setCurrentSelection(newSelection);
      return next;
    });
  };

  /* ------------------------------------------------------------------
   *   STYLES (inline for clarity)
   * ------------------------------------------------------------------ */
  const menu_colors = {

    /* MENU ITEM SETTINGS. */
    menu_item_selected : 'var(--secondary-color)',
    menu_item_unselected : 'var(--main-color)',
    menu_text_unselected : "white",
    menu_text_selected : "black",

    /* ELEMENTS ITSELF.  */

    initial_color :'var(--main-color)',
    color_when_selected : 'var(--secondary-color)',
    card_hover_over : 'var(--third-color)',
    card_main_text : "black",
    card_secondary_text : "white",

    /* ADITIONALS*/
    divider : 'var(--secondary-color)',
    order_for_delivery : "black"
  }
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
      color: menu_colors['order_for_delivery'],
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
      backgroundColor: active ? menu_colors['menu_item_selected']:  menu_colors['menu_item_unselected'],
      color: active ? menu_colors['menu_text_selected']:  menu_colors['menu_text_unselected'],
      fontSize: "1.5vw",
      transition: "background-color 0.3s ease, color 0.3s ease",
      userSelect: 'none' 
    }),
    verticalList: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "50vw",
      overflowY: "auto",
      color: menu_colors['color_when_selected'],
      fontSize: "1.2vw",
    },
    card: (selected) => ({
      display: "flex",
      flexDirection: "column",
      gap: "0.3vh",
      padding: "0.5vw 1vw",
      borderRadius: 10,
      backgroundColor: selected ?  menu_colors['color_when_selected']:  menu_colors['initial_color'],
      color: selected ?  menu_colors['card_main_text'] : menu_colors['card_secondary_text'],
      fontSize: "1.3vw",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      userSelect: 'none' 
    }),
    divider: {
      width: "100%",
      height: 1,
      backgroundColor: menu_colors['divider'],
      margin: "0.5vh 0",
    },
  };

  /* ------------------------------------------------------------------
   *   RENDER
   * ------------------------------------------------------------------ */
  return (
    <div style={styles.wrapper}>
      <div style={styles.heading}>
        <h1>Order for delivery !</h1>
      </div>

      {/* Horizontal menu */}
      <div style={styles.navBar}>
        {menus.map((m, idx) => (
          <div
            key={m.type}
            style={styles.navItem(idx === activeMenuIdx)}
            onClick={() => handleMenuClick(idx)}
          >
            {m.type}
          </div>
        ))}
      </div>

      {/* Vertical list for active menu */}
      <div style={styles.verticalList}>
        {activeMenu.options.map((opt, idx) => (
          <div key={opt.name} style={{ width: "100%" }}>
            {/* card */}
            <div
              style={styles.card(opt.selected)}
              onClick={() => handleOptionToggle(activeMenuIdx, idx)}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = menu_colors['card_hover_over'])}
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = opt.selected
                  ? menu_colors['color_when_selected']
                  : menu_colors['initial_color'])
              }
            >
              <div>{opt.name}</div>
              <div>{opt.descr}</div>
              <div>{opt.price}</div>
            </div>
            {/* divider except after last item */}
            {idx < activeMenu.options.length - 1 && (
              <div style={styles.divider} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
