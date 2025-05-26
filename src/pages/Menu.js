import '../styles/Pages.css';
import MenuNav from '../controls/MenuNav';

function Menu() {
    const main_text = "Our menu"
    const sub_text = `We have menu for all tests and wishes. Check out our specials too! Click on items to add them to basket.`;
    const usual_text2 = `Your order is :`;

    return (
        <main className='pages'>
            <div className='section_UP_var2'>
                <h1 className='header_text'>{main_text}</h1>
                <h1 className='usual_text'>{sub_text}</h1>
            </div>
            <div className='section_middle'>
            <MenuNav/>
            </div>
            <div className='section_down'>
                <h1 className='usual_text2'>{usual_text2}</h1>
            </div>
        </main>
    );
};
export default Menu