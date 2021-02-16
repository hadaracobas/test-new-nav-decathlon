import React from "react";
import "./index.css";
import ImgV1 from "../../img/nav-v1-screenshot.png";
import ImgV2 from "../../img/nav-v2-screenshot.png";
import ImgV3 from "../../img/nav-v3-screenshot.png";
import ImgV4 from "../../img/nav-v4-screenshot.png";
function UserNavPrefer() {
  return (
    <div className="userNavPrefer taskComponentContainer">
      <h2 className="title">Which of the 4 menu’s do you prefer?</h2>
      <div className="userNavPrefer__versionsWrapper">
        <div className="userNavPrefer__version">
          <p className="userNavPrefer__versionTitle">Version 1</p>
          <img className="userNavPrefer__versionImg" src={ImgV1} />
        </div>

        <div className="userNavPrefer__version">
          <p className="userNavPrefer__versionTitle">Version 2</p>
          <img className="userNavPrefer__versionImg" src={ImgV2} />
        </div>

        <div className="userNavPrefer__version">
          <p className="userNavPrefer__versionTitle">Version 3</p>
          <img className="userNavPrefer__versionImg" src={ImgV3} />
        </div>

        <div className="userNavPrefer__version">
          <p className="userNavPrefer__versionTitle">Version 4</p>
          <img className="userNavPrefer__versionImg" src={ImgV4} />
        </div>
      </div>
      <a href="#" className="cta">
        continue
      </a>
    </div>
  );
}

export default UserNavPrefer;
