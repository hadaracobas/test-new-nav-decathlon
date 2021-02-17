import React from "react";
import "./index.css";
import ImgV1 from "../../img/nav-v1-screenshot.png";
import ImgV2 from "../../img/nav-v2-screenshot.png";
import ImgV3 from "../../img/nav-v3-screenshot.png";
import ImgV4 from "../../img/nav-v4-screenshot.png";

function UserNavPrefer(props) {
  return (
    <div className="userNavPrefer taskComponentContainer">
      <h2 className="title">
        Welches Menü würdest du gerne angezeigt bekommen?
      </h2>
      <div className="userNavPrefer__versionsWrapper">
        <div className="userNavPrefer__version">
          <img className="userNavPrefer__versionImg" src={ImgV1} />
          <p
            className="userNavPrefer__versionTitle"
            onClick={props.navVersionOnClick}
            style={props.userNavPrefer === 1 ? { color: "#FFEA28" } : {}}
          >
            Version 1
          </p>
        </div>

        <div className="userNavPrefer__version">
          <img className="userNavPrefer__versionImg" src={ImgV2} />
          <p
            className="userNavPrefer__versionTitle"
            onClick={props.navVersionOnClick}
            style={props.userNavPrefer === 2 ? { color: "#FFEA28" } : {}}
          >
            Version 2
          </p>
        </div>

        <div className="userNavPrefer__version">
          <img className="userNavPrefer__versionImg" src={ImgV3} />
          <p
            className="userNavPrefer__versionTitle"
            onClick={props.navVersionOnClick}
            style={props.userNavPrefer === 3 ? { color: "#FFEA28" } : {}}
          >
            Version 3
          </p>
        </div>

        <div className="userNavPrefer__version">
          <img className="userNavPrefer__versionImg" src={ImgV4} />
          <p
            className="userNavPrefer__versionTitle"
            onClick={props.navVersionOnClick}
            style={props.userNavPrefer === 4 ? { color: "#FFEA28" } : {}}
          >
            Version 4
          </p>
        </div>
      </div>
      <a
        href="javascript:void(0);"
        className="cta"
        onClick={props.continueOnClick}
      >
        Weiter
      </a>
    </div>
  );
}

export default UserNavPrefer;
