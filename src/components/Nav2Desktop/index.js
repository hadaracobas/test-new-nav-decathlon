import React from "react";
import "./index.css";

function Nav2Desktop(props) {
  const handleOpenSportarten = () => {
    document.getElementById("nav2Desktop__submenu--sportarten").style.display =
      "block";
  };
  const handleCloseSportarten = () => {
    document.getElementById("nav2Desktop__submenu--sportarten").style.display =
      "none";
  };

  const handleOpenDamenHerren = () => {
    document.getElementById(
      "nav2Desktop__submenu--damen-herren"
    ).style.display = "block";
  };
  const handleCloseDamenHerren = () => {
    document.getElementById(
      "nav2Desktop__submenu--damen-herren"
    ).style.display = "none";
  };

  /* ------------- */
  const handleOpenDamen = () => {
    document.getElementById("nav2Desktop__submenu--damen").style.display =
      "block";
  };
  const handleCloseDamen = () => {
    document.getElementById("nav2Desktop__submenu--damen").style.display =
      "none";
  };

  //--
  const handleOpenHerren = () => {
    document.getElementById("nav2Desktop__submenu--herren").style.display =
      "block";
  };
  const handleCloseHerren = () => {
    document.getElementById("nav2Desktop__submenu--herren").style.display =
      "none";
  };
  //--
  const handleOpenKinder = () => {
    document.getElementById("nav2Desktop__submenu--kinder").style.display =
      "block";
  };
  const handleCloseKinder = () => {
    document.getElementById("nav2Desktop__submenu--kinder").style.display =
      "none";
  };

  /* ------------- */

  const handleOpenSportzubehor = () => {
    document.getElementById(
      "nav2Desktop__submenu--sportzubehor"
    ).style.display = "block";
  };
  const handleCloseSportzubehor = () => {
    document.getElementById(
      "nav2Desktop__submenu--sportzubehor"
    ).style.display = "none";
  };
  return (
    <div className="nav2Desktop">
      <ul className="nav2Desktop__menu">
        <li onMouseLeave={handleCloseSportarten}>
          <a
            href="#"
            id="nav2Desktop__submenu--sportarten-title"
            onMouseOver={handleOpenSportarten}
          >
            Sportarten{" "}
          </a>

          <ul
            class="nav2Desktop__submenu"
            id="nav2Desktop__submenu--sportarten"
          >
            <div className="row">
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameSportarten}
                >
                  Wintersport
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Eislaufen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Langlaufen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Schlitten
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Skisport
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Skitouring
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Snowboarden
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameSportarten}
                >
                  Outdoor
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Angeln
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Camping
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Jagd{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Klettern
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Reiten
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Wandern
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameSportarten}
                >
                  Fitness {"&"}
                  <br></br>Training
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Fitness
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Gymnastik
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Kampfsport
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Laufen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Pilates
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Tanzen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Yoga
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameSportarten}
                >
                  Radsport
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Bekleidung
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Fahrräder
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Rollentrainer
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Transport
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Zubehör
                    </a>
                  </li>
                </ul>
              </li>
            </div>
            {/* end .row */}
            <div className="row">
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameSportarten}
                >
                  Team {"&"}
                  <br></br>Schlägersport
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Badminton
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Basketball
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Fussball{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Golf
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Squash
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Tennis{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Tischtennis{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Volleyball{" "}
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameSportarten}
                >
                  Wassersport
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      SUP {"&"} Kajak
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Schwimmen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Schorcheln
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Tauchen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Surfen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Segeln{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameSportarten}
                >
                  Freizeit {"&"}
                  <br></br>Spiele
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Tischtennis
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Scooter
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Inline Skating
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Darts
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Skateboarding
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Bogenschiessen{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameSportarten}
                >
                  Sportarten<br></br> Überblick
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportarten}
                    >
                      Über 70 Sportarten
                    </a>
                  </li>
                </ul>
              </li>
            </div>
            {/* end .row */}
          </ul>
        </li>

        <li onMouseOut={handleCloseDamen} onMouseOver={handleOpenDamen}>
          <a href="#" id="nav2Desktop__submenu--damen-herren-title">
            Damen
          </a>

          <ul className="nav2Desktop__submenu" id="nav2Desktop__submenu--damen">
            <div className="row">
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameDamen}
                >
                  Schuhe
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameDamen}
                    >
                      Wanderschuhe
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameDamen}
                    >
                      Freizeitschuhe
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameDamen}
                    >
                      Hallenschuhe
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameDamen}
                    >
                      Sandalen / Badeschlapfen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameDamen}
                    >
                      Laufschuhe
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameDamen}
                >
                  Oberbekleidung
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameDamen}
                    >
                      Jacken
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameDamen}
                    >
                      Fleece, Pullover
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameDamen}
                    >
                      Shirts
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameDamen}
                    >
                      Sport-BHs, Bustiers
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameDamen}
                >
                  Hosen
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameDamen}
                    >
                      Lange Hosen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameDamen}
                    >
                      Tights{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameDamen}
                    >
                      Shorts
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameDamen}
                    >
                      Röcke
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameDamen}
                >
                  Badebekleidung{" "}
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameDamen}
                >
                  Funktionsbekleidung{" "}
                </a>
              </li>
            </div>
            {/* end .row */}
          </ul>
        </li>

        {/* ------------- */}
        <li onMouseOut={handleCloseHerren} onMouseOver={handleOpenHerren}>
          <a href="#" id="nav2Desktop__submenu--damen-herren-title">
            Herren
          </a>

          <ul
            className="nav2Desktop__submenu"
            id="nav2Desktop__submenu--herren"
          >
            <div className="row">
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameHerren}
                >
                  Schuhe
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameHerren}
                    >
                      Wanderschuhe
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameHerren}
                    >
                      Freizeitschuhe
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameHerren}
                    >
                      Hallenschuhe
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameHerren}
                    >
                      Sandalen / Badeschlapfen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameHerren}
                    >
                      Laufschuhe
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameHerren}
                >
                  Oberbekleidung
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameHerren}
                    >
                      Jacken
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameHerren}
                    >
                      Fleece, Pullover
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameHerren}
                    >
                      Shirts
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameHerren}
                    >
                      Sport-BHs, Bustiers
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameHerren}
                >
                  Hosen
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameHerren}
                    >
                      Lange Hosen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameHerren}
                    >
                      Tights{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameHerren}
                    >
                      Shorts
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameHerren}
                    >
                      Röcke
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameHerren}
                >
                  Badebekleidung{" "}
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameHerren}
                >
                  Funktionsbekleidung{" "}
                </a>
              </li>
            </div>
            {/* end .row */}
          </ul>
        </li>

        <li onMouseOut={handleCloseKinder} onMouseOver={handleOpenKinder}>
          <a href="#" id="nav2Desktop__submenu--damen-herren-title">
            Kinder
          </a>

          <ul
            className="nav2Desktop__submenu"
            id="nav2Desktop__submenu--kinder"
          >
            <div className="row">
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameKinder}
                >
                  Schuhe
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameKinder}
                    >
                      Wanderschuhe
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameKinder}
                    >
                      Freizeitschuhe
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameKinder}
                    >
                      Hallenschuhe
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameKinder}
                    >
                      Sandalen / Badeschlapfen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameKinder}
                    >
                      Laufschuhe
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameKinder}
                >
                  Oberbekleidung
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameKinder}
                    >
                      Jacken
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameKinder}
                    >
                      Fleece, Pullover
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameKinder}
                    >
                      Shirts
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameKinder}
                    >
                      Sport-BHs, Bustiers
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameKinder}
                >
                  Hosen
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameKinder}
                    >
                      Lange Hosen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameKinder}
                    >
                      Tights{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameKinder}
                    >
                      Shorts
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameKinder}
                    >
                      Röcke
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameKinder}
                >
                  Badebekleidung{" "}
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameKinder}
                >
                  Funktionsbekleidung{" "}
                </a>
              </li>
            </div>
            {/* end .row */}
          </ul>
        </li>

        {/* ------------- */}

        <li onMouseLeave={handleCloseSportzubehor}>
          <a
            id="nav2Desktop__submenu--sportzubehor-title"
            href="#"
            onMouseOver={handleOpenSportzubehor}
          >
            Sportzubehör {"&"} Ernährung
          </a>

          <ul
            className="nav2Desktop__submenu"
            id="nav2Desktop__submenu--sportzubehor"
          >
            <div className="row">
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameSportzubehor}
                >
                  Sport Und Reisetaschen
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Rucksäcke{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Taschen{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Gepäckzubehör
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameSportzubehor}
                >
                  Sportnahrung, Proteine,<br></br> Supplemente
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Vitamine,<br></br> Nahrungsergänzung{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Riegel, Energie Gels{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Sportgetränke
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Sonstiges
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameSportzubehor}
                >
                  Gesundheit, Pflege
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Regeneration{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Pflege{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Bandagen
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Erste Hilfe
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameSportzubehor}
                >
                  Sport-, Sonnenbrillen
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Sportbrillen{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Sonnenbrillen Freizeit{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Brillenzubehör
                    </a>
                  </li>
                </ul>
              </li>
            </div>
            {/* end .row */}
            <div className="row">
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameSportzubehor}
                >
                  Elektronik
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Sportuhren{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Messgeräte, Wearables{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Navigation, Outdoor
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Lampen, Ferngläser
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Elektronikzubehör
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Multimedia
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameSportzubehor}
                >
                  Pokale, Medaillen
                </a>
                <ul className="nav2Desktop__subsubmenu">
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Medaillen{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Pokale{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      onClick={props.onClickgetCategoryNameSportzubehor}
                    >
                      Medaillenbänder
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  onClick={props.onClickgetCategoryNameSportzubehor}
                >
                  Spiele
                </a>
              </li>
            </div>
            {/* end .row */}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Nav2Desktop;
