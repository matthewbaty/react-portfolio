import React from "react";
import "./index.css";

export default function Navbar({ navLinks = [], currentLink, setCurrentNav }) {
    return (
        <ul id="navBar" className="nav nav-tabs sticky-top justify-content-center">
            {navLinks.map((navLink) => (
                <li key={navLink.name} className="nav-item">
                    <a
                    id="navLink"
                    className={`nav-link ${currentLink === navLink ? 'active' : ''}`}
                    href={navLink.url}
                    onClick={() => {
                        setCurrentNav(navLink);
                    }}
                    >
                        {navLink.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};