import React from "react";
import "./index.css";
import Nav1Desktop from "../Nav1Desktop";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function HeaderDesktop() {
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
          <ShoppingCartOutlinedIcon />
        </div>
      </div>

      <Nav1Desktop />
    </div>
  );
}

export default HeaderDesktop;
