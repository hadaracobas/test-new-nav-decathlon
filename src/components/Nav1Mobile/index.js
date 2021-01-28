import React, { useState } from "react";
import "./index.css";

import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";

function Nav1Mobile() {
  return (
    <div className="nav1Mobile">
      <div id="nav1Mobile__mySidenav" class="nav1Mobile__sidenav">
        <ul className="nav1Mobile__menu">
          <a href="javascript:void(0)" class="nav1Mobile__closebtn">
            &times;
          </a>
          <li>
            <a href="#">
              Sportarten{" "}
              <span>
                <ChevronRightOutlinedIcon fontSize="small" />
              </span>
            </a>

            <ul class="nav1Mobile__submenu">
              <li>
                <a href="javascript:void(0)">
                  Wintersport
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
                  <li>
                    <a href="#">Ski</a>
                  </li>
                  <li>
                    <a href="#">Tourenski</a>
                  </li>
                  <li>
                    <a href="#">Langlaufski</a>
                  </li>
                  <li>
                    <a href="#">Snowboard</a>
                  </li>
                  <li>
                    <a href="#">Schlittschuhen</a>
                  </li>
                  <li>
                    <a href="#">Schlitten</a>
                  </li>
                  <li>
                    <a href="#">Eishockey</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Bergsport {"&"} Outdoor
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
                  <li>
                    <a href="#">Wandern</a>
                  </li>
                  <li>
                    <a href="#">Klettern</a>
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
                    <a href="#">Reiten</a>
                  </li>
                  <li>
                    <a href="#">Angeln</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Fitness {"&"} Training
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
                  <li>
                    <a href="#">Fitness</a>
                  </li>
                  <li>
                    <a href="#">Yoga</a>
                  </li>
                  <li>
                    <a href="#">Pilates</a>
                  </li>
                  <li>
                    <a href="#">Boxen</a>
                  </li>
                  <li>
                    <a href="#">Kampfsport</a>
                  </li>
                  <li>
                    <a href="#">Tanzen {"&"} Gymnastik</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Radsport
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
                  <li>
                    <a href="#">Fahrräder</a>
                  </li>
                  <li>
                    <a href="#">Fahhradbekleidung</a>
                  </li>
                  <li>
                    <a href="#">Fahrradzubehör</a>
                  </li>
                  <li>
                    <a href="#">Fahrradteilen</a>
                  </li>
                  <li>
                    <a href="#">Fahrradtransport</a>
                  </li>
                  <li>
                    <a href="#">Rollentrainer</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Running
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
                  <li>
                    <a href="#">Laufschuhe</a>
                  </li>
                  <li>
                    <a href="#">Laufbekleidung</a>
                  </li>
                  <li>
                    <a href="#">Laufzubehör</a>
                  </li>
                  <li>
                    <a href="#">Trailrunning</a>
                  </li>
                  <li>
                    <a href="#">Triathlon</a>
                  </li>
                  <li>
                    <a href="#">Nordic Walking </a>
                  </li>
                  <li>
                    <a href="#">Leichtathletik </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Schlager {"&"} Teamsport
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
                  <li>
                    <a href="#">Fussball</a>
                  </li>
                  <li>
                    <a href="#">Tennis</a>
                  </li>
                  <li>
                    <a href="#">Basketball</a>
                  </li>
                  <li>
                    <a href="#">Tischtennis</a>
                  </li>
                  <li>
                    <a href="#">Volleyball</a>
                  </li>
                  <li>
                    <a href="#">Badminton </a>
                  </li>
                  <li>
                    <a href="#">Squash </a>
                  </li>
                  <li>
                    <a href="#">Mehr Sportarten </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Wassersport
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
                  <li>
                    <a href="#">Schwimmen</a>
                  </li>
                  <li>
                    <a href="#">Strandbekleidung {"&"} Strandzubehör</a>
                  </li>
                  <li>
                    <a href="#">SUP {"&"} Kajak</a>
                  </li>
                  <li>
                    <a href="#">Schnorcheln</a>
                  </li>
                  <li>
                    <a href="#">Tauchen</a>
                  </li>
                  <li>
                    <a href="#">Surfen </a>
                  </li>
                  <li>
                    <a href="#">Segeln </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0)">
                  Freizeit {"&"} Spielen
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
                  <li>
                    <a href="#">Golf</a>
                  </li>
                  <li>
                    <a href="#">Scooter</a>
                  </li>
                  <li>
                    <a href="#">Inline Skating</a>
                  </li>
                  <li>
                    <a href="#">Darts</a>
                  </li>
                  <li>
                    <a href="#">Skateboarding</a>
                  </li>
                  <li>
                    <a href="#">Bogenschiessen </a>
                  </li>
                  <li>
                    <a href="#">Übrige Spielen </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              Damen / Herren / Kinder{" "}
              <span>
                <ChevronRightOutlinedIcon fontSize="small" />
              </span>
            </a>

            <ul className="nav1Mobile__submenu">
              <li>
                <a href="javascript:void(0)">
                  Schuhe
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
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
                <a href="javascript:void(0)">
                  Oberbekleidung
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
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
                <a href="javascript:void(0)">
                  Hosen
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
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
            </ul>
          </li>

          <li>
            <a href="#">
              Sporzubehör {"&"} Ernahrung{" "}
              <span>
                <ChevronRightOutlinedIcon fontSize="small" />
              </span>
            </a>

            <ul className="nav1Mobile__submenu">
              <li>
                <a href="javascript:void(0)">
                  Sport Und Reisetaschen
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
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
                  Sportnahrung, Proteine, Supplemente
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
                  <li>
                    <a href="#">Vitamine, Nahrungsergänzung </a>
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
                <a href="javascript:void(0)">
                  Gesundheit, Pflege
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
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
                <a href="javascript:void(0)">
                  Sport-, Sonnenbrillen
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
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
              <li>
                <a href="javascript:void(0)">
                  Elektronik
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
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
                <a href="javascript:void(0)">
                  Pokale, Medaillen
                  <span>
                    <ChevronRightOutlinedIcon fontSize="small" />
                  </span>
                </a>
                <ul className="nav1Mobile__subsubmenu">
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
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav1Mobile;
