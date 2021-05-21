import React, { useState } from "react";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import TrackingDetails from "../components/TrackingDetails";
import axios from "axios";
// import details from "../data/trakingDetails";

const Home = () => {
  const [results, setResults] = useState(null);
  const [input, setInput] = useState();
  const [errMsg, setErrMsg] = useState();
  const trackingInput = (e) => {
    setInput(e.target.value);
  };

  const detailsHandler = async () => {
    // const detail = details.find((d) => d._id === input);

    try {
      const testApi = await axios.get(
        `https://admin.movebot.ng/prod_sup/api/LandingPage/Tracker`,
        {
          params: {
            trackingId: `${input}`,
          },
        }
      );

      setResults(testApi.data);
    } catch (error) {
      setErrMsg(error.response.data);
    }
  };

  return (
    <>
      <SectionOne
        results={results}
        trackingInput={trackingInput}
        detailsHandler={detailsHandler}
      />
      <TrackingDetails
        results={results}
        errMsg={errMsg}
        trackingInput={trackingInput}
      />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default Home;
