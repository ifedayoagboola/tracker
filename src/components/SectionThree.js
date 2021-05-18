import React from "react";
import styled from "styled-components";
import Subscribe from "../components/Subscribe";
import Contact from "../components/Contact";

const SectionThree = () => {
  return (
    <Section3>
      <Subscribe />
      <Contact />
    </Section3>
  );
};

const Section3 = styled.div`
  background: #fff;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem;
  overflow: hidden;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    height: 150px;
    top: 10px;
    left: 0;
    right: 0;
    background: #000d1a;
  }
  ::after {
    content: "";
    position: absolute;
    height: 150px;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000d1a;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 1rem 1rem;
    text-align: center;
    ::before,
    ::after {
      display: none;
    }
  }
`;

export default SectionThree;
