import React from "react";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
// import Partnership from "../components/Partnership";

const Home = ({ setIdValues, idValues, setErrMsg, setResults }) => {
  return (
    <>
      <SectionOne
        setIdValues={setIdValues}
        idValues={idValues}
        setErrMsg={setErrMsg}
        setResults={setResults}
      />

      <SectionTwo />
      {/* <Partnership /> */}
      <SectionThree />
    </>
  );
};

export default Home;
