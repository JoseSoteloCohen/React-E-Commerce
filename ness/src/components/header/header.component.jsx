import React from "react";
import { Link } from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import {connect} from 'react-redux';

import { ReactComponent as Logo} from "../../assets/crown.svg";

import "./header.styles.scss";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <nav className="options">
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/contact" className="option">CONTACT</Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link to="/signin" className="option">SIGN IN</Link>
            }
            <CartIcon/>
        </nav>
        {
            hidden ? null : <CartDropdown/>
        }
    </div>
);

const mapStateToProp = ({ user: {currentUser}, cart: { hidden }}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProp)(Header);