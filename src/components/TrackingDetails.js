import React from "react";
import styled from "styled-components";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const TrackingDetails = ({ results, fetchErr }) => {
  return (
    <>
      {results ? (
        <Status>
          <h3>Status: </h3>
          {results.CurrentPackageStatus}
        </Status>
      ) : (
        ""
      )}

      {results ? (
        results.Events.map((result) => (
          <>
            <Response>
              <Date>{result.EventDate_}</Date>
              <Info>{result.Description}</Info>
              {/* <Status>{result.CurrentPackageStatus}</Status> */}
            </Response>
          </>
        ))
      ) : fetchErr ? (
        <Response errStyle={true}>
          <p>{fetchErr}</p>
        </Response>
      ) : (
        <ClipLoader css={override} color={"#F57F55"} loading={true} size={80} />
      )}
    </>
  );
};
const override = css`
  display: block;
  margin: 50px auto 0;
  border-color: #f57f55;
`;
const Response = styled.div`
  position: relative;
  min-height: 80px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: ${({ errStyle }) => (errStyle ? "center" : "left")};
  align-items: center;
  gap: 10px;
  background: ${({ errStyle }) => (errStyle ? "" : "#0F7173")};
  border: ${({ errStyle }) =>
    errStyle ? "2px solid #cf0000" : "1px solid #fff"};
  color: ${({ errStyle }) => (errStyle ? "#0F7173" : "#fff")};
  text-align: left;
  p {
    padding: 1rem;
  }
  ::before {
    content: "";
    position: absolute;
    top: 2rem;
    left: 0.3rem;
    border: 2px solid #fff;
    border-radius: 50%;
    width: 10px;
    height: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1px;
  }
`;

const Date = styled.div`
  padding: 1rem 2rem;
  @media (max-width: 768px) {
    padding: 0.6rem 1.8rem 0;
  }
`;
const Info = styled.div`
  padding: 1rem 2rem;
  @media (max-width: 768px) {
    padding: 0.6rem 1.8rem 0;
  }
`;
const Status = styled.div`
  width: 90%;
  margin: 1rem 0;
  display: flex;
  justify-content: left;
  align-items: center;
  color: #0f7173;
`;
export default TrackingDetails;
