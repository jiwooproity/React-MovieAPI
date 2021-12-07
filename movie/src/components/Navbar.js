import { Link } from "react-router-dom";
import { useState } from "react";
import "./css/Navbar.css"

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <header>
            <div className="nav__width">
                <h1>
                    <Link to="">MOVIE</Link>
                </h1>
                <ul className="nav__menu">
                    <li>
                        <Link to="">Home</Link>
                    </li>
                    <li>About</li>
                    <li>Porduct</li>
                </ul>
                <div className="nav__icon">
                    <i className={click ? "fas fa-times" : "fas fa-bars"} onClick={handleClick}></i>
                </div>
            </div>
            <div className={click ? "submenu" : "submenu active"}>
                <i className="fas fa-times" onClick={handleClick}></i>
                <ul className="submenu__list">
                    <li onClick={handleClick}>Home</li>
                    <li onClick={handleClick}>About</li>
                    <li onClick={handleClick}>Product</li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;