import React, { useState } from 'react';

import Navbar from "./components/Navbar/index.js";
import About from "./components/About/index.js";
import Contact from "./components/Contact/index.js";
import Projects from "./components/Projects/index.js";
import Resume from "./components/Resume/index.js";
import Footer from './components/Footer/index.js';
import './App.css';

export default function App() {
  const [navLinks] = useState([
    { name: "About" },
    { name: "Projects" },
    { name: "Resume" },
    { name: "Contact" }
  ]);

  const [currentNav, setCurrentNav] = useState(navLinks[0]);

  return (
    <div>
      <Navbar
        navLinks={navLinks}
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
      />
      <main id="mainContent">
        {currentNav === navLinks[0] && <About></About>}
        {currentNav === navLinks[1] && <Projects></Projects>}
        {currentNav === navLinks[2] && <Resume></Resume>}
        {currentNav === navLinks[3] && <Contact></Contact>}
      </main>
      <Footer></Footer>
    </div>
  );
};