import '../styles/Pages.css';
import Slideshow from '../controls/SlideShow.js';
import { useNavigate } from 'react-router-dom';
import MyButton from '../controls/MyButton.js'

function Homepage() {


  const main_text = "Little Lemon";
  const add_text1 = "Chicago";
  const add_text2 = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";
  const checkout_text = "Order from our new menu!";
  const specials_text = "Specials & news";

  const slides = [
    { url: 'pictures/1.jpg', caption: 'Greek Salad with Feta & Olives' },
    { url: 'pictures/2.jpg', caption: 'Zesty Lemon Pasta Special' },
    { url: 'pictures/3.jpg', caption: 'Grilled Seafood Platter' },
  ];
  const navigate = useNavigate();
  function goMenu() {
        navigate('/menu');
  }

  return (
    <main className='pages'>
      <div className='section_UP section_UP--main'>
        <h1 className='header_text_var2'>{main_text}</h1>
        <h1 className='sub_header_var2'>{add_text1}</h1>
        <h1 className='usual_text_var2'>{add_text2}</h1>
      </div>

      <div className='section_middle'>
        <h1 className='special_text'>{specials_text}</h1>
        <Slideshow slides={slides} interval={10000} />
      </div>

      <div className='section_down'>
        <h1 className="special_text"> {checkout_text}</h1>
        <MyButton children="New menu" onClick={goMenu}></MyButton>
      </div>
    </main>
  );
}

export default Homepage;
