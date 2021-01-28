import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeaderDesktop from "./components/HeaderDesktop";

function App() {
  const [navName, setNavName] = useState(1);
  const getCurrentNavName = (navName) => {
    console.log("app nav name: ", navName);
    setNavName(navName);
  };
  console.log("navNAme: ", navName);
  return (
    <div className="app">
      <HeaderDesktop sendNavNameUpToApp={getCurrentNavName} />
      <div className="app__main">-</div>
      <small className="app__currentV">current nav: v{navName}</small>
    </div>
  );
}

export default App;
