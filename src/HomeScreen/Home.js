import React, { useState } from "react";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import TrackingDetails from "../components/TrackingDetails";

const Home = ({
  setIdValues,
  idValues,
  errMsg,
  setErrMsg,
  results,
  setResults,
}) => {
  return (
    <>
      <SectionOne
        setIdValues={setIdValues}
        idValues={idValues}
        setErrMsg={setErrMsg}
        setResults={setResults}
      />
      {/* <TrackingDetails results={results} errMsg={errMsg} /> */}
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default Home;
