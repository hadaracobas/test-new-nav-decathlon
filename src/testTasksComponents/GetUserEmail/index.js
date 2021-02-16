import React from "react";
import "./index.css";

function GetUserEmail(props) {
  return (
    <div className="getUserEmail taskComponentContainer">
      <h2 className="title">
        DO YOU WANT TO HAVE A CHANCE TO WIN A 50€ GIFT CARD?
      </h2>
      <label for="getUserEmailInput">Leave your email here: </label>
      <input
        id="getUserEmailInput"
        type="email"
        placeholder="enter email"
        onChange={props.emailOnChange}
      />
      <p className="getUserEmail__notePragraph">
        * By entering your email you agree to the Privacy Policy, we will only
        use your email to contact the winner.
      </p>
      <a
        href="javascript:void(0);"
        className="cta"
        onClick={props.finishOnClick}
      >
        Finish and send
      </a>
    </div>
  );
}

export default GetUserEmail;
