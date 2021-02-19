import React, { useState } from "react";
import LoadingProg from "../../materialUiComponents/LoadingProg";
import Popup from "../../materialUiComponents/Popup";
import "./index.css";

function GetUserEmail(props) {
  const [openPop, setOpenPop] = useState(false);

  const handleOpenPop = () => {
    setOpenPop(true);
  };

  const handleClosePop = () => {
    setOpenPop(false);
  };
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
        * Mit Angabe deiner E-Mail stimmst du unseren{" "}
        <a href="#" onClick={handleOpenPop} style={{ color: "#0082c3" }}>
          Teilnahmebedingungen
        </a>{" "}
        zu. Wir verwenden die E-Mail-Adresse ausschließlich, um die Gewinner zu
        kontaktieren.
      </p>
      {props.displayPostBtn && (
        <a
          href="javascript:void(0);"
          className="cta"
          onClick={props.finishOnClick}
        >
          Abschließen und am Gewinnspiel teilnehmen
        </a>
      )}
      {props.loading && (
        <div className="getUserEmail__loadingWrapper">
          <LoadingProg />
        </div>
      )}

      <Popup open={openPop} handleClose={handleClosePop} />
    </div>
  );
}

export default GetUserEmail;
