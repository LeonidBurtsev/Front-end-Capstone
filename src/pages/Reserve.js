import './Pages.css';
import BookingTable from '../controls/BookingTable'

function Reserve() {

    const main_text = "This is Reserve page."

    return (
        <main className='pages'>
            <div className='section_UP'>
                <h1>{main_text}</h1>
            </div>
            <div className='section_middle'>
                <BookingTable></BookingTable>
            </div>
            <div className='section_down'>

            </div>
        </main>
    );
};
export default Reserve