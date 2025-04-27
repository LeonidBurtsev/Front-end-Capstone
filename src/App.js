import './App.css';
import './controls/UI_kit.css'
import Homepage from "./pages/Homepage";
import Reserve from "./pages/Reserve";
import Menu from "./pages/Menu";
import Basket from "./pages/Basket";
import Footer from "./controls/Footer"
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <header className="mainDiv">
            <nav className="navigation">
                <Link to="/" className="navigation_text">Homepage</Link>
                <Link to="/reserve" className="navigation_text">Book</Link>
                <Link to="/menu" className="navigation_text">Menu</Link>
                <Link to="/basket" className="navigation_text">Basket</Link>
            </nav>
            <Routes >
                <Route path="/" element={<Homepage />} ></Route>
                <Route path="/reserve" element={<Reserve />} ></Route>
                <Route path="/menu" element={<Menu />} ></Route>
                <Route path="/basket" element={<Basket />} ></Route>
            </Routes>
            <Footer/>
    </header>
  );
};

export default App;
