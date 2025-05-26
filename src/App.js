import './styles/App.css';
import './index.css';
import Homepage from "./pages/Homepage";
import Reserve from "./pages/Reserve";
import Menu from "./pages/Menu";
import Basket from "./pages/Basket";
import Footer from "./controls/Footer";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <header className="mainDiv">
      <nav className="navigation">
        <NavLink
          to="/"
          end
          className="navigation_text"
        >
          Homepage
        </NavLink>
        <NavLink
          to="/menu"
          className="navigation_text"
        >
          Menu
        </NavLink>
        <NavLink
          to="/reserve"
          className="navigation_text"
        >
          Book
        </NavLink>
        <NavLink
          to="/basket"
          className="navigation_text"
        >
          Basket
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer/>
    </header>
  );
}

export default App;
