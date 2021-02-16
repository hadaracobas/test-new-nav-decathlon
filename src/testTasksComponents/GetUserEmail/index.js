import React from "react";
import "./index.css";

function GetUserEmail() {
  return (
    <div className="getUserEmail taskComponentContainer">
      <h2 className="title">
        DO YOU WANT TO HAVE A CHANCE TO WIN A 50€ GIFT CARD?
      </h2>
      <label for="getUserEmailInput">Leave your email here: </label>
      <input id="getUserEmailInput" type="text" placeholder="enter email" />
      <p className="getUserEmail__notePragraph">
        * By entering your email you agree to the Privacy Policy, we will only
        use your email to contact the winner.
      </p>
      <a href="#" className="cta">
        Finish and send
      </a>
    </div>
  );
}

export default GetUserEmail;
