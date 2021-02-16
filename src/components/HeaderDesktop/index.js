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
            <img src="https://www.decathlon.ca/themes/decashop_v5/assets/img/logo-decathlon-blue.svg" />
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
        <Nav1Desktop onClickgetCategoryName={props.onClickgetCategoryName} />
      ) : props.relNav === 2 ? (
        <Nav2Desktop />
      ) : props.relNav === 3 ? (
        <Nav3Desktop />
      ) : props.relNav === 4 ? (
        <Nav4Desktop />
      ) : null}
    </div>
  );
}

export default HeaderDesktop;
