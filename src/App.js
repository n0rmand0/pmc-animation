import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "./logo-dark.svg";
import "./App.scss";

function App() {
  let [logoClass, setLogoClass] = useState("logo");
  let [mode, setMode] = useState(false);
  // on load
  useEffect(() => {
    setLogoClass("logo");
    setTimeout(() => {
      setLogoClass("logo logo--loop");
    }, 2500);
  }, [mode]);

  return (
    <div className="app" onClick={() => setMode(!mode)}>
      {mode && (
        <div className="logo-container logo-container--light">
          <div className={logoClass}>
            <div className="logo__shine"></div>
            <Logo />
          </div>
        </div>
      )}
      {!mode && (
        <div className="logo-container logo-container--dark">
          <div className={logoClass}>
            <div className="logo__shine logo__shine--dark"></div>

            <Logo />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
