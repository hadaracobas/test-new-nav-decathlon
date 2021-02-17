import React from "react";
import "./index.css";

function TestInfo(props) {
  return (
    <div className="testInfo">
      <h2 className="testInfo__title">Wir testen eine neue Navigation!</h2>
      <p className="testInfo__paragraph">
        Liebe/r Sportler/in,<br></br> damit du auf unserer Website noch
        schneller an deine Lieblingsprodukte kommst, wollen wir für dich eine
        neue Navigationsstruktur erstellen. Damit wir die richtige Entscheidung
        treffen haben wir diese kurze Umfrage erstellt.
      </p>
      <p
        className="testInfo__paragraph"
        style={{ textDecoration: "underline", marginTop: "20px" }}
      >
        Wie funktioniert die Umfrage?
      </p>
      <p className="testInfo__paragraph">
        Dir werden Schritt für Schritt unterschiedliche Produkte angezeigt.{" "}
        <strong>
          Das Ziel ist, dass du so schnell wie möglich auf die Kategorie
          klickst, in der du das gesuchte Produkt vermuten würdest.
        </strong>{" "}
        Insgesamt werden 4 Produkte mit unterschiedlichen Menüs abgefragt.
      </p>

      <a
        href="javascript:void(0);"
        className="testInfo__cta cta"
        onClick={props.onClick}
      >
        Los geht’s {"(:"}
      </a>
    </div>
  );
}

export default TestInfo;
