import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo} from "../../assets/crown.svg"

import "./header.styles.scss";

const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <nav className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
        </nav>
    </div>
)
export default Header;