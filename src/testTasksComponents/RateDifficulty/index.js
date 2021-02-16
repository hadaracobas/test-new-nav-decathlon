import React from "react";
import "./index.css";

function RateDifficulty() {
  return (
    <div className="rateDifficulty taskComponentContainer">
      <h2 className="rateDifficulty__title title">
        {" "}
        How easy was it to find the category in the menu?{" "}
      </h2>
      <div className="rateDifficulty__rateWrapper">
        <span className="rateDifficulty__rateDisplayDiff">very hard</span>
        <span className="rateDifficulty__rate">1</span>
        <span className="rateDifficulty__rate">2</span>
        <span className="rateDifficulty__rate">3</span>
        <span className="rateDifficulty__rate">4</span>
        <span className="rateDifficulty__rate">5</span>
        <span className="rateDifficulty__rateDisplayDiff">very easy</span>
      </div>
      <a href="#" className="cta rateDifficulty__cta">
        continue
      </a>
    </div>
  );
}

export default RateDifficulty;
