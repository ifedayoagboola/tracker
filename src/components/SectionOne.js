import React from "react";
import styled from "styled-components";
import { Container } from "../globalStyles";
import bgimg from "../assets/bgimg2.svg";
import Tracker from "./Tracker";

const sectionOne = ({
  setErrMsg,
  setResults,
  setIdValues,
  idValues,
  trackingInput,
  detailsHandler,
}) => {
  return (
    <Container>
      <House>
        <ContentLeft>
          <h1>
            Tracking and delivery management software trusted by courier
            companies/experts and their clients
          </h1>
          {/* <p>
            Tracking and delivery management software trusted by courier
            companies/experts and their clients
          </p> */}
          <Tracker
            setResults={setResults}
            setErrMsg={setErrMsg}
            trackingInput={trackingInput}
            detailsHandler={detailsHandler}
          />
        </ContentLeft>
        <ContentRight>
          <img src={bgimg} alt="" />
        </ContentRight>
      </House>
    </Container>
  );
};
const House = styled.div`
  display: flex;
  column-gap: 2rem;
  padding: 3rem 0;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    img {
      display: none;
    }
  }
`;
const ContentLeft = styled.div`
  flex: 1;
  h1 {
    font-size: 2.3rem;
    color: #0f7173;
  }
  p {
    font-size: 1.4rem;
    font-weight: bold;
    padding: 1.5rem 0;
    margin-bottom: 2.5rem;
    color: #788998;
  }
  span {
    color: #0f7173;
  }
`;
const ContentRight = styled.div`
  flex: 2;
  max-height: 80vh;
  max-width: 100vw;
  img {
    height: 100%;
    width: 100%;
  }
`;
export default sectionOne;
