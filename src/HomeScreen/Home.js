import React, { useState } from "react";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import TrackingDetails from "../components/TrackingDetails";
import details from "../data/trakingDetails";

const Home = () => {
  const [input, setInput] = useState();
  const [result, setResult] = useState(null);
  const trackingInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const setDetailsHandler = () => {
    const detail = details.find((d) => d._id === input);
    setResult(detail);
  };
  return (
    <>
      <SectionOne
        result={result}
        trackingInput={trackingInput}
        setDetailsHandler={setDetailsHandler}
      />
      {result ? (
        <TrackingDetails
          result={result}
          trackingInput={trackingInput}
          setDetailsHandler={setDetailsHandler}
        />
      ) : (
        ""
      )}
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default Home;
