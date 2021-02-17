import React from "react";
import "./index.css";

function UserSelected(props) {
  return (
    <div className="userSelected taskComponentContainer">
      <h3 className="userSelected__title">
        Du hast folgende Kategorie gewählt: {props.title}
      </h3>
      <div>
        <a href="javascript:void(0);" className="cta" onClick={props.onClick}>
          WEITER
        </a>
      </div>

      <div className="userSelected__tryAgainAWrapper">
        <a href="javascript:void(0);" onClick={props.onClickTryAgain}>
          Ich will eine andere Kategorie auswählen
        </a>
      </div>
    </div>
  );
}

export default UserSelected;
