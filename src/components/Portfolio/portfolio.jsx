import React, { Component } from "react";
import "./portfolio.scss";
class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <h2>My Projects:</h2>
        <div className="container">
          <div className="item">
            <img src={require("./PeerEval.png")} />
            <h3>Sample Project</h3>
          </div>
          <div className="item">
            <img src={require("./PeerEval.png")} />
            <h3>Sample Project</h3>
          </div>
          <div className="item">
            <img src={require("./PeerEval.png")} />
            <h3>Sample Project</h3>
          </div>
          <div className="item">
            <img src={require("./PeerEval.png")} />
            <h3>Sample Project</h3>
          </div>
          <div className="item">
            <img src={require("./PeerEval.png")} />
            <h3>Sample Project</h3>
          </div>
          <div className="item">
            <img src={require("./PeerEval.png")} />
            <h3>Sample Project</h3>
          </div>
          <div className="item">
            <img src={require("./PeerEval.png")} />
            <h3>Sample Project</h3>
          </div>
          <div className="item">
            <img src={require("./PeerEval.png")} />
            <h3>Sample Project</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
