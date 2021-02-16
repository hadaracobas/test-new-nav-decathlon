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

function TestV1() {
  // GENERAL STATES
  const [stepNumber, setStepNumber] = useState(16);
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

  console.log("get user email: ", getUserEmail);

  return (
    <div className="testV1">
      {stepNumber === 1 ? (
        <TestInfo onClick={nextStepHandleOnClick} />
      ) : stepNumber === 2 ? (
        <Task
          taskTitle="Please look for running shoes"
          onClick={userStartTask1HandleOnClick}
        />
      ) : stepNumber === 3 ? (
        <HeaderDesktop
          relNav={1}
          onClickgetCategoryName={userSelectedTask1HandleOnClick}
        />
      ) : stepNumber === 4 ? (
        <UserSelected
          title={task1RunningShoes}
          onClick={nextStepHandleOnClick}
          onClickTryAgain={TryAgainTask1HandleOnClick}
        />
      ) : stepNumber === 5 ? (
        <Task
          taskTitle="Please look for a mountain bike"
          onClick={userStartTask2HandleOnClick}
        />
      ) : stepNumber === 6 ? (
        <HeaderDesktop
          relNav={1}
          onClickgetCategoryName={userSelectedTask2HandleOnClick}
        />
      ) : stepNumber === 7 ? (
        <UserSelected
          title={task2MountainBike}
          onClick={nextStepHandleOnClick}
          onClickTryAgain={TryAgainTask2HandleOnClick}
        />
      ) : stepNumber === 8 ? (
        <Task
          taskTitle="Please look for weights"
          onClick={userStartTask3HandleOnClick}
        />
      ) : stepNumber === 9 ? (
        <HeaderDesktop
          relNav={1}
          onClickgetCategoryName={userSelectedTask3HandleOnClick}
        />
      ) : stepNumber === 10 ? (
        <UserSelected
          title={task3Weights}
          onClick={nextStepHandleOnClick}
          onClickTryAgain={TryAgainTask3HandleOnClick}
        />
      ) : stepNumber === 11 ? (
        <Task
          taskTitle="Please look for a sleeping bag"
          onClick={userStartTask4HandleOnClick}
        />
      ) : stepNumber === 12 ? (
        <HeaderDesktop
          relNav={1}
          onClickgetCategoryName={userSelectedTask4HandleOnClick}
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
        <GetUserEmail emailOnChange={(e) => setGetUserEmail(e.target.value)} />
      ) : stepNumber === 17 ? (
        <EndPage />
      ) : null}
    </div>
  );
}

export default TestV1;
