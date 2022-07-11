import React, { Component } from "react";
import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Typewriter from "typewriter-effect";
export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={require("./Test.png")} />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello! My name is</h2>
          <h1>Shravun Sunkum</h1>
          <h3>
            <Typewriter
              options={{
                strings: ["Software Developer", "Software Engineer"],
                autoStart: true,
                delay: 75,
                loop: true,
              }}
            />
          </h3>
        </div>
        <a href="#experience">
          <KeyboardArrowDownIcon className="icon" />
        </a>
      </div>
    </div>
  );
}
