import React from "react";
import "./index.css";
import Nav1Mobile from "../Nav1Mobile";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Header() {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__top--left">
          {/*
             <MenuOutlinedIcon />
            */}
          <Nav1Mobile />
        </div>
        <div className="header__top--logo">
          <img src="https://www.decathlon.ca/themes/decashop_v5/assets/img/logo-decathlon-blue.svg" />
        </div>
        <div className="header__top--right">
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
      {/* end .header__top */}
      <div className="header__bottom">
        <input type="text" placeholder="Search 65 sports and 5000 products" />
      </div>
    </div>
  );
}

export default Header;
