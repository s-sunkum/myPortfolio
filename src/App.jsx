import logo from "./logo.svg";
import "./App.scss";
import React, { useEffect, useState } from "react";
import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/intro.jsx";
import Portfolio from "./components/Portfolio/portfolio.jsx";
import Contact from "./components/Contact/contact.jsx";
import Experience from "./components/Experience/experience.jsx";
import Menu from "./components/menu/menu.jsx";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
