import React from "react";
import styled from "styled-components";

const SectionTwo = () => {
  return (
    <>
      <House>
        <InfoColumn2>
          <Info2>
            <h3>MoveBot </h3>
            Movebot empowers couriers and their clients with 24/7 digital
            tracking and delivery platforms to reduce the cost and stress of
            parcel and cargo transportation.
          </Info2>
          <Info2>
            <h3>Our Vision</h3>
            The vision is to enable the stakeholders to deliver all items smart,
            track all easy and simple and spend less resources(e.g money, time
            and energy) on goods transportation.
          </Info2>
        </InfoColumn2>
        <InfoColumn3>
          <Info2>
            <h3>Manage dispatch orders</h3>
            Are you a courier company with the plan to achieve the business
            goals below? Deliver more and fast Delight and retain your clients.
            Connect easy with new clients Manage dispatch orders/drivers Track
            items realtime & more…
          </Info2>
          <Info2>
            <h3>Track Parcels</h3>
            Track all parcels from pick up to drop off anytime and anywhere-
            Simple and easy Box: Enter your tracking number here Send
            parcel/cargo Deliver your parcels/cargo smart and track all with
            less resources when you use movebot More about us We are trusted by
            and empowering couriers and their clients such as: Few Logos of
            customers and more…
          </Info2>
        </InfoColumn3>
      </House>
    </>
  );
};
const House = styled.div`
  padding: 5rem;
  margin-bottom: 3rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;
const InfoColumn2 = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: left;
  align-items: left;
  border-left: 1px solid #f57f55;
  border-top: 1px solid #f57f55;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: block;
  }
`;
const InfoColumn3 = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: left;
  align-items: left;
  border-right: 1px solid #f57f55;
  border-bottom: 1px solid #f57f55;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    display: block;
  }
`;
const Info2 = styled.div`
  max-width: 555px;
  background: #fff;
  opacity: 0.8;
  color: #101522;
  padding: 2rem 2rem 2rem 1rem;
  margin-bottom: 1rem;
  h3 {
    color: #0f7173;
  }
`;

export default SectionTwo;
