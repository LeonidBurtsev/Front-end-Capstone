import './App.css';
import return_version from './version'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> App version : {return_version()} </h1>
      </header>
    </div>
  );
}

export default App;
