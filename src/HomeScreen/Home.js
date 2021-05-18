import React from "react";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import TrackingDetails from "../components/TrackingDetails";

const Home = () => {
  return (
    <>
      <SectionOne />
      <TrackingDetails />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default Home;
