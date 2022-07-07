import logo from "./logo.svg";
import "./App.scss";
import React, { useEffect, useState } from "react";
import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/intro.jsx";
import Portfolio from "./components/Portfolio/portfolio.jsx";
import Contact from "./components/Contact/contact.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
