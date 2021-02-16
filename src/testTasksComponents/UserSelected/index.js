import React from "react";
import "./index.css";

function UserSelected(props) {
  return (
    <div className="userSelected taskComponentContainer">
      <h3 className="userSelected__title">You have selected {props.title}</h3>
      <div>
        <a href="javascript:void(0);" className="cta" onClick={props.onClick}>
          continue
        </a>
      </div>

      <div className="userSelected__tryAgainAWrapper">
        <a href="javascript:void(0);" onClick={props.onClickTryAgain}>
          I didn’t mean to click that, let me try again
        </a>
      </div>
    </div>
  );
}

export default UserSelected;
