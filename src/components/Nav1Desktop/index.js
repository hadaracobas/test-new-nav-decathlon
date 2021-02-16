import React from "react";
import "./index.css";

function Nav1Desktop(props) {
  const handleOpenSportarten = () => {
    document.getElementById("nav1Desktop__submenu--sportarten").style.display =
      "block";
  };
  const handleCloseSportarten = () => {
    document.getElementById("nav1Desktop__submenu--sportarten").style.display =
      "none";
  };

  const handleOpenDamenHerren = () => {
    document.getElementById(
      "nav1Desktop__submenu--damen-herren"
    ).style.display = "block";
  };
  const handleCloseDamenHerren = () => {
    document.getElementById(
      "nav1Desktop__submenu--damen-herren"
    ).style.display = "none";
  };

  const handleOpenSportzubehor = () => {
    document.getElementById(
      "nav1Desktop__submenu--sportzubehor"
    ).style.display = "block";
  };
  const handleCloseSportzubehor = () => {
    document.getElementById(
      "nav1Desktop__submenu--sportzubehor"
    ).style.display = "none";
  };

  return (
    <div className="nav1Desktop">
      <ul className="nav1Desktop__menu">
        <li onMouseLeave={handleCloseSportarten}>
          <a
            href="#"
            id="nav1Desktop__submenu--sportarten-title"
            onMouseOver={handleOpenSportarten}
          >
            Sportarten{" "}
          </a>

          <ul
            class="nav1Desktop__submenu"
            id="nav1Desktop__submenu--sportarten"
          >
            <div className="row">
              <li>
                <a href="javascript:void(0)">Wintersport</a>
                <ul className="nav1Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Ski
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Tourenski
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Langlaufski
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Snowboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Schlittschuhen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Schlitten
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Eishockey
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Bergsport {"&"} Outdoor</a>
                <ul className="nav1Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Wandern
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Klettern
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Camping
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Canyoning
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Jagd
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Reiten
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Angeln
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Fitness {"&"} Training</a>
                <ul className="nav1Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Fitness
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Yoga
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Pilates
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Boxen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Kampfsport
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Tanzen {"&"} Gymnastik
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Radsport</a>
                <ul className="nav1Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Fahrräder
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Fahhradbekleidung
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Fahrradzubehör
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Fahrradteilen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Fahrradtransport
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Rollentrainer
                    </a>
                  </li>
                </ul>
              </li>
            </div>
            {/* end .row */}
            <div className="row">
              <li>
                <a href="javascript:void(0)">Running</a>
                <ul className="nav1Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Laufschuhe
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Laufbekleidung
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Laufzubehör
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Trailrunning
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Triathlon
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Nordic Walking{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Leichtathletik{" "}
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="javascript:void(0)">Schlager {"&"} Teamsport</a>
                <ul className="nav1Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Fussball
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Tennis
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Basketball
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Tischtennis
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Volleyball
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Badminton{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Squash{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Mehr Sportarten{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Wassersport</a>
                <ul className="nav1Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Schwimmen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Strandbekleidung {"&"} <br></br>Strandzubehör
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      SUP {"&"} Kajak
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Schnorcheln
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Tauchen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Surfen{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Segeln{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">Freizeit {"&"} Spielen</a>
                <ul className="nav1Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Golf
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Scooter
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Inline Skating
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Darts
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Skateboarding
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Bogenschiessen{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      onClick={props.onClickgetCategoryName}
                    >
                      Übrige Spielen{" "}
                    </a>
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
          <a href="#" id="nav1Desktop__submenu--damen-herren-title">
            Damen / Herren / Kinder{" "}
          </a>

          <ul
            className="nav1Desktop__submenu"
            id="nav1Desktop__submenu--damen-herren"
          >
            <div className="row">
              <li>
                <a href="javascript:void(0)">Schuhe</a>
                <ul className="nav1Desktop__subsubmenu">
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
                <ul className="nav1Desktop__subsubmenu">
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
                <ul className="nav1Desktop__subsubmenu">
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
            id="nav1Desktop__submenu--sportzubehor-title"
            href="#"
            onMouseOver={handleOpenSportzubehor}
          >
            Sportzubehör {"&"} Ernährung
          </a>

          <ul
            className="nav1Desktop__submenu"
            id="nav1Desktop__submenu--sportzubehor"
          >
            <div className="row">
              <li>
                <a href="javascript:void(0)">Sport Und Reisetaschen</a>
                <ul className="nav1Desktop__subsubmenu">
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
                <ul className="nav1Desktop__subsubmenu">
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
                <ul className="nav1Desktop__subsubmenu">
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
                <ul className="nav1Desktop__subsubmenu">
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
                <ul className="nav1Desktop__subsubmenu">
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
                <ul className="nav1Desktop__subsubmenu">
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

export default Nav1Desktop;
