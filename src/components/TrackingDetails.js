import React from "react";
import styled from "styled-components";

const TrackingDetails = ({ errStyle, results, errMsg }) => {
  console.log(errMsg, "err");
  return (
    <>
      {results ? (
        results.Events.map((result) => (
          <>
            {" "}
            <Details errStyle={errStyle}>
              <Date>{result.EventDate}</Date>
              <Info>{result.Description}</Info>
              <Status>{result.CurrentPackageStatus}</Status>{" "}
            </Details>
          </>
        ))
      ) : errMsg ? (
        <Details errStyle={errStyle}>
          <p>{errMsg.Message}</p>
        </Details>
      ) : (
        ""
      )}
    </>
  );
};
const Details = styled.div`
  min-height: 80px;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #f1f5f9;
  /* border: 1px solid #0f7173; */
  border: ${({ errStyle }) =>
    errStyle ? "1px solid #cf0000" : "1px solid #0f7173"};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Date = styled.div`
  padding: 1rem;
`;
const Info = styled.div`
  padding: 1rem;
`;
const Status = styled.div`
  padding: 1rem;
`;
export default TrackingDetails;
