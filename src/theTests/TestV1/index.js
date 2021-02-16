import React, { useState } from "react";

import HeaderDesktop from "../../components/HeaderDesktop";
import Task from "../../testTasksComponents/Task";
import TestInfo from "../../testTasksComponents/TestInfo";
import UserSelected from "../../testTasksComponents/UserSelected";
import "./index.css";

function TestV1() {
  const [stepNumber, setStepNumber] = useState(1);
  const [task1RunningShoes, setTask1RunningShoes] = useState(false);

  // genetal funcs
  const nextStepHandleOnClick = () => {
    setStepNumber((prevState) => prevState + 1);
  };

  const prevStepHandleOnClick = () => {
    setStepNumber((prevState) => prevState - 1);
  };

  // task 1 funcs
  const getClickedCategoryTask1RunningShoes = (e) => {
    setTask1RunningShoes(e.target.textContent);
    nextStepHandleOnClick();
  };

  // user selected funcs
  const TryAgainHandleOnClick = () => {
    setTask1RunningShoes(false);
    prevStepHandleOnClick();
  };
  return (
    <div className="testV1">
      {stepNumber === 1 ? (
        <TestInfo onClick={nextStepHandleOnClick} />
      ) : stepNumber === 2 ? (
        <Task
          taskTitle="Please look for running shoes"
          onClick={nextStepHandleOnClick}
        />
      ) : stepNumber === 3 ? (
        <HeaderDesktop
          relNav={1}
          onClickgetCategoryName={getClickedCategoryTask1RunningShoes}
        />
      ) : stepNumber === 4 ? (
        <UserSelected
          title={task1RunningShoes}
          onClickTryAgain={TryAgainHandleOnClick}
        />
      ) : null}
    </div>
  );
}

export default TestV1;
