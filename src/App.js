import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeaderDesktop from "./components/HeaderDesktop";
import Popup from "./materialUiComponents/Popup";
import EndPage from "./testTasksComponents/EndPage";
import GetUserEmail from "./testTasksComponents/GetUserEmail";
import RateDifficulty from "./testTasksComponents/RateDifficulty";
import Task from "./testTasksComponents/Task";
import TestInfo from "./testTasksComponents/TestInfo";
import UserNavPrefer from "./testTasksComponents/UserNavPrefer";
import UserSelected from "./testTasksComponents/UserSelected";
import RandomVTest from "./theTests/RandomVTest";
import TestV1 from "./theTests/TestV1";
import TestV2 from "./theTests/TestV2";
import TestV3 from "./theTests/TestV3";
import TestV4 from "./theTests/TestV4";
import LoadingProg from "./materialUiComponents/LoadingProg";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LaptopMacOutlinedIcon from "@material-ui/icons/LaptopMacOutlined";
import ScreenRotationOutlinedIcon from "@material-ui/icons/ScreenRotationOutlined";
import TabletMacOutlinedIcon from "@material-ui/icons/TabletMacOutlined";
import DisplayData from "./testTasksComponents/DisplayData";

function App() {
  const [navName, setNavName] = useState(1);
  const getCurrentNavName = (navName) => {
    console.log("app nav name: ", navName);
    setNavName(navName);
  };
  console.log("navNAme: ", navName);
  return (
    <div className="app">
      {/*
            <HeaderDesktop sendNavNameUpToApp={getCurrentNavName} />
      <div className="app__main">-</div>
      <small className="app__currentV">current nav: v{navName}</small>
      */}

      {/*
       <TestInfo />
         <Task taskTitle="Please look for running shoes" />
        
         <UserSelected title="You have selected Laufschuhe1" />
         <UserSelected title="Laufschuhe" />
         <RateDifficulty />
         <UserNavPrefer />
          <GetUserEmail />
            <EndPage />
            <TestV4 />
            <Popup />
             <RandomVTest />
      */}
      <div className="app__messageSmallScreen">
        <p>
          Bitte fülle diese Umfrage auf einem Laptop oder einem Gerät mit einem
          größeren Bildschirm aus.
        </p>
        <div className="app__messageSmallScreen--icons">
          <ScreenRotationOutlinedIcon fontSize="large" />
          <TabletMacOutlinedIcon fontSize="large" />
          <LaptopMacOutlinedIcon fontSize="large" />
        </div>
      </div>
      <div className="app__displyTests">
        <Router>
          <Switch>
            <Route path="/" exact>
              <RandomVTest />
            </Route>
            <Route path="/test1">
              <TestV1 />
            </Route>
            <Route path="/test2">
              <TestV2 />
            </Route>
            <Route path="/test3">
              <TestV3 />
            </Route>
            <Route path="/test4">
              <TestV4 />
            </Route>
            <Route path="/display-data">
              <DisplayData />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
