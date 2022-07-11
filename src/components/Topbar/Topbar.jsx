import React, { Component } from "react";
import "./Topbar.scss";
import "material-icons/iconfont/material-icons.css";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
            <span>(614)-805-6711</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>sunkum.2@osu.edu</span>
          </div>
          <div className="itemContainer">
            <LinkedInIcon className="icon" />
            <a href="https://www.linkedin.com/in/shravun-sunkum-ab13371b7/">
              Linkedin
            </a>
            <GitHubIcon className="icon" />
            <a href="https://github.com/s-sunkum">Github</a>
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
