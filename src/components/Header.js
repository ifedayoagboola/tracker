import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../globalStyles";
import logo from "../assets/Logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../globalStyles";
import { FiPackage } from "react-icons/fi";

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="" />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about" onClick={closeMobileMenu}>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact" onClick={closeMobileMenu}>
                  Contact
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact" onClick={closeMobileMenu}>
                  <FiPackage /> Courier Portal
                </NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/partners">
                    <Button>Become a Courier Partner</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/partners">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Partnership
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

const Nav = styled.nav`
  background: #000d1a;
  height: 80px;

  display: flex;
  /* justify-content: center; */
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 5rem;

  /* ${Container} */
`;

const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  width: 14rem;
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: flex-end;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #0f7173;
  }
`;

const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #f57f55;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-self: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #f57f55;
      transition: all 0.3s ease;
    }
  }
`;

const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export default Header;
