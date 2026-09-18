"use client";

import React from "react";
import styled from "styled-components";
import { FiCheck } from "react-icons/fi";

const Card = ({ Icon, capabilities, description, number, title }) => {
  return (
    <Container>
      <CardTop>
        <IconWrap aria-hidden="true"><Icon /></IconWrap>
        <Number aria-hidden="true">{number}</Number>
      </CardTop>

      <h3>{title}</h3>
      <Description>{description}</Description>

      <CapabilityList aria-label={`${title} capabilities`}>
        {capabilities.map((capability) => (
          <li key={capability}>
            <FiCheck aria-hidden="true" />
            <span>{capability}</span>
          </li>
        ))}
      </CapabilityList>
    </Container>
  );
};

export default Card;

const Container = styled.article`
  position: relative;
  min-height: 360px;
  padding: clamp(1.5rem, 3vw, 2.25rem);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 18px;
  background:
    radial-gradient(circle at 92% 8%, rgba(1, 190, 150, 0.09), transparent 30%),
    linear-gradient(145deg, #2d2d3a, #262631);
  transition: transform 220ms ease, border-color 220ms ease,
    box-shadow 220ms ease;

  &::after {
    content: "";
    position: absolute;
    inset: auto 0 0;
    height: 3px;
    background: #01be96;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 220ms ease;
  }

  &:hover {
    border-color: rgba(1, 190, 150, 0.36);
    box-shadow: 0 24px 55px rgba(0, 0, 0, 0.22);
    transform: translateY(-5px);
  }

  &:hover::after {
    transform: scaleX(1);
  }

  h3 {
    margin-top: 2rem;
    color: #fff;
    font-size: clamp(1.35rem, 2vw, 1.65rem);
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.25;
  }

  @media (max-width: 520px) {
    min-height: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    &, &::after {
      transition: none;
    }
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrap = styled.span`
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(1, 190, 150, 0.32);
  border-radius: 14px;
  color: #01be96;
  background: rgba(1, 190, 150, 0.08);
  font-size: 1.35rem;
`;

const Number = styled.span`
  color: rgba(255, 255, 255, 0.24);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
`;

const Description = styled.p`
  max-width: 540px;
  margin-top: 0.85rem;
  color: #b8b8c2;
  font-size: 0.9rem;
  line-height: 1.7;
`;

const CapabilityList = styled.ul`
  margin-top: auto;
  padding-top: 1.6rem;
  display: grid;
  gap: 0.7rem;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    color: #dadade;
    font-size: 0.8rem;
    line-height: 1.4;
  }

  svg {
    flex: 0 0 auto;
    color: #01be96;
    font-size: 0.9rem;
  }
`;
