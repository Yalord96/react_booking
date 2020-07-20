import React from "react";
import './Header.css';
import Logo from "./logo.png";
function Header() {
    return <div className="header">
        <div className="header_logo">
            <img className="header_logo__img" src={Logo} alt="logo">

            </img>
            <div className="header_logo__name">
                Booking
            </div>
        </div>
        <div className="header_buttons">
            <button className="header_buttons__button">ABOUT</button>
            <button className="header_buttons__button">MY BOOKING</button>
            <button className="header_buttons__button">SIGN IN</button>
        </div>
    </div>

}
export default Header;