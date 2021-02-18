import React, { useState, useEffect } from "react";
import TestV1 from "../TestV1";
import TestV2 from "../TestV2";
import TestV3 from "../TestV3";
import TestV4 from "../TestV4";
import "./index.css";

function RandomVTest() {
  const [randomNum, setRandomNum] = useState(0);

  const generateRandomNumFunc = () => {
    let randNum = Math.floor(Math.random() * 4) + 1;
    setRandomNum(randNum);
  };

  useEffect(() => {
    generateRandomNumFunc();
  }, []);
  return (
    <div>
      {randomNum === 1 ? (
        <TestV1 />
      ) : randomNum === 2 ? (
        <TestV2 />
      ) : randomNum === 3 ? (
        <TestV3 />
      ) : randomNum === 4 ? (
        <TestV4 />
      ) : null}
      {/*
      <TestV1 />
      <TestV2 />
      <TestV3 />
      <TestV4 />
      */}
    </div>
  );
}

export default RandomVTest;
