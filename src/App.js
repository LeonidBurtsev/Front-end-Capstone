import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Reserve from "./pages/Reserve";
import Menu from "./pages/Menu";
import Basket from "./pages/Basket";

function App() {
  return (
    <header className="mainDiv"> 
      <nav className="navigation">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/reserve" className="nav-item">Book</Link>
        <Link to="/menu" className="nav-item">Menu</Link>
        <Link to="/basket" className="nav-item">Basket</Link>
      </nav>
        <Routes> 
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/reserve" element={<Reserve />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
        </Routes>
    </header>
  );
};

export default App;
