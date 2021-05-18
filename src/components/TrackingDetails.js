import React from "react";
import styled from "styled-components";

const TrackingDetails = () => {
  return (
    <Details>
      <Date>
        18 May 2021 <br /> 10:49 AM
      </Date>

      <Info>
        Tracking number must contain only capital letters and digits. Please
        check that tracking number is correct.
      </Info>

      <Status>Not Delivered</Status>
    </Details>
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
  border: 1px solid #0f7173;
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
