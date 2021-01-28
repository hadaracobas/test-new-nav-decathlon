import React from "react";
import "./index.css";

function Nav4Desktop() {
  const handleOpenSportarten = () => {
    document.getElementById("nav4Desktop__submenu--sportarten").style.display =
      "block";
  };
  const handleCloseSportarten = () => {
    document.getElementById("nav4Desktop__submenu--sportarten").style.display =
      "none";
  };

  const handleOpenDamenHerren = () => {
    document.getElementById(
      "nav4Desktop__submenu--damen-herren"
    ).style.display = "block";
  };
  const handleCloseDamenHerren = () => {
    document.getElementById(
      "nav4Desktop__submenu--damen-herren"
    ).style.display = "none";
  };

  const handleOpenSportzubehor = () => {
    document.getElementById(
      "nav4Desktop__submenu--sportzubehor"
    ).style.display = "block";
  };
  const handleCloseSportzubehor = () => {
    document.getElementById(
      "nav4Desktop__submenu--sportzubehor"
    ).style.display = "none";
  };
  return (
    <div className="nav4Desktop">
      <ul className="nav4Desktop__menu">
        <li onMouseLeave={handleCloseSportarten}>
          <a
            href="#"
            id="nav4Desktop__submenu--sportarten-title"
            onMouseOver={handleOpenSportarten}
          >
            Sportarten{" "}
          </a>

          <ul
            class="nav4Desktop__submenu"
            id="nav4Desktop__submenu--sportarten"
          >
            <div className="row">
              <li>
                <a href="javascript:void(0)">Bergsport {"&"} Outdoor</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Angeln</a>
                  </li>
                  <li>
                    <a href="#">Camping</a>
                  </li>
                  <li>
                    <a href="#">Canyoning</a>
                  </li>
                  <li>
                    <a href="#">Jagd</a>
                  </li>
                  <li>
                    <a href="#">Klettern</a>
                  </li>
                  <li>
                    <a href="#">Reiten</a>
                  </li>
                  <li>
                    <a href="#">Wandern</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Fitness {"&"} Training</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Boxen</a>
                  </li>
                  <li>
                    <a href="#">Fitness</a>
                  </li>
                  <li>
                    <a href="#">Kampfsport </a>
                  </li>
                  <li>
                    <a href="#">Pilates</a>
                  </li>
                  <li>
                    <a href="#">Tanzen {"&"} Gymnastik</a>
                  </li>
                  <li>
                    <a href="#">Yoga</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Freizeit {"&"} Spielen</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Bogenschiessen</a>
                  </li>
                  <li>
                    <a href="#">Darts</a>
                  </li>
                  <li>
                    <a href="#">Golf</a>
                  </li>
                  <li>
                    <a href="#">Inline Skating</a>
                  </li>
                  <li>
                    <a href="#">Scooter</a>
                  </li>
                  <li>
                    <a href="#">Skateboarding</a>
                  </li>
                  <li>
                    <a href="#">Weitere Spiele</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Radsport</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Fahrräder</a>
                  </li>
                  <li>
                    <a href="#">Fahhradbekleidung</a>
                  </li>
                  <li>
                    <a href="#">Fahrradteilen</a>
                  </li>
                  <li>
                    <a href="#">Fahrradtransport</a>
                  </li>
                  <li>
                    <a href="#">Fahrradzubehör</a>
                  </li>
                  <li>
                    <a href="#">Rollentrainer</a>
                  </li>
                </ul>
              </li>
            </div>
            {/* end .row */}
            <div className="row">
              <li>
                <a href="javascript:void(0)">Running</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Laufen</a>
                  </li>
                  <li>
                    <a href="#">Leichtathletik</a>
                  </li>
                  <li>
                    <a href="#">Nordic Walking </a>
                  </li>
                  <li>
                    <a href="#">Trailrunning</a>
                  </li>
                  <li>
                    <a href="#">Triathlon</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="javascript:void(0)">Schläger-{"&"} Teamsport</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Badminton</a>
                  </li>
                  <li>
                    <a href="#">Basketball</a>
                  </li>
                  <li>
                    <a href="#">Fussball</a>
                  </li>
                  <li>
                    <a href="#">Tennis</a>
                  </li>
                  <li>
                    <a href="#">Tischtennis</a>
                  </li>
                  <li>
                    <a href="#">Volleyball </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Wassersport</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Schnorcheln</a>
                  </li>
                  <li>
                    <a href="#">Schwimmen</a>
                  </li>
                  <li>
                    <a href="#">Segeln</a>
                  </li>
                  <li>
                    <a href="#">Surfen</a>
                  </li>
                  <li>
                    <a href="#">SUP {"&"} Kajak</a>
                  </li>
                  <li>
                    <a href="#">Tauchen </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Wintersport</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Eishockey</a>
                  </li>
                  <li>
                    <a href="#">Langlaufski</a>
                  </li>
                  <li>
                    <a href="#">Schlitten</a>
                  </li>
                  <li>
                    <a href="#">Schlittschuhen</a>
                  </li>
                  <li>
                    <a href="#">Ski</a>
                  </li>
                  <li>
                    <a href="#">Snowboard</a>
                  </li>
                  <li>
                    <a href="#">Tourenski</a>
                  </li>
                </ul>
              </li>
            </div>
            {/* end .row */}
          </ul>
        </li>

        <li
          onMouseOut={handleCloseDamenHerren}
          onMouseOver={handleOpenDamenHerren}
        >
          <a href="#" id="nav4Desktop__submenu--damen-herren-title">
            Damen / Herren / Kinder{" "}
          </a>

          <ul
            className="nav4Desktop__submenu"
            id="nav4Desktop__submenu--damen-herren"
          >
            <div className="row">
              <li>
                <a href="javascript:void(0)">Schuhe</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Wanderschuhe</a>
                  </li>
                  <li>
                    <a href="#">Freizeitschuhe</a>
                  </li>
                  <li>
                    <a href="#">Hallenschuhe</a>
                  </li>
                  <li>
                    <a href="#">Sandalen / Badeschlapfen</a>
                  </li>
                  <li>
                    <a href="#">Laufschuhe</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Oberbekleidung</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Jacken</a>
                  </li>
                  <li>
                    <a href="#">Fleece, Pullover</a>
                  </li>
                  <li>
                    <a href="#">Shirts</a>
                  </li>
                  <li>
                    <a href="#">Sport-BHs, Bustiers</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Hosen</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Lange Hosen</a>
                  </li>
                  <li>
                    <a href="#">Tights </a>
                  </li>
                  <li>
                    <a href="#">Shorts</a>
                  </li>
                  <li>
                    <a href="#">Röcke</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Badebekleidung </a>
              </li>
              <li>
                <a href="javascript:void(0)">Funktionsbekleidung </a>
              </li>
            </div>
            {/* end .row */}
          </ul>
        </li>

        <li onMouseLeave={handleCloseSportzubehor}>
          <a
            id="nav4Desktop__submenu--sportzubehor-title"
            href="#"
            onMouseOver={handleOpenSportzubehor}
          >
            Sporzubehör {"&"} Ernahrung{" "}
          </a>

          <ul
            className="nav4Desktop__submenu"
            id="nav4Desktop__submenu--sportzubehor"
          >
            <div className="row">
              <li>
                <a href="javascript:void(0)">Sport Und Reisetaschen</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Rucksäcke </a>
                  </li>
                  <li>
                    <a href="#">Taschen </a>
                  </li>
                  <li>
                    <a href="#">Gepäckzubehör</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Sportnahrung, Proteine,<br></br> Supplemente
                </a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">
                      Vitamine,<br></br> Nahrungsergänzung{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#">Riegel, Energie Gels </a>
                  </li>
                  <li>
                    <a href="#">Sportgetränke</a>
                  </li>
                  <li>
                    <a href="#">Sonstiges</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Gesundheit, Pflege</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Regeneration </a>
                  </li>
                  <li>
                    <a href="#">Pflege </a>
                  </li>
                  <li>
                    <a href="#">Bandagen</a>
                  </li>
                  <li>
                    <a href="#">Erste Hilfe</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="javascript:void(0)">Sport-, Sonnenbrillen</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Sportbrillen </a>
                  </li>
                  <li>
                    <a href="#">Sonnenbrillen Freizeit </a>
                  </li>
                  <li>
                    <a href="#">Brillenzubehör</a>
                  </li>
                </ul>
              </li>
            </div>
            {/* end .row */}
            <div className="row">
              <li>
                <a href="javascript:void(0)">Elektronik</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Sportuhren </a>
                  </li>
                  <li>
                    <a href="#">Messgeräte, Wearables </a>
                  </li>
                  <li>
                    <a href="#">Navigation, Outdoor</a>
                  </li>
                  <li>
                    <a href="#">Lampen, Ferngläser</a>
                  </li>
                  <li>
                    <a href="#">Elektronikzubehör</a>
                  </li>
                  <li>
                    <a href="#">Multimedia</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Pokale, Medaillen</a>
                <ul className="nav4Desktop__subsubmenu">
                  <li>
                    <a href="#">Medaillen </a>
                  </li>
                  <li>
                    <a href="#">Pokale </a>
                  </li>
                  <li>
                    <a href="#">Medaillenbänder</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Spiele</a>
              </li>
            </div>
            {/* end .row */}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Nav4Desktop;
