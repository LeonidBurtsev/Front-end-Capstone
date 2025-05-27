import '../styles/Pages.css';
import BookingTable from '../controls/BookingTable';

function Reserve() {

    const main_text = "Reserve a Table";
    const add_text1 = "We're excited to welcome you! Whether you're planning a cozy dinner, a family gathering, or a special celebration — make it memorable with us.";
    const low_text = 'Enter your phone number and we will call you back!';

    return (
        <main className='pages'>
            {/* Header section with main title and description */}
            <header className='section_UP section_UP--secondary'>
                <h1 className='header_text'>{main_text}</h1>
                <p className='usual_text'>{add_text1}</p>
            </header>

            {/* Reservation form section */}
            <section className='section_middle'>
                <BookingTable />
            </section>

            {/* Footer section with additional text */}
            <section className='section_down'>
                <p className='usual_text2'>{low_text}</p>
            </section>
        </main>
    );
}

export default Reserve;
