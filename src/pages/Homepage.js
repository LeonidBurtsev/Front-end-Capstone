import '../styles/Pages.css';
import Slideshow from '../controls/SlideShow.js';
import { NavLink } from "react-router-dom";

function Homepage() {
    
  const main_text      = "Little Lemon";
  const add_text1      = "Chicago";
  const add_text2      = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";
  const checkout_text  = "Check out our new menu!";
  const specials_text  = "Specials & news";

  const slides = [
    { url: 'pictures/1.jpg', caption: 'Greek Salad with Feta & Olives' },
    { url: 'pictures/2.jpg', caption: 'Zesty Lemon Pasta Special' },
    { url: 'pictures/3.jpg', caption: 'Grilled Seafood Platter' },
  ];

  return (
    <main className='pages'>
      <div className='section_UP'>
        <h1 className='header_text_var2'>{main_text}</h1>
        <h1 className='sub_header_var2'>{add_text1}</h1>
        <h1 className='usual_text_var2'>{add_text2}</h1>
      </div>

      <div className='section_middle'>
        <h1 className='special_text'>{specials_text}</h1>
        <Slideshow slides={slides} interval={10000} />
      </div>

      <div className='section_down'>
        <h1 className="special_text"> <NavLink to="/menu">{checkout_text}</NavLink> </h1> 
      </div>
    </main>
  );
}

export default Homepage;
