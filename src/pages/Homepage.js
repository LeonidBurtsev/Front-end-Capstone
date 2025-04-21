import return_version from '../version'

function Homepage() {
    const main_text = "This is homepage."
    return (
        <main>
            <h1>{main_text}</h1>
            <h1 className="h1standard"> VERSION IS {return_version()}</h1>
        </main>
    )
}
export default Homepage