import React from "react";
import logo from "../nba_logo.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="logo" src={logo} alt="NBA" />
            </Link>
            <Link to="/newTeam">New Team</Link>
        </div>
    )
}

export default Header;