import "../css/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__width">
                <div className="navbar__title">
                    <h1 className="navbar__logo">TICKET</h1>
                </div>
                <div className="navbar__menu">
                    <ul className="navbar__list">
                        <li className="navbar__list-item">Movie</li>
                        <li className="navbar__list-item">Search</li>
                        <li className="navbar__list-item">How</li>
                        <li className="navbar__list-item">Help</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;