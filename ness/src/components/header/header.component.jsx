import React from "react";
import { Link } from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import {connect} from 'react-redux';

import { ReactComponent as Logo} from "../../assets/crown.svg";

import "./header.styles.scss";

const Header = ({currentUser}) => (
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
        </nav>
    </div>
);

const mapStateToProp = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProp)(Header);