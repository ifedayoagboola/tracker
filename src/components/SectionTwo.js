import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionTwo = () => {
  return (
    <>
      <House>
        <InfoColumn2>
          <Info2>
            <Link to="/">
              <h3>About us</h3>
            </Link>
            Movebot empowers couriers and their clients with 24/7 digital
            tracking and delivery platforms to reduce the cost and stress of
            parcel and cargo transportation. <br />
            <br />
          </Info2>
          <Info2>
            <Link to="/">
              <h3>Our vision</h3>
            </Link>
            The vision is to enable the stakeholders to deliver all items smart,
            track all easy and simple and spend less resources(e.g money, time
            and energy) on goods transportation.
          </Info2>
        </InfoColumn2>
        <InfoColumn3>
          <Info2>
            <Link to="/">
              <h3>
                Courier companies with the plan to achieve the business goals
                below:
              </h3>
            </Link>
            <ul>
              <li>Deliver more and fast.</li>
              <li>Delight and retain your clients.</li>
              <li>Connect easy with new clients</li>
              <li>Manage dispatch orders/drivers</li>
              <li>Track items realtime & more…</li>
            </ul>
            <br />
            <p>
              They are achievable with Movebot.
              <Link to="partners"> Talk to us</Link> to get started
            </p>
          </Info2>
          <Info2>
            <Link to="/details/:idDetails">
              <h3>Client of courier companies with the goals below:</h3>
            </Link>
            <ul>
              <li>
                See how your parcel/cargo move from pick up point to drop off
                point.
              </li>
              <li>Remove anxiety over parcel/cargo in transit.</li>
              <li>
                Save cost, time and energy spent on parcel/cargo delivery.
              </li>
              <li>
                Bargain and agree on the delivery terms with couriers of choice.
              </li>
            </ul>
            <br />
            <p>
              They are achievable with Movebot.
              <Link to="/contact"> Download app </Link> to get started.
            </p>
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
  ul {
    padding-left: 1rem;
    li {
      color: #101522;
    }
  }
  a {
    color: #0f7173;
  }
`;

export default SectionTwo;
