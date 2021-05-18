import React from "react";
import logo from "../assets/Logo.svg";
import styled from "styled-components";
import gp1 from "../assets/gp1.png";
import as1 from "../assets/as1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContent>
      <Line />
      <House>
        <FooterLogo to="/">
          <img src={logo} alt="" />
        </FooterLogo>
        <Nav>
          <h2>Quick links</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </Nav>

        <Subscription>
          <h2>Download MoveBot App</h2>
          <p>Click below to download Mobile Application for Android or IOS.</p>
          <Download>
            <Link to="/">
              <Image>
                <img src={gp1} alt="" />
              </Image>
            </Link>
            <Link to="/">
              <Image>
                <img src={as1} alt="" />
              </Image>
            </Link>
          </Download>
        </Subscription>
      </House>
      <p>MoveBot copyright &copy; 2021</p>
    </FooterContent>
  );
};

const FooterContent = styled.div`
  background: #000d1a;
  p {
    display: flex;
    flex-direction: center;
    justify-content: center;
    color: #0f7173;
  }
`;
const Line = styled.div`
  height: 1px;
  background: #fff;
`;
const House = styled.div`
  padding: 3rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  h2,
  p {
    color: #fff;
    padding: 0.3rem 0;
  }
`;
const Subscription = styled.div``;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: content;

  a {
    text-decoration: none;
    color: #0f7173;
    padding: 0.5rem;
  }
`;
const Download = styled.div`
  padding: 1rem 0;
`;
const Image = styled.div`
  width: 10rem;
  &:hover {
    transform: scale(0.97);
    transition: all 0.5s ease;
  }
  img {
    width: 100%;
  }
`;
const FooterLogo = styled.div`
  width: 14rem;
  img {
    width: 100%;
  }
`;
export default Footer;
