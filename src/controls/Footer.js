import return_version from '../version'

function Footer() {
    const main_text = "Little-lemon app.";

    const footer_style = {
        display: 'flex',
        backgroundColor: 'black',
        gap: '5vw',
        justifyContent: 'center', // выравнивание по горизонтали
        alignItems: 'center',      // выравнивание по вертикали
        height : "7vh",
        width: '100vw'
    };
    const footer_text = {
        color: 'white',
        'font-size': '1vw'
    };
    return (
        <div className='footerMain' style={footer_style}>
            <h1 style={footer_text}>{main_text}</h1>
            <h1 style={footer_text}> VERSION IS {return_version()}</h1>
        </div>
    );
}

export default Footer;