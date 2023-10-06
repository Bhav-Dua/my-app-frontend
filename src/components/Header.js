import React from "react";
import logo from "../nba_logo.png"


function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="NBA" />
        </div>
    )
}

export default Header;