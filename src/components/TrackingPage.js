import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container } from "../globalStyles";
import Tracker from "./Tracker";
import TrackingDetails from "./TrackingDetails";
import axios from "axios";

const TrackingPage = (props) => {
  const [fetchResult, setFetchResult] = useState();
  const [fetchErr, setFetchErr] = useState();
  var IdParam = props.match.params.idDetails;
  useEffect(() => {
    axios
      .get(
        `https://admin.movebot.ng/prod_sup/api/LandingPage/Tracker?trackingId=${IdParam}`
      )
      .then((res) => {
        setFetchResult(res.data);
      })
      .catch((error) => {
        setFetchErr(error.response.data.Message);
      });
  }, []);

  return (
    <>
      <Container>
        <House>
          <Tracker />
          <RightContent>
            <TrackingDetails results={fetchResult} fetchErr={fetchErr} />
          </RightContent>
        </House>
      </Container>
    </>
  );
};
const House = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: top;
  padding: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1px;
    width: 100%;
  }
`;
const RightContent = styled.div`
  flex: 2;
  height: 50vh;
`;
export default TrackingPage;
