import React from "react";
import logo from "./logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="stars"></div>
      <div class="twinkling"></div>
      <header className="App-header">
        <div style={{ zIndex: 1 }}>
          <h1 className="test" style={{ "margin-bottom": 0 }}>
            Celostrials
          </h1>
          <p style={{ "margin-top": "1em", "margin-bottom": "2em" }}>
            Coming soon to a solar system near you...
          </p>
          <div className="homecardContainerContainer">
            <div className="homeCardContainer">
              <img src={logo} className="homeCard" alt="logo" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
