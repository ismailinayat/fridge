import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './styles/globals.scss';
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import Game from "./pages/Game";
import Shop from "./pages/Shop";
import JoyStick from "./pages/JoyStick"
import Cart from "./pages/Cart"
import LED from "./pages/LED"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/welcome" element = {<Welcome/>}/>
        <Route path="/game" element = {<Game/>}/>
        <Route path="/shop" element = {<Shop/>}/>
        <Route path="/joystick" element = {<JoyStick/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/LED" element = {<LED/>}/>
      </Routes>
    </Router>
  );
}

export default App;
