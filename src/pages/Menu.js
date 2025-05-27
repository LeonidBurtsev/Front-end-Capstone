import React, { useContext } from 'react';
import '../styles/Pages.css';
import MenuNav from '../controls/MenuNav';
import PayComponent from '../controls/PayComponent';
import { BasketContext } from './_global_';

function Menu() {
  const main_text = "Our menu";
  const sub_text = `We have menu for all tastes and wishes. Check out our specials too! Click on items to add them to the basket.`;
  const usual_text2 = `Your order is :`;

  // достаём из Context API текущее состояние корзины и функцию обновления
  const { currentSelection, updateSelection } = useContext(BasketContext);

  // удаление из корзины по индексу
  const handleRemoveItem = idx => {
    const newSel = currentSelection.filter((_, i) => i !== idx);
    updateSelection(newSel);
  };

  return (
    <main className='pages'>
      {/* Header section with menu title and description */}
      <header className='section_UP section_UP--secondary'>
        <h1 className='header_text'>{main_text}</h1>
        <p className='usual_text'>{sub_text}</p>
      </header>

      {/* Menu navigation section */}
      <section className='section_middle'>
        <MenuNav />
      </section>

      {/* Basket section with current order and payment component */}
      <section className='section_down'>
        <div>
          <h2 className='usual_text2'>{usual_text2}</h2>
          {/* Прокидываем items из контекста и колбэк удаления */}
          <PayComponent
            items={currentSelection}
            onRemoveItem={handleRemoveItem}
          />
        </div>
      </section>
    </main>
  );
}

export default Menu;
