import React from "react";
import logo from "../assets/Logo.svg";
import styled from "styled-components";
import gp1 from "../assets/gp1.png";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const Footer = () => {
  return (
    <FooterContent>
      <Line />
      <House>
        <FooterLogo to="/">
          <img src={logo} alt="" />
          <IconContext.Provider
            value={{
              style: {
                fontSize: "35px",
                color: "#fff",
                margin: "1rem",
                transition: "all 0.5s ease",
              },
            }}
          >
            <Icons>
              <a href="https://www.instagram.com/movebotng">
                <FaInstagramSquare className="icon" />
              </a>
              <a href="https://web.facebook.com/Movebotng">
                <FaFacebookSquare />
              </a>
            </Icons>
          </IconContext.Provider>
        </FooterLogo>
        <Nav>
          <h3>Quick links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/toc">Terms of Service</Link>
          <Link to="/privacy">Privacy</Link>

          {/* <Link to="/contact">Contact</Link> */}
        </Nav>
        <Address>
          <h3>Contact details</h3>

          <div>
            <p>
              <ImLocation />
              18, Olumo Street, Unilag Second Gate Road,
              <br /> Onike, Lagos, Nigeria.
            </p>
          </div>

          <div>
            <p>
              <MdEmail /> support@movebot.ng
            </p>
          </div>
          <div>
            <p>
              <AiTwotonePhone />
              +2348064748292
            </p>
          </div>
        </Address>

        <Subscription>
          <h3>Download MoveBot Apps</h3>
          <p>Click below to download Mobile Apps</p>
          <Download>
            <Link to="/">
              <Image>
                <img src={gp1} alt="" />
                For Drivers
              </Image>
            </Link>
            <Link to="/">
              <Image>
                <img src={gp1} alt="" />
                For Customers
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
  gap: 1rem;
  width: 100%;
  h3,
  p {
    color: #fff;
    padding: 0.3rem 0;
  }
  @media (max-width: 768px) {
    padding: 3rem 1rem;
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
const Address = styled.div`
  text-align: left;
  align-content: flex-start;
  p {
    text-align: left;
    color: #fff;
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

const Icons = styled.div`
  display: flex;
`;

export default Footer;
