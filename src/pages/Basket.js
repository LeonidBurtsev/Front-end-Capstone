import React, { useContext } from 'react';
import '../styles/Pages.css';
import { BasketContext } from './_global_';
import PayTable from '../controls/PayTable';

export default function Basket() {
  const main_text = "We deliver all across Chicago";
  const add_text1 = "Fill out all the required forms please";

  const { currentSelection, updateSelection } = useContext(BasketContext);

  // Удаление всего элемента из корзины по индексу
  const handleRemoveItem = (idx) => {
    const newSel = currentSelection.filter((_, i) => i !== idx);
    updateSelection(newSel);
  };

  return (
    <main className='pages'>
      {/* Header section with main title and description */}
      <header className='section_UP section_UP--secondary'>
        <h1 className='header_text'>{main_text}</h1>
        <p className='usual_text'>{add_text1}</p>
      </header>

      {/* PayTable section with basket contents */}
      <section className='section_middle'>
        <PayTable
          items={currentSelection}
          onRemoveItem={handleRemoveItem}
        />
      </section>
    </main>
  );
}
