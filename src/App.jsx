import "./App.css";
import { Routes, Route} from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import Navbar from "./Components/Navbar.jsx";
import Cart from "./Pages/Cart.jsx";

function App() {
  return (
    
      <Routes>
        <Route element={<Navbar />}>
          <Route>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Route>
      </Routes>

  );
};

export default App;
