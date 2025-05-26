import return_version from '../version'
import '../styles/Footer.css'

function Footer() {
    const main_text = "Little-lemon app.";

    return (
        <div  className='footerMain'>
            <h1 className='footer_text' >{main_text}</h1>
            <h1 className='footer_text' > version {return_version()}</h1>
        </div>
    );
}

export default Footer;