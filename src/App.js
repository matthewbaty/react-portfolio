import React, { useState } from 'react';

import Navbar from "./components/Navbar/index.js";
import About from "./components/About/index.js";
import Contact from "./components/Contact/index.js";
import Projects from "./components/Projects/index.js";
import Resume from "./components/Resume/index.js";
import Footer from './components/Footer/index.js';

export default function App() {
  const [navLinks] = useState([
    { name: "About" },
    { name: "Projects" },
    { name: "Skills" },
    { name: "Contact" }
  ]);

  const [currentNav, setCurrentNav] = useState(navLinks[0]);

  return (
    <div>
      <Navbar
        navLinks={navLinks}
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
      ></Navbar>
      <main>
        {currentNav.name === "About" && <About></About>}
        {currentNav.name === "Projects" && <Projects></Projects>}
        {currentNav.name === "Resume" && <Resume></Resume>}
        {currentNav.name === "Contact" && <Contact></Contact>}
      </main>
      <Footer></Footer>
    </div>
  );
}