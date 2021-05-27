import React from "react";
import styled from "styled-components";

const TrackingDetails = ({ results, fetchErr }) => {
  return (
    <>
      {results ? (
        <Status>
          <h3>Status:</h3>
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
              <Status>{result.CurrentPackageStatus}</Status>
            </Response>
          </>
        ))
      ) : fetchErr ? (
        <Response errStyle={true}>
          <p>{fetchErr}</p>
        </Response>
      ) : (
        ""
      )}
    </>
  );
};

const Response = styled.div`
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1px;
  }
`;

const Date = styled.div`
  padding: 1rem;
`;
const Info = styled.div`
  padding: 1rem;
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
