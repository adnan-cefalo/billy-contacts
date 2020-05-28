import React from "react";
import Filters from "./Filters";

function Header(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand">Billy Contacts</span>
            {props.children}
        </nav>
    );
}

export default Header;