import React, { useState, useEffect } from "react";
import "./index.css";
import TableOfData from "../../materialUiComponents/TableOfData";

import axios from "axios";

function DisplayData() {
  const [originalData, setOriginalData] = useState([]);
  const [originalDataV1, setOriginalDataV1] = useState([]);
  const [originalDataV2, setOriginalDataV2] = useState([]);
  const [originalDataV3, setOriginalDataV3] = useState([]);
  const [originalDataV4, setOriginalDataV4] = useState([]);
  const [exampleData, setExampleData] = useState([
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Tourenski",
      lookForRunningShoesAnswerTime: "1.5s",
      lookForMountainbikeAnswer: "Kampfsport",
      lookForMountainbikeAnswerTime: "1.5s",
      lookForWeightsAnswer: "Inline Skating",
      lookForWeightsAnswerTime: "2s",
      lookForSleepingbagAnswer: "Tourenski",
      lookForSleepingbagAnswerTime: "2s",
      howEasyWasItToFindOneToFive: "4",
      menuPrefer: "1",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Langlaufski",
      lookForRunningShoesAnswerTime: "2s",
      lookForMountainbikeAnswer: "Jagd",
      lookForMountainbikeAnswerTime: "1.5s",
      lookForWeightsAnswer: "Schlitten",
      lookForWeightsAnswerTime: "2s",
      lookForSleepingbagAnswer: "SUP & Kajak",
      lookForSleepingbagAnswerTime: "1.5s",
      howEasyWasItToFindOneToFive: "3",
      menuPrefer: "4",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Klettern",
      lookForRunningShoesAnswerTime: "3.5s",
      lookForMountainbikeAnswer: "Schlittschuhen",
      lookForMountainbikeAnswerTime: "1.5s",
      lookForWeightsAnswer: "Volleyball",
      lookForWeightsAnswerTime: "2s",
      lookForSleepingbagAnswer: "Strandbekleidung & Strandzubehör",
      lookForSleepingbagAnswerTime: "1.5s",
      howEasyWasItToFindOneToFive: "5",
      menuPrefer: "1",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Laufschuhe",
      lookForRunningShoesAnswerTime: "19s",
      lookForMountainbikeAnswer: "Fahrräder",
      lookForMountainbikeAnswerTime: "10s",
      lookForWeightsAnswer: "Fitness",
      lookForWeightsAnswerTime: "7.5s",
      lookForSleepingbagAnswer: "Camping",
      lookForSleepingbagAnswerTime: "3.5s",
      howEasyWasItToFindOneToFive: "5",
      menuPrefer: "2",
      email: null,
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Klettern",
      lookForRunningShoesAnswerTime: "2s",
      lookForMountainbikeAnswer: "Fahrräder",
      lookForMountainbikeAnswerTime: "2s",
      lookForWeightsAnswer: "Fitness",
      lookForWeightsAnswerTime: "9.5s",
      lookForSleepingbagAnswer: "Camping",
      lookForSleepingbagAnswerTime: "15s",
      howEasyWasItToFindOneToFive: "5",
      menuPrefer: "1",
      email: null,
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Klettern",
      lookForRunningShoesAnswerTime: "2s",
      lookForMountainbikeAnswer: "Fahrräder",
      lookForMountainbikeAnswerTime: "2s",
      lookForWeightsAnswer: "Fitness",
      lookForWeightsAnswerTime: "9.5s",
      lookForSleepingbagAnswer: "Camping",
      lookForSleepingbagAnswerTime: "15s",
      howEasyWasItToFindOneToFive: "5",
      menuPrefer: "1",
      email: null,
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Wandern",
      lookForRunningShoesAnswerTime: "1.5s",
      lookForMountainbikeAnswer: "Wandern",
      lookForMountainbikeAnswerTime: "1.5s",
      lookForWeightsAnswer: "Wandern",
      lookForWeightsAnswerTime: "1s",
      lookForSleepingbagAnswer: "Wandern",
      lookForSleepingbagAnswerTime: "1.5s",
      howEasyWasItToFindOneToFive: "5",
      menuPrefer: "1",
      email: "t",
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Ski (Sportarten)",
      lookForRunningShoesAnswerTime: "1.5s",
      lookForMountainbikeAnswer: "Oberbekleidung (Herren)",
      lookForMountainbikeAnswerTime: "1.5s",
      lookForWeightsAnswer: "Lange Hosen (Kinder)",
      lookForWeightsAnswerTime: "1.5s",
      lookForSleepingbagAnswer: "Pflege  (Sportzubehör)",
      lookForSleepingbagAnswerTime: "1.5s",
      howEasyWasItToFindOneToFive: "4",
      menuPrefer: "4",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "2",
      lookForRunningShoesAnswer: "Gesundheit, Pflege (Sportzubehör)",
      lookForRunningShoesAnswerTime: "1s",
      lookForMountainbikeAnswer: "Jacken (Herren)",
      lookForMountainbikeAnswerTime: "1.5s",
      lookForWeightsAnswer: "Skisport (Sportarten)",
      lookForWeightsAnswerTime: "2s",
      lookForSleepingbagAnswer: "Oberbekleidung (Damen)",
      lookForSleepingbagAnswerTime: "1.5s",
      howEasyWasItToFindOneToFive: "5",
      menuPrefer: "2",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Laufschuhe (Sportarten)",
      lookForRunningShoesAnswerTime: "9s",
      lookForMountainbikeAnswer: "Radsport (Sportarten)",
      lookForMountainbikeAnswerTime: "6s",
      lookForWeightsAnswer: "Fitness (Sportarten)",
      lookForWeightsAnswerTime: "32.5s",
      lookForSleepingbagAnswer: "Camping (Sportarten)",
      lookForSleepingbagAnswerTime: "7s",
      howEasyWasItToFindOneToFive: "4",
      menuPrefer: "4",
      email: "lisamaria.neuhofer@decathlon.com",
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Laufschuhe (Sportarten)",
      lookForRunningShoesAnswerTime: "9s",
      lookForMountainbikeAnswer: "Radsport (Sportarten)",
      lookForMountainbikeAnswerTime: "6s",
      lookForWeightsAnswer: "Fitness (Sportarten)",
      lookForWeightsAnswerTime: "32.5s",
      lookForSleepingbagAnswer: "Camping (Sportarten)",
      lookForSleepingbagAnswerTime: "7s",
      howEasyWasItToFindOneToFive: "4",
      menuPrefer: "4",
      email: "lisamaria.neuhofer@decathlon.com",
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Laufschuhe (Sportarten)",
      lookForRunningShoesAnswerTime: "9s",
      lookForMountainbikeAnswer: "Radsport (Sportarten)",
      lookForMountainbikeAnswerTime: "6s",
      lookForWeightsAnswer: "Fitness (Sportarten)",
      lookForWeightsAnswerTime: "32.5s",
      lookForSleepingbagAnswer: "Camping (Sportarten)",
      lookForSleepingbagAnswerTime: "7s",
      howEasyWasItToFindOneToFive: "4",
      menuPrefer: "4",
      email: "lisamaria.neuhofer@decathlon.com",
    },
    {
      navVersion: "4",
      lookForRunningShoesAnswer: "Angeln (Sportarten)",
      lookForRunningShoesAnswerTime: "4s",
      lookForMountainbikeAnswer: "Jacken (Damen)",
      lookForMountainbikeAnswerTime: "1s",
      lookForWeightsAnswer: "Jacken (Herren)",
      lookForWeightsAnswerTime: "1.5s",
      lookForSleepingbagAnswer: "Regeneration  (Sportzubehör)",
      lookForSleepingbagAnswerTime: "2s",
      howEasyWasItToFindOneToFive: "4",
      menuPrefer: "1",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Laufschuhe",
      lookForRunningShoesAnswerTime: "13s",
      lookForMountainbikeAnswer: "Fahrräder",
      lookForMountainbikeAnswerTime: "5s",
      lookForWeightsAnswer: "Fitness",
      lookForWeightsAnswerTime: "4.5s",
      lookForSleepingbagAnswer: "Camping",
      lookForSleepingbagAnswerTime: "2.5s",
      howEasyWasItToFindOneToFive: "4",
      menuPrefer: "2",
      email: "s",
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Laufschuhe",
      lookForRunningShoesAnswerTime: "13s",
      lookForMountainbikeAnswer: "Fahrräder",
      lookForMountainbikeAnswerTime: "5s",
      lookForWeightsAnswer: "Fitness",
      lookForWeightsAnswerTime: "4.5s",
      lookForSleepingbagAnswer: "Camping",
      lookForSleepingbagAnswerTime: "2.5s",
      howEasyWasItToFindOneToFive: "4",
      menuPrefer: "2",
      email: "s",
    },
    {
      navVersion: "4",
      lookForRunningShoesAnswer: "Angeln (Sportarten)",
      lookForRunningShoesAnswerTime: "2s",
      lookForMountainbikeAnswer: "Canyoning (Sportarten)",
      lookForMountainbikeAnswerTime: "1s",
      lookForWeightsAnswer: "Canyoning (Sportarten)",
      lookForWeightsAnswerTime: "1s",
      lookForSleepingbagAnswer: "Jagd (Sportarten)",
      lookForSleepingbagAnswerTime: "1.5s",
      howEasyWasItToFindOneToFive: "very easy",
      menuPrefer: "",
      email: "luke@test.com",
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Camping (Sportarten)",
      lookForRunningShoesAnswerTime: "2s",
      lookForMountainbikeAnswer: "Eishockey (Sportarten)",
      lookForMountainbikeAnswerTime: "2s",
      lookForWeightsAnswer: "Oberbekleidung (Damen)",
      lookForWeightsAnswerTime: "1.5s",
      lookForSleepingbagAnswer: "Regeneration  (Sportzubehör)",
      lookForSleepingbagAnswerTime: "1.5s",
      howEasyWasItToFindOneToFive: "4",
      menuPrefer: "1",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "",
      lookForRunningShoesAnswerTime: "",
      lookForMountainbikeAnswer: "",
      lookForMountainbikeAnswerTime: "",
      lookForWeightsAnswer: "",
      lookForWeightsAnswerTime: "",
      lookForSleepingbagAnswer: "",
      lookForSleepingbagAnswerTime: "",
      howEasyWasItToFindOneToFive: "",
      menuPrefer: "",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Ski (Sportarten)",
      lookForRunningShoesAnswerTime: "2s",
      lookForMountainbikeAnswer: "Oberbekleidung (Herren)",
      lookForMountainbikeAnswerTime: "1s",
      lookForWeightsAnswer: "Tights  (Kinder)",
      lookForWeightsAnswerTime: "1s",
      lookForSleepingbagAnswer: "Lange Hosen (Kinder)",
      lookForSleepingbagAnswerTime: "1s",
      howEasyWasItToFindOneToFive: "2",
      menuPrefer: "2",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "2",
      lookForRunningShoesAnswer: "Jacken (Damen)",
      lookForRunningShoesAnswerTime: "1.5s",
      lookForMountainbikeAnswer: "Schlitten (Sportarten)",
      lookForMountainbikeAnswerTime: "1.5s",
      lookForWeightsAnswer: "Lange Hosen (Kinder)",
      lookForWeightsAnswerTime: "1s",
      lookForSleepingbagAnswer: "Regeneration  (Sportzubehör)",
      lookForSleepingbagAnswerTime: "1s",
      howEasyWasItToFindOneToFive: "5",
      menuPrefer: "1",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "3",
      lookForRunningShoesAnswer: "Jacken (Herren)",
      lookForRunningShoesAnswerTime: "1s",
      lookForMountainbikeAnswer: "Eishockey (Sportarten)",
      lookForMountainbikeAnswerTime: "1s",
      lookForWeightsAnswer: "Tights  (Kinder)",
      lookForWeightsAnswerTime: "1s",
      lookForSleepingbagAnswer: "Lange Hosen (Kinder)",
      lookForSleepingbagAnswerTime: "1s",
      howEasyWasItToFindOneToFive: "5",
      menuPrefer: "2",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "4",
      lookForRunningShoesAnswer: "Angeln (Sportarten)",
      lookForRunningShoesAnswerTime: "1.5s",
      lookForMountainbikeAnswer: "Oberbekleidung (Herren)",
      lookForMountainbikeAnswerTime: "1s",
      lookForWeightsAnswer: "Pflege  (Sportzubehör)",
      lookForWeightsAnswerTime: "1.5s",
      lookForSleepingbagAnswer: "Jacken (Damen)",
      lookForSleepingbagAnswerTime: "1s",
      howEasyWasItToFindOneToFive: "2",
      menuPrefer: "2",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "4",
      lookForRunningShoesAnswer: "Boxen (Sportarten)",
      lookForRunningShoesAnswerTime: "4.5s",
      lookForMountainbikeAnswer: "Oberbekleidung (Damen)",
      lookForMountainbikeAnswerTime: "2.5s",
      lookForWeightsAnswer: "Boxen (Sportarten)",
      lookForWeightsAnswerTime: "4s",
      lookForSleepingbagAnswer: "Regeneration  (Sportzubehör)",
      lookForSleepingbagAnswerTime: "2.5s",
      howEasyWasItToFindOneToFive: "4",
      menuPrefer: "1",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "3",
      lookForRunningShoesAnswer: "Laufschuhe (Damen)",
      lookForRunningShoesAnswerTime: "6.5s",
      lookForMountainbikeAnswer: "Fahrräder (Sportarten)",
      lookForMountainbikeAnswerTime: "9.5s",
      lookForWeightsAnswer: "Fitness (Sportarten)",
      lookForWeightsAnswerTime: "10s",
      lookForSleepingbagAnswer: "Camping (Sportarten)",
      lookForSleepingbagAnswerTime: "6.5s",
      howEasyWasItToFindOneToFive: "3",
      menuPrefer: "4",
      email: null,
    },
    {
      navVersion: "3",
      lookForRunningShoesAnswer: "Canyoning  (Sportarten)",
      lookForRunningShoesAnswerTime: "2.5s",
      lookForMountainbikeAnswer: "Jacken (Herren)",
      lookForMountainbikeAnswerTime: "2s",
      lookForWeightsAnswer: "Freizeitschuhe (Damen)",
      lookForWeightsAnswerTime: "1.5s",
      lookForSleepingbagAnswer: "Schlitten (Sportarten)",
      lookForSleepingbagAnswerTime: "2s",
      howEasyWasItToFindOneToFive: "4",
      menuPrefer: "1",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "1",
      lookForRunningShoesAnswer: "Jacken (Herren)",
      lookForRunningShoesAnswerTime: "1.5s",
      lookForMountainbikeAnswer: "Langlaufski (Sportarten)",
      lookForMountainbikeAnswerTime: "1s",
      lookForWeightsAnswer: "Fleece, Pullover (Herren)",
      lookForWeightsAnswerTime: "1s",
      lookForSleepingbagAnswer: "Snowboard (Sportarten)",
      lookForSleepingbagAnswerTime: "1.5s",
      howEasyWasItToFindOneToFive: "3",
      menuPrefer: "1",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "2",
      lookForRunningShoesAnswer: "Fleece, Pullover (Herren)",
      lookForRunningShoesAnswerTime: "1.5s",
      lookForMountainbikeAnswer: "Langlaufen (Sportarten)",
      lookForMountainbikeAnswerTime: "1s",
      lookForWeightsAnswer: "Tights  (Kinder)",
      lookForWeightsAnswerTime: "1s",
      lookForSleepingbagAnswer: "Regeneration  (Sportzubehör)",
      lookForSleepingbagAnswerTime: "1s",
      howEasyWasItToFindOneToFive: "2",
      menuPrefer: "2",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "3",
      lookForRunningShoesAnswer: "Langlaufski (Sportarten)",
      lookForRunningShoesAnswerTime: "1.5s",
      lookForMountainbikeAnswer: "Jacken (Herren)",
      lookForMountainbikeAnswerTime: "1.5s",
      lookForWeightsAnswer: "Fleece, Pullover (Damen)",
      lookForWeightsAnswerTime: "1s",
      lookForSleepingbagAnswer: "Eishockey (Sportarten)",
      lookForSleepingbagAnswerTime: "2s",
      howEasyWasItToFindOneToFive: "4",
      menuPrefer: "2",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "4",
      lookForRunningShoesAnswer: "Jacken (Herren)",
      lookForRunningShoesAnswerTime: "1s",
      lookForMountainbikeAnswer: "Angeln (Sportarten)",
      lookForMountainbikeAnswerTime: "1s",
      lookForWeightsAnswer: "Tights  (Kinder)",
      lookForWeightsAnswerTime: "0.5s",
      lookForSleepingbagAnswer: "Angeln (Sportarten)",
      lookForSleepingbagAnswerTime: "1s",
      howEasyWasItToFindOneToFive: "3",
      menuPrefer: "4",
      email: "acobas.hadar@gmail.com",
    },
    {
      navVersion: "4",
      lookForRunningShoesAnswer: "Canyoning (Sportarten)",
      lookForRunningShoesAnswerTime: "2s",
      lookForMountainbikeAnswer: "Bergsport &Outdoor (Sportarten)",
      lookForMountainbikeAnswerTime: "5.5s",
      lookForWeightsAnswer: "Tights  (Kinder)",
      lookForWeightsAnswerTime: "1s",
      lookForSleepingbagAnswer: "Angeln (Sportarten)",
      lookForSleepingbagAnswerTime: "1s",
      howEasyWasItToFindOneToFive: "5",
      menuPrefer: "1",
      email: "acobas.hadar@gmail.com",
    },
  ]);

  const filterVersionsFunc = (data, versionNum) => {
    let filteredData =
      data &&
      data.filter((row) => {
        return row.navVersion == versionNum;
      });
    return filteredData;
  };

  const getDataFromSheet = () => {
    const dataSheet = axios
      .get("https://sheet.best/api/sheets/b2fa7a6e-f53d-40bf-86f7-34557ebc33b9")
      .then((res) => {
        console.log("res:", res);
        setOriginalData(res.data);
        setOriginalDataV1(filterVersionsFunc(res.data, 1));
        setOriginalDataV2(filterVersionsFunc(res.data, 2));
        setOriginalDataV3(filterVersionsFunc(res.data, 3));
        setOriginalDataV4(filterVersionsFunc(res.data, 4));
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <div className="display-data">
      <a
        href="#"
        className="display-data__pullDataBtn"
        onClick={getDataFromSheet}
      >
        pull data
      </a>
      <h2 className="title">data navigation tests</h2>
      <p>V1 - Total: {originalDataV1.length}</p>
      <div className="display-data__tableWrapper">
        <TableOfData data={originalDataV1} />
      </div>
      <p>V2 - Total: {originalDataV2.length}</p>
      <div className="display-data__tableWrapper">
        <TableOfData data={originalDataV2} />
      </div>
      <p>V3 - Total: {originalDataV3.length}</p>
      <div className="display-data__tableWrapper">
        <TableOfData data={originalDataV3} />
      </div>
      <p>V4 - Total: {originalDataV4.length}</p>
      <div className="display-data__tableWrapper">
        <TableOfData data={originalDataV4} />
      </div>
    </div>
  );
}

export default DisplayData;
