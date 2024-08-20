import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


const Navbar = () => {
    const [activeRoute, setActiveRoute] = useState("/");
    return (
        <div>
            <div className="nav">
                <Link to="/">
                    <button style={{
                        backgroundColor: activeRoute === "/" ? "lightgrey" : "initial",
                    }} onClick={() => setActiveRoute("/")}>Home</button>
                </Link>
                <Link to="/cart">
                    <button style={{
                        backgroundColor: activeRoute === "/cart" ? "lightgrey" : "initial",
                    }} onClick={() => setActiveRoute("/cart")}>Cart</button>
                </Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Navbar;
