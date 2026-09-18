"use client";

import React from "react";
import styled from "styled-components";
import {
  FiArrowUpRight,
  FiCode,
  FiPenTool,
  FiRefreshCw,
  FiSmartphone,
} from "react-icons/fi";
import Card from "./Card";

const services = [
  {
    number: "01",
    Icon: FiPenTool,
    title: "Web Design",
    description:
      "Clear, conversion-focused interfaces shaped around your brand, customers and business goals.",
    capabilities: [
      "UX strategy and user flows",
      "Responsive interface design",
      "Design systems and prototypes",
    ],
  },
  {
    number: "02",
    Icon: FiCode,
    title: "Web Development",
    description:
      "Fast, scalable websites and platforms engineered for real customers and long-term growth.",
    capabilities: [
      "Next.js and React applications",
      "Business platforms and e-commerce",
      "APIs, CMS and integrations",
    ],
  },
  {
    number: "03",
    Icon: FiSmartphone,
    title: "Mobile App Development",
    description:
      "Reliable iOS and Android applications—from focused MVPs to products serving millions of users.",
    capabilities: [
      "Cross-platform Flutter apps",
      "Scalable product architecture",
      "App Store and Play Store delivery",
    ],
  },
  {
    number: "04",
    Icon: FiRefreshCw,
    title: "Product Support",
    description:
      "Practical support after launch to keep your product secure, performant and improving.",
    capabilities: [
      "Performance and security care",
      "New features and iteration",
      "Hosting and product monitoring",
    ],
  },
];

const Services = () => {
  return (
    <Section id="service" aria-labelledby="services-title">
      <Container>
        <SectionHeader>
          <HeadingGroup>
            <Eyebrow><span aria-hidden="true" /> What we do</Eyebrow>
            <h2 id="services-title">
              From idea to a <em>dependable digital product.</em>
            </h2>
          </HeadingGroup>

          <Intro>
            <p>
              Strategy, design and engineering under one roof. We help teams
              launch confidently, then stay close as their products grow.
            </p>
            <a href="#footer">
              Discuss your project <FiArrowUpRight aria-hidden="true" />
            </a>
          </Intro>
        </SectionHeader>

        <Cards>
          {services.map((service) => (
            <Card key={service.number} {...service} />
          ))}
        </Cards>
      </Container>
    </Section>
  );
};

export default Services;

const Section = styled.section`
  scroll-margin-top: 76px;
  background: #191923;
`;

const Container = styled.div`
  width: min(90%, 1180px);
  margin: 0 auto;
  padding: clamp(5rem, 9vw, 8rem) 0;

  @media (max-width: 520px) {
    width: min(92%, 1180px);
  }
`;

const SectionHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.65fr);
  align-items: end;
  gap: clamp(2rem, 7vw, 7rem);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    align-items: start;
  }
`;

const HeadingGroup = styled.div`
  h2 {
    max-width: 720px;
    margin-top: 1rem;
    color: #fff;
    font-family: "Secular One", sans-serif;
    font-size: clamp(2.35rem, 4.6vw, 4.2rem);
    font-weight: 400;
    letter-spacing: -0.04em;
    line-height: 1.03;
  }

  h2 em {
    color: #01be96;
    font-style: normal;
  }
`;

const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: #c9c9d2;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  span {
    width: 28px;
    height: 2px;
    background: #01be96;
  }
`;

const Intro = styled.div`
  display: grid;
  gap: 1.25rem;

  p {
    color: #aaaab5;
    font-size: 0.98rem;
    line-height: 1.75;
  }

  a {
    width: fit-content;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #01be96;
    text-decoration: none;
    font-size: 0.88rem;
    font-weight: 700;
  }

  a svg {
    transition: transform 180ms ease;
  }

  a:hover svg {
    transform: translate(2px, -2px);
  }

  a:focus-visible {
    outline: 3px solid rgba(1, 190, 150, 0.5);
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

const Cards = styled.div`
  margin-top: clamp(3rem, 6vw, 5rem);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
