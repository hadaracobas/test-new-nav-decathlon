import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxHeight: "75%",
    maxWidth: "85%",
    overflowY: "auto",
  },
}));

export default function Popup(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/*
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
        */}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        //onClose={handleClose}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper} style={{ position: "relative" }}>
            <p
              style={{
                position: "absolute",
                top: "3px",
                right: "8px",
                cursor: "pointer",
              }}
              onClick={props.handleClose}
            >
              x
            </p>
            <h2 id="transition-modal-title" style={{ marginBottom: "20px" }}>
              TEILNAHMEBEDINGUNGEN GEWINNSPIEL
            </h2>
            <p id="transition-modal-description">
              1. Eine Teilnahme am Gewinnspiel der Decathlon Austria GmbH
              (Veranstalterin) ist ausschließlich zu den hier angeführten
              Bedingungen möglich. Mit der Teilnahme erkennen die Teilnehmer
              diese Teilnahmebedingungen ausdrücklich an. Die Veranstalterin
              behält sich das Recht vor, das Gewinnspiel jederzeit ohne Angaben
              von Gründen zu ändern oder abzubrechen.<br></br>
              <br></br>
              2. Wir verlosen 1 Decathlon Geschenkgutschein im Wert von 50€.
              <br></br>
              <br></br>
              3. Das Gewinnspiel läuft von 20.02.2021 bis
              27.02.20201(“Durchführungszeitraum”).<br></br>
              <br></br>
              4. Die Teilnahme an diesem Gewinnspiel ist kostenlos und begründet
              keine Verpflichtung zum Kauf einer Ware oder Bezug einer
              Dienstleistung. Die Teilnahme erfolgt durch das vollständige
              Ausfüllen und Abschicken des Gewinnspielformulars.
              Teilnahmeberechtigt sind Personen mit Wohnsitz in Österreich mit
              einem Mindestalter von 18 Jahren. Der Rechtsweg ist
              ausgeschlossen. Mehrfache Teilnahme ist nicht zulässig.<br></br>
              <br></br>
              5. Die Gewinner werden nach dem Ende des Gewinnspiels unter
              Ausschluss der Öffentlichkeit per Zufallslos ermittelt und bis
              5.03.2021 mittels E-Mail verständigt. Sämtliche Teilnehmer werden
              über das Ergebnis des Gewinnspiels per E-Mail benachrichtigt und
              stimmen dieser Benachrichtigung ausdrücklich zu. Die Gewinner
              müssen innerhalb von 3 Werktagen (ab Gewinnbenachrichtigung) ihre
              Kontakt- und Adressdaten per Mail rückmelden. Sollten die Gewinner
              die Annahme des Gewinns in dieser Zeit nicht bestätigen, verfällt
              ihr Anspruch auf den Gewinn ersatzlos. Eine Verpflichtung zur
              Annahme des Gewinns besteht nicht.
              <br></br>
              <br></br>
              <br></br>
              Bar ablöse ist nicht möglich, der Gewinnanspruch ist nicht
              übertragbar. Für die Durchführung des Gewinnspiels ist es
              notwendig, personenbezogene Daten (E-Mail-Adresse) zu erheben und
              zu speichern. Für die Korrektheit und Vollständigkeit der
              abgeschickten Daten sind die Teilnehmer selbst verantwortlich.
              Diese Daten werden von der Decathlon Austria GmbH ausschließlich
              zur Abwicklung des Gewinnspiels und zur Gewinnbenachrichtigung
              verwendet. Nach vollständiger Abwicklung des Gewinnspiels werden
              die gespeicherten Daten der Teilnehmer gelöscht, jene des
              Gewinners/der Gewinnerin gesperrt und nach Ablauf der steuer- und
              handelsrechtlichen Vorschriften gelöscht, sofern sie nicht
              ausdrücklich einer darüber hinausgehenden Datenverwendung
              zugestimmt haben. Informationen zum Datenschutz der Decathlon
              Austria GmbH: hier informieren. Das Gewinnspiel steht in keiner
              Verbindung zu Facebook und wird in keiner Weise von Facebook
              gesponsert, unterstützt oder organisiert. Der Empfänger der vom
              Teilnehmer bereitgestellten Informationen ist nicht Facebook,
              sondern die Decathlon Austria GmbH.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
