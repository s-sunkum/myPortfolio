import React, { Component } from "react";
import "./Topbar.scss";
import "material-icons/iconfont/material-icons.css";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <HomeIcon />
          </a>
          <div className="itemContainer">
            <PersonPinIcon className="icon" />
            <span>(614)805-6711</span>
          </div>
          <div className="itemContainer">
            <MailOutlineIcon className="icon" />
            <span>sunkum.2@osu.edu</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
