import React from "react";
import styled from "styled-components";
import { Container } from "../globalStyles";
import bgimg from "../assets/bgimg2.svg";
import Tracker from "./Tracker";

const sectionOne = () => {
  return (
    <Container>
      <House>
        <ContentLeft>
          <h1>
            World’s Leading <span>Logistics</span> Information Query Solution
          </h1>
          <p>
            support logistics tracking of <span>665</span> courier companies
            around the world
          </p>
          <Tracker />
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
    font-size: 2.5rem;
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
