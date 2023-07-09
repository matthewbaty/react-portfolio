import React from "react";
import "./index.css";
import GitHubLogo from "../../assets/images/github-logo.png";
import LinkedInLogo from "../../assets/images/linkedin-logo.png";

export default function Footer() {
    return (
        <footer id="footer" className="d-flex border-top align-items-center justify-content-center sticky-bottom mt-3">
            <a
                className="mx-3 my-1"
                href="https://github.com/matthewbaty"
                target="_blank"
                rel="noreferrer"
            >
                <img src={GitHubLogo} alt="GitHub Logo" className="footerLogos"/>
            </a>
            <a
                className="mx-3 my-1"
                href="https://www.linkedin.com/in/matthew-baty-1b1246b3/"
                target="_blank"
                rel="noreferrer"
            >
                <img src={LinkedInLogo} alt="LinkedIn Logo" className="footerLogos"/>
            </a>
        </footer>
    );
}