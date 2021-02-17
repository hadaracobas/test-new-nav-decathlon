import React, { useState, useEffect } from "react";
import "./index.css";
import Nav1Desktop from "../Nav1Desktop";
import Nav2Desktop from "../Nav2Desktop";
import Nav3Desktop from "../Nav3Desktop";
import Nav4Desktop from "../Nav4Desktop";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ChangeNavDropdown from "../ChangeNavDropdown";
import { SignalCellularNoSimOutlined } from "@material-ui/icons";

function HeaderDesktop(props) {
  const [relNav, setRelNav] = useState(1);
  const [gettingRelNavNum, setGettingRelNavNum] = useState(1);

  const getRelNavDisplayNum = (relNavNum) => {
    setGettingRelNavNum(relNavNum);
    props.sendNavNameUpToApp(relNavNum);
  };

  useEffect(() => {
    setRelNav(gettingRelNavNum);
  }, [gettingRelNavNum]);

  return (
    <div className="header-desktop">
      <div className="header-desktop__top">
        <div className="header-desktop__left">
          <div className="header-desktop__logo">
            {/*
            <img src="https://www.decathlon.ca/themes/decashop_v5/assets/img/logo-decathlon-blue.svg" />
            */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="504 126 176 44"
              role="img"
              aria-labelledby="dkt-logo dkt-logo-desc"
            >
              <path fill="#0082C3" d="M504 126h176v44H504z"></path>
              <path
                fill="#FFF"
                d="M534.98 145.82a10.47 10.47 0 0 0-3.3-6.44c-2.48-2.23-5.12-2.7-8.9-2.7h-8.13v22.6h8.93c3.35 0 5.59-.44 8.13-2.8a10.66 10.66 0 0 0 3.28-6.25v9.04h12.94v-4.96h-7.12v-4.1h6.16v-4.87h-6.16v-3.69h7.12v-4.98h-12.94v9.14zm-12.17 8.5h-2.34v-12.78h2.31c4.28 0 6.59 2.3 6.59 6.37 0 4.45-2.1 6.41-6.56 6.41zm43.47-3.75c-.85 1.35-2.71 3.49-5.52 3.45-4.58-.07-6.3-3.23-6.3-6.07a6.06 6.06 0 0 1 5.94-6.07c3.8-.08 6.63 3.57 6.63 3.57l2.97-4.8s-3.36-4.57-9.55-4.43c-9.3.21-12.02 8-12.02 11.62 0 7.62 5.86 11.42 10.65 11.88 6.89.67 10.66-3.84 10.66-3.84l.2-.01a405.38 405.38 0 0 1 5.05.01v3.4h5.6v-22.6h-6.09s-7.49 12.74-8.22 13.88zm8.82.59h-3l3-5.12v5.12zm6.7-9.09h4.53v17.22h5.81v-17.22h4.52v-5.4H581.8m27.86 8.59h-5.98v-8.59h-5.82v22.62h5.82v-8.65h5.98v8.65h5.82v-22.62h-5.82m53.88 0v12.57l-8.74-12.57h-5.26v7.7a11.65 11.65 0 0 0-3-4.81 11.66 11.66 0 0 0-8.2-3.36 11.6 11.6 0 0 0-8.36 3.33 11.33 11.33 0 0 0-3.48 8.22c0 2.48.6 4.66 1.78 6.54h-5.23v-17.61h-5.79v22.61h12.57v-3.02a11.4 11.4 0 0 0 8.47 3.5c3.2 0 6.23-1.24 8.46-3.54a11.4 11.4 0 0 0 2.79-4.7v7.76h5.82v-12.6l8.88 12.6h5.12v-22.61h-5.82zm-25.24 17.47a6.24 6.24 0 0 1-6.03-6.32 6 6 0 0 1 12 0c0 3.7-2.67 6.32-5.97 6.32z"
              ></path>
            </svg>
          </div>
          <div className="header-desktop__search">
            <input
              type="text"
              placeholder="Search 65 sports and 5000 products"
            />
          </div>
        </div>
        <div className="header-desktop__right">
          <ShoppingCartOutlinedIcon style={{ marginRight: "20px" }} />
          <div>
            <ChangeNavDropdown sendStateRelNavUp={getRelNavDisplayNum} />
          </div>
        </div>
      </div>

      {props.relNav === 1 ? (
        <Nav1Desktop
          onClickgetCategoryNameSportarten={
            props.onClickgetCategoryNameSportarten
          }
          onClickgetCategoryNameDamen={props.onClickgetCategoryNameDamen}
          onClickgetCategoryNameHerren={props.onClickgetCategoryNameHerren}
          onClickgetCategoryNameKinder={props.onClickgetCategoryNameKinder}
          onClickgetCategoryNameSportzubehor={
            props.onClickgetCategoryNameSportzubehor
          }
        />
      ) : props.relNav === 2 ? (
        <Nav2Desktop
          onClickgetCategoryNameSportarten={
            props.onClickgetCategoryNameSportarten
          }
          onClickgetCategoryNameDamen={props.onClickgetCategoryNameDamen}
          onClickgetCategoryNameHerren={props.onClickgetCategoryNameHerren}
          onClickgetCategoryNameKinder={props.onClickgetCategoryNameKinder}
          onClickgetCategoryNameSportzubehor={
            props.onClickgetCategoryNameSportzubehor
          }
        />
      ) : props.relNav === 3 ? (
        <Nav3Desktop
          onClickgetCategoryNameSportarten={
            props.onClickgetCategoryNameSportarten
          }
          onClickgetCategoryNameDamen={props.onClickgetCategoryNameDamen}
          onClickgetCategoryNameHerren={props.onClickgetCategoryNameHerren}
          onClickgetCategoryNameKinder={props.onClickgetCategoryNameKinder}
          onClickgetCategoryNameSportzubehor={
            props.onClickgetCategoryNameSportzubehor
          }
        />
      ) : props.relNav === 4 ? (
        <Nav4Desktop
          onClickgetCategoryNameSportarten={
            props.onClickgetCategoryNameSportarten
          }
          onClickgetCategoryNameDamen={props.onClickgetCategoryNameDamen}
          onClickgetCategoryNameHerren={props.onClickgetCategoryNameHerren}
          onClickgetCategoryNameKinder={props.onClickgetCategoryNameKinder}
          onClickgetCategoryNameSportzubehor={
            props.onClickgetCategoryNameSportzubehor
          }
        />
      ) : null}
    </div>
  );
}

export default HeaderDesktop;
