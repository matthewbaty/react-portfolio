import React from "react";
import "./index.css";

export default function Navbar({ navLinks = [], currentLink, setCurrentLink }) {
    return (
        <ul id="navBar" className="nav nav-tabs sticky-top justify-content-center">
            {navLinks.map((navLink) => (
                <li className="nav-item" key={navLink.name}>
                    <a
                    className={`nav-link text-dark ${currentLink === navLink ? 'active' : ''}`}
                    href={navLink.url}
                    onClick={() => {
                        setCurrentLink(navLink);
                    }}
                    >
                        {navLink.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};