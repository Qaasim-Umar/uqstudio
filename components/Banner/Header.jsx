"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { GiCandleFlame } from "react-icons/gi";
import { FiArrowUpRight } from "react-icons/fi";

const navItems = [
  { label: "Services", href: "#service" },
  { label: "Work", href: "#project" },
  { label: "Testimonials", href: "#client" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <HeaderShell>
      <Container>
        <Logo href="#home" aria-label="UQ Studio home" onClick={closeMenu}>
          <LogoMark aria-hidden="true"><GiCandleFlame /></LogoMark>
          <LogoText>
            <strong>UQ Studio</strong>
            <span>Web &amp; mobile products</span>
          </LogoText>
        </Logo>

        <Nav aria-label="Primary navigation" $isOpen={isOpen}>
          <NavList>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>{item.label}</a>
              </li>
            ))}
          </NavList>
          <MobileCta href="#footer" onClick={closeMenu}>
            Start a project <FiArrowUpRight aria-hidden="true" />
          </MobileCta>
        </Nav>

        <DesktopCta href="#footer">
          Start a project <FiArrowUpRight aria-hidden="true" />
        </DesktopCta>

        <MenuButton
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span /><span /><span />
        </MenuButton>
      </Container>
    </HeaderShell>
  );
};

export default Header;

const HeaderShell = styled.header`
  position: fixed;
  inset: 0 0 auto;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(25, 25, 35, 0.88);
  backdrop-filter: blur(18px);
`;

const Container = styled.div`
  width: min(90%, 1180px);
  min-height: 76px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const Logo = styled.a`
  color: #fff;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  flex-shrink: 0;

  &:focus-visible {
    outline: 3px solid rgba(1, 190, 150, 0.55);
    outline-offset: 5px;
    border-radius: 8px;
  }
`;

const LogoMark = styled.span`
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(1, 190, 150, 0.45);
  border-radius: 12px;
  color: #01be96;
  background: rgba(1, 190, 150, 0.1);
  font-size: 1.45rem;
`;

const LogoText = styled.span`
  display: grid;
  gap: 0.12rem;

  strong { font-size: 1rem; line-height: 1.2; letter-spacing: -0.01em; }
  span { color: #a8a8b3; font-size: 0.68rem; letter-spacing: 0.04em; }

  @media (max-width: 420px) {
    span { display: none; }
  }
`;

const Nav = styled.nav`
  @media (max-width: 760px) {
    position: absolute;
    top: calc(100% + 10px);
    left: 5%;
    right: 5%;
    display: grid;
    gap: 0.5rem;
    padding: ${({ $isOpen }) => ($isOpen ? "0.75rem" : "0 0.75rem")};
    max-height: ${({ $isOpen }) => ($isOpen ? "360px" : "0")};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    background: #242431;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
    transform: translateY(${({ $isOpen }) => ($isOpen ? "0" : "-8px")});
    transition: opacity 220ms ease, transform 220ms ease, max-height 220ms ease,
      padding 220ms ease, visibility 220ms ease;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;

  a {
    color: #d7d7df;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 180ms ease;
  }

  a:hover, a:focus-visible { color: #01be96; }
  a:focus-visible { outline: 2px solid rgba(1, 190, 150, 0.55); outline-offset: 5px; border-radius: 4px; }

  @media (max-width: 760px) {
    display: grid;
    gap: 0;

    a {
      display: flex;
      align-items: center;
      min-height: 48px;
      padding: 0 0.75rem;
      border-radius: 10px;
      font-size: 1rem;
    }

    a:hover, a:focus-visible { background: rgba(1, 190, 150, 0.1); }
  }
`;

const DesktopCta = styled.a`
  min-height: 44px;
  padding: 0 1.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  border-radius: 10px;
  color: #10151a;
  background: #01be96;
  text-decoration: none;
  font-size: 0.86rem;
  font-weight: 700;
  transition: transform 180ms ease, background 180ms ease;

  &:hover { background: #13d4ab; transform: translateY(-2px); }
  &:focus-visible { outline: 3px solid rgba(255, 255, 255, 0.72); outline-offset: 3px; }

  @media (max-width: 760px) { display: none; }
`;

const MobileCta = styled(DesktopCta)`
  display: none;
  @media (max-width: 760px) { display: inline-flex; width: 100%; min-height: 48px; }
`;

const MenuButton = styled.button`
  width: 48px;
  height: 48px;
  display: none;
  place-items: center;
  align-content: center;
  gap: 5px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  color: #fff;
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;

  span {
    width: 20px;
    height: 2px;
    border-radius: 999px;
    background: currentColor;
    transition: transform 200ms ease, opacity 200ms ease;
  }

  &[aria-expanded="true"] span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  &[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
  &[aria-expanded="true"] span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  &:focus-visible { outline: 3px solid rgba(1, 190, 150, 0.55); outline-offset: 3px; }

  @media (max-width: 760px) { display: grid; }
`;
