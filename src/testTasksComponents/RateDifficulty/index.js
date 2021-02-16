import React from "react";
import "./index.css";

function RateDifficulty(props) {
  /*
  let rateNumsElements = document.getElementsByClassName(
    "rateDifficulty__rate"
  );
  for (let i = 0; i < rateNumsElements.length; i++) {
    rateNumsElements[i].addEventListener("click", () => {
      rateNumsElements[0].style.background = "#0082c3";
      rateNumsElements[0].style.color = "#fff";
      rateNumsElements[1].style.background = "#0082c3";
      rateNumsElements[1].style.color = "#fff";
      rateNumsElements[2].style.background = "#0082c3";
      rateNumsElements[2].style.color = "#fff";
      rateNumsElements[3].style.background = "#0082c3";
      rateNumsElements[3].style.color = "#fff";
      rateNumsElements[4].style.background = "#0082c3";
      rateNumsElements[4].style.color = "#fff";
      rateNumsElements[i].style.background = "#ffea28";
      rateNumsElements[i].style.color = "#242323";
    });
  }
*/
  return (
    <div className="rateDifficulty taskComponentContainer">
      <h2 className="rateDifficulty__title title">
        {" "}
        How easy was it to find the category in the menu?{" "}
      </h2>
      <div className="rateDifficulty__rateWrapper">
        <span className="rateDifficulty__rateDisplayDiff">very hard</span>
        <span
          className="rateDifficulty__rate"
          style={
            props.activeRateNum == 1
              ? { color: "#242323", background: "#ffea28" }
              : { color: "#fff", background: "#0082c3" }
          }
          onClick={props.rateDiffOnClick}
        >
          1
        </span>
        <span
          className="rateDifficulty__rate"
          style={
            props.activeRateNum == 2
              ? { color: "#242323", background: "#ffea28" }
              : { color: "#fff", background: "#0082c3" }
          }
          onClick={props.rateDiffOnClick}
        >
          2
        </span>
        <span
          className="rateDifficulty__rate"
          style={
            props.activeRateNum == 3
              ? { color: "#242323", background: "#ffea28" }
              : { color: "#fff", background: "#0082c3" }
          }
          onClick={props.rateDiffOnClick}
        >
          3
        </span>
        <span
          className="rateDifficulty__rate"
          style={
            props.activeRateNum == 4
              ? { color: "#242323", background: "#ffea28" }
              : { color: "#fff", background: "#0082c3" }
          }
          onClick={props.rateDiffOnClick}
        >
          4
        </span>
        <span
          className="rateDifficulty__rate"
          style={
            props.activeRateNum == 5
              ? { color: "#242323", background: "#ffea28" }
              : { color: "#fff", background: "#0082c3" }
          }
          onClick={props.rateDiffOnClick}
        >
          5
        </span>
        <span
          className="rateDifficulty__rateDisplayDiff"
          onClick={props.rateDiffOnClick}
        >
          very easy
        </span>
      </div>
      <a
        href="javascript:void(0);"
        className="cta rateDifficulty__cta"
        onClick={props.continueOnClick}
      >
        continue
      </a>
    </div>
  );
}

export default RateDifficulty;
