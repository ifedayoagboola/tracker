import React from "react";
import styled from "styled-components";

const TrackingDetails = ({ result }) => {
  return result ? (
    <Details>
      <Date>
        {result.date} <br /> {result.time}
      </Date>

      <Info>
        Your {result.item} was delivered to {result.mode}. It arrived at
        {result.location} on {result.date} at {result.time} hours.
      </Info>

      <Status>Delivered</Status>
    </Details>
  ) : (
    ""
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
