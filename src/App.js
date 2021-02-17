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
import TestV1 from "./theTests/TestV1";
import TestV2 from "./theTests/TestV2";
import TestV3 from "./theTests/TestV3";
import TestV4 from "./theTests/TestV4";

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
      */}

      <TestV4 />
    </div>
  );
}

export default App;
