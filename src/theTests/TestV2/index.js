import React, { useState } from "react";
import "./index.css";

import HeaderDesktop from "../../components/HeaderDesktop";
import Task from "../../testTasksComponents/Task";
import TestInfo from "../../testTasksComponents/TestInfo";
import UserSelected from "../../testTasksComponents/UserSelected";
import RateDifficulty from "../../testTasksComponents/RateDifficulty";
import UserNavPrefer from "../../testTasksComponents/UserNavPrefer";
import GetUserEmail from "../../testTasksComponents/GetUserEmail";
import EndPage from "../../testTasksComponents/EndPage";

import axios from "axios";

function TestV2() {
  // GENERAL STATES
  const [stepNumber, setStepNumber] = useState(1);
  const [startCountingTime, setStartCountingTime] = useState(0);
  const [intervalState, setIntervalState] = useState();
  // STATES TASK 1
  const [task1RunningShoes, setTask1RunningShoes] = useState(false);
  const [endCountingTimeTask1, setEndCountingTimeTask1] = useState(0);
  // STATES TASK 2
  const [task2MountainBike, setTask2MountainBike] = useState(false);
  const [endCountingTimeTask2, setEndCountingTimeTask2] = useState(0);
  // STATES TASK 3
  const [task3Weights, setTask3Weights] = useState(false);
  const [endCountingTimeTask3, setEndCountingTimeTask3] = useState(0);
  // STATES TASK 4
  const [task4SleepingBag, setTask4SleepingBag] = useState(false);
  const [endCountingTimeTask4, setEndCountingTimeTask4] = useState(0);
  // RATE DIFFICULTY STATE
  const [rateDiff, setRateDiff] = useState();
  // USER NAV PREFER STATE
  const [userNavPrefer, setUserNavPrefer] = useState();
  // GET USER EMAIL
  const [getUserEmail, setGetUserEmail] = useState();
  const [loadingToggle, setLoadingToggle] = useState(false);
  const [displayPostBtn, setDisplayPostBtn] = useState(true);

  // GENERAL FUNCTION
  const nextStepHandleOnClick = () => {
    setStepNumber((prevState) => prevState + 1);
  };

  const prevStepHandleOnClick = () => {
    setStepNumber((prevState) => prevState - 1);
  };

  const startCountingTimeFunc = () => {
    setStartCountingTime(0);
    let runTimer = setInterval(function () {
      setStartCountingTime((prevState) => prevState + 0.5);
    }, 500);
    setIntervalState(runTimer);
  };

  // TASK 1 FUNCTIONS
  const userStartTask1HandleOnClick = () => {
    startCountingTimeFunc();
    nextStepHandleOnClick();
  };
  const userSelectedTask1HandleOnClick = (e) => {
    setTask1RunningShoes(e.target.textContent);
    endCountingTimeTask1Func();
    nextStepHandleOnClick();
  };

  /* -------------------- */
  const userSelectedTask1HandleOnClickTopCategorySportarten = (e) => {
    setTask1RunningShoes(e.target.textContent + " (Sportarten)");
    endCountingTimeTask1Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask1HandleOnClickTopCategoryDamen = (e) => {
    setTask1RunningShoes(e.target.textContent + " (Damen)");
    endCountingTimeTask1Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask1HandleOnClickTopCategoryHerren = (e) => {
    setTask1RunningShoes(e.target.textContent + " (Herren)");
    endCountingTimeTask1Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask1HandleOnClickTopCategoryKinder = (e) => {
    setTask1RunningShoes(e.target.textContent + " (Kinder)");
    endCountingTimeTask1Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask1HandleOnClickTopCategorySportzubehor = (e) => {
    setTask1RunningShoes(e.target.textContent + " (Sportzubehör)");
    endCountingTimeTask1Func();
    nextStepHandleOnClick();
  };

  //--

  const userSelectedTask2HandleOnClickTopCategorySportarten = (e) => {
    setTask2MountainBike(e.target.textContent + " (Sportarten)");
    endCountingTimeTask2Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask2HandleOnClickTopCategoryDamen = (e) => {
    setTask2MountainBike(e.target.textContent + " (Damen)");
    endCountingTimeTask2Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask2HandleOnClickTopCategoryHerren = (e) => {
    setTask2MountainBike(e.target.textContent + " (Herren)");
    endCountingTimeTask2Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask2HandleOnClickTopCategoryKinder = (e) => {
    setTask2MountainBike(e.target.textContent + " (Kinder)");
    endCountingTimeTask2Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask2HandleOnClickTopCategorySportzubehor = (e) => {
    setTask2MountainBike(e.target.textContent + " (Sportzubehör)");
    endCountingTimeTask2Func();
    nextStepHandleOnClick();
  };

  //--

  const userSelectedTask3HandleOnClickTopCategorySportarten = (e) => {
    setTask3Weights(e.target.textContent + " (Sportarten)");
    endCountingTimeTask3Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask3HandleOnClickTopCategoryDamen = (e) => {
    setTask3Weights(e.target.textContent + " (Damen)");
    endCountingTimeTask3Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask3HandleOnClickTopCategoryHerren = (e) => {
    setTask3Weights(e.target.textContent + " (Herren)");
    endCountingTimeTask3Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask3HandleOnClickTopCategoryKinder = (e) => {
    setTask3Weights(e.target.textContent + " (Kinder)");
    endCountingTimeTask3Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask3HandleOnClickTopCategorySportzubehor = (e) => {
    setTask3Weights(e.target.textContent + " (Sportzubehör)");
    endCountingTimeTask3Func();
    nextStepHandleOnClick();
  };

  //--

  const userSelectedTask4HandleOnClickTopCategorySportarten = (e) => {
    setTask4SleepingBag(e.target.textContent + " (Sportarten)");
    endCountingTimeTask4Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask4HandleOnClickTopCategoryDamen = (e) => {
    setTask4SleepingBag(e.target.textContent + " (Damen)");
    endCountingTimeTask4Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask4HandleOnClickTopCategoryHerren = (e) => {
    setTask4SleepingBag(e.target.textContent + " (Herren)");
    endCountingTimeTask4Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask4HandleOnClickTopCategoryKinder = (e) => {
    setTask4SleepingBag(e.target.textContent + " (Kinder)");
    endCountingTimeTask4Func();
    nextStepHandleOnClick();
  };

  const userSelectedTask4HandleOnClickTopCategorySportzubehor = (e) => {
    setTask4SleepingBag(e.target.textContent + " (Sportzubehör)");
    endCountingTimeTask4Func();
    nextStepHandleOnClick();
  };
  /* -------------------- */

  const endCountingTimeTask1Func = () => {
    setEndCountingTimeTask1(startCountingTime + "s");
    clearInterval(intervalState);
  };

  const TryAgainTask1HandleOnClick = () => {
    setTask1RunningShoes(false);
    prevStepHandleOnClick();
    startCountingTimeFunc();
  };

  // TASK 2 FUNCTIONS
  const userStartTask2HandleOnClick = () => {
    startCountingTimeFunc();
    nextStepHandleOnClick();
  };

  const userSelectedTask2HandleOnClick = (e) => {
    setTask2MountainBike(e.target.textContent);
    endCountingTimeTask2Func();
    nextStepHandleOnClick();
  };

  const endCountingTimeTask2Func = () => {
    setEndCountingTimeTask2(startCountingTime + "s");
    clearInterval(intervalState);
  };

  const TryAgainTask2HandleOnClick = () => {
    setTask2MountainBike(false);
    prevStepHandleOnClick();
    startCountingTimeFunc();
  };

  // TASK 3 FUNCTIONS
  const userStartTask3HandleOnClick = () => {
    startCountingTimeFunc();
    nextStepHandleOnClick();
  };

  const userSelectedTask3HandleOnClick = (e) => {
    setTask3Weights(e.target.textContent);
    endCountingTimeTask3Func();
    nextStepHandleOnClick();
  };

  const endCountingTimeTask3Func = () => {
    setEndCountingTimeTask3(startCountingTime + "s");
    clearInterval(intervalState);
  };

  const TryAgainTask3HandleOnClick = () => {
    setTask3Weights(false);
    prevStepHandleOnClick();
    startCountingTimeFunc();
  };

  // TASK 4 FUNCTIONS
  const userStartTask4HandleOnClick = () => {
    startCountingTimeFunc();
    nextStepHandleOnClick();
  };

  const userSelectedTask4HandleOnClick = (e) => {
    setTask4SleepingBag(e.target.textContent);
    endCountingTimeTask4Func();
    nextStepHandleOnClick();
  };

  const endCountingTimeTask4Func = () => {
    setEndCountingTimeTask4(startCountingTime + "s");
    clearInterval(intervalState);
  };

  const TryAgainTask4HandleOnClick = () => {
    setTask4SleepingBag(false);
    prevStepHandleOnClick();
    startCountingTimeFunc();
  };

  // RATE DIFFICULTY FUNCTION
  const getRateDiffOnClickFunc = (e) => {
    setRateDiff(e.target.textContent);
  };

  // USER NAV PREFER FUNCTION
  const getUserNavPreferOnClickFunc = (e) => {
    // setUserNavPrefer(e.target.textContent);
    if (e.target.textContent === "Version 1") {
      setUserNavPrefer(1);
    } else if (e.target.textContent === "Version 2") {
      setUserNavPrefer(2);
    } else if (e.target.textContent === "Version 3") {
      setUserNavPrefer(3);
    } else if (e.target.textContent === "Version 4") {
      setUserNavPrefer(4);
    }
  };

  // SEND DATA TO DATABASE - GOOGLE SHEET
  const submitDataToDatabase = (e) => {
    e.preventDefault();
    setLoadingToggle(true);
    setDisplayPostBtn(false);
    axios
      .post(
        "https://sheet.best/api/sheets/b2fa7a6e-f53d-40bf-86f7-34557ebc33b9",
        {
          navVersion: "2",
          lookForRunningShoesAnswer: task1RunningShoes,
          lookForRunningShoesAnswerTime: endCountingTimeTask1,
          lookForMountainbikeAnswer: task2MountainBike,
          lookForMountainbikeAnswerTime: endCountingTimeTask2,
          lookForWeightsAnswer: task3Weights,
          lookForWeightsAnswerTime: endCountingTimeTask3,
          lookForSleepingbagAnswer: task4SleepingBag,
          lookForSleepingbagAnswerTime: endCountingTimeTask4,
          howEasyWasItToFindOneToFive: rateDiff,
          menuPrefer: userNavPrefer,
          email: getUserEmail,
        }
      )
      .then(function (response) {
        console.log(response);
        setLoadingToggle(false);
        nextStepHandleOnClick();
      })
      .catch(function (error) {
        console.log(error);
        setLoadingToggle(false);
        setDisplayPostBtn(true);
        alert("An error has occurred");
      });
  };

  return (
    <div className="testV2">
      {stepNumber === 1 ? (
        <TestInfo onClick={nextStepHandleOnClick} />
      ) : stepNumber === 2 ? (
        <Task
          taskTitle='Wo würdest du das folgende Produkt suchen: "Laufschuhen"'
          onClick={userStartTask1HandleOnClick}
        />
      ) : stepNumber === 3 ? (
        <HeaderDesktop
          relNav={2}
          onClickgetCategoryNameSportarten={
            userSelectedTask1HandleOnClickTopCategorySportarten
          }
          onClickgetCategoryNameDamen={
            userSelectedTask1HandleOnClickTopCategoryDamen
          }
          onClickgetCategoryNameHerren={
            userSelectedTask1HandleOnClickTopCategoryHerren
          }
          onClickgetCategoryNameKinder={
            userSelectedTask1HandleOnClickTopCategoryKinder
          }
          onClickgetCategoryNameSportzubehor={
            userSelectedTask1HandleOnClickTopCategorySportzubehor
          }
        />
      ) : stepNumber === 4 ? (
        <UserSelected
          title={task1RunningShoes}
          onClick={nextStepHandleOnClick}
          onClickTryAgain={TryAgainTask1HandleOnClick}
        />
      ) : stepNumber === 5 ? (
        <Task
          taskTitle='Wo würdest du das folgende Produkt suchen: "Mountainbike"'
          onClick={userStartTask2HandleOnClick}
        />
      ) : stepNumber === 6 ? (
        <HeaderDesktop
          relNav={2}
          onClickgetCategoryNameSportarten={
            userSelectedTask2HandleOnClickTopCategorySportarten
          }
          onClickgetCategoryNameDamen={
            userSelectedTask2HandleOnClickTopCategoryDamen
          }
          onClickgetCategoryNameHerren={
            userSelectedTask2HandleOnClickTopCategoryHerren
          }
          onClickgetCategoryNameKinder={
            userSelectedTask2HandleOnClickTopCategoryKinder
          }
          onClickgetCategoryNameSportzubehor={
            userSelectedTask2HandleOnClickTopCategorySportzubehor
          }
        />
      ) : stepNumber === 7 ? (
        <UserSelected
          title={task2MountainBike}
          onClick={nextStepHandleOnClick}
          onClickTryAgain={TryAgainTask2HandleOnClick}
        />
      ) : stepNumber === 8 ? (
        <Task
          taskTitle='Wo würdest du das folgende Produkt suchen: "Gewicht"'
          onClick={userStartTask3HandleOnClick}
        />
      ) : stepNumber === 9 ? (
        <HeaderDesktop
          relNav={2}
          onClickgetCategoryNameSportarten={
            userSelectedTask3HandleOnClickTopCategorySportarten
          }
          onClickgetCategoryNameDamen={
            userSelectedTask3HandleOnClickTopCategoryDamen
          }
          onClickgetCategoryNameHerren={
            userSelectedTask3HandleOnClickTopCategoryHerren
          }
          onClickgetCategoryNameKinder={
            userSelectedTask3HandleOnClickTopCategoryKinder
          }
          onClickgetCategoryNameSportzubehor={
            userSelectedTask3HandleOnClickTopCategorySportzubehor
          }
        />
      ) : stepNumber === 10 ? (
        <UserSelected
          title={task3Weights}
          onClick={nextStepHandleOnClick}
          onClickTryAgain={TryAgainTask3HandleOnClick}
        />
      ) : stepNumber === 11 ? (
        <Task
          taskTitle='Wo würdest du das folgende Produkt suchen: "Schlafsack"'
          onClick={userStartTask4HandleOnClick}
        />
      ) : stepNumber === 12 ? (
        <HeaderDesktop
          relNav={2}
          onClickgetCategoryNameSportarten={
            userSelectedTask4HandleOnClickTopCategorySportarten
          }
          onClickgetCategoryNameDamen={
            userSelectedTask4HandleOnClickTopCategoryDamen
          }
          onClickgetCategoryNameHerren={
            userSelectedTask4HandleOnClickTopCategoryHerren
          }
          onClickgetCategoryNameKinder={
            userSelectedTask4HandleOnClickTopCategoryKinder
          }
          onClickgetCategoryNameSportzubehor={
            userSelectedTask4HandleOnClickTopCategorySportzubehor
          }
        />
      ) : stepNumber === 13 ? (
        <UserSelected
          title={task4SleepingBag}
          onClick={nextStepHandleOnClick}
          onClickTryAgain={TryAgainTask4HandleOnClick}
        />
      ) : stepNumber === 14 ? (
        <RateDifficulty
          rateDiffOnClick={getRateDiffOnClickFunc}
          activeRateNum={rateDiff}
          continueOnClick={nextStepHandleOnClick}
        />
      ) : stepNumber === 15 ? (
        <UserNavPrefer
          navVersionOnClick={getUserNavPreferOnClickFunc}
          userNavPrefer={userNavPrefer}
          continueOnClick={nextStepHandleOnClick}
        />
      ) : stepNumber === 16 ? (
        <GetUserEmail
          emailOnChange={(e) => setGetUserEmail(e.target.value)}
          finishOnClick={submitDataToDatabase}
          loading={loadingToggle}
          displayPostBtn={displayPostBtn}
        />
      ) : stepNumber === 17 ? (
        <EndPage />
      ) : null}
    </div>
  );
}

export default TestV2;
