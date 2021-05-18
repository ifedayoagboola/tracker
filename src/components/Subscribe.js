import React from "react";
import styled from "styled-components";
import gp1 from "../assets/gp1.png";
import as1 from "../assets/as1.png";
import { Link } from "react-router-dom";
const Subscribe = () => {
  return (
    <>
      <Subscription>
        <h2>Download MoveBot App</h2>
        <p>Click below to download Mobile Application for Android or IOS.</p>
        <Download>
          <Image to="/">
            <img src={gp1} alt="" />
          </Image>
          <Image to="/">
            <img src={as1} alt="" />
          </Image>
        </Download>
      </Subscription>
    </>
  );
};
const Subscription = styled.div`
  flex: 1;
  padding-right: 5rem;
  > * {
    padding: 0.3rem 0;
  }
  h2 {
    color: #0f7173;
  }

  @media (max-width: 1300px) {
    padding: 1rem 0;
    text-align: left;
    justify-content: center;
  }
`;
const Download = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
`;
const Image = styled(Link)`
  width: 10rem;
  &:hover {
    transform: scale(0.97);
    transition: all 0.5s ease;
  }
  img {
    width: 100%;
  }
`;
export default Subscribe;
