import React from "react";
import { ReactComponent as Logo } from "./logo-dark.svg";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="logo-container logo-container--light">
        <div className="logo">
          <div className="logo__shine"></div>
          <Logo />
        </div>
      </div>
      <div className="logo-container logo-container--dark">
        <div className="logo">
          <div className="logo__shine logo__shine--dark"></div>

          <Logo />
        </div>
      </div>
    </div>
  );
}

export default App;
