import '../styles/Pages.css';
import { BasketContext } from './_global_';
import PayTable from '../controls/PayTable'
import React, { useContext } from 'react';

function Basket() {

    const main_text = "We deliver all across Chicago"
    const add_text1 = "Fill out all the required forms please"
    const specials_text = "Your order is"
    
    const { currentSelection, updateSelection } = useContext(BasketContext);

    const handleRemoveItem = idx => {
      const newSel = currentSelection.filter((_, i) => i !== idx);
      updateSelection(newSel);
    };


    return (
        <main className='pages'>
            <div className='section_UP_var2'>
                <h1 className='header_text'>{main_text}</h1>
                <h1 className='usual_text'>{add_text1}</h1>
            </div>
            <div className='section_middle'>
                <PayTable
                    items={currentSelection}
                    onRemoveItem={handleRemoveItem}
                />
            </div>
            <div className='section_down'>
                <h1 className='special_text'>{specials_text}</h1>
            </div>
        </main>
    )
};
export default Basket