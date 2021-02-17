import React from "react";
import "./index.css";

function GetUserEmail(props) {
  return (
    <div className="getUserEmail taskComponentContainer">
      <h2 className="title">
        Willst du einen € 50,- Decathlon Gutschein gewinnen?
      </h2>
      <label for="getUserEmailInput">E-Mail für das Gewinnspiel: </label>
      <input
        id="getUserEmailInput"
        type="email"
        placeholder="Füge hier deine E-Mail-Adresse ein"
        onChange={props.emailOnChange}
      />
      <p className="getUserEmail__notePragraph">
        * Mit Angabe deiner E-Mail stimmst du unseren Datenschutzbestimmungen
        zu. Wir verwenden die E-Mail-Adresse ausschließlich, um die Gewinner zu
        kontaktieren.
      </p>
      <a
        href="javascript:void(0);"
        className="cta"
        onClick={props.finishOnClick}
      >
        Abschließen und am Gewinnspiel teilnehmen
      </a>
    </div>
  );
}

export default GetUserEmail;
