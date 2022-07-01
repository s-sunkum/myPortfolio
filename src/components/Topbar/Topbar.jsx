import React, { Component } from "react";
import "./Topbar.scss";
import "material-icons/iconfont/material-icons.css";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
class Topbar extends Component {
  render() {
    return (
      <div class="topbar">
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              Shravun
            </a>
            <div className="itemContainer">
              <PersonPinIcon className="icon" />
              <span>(614)805-6711</span>
            </div>
            <div className="itemContainer">
              <MailOutlineIcon className="icon" />
              <span>shravun99@gmail.com</span>
            </div>
          </div>
          <h1>test</h1>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
export default Topbar;
