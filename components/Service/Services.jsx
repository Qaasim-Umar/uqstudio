"use client";

import React from "react";
import styled from "styled-components";
import {
  FiArrowUpRight,
  FiCode,
  FiLayout,
  FiPenTool,
  FiRefreshCw,
  FiSmartphone,
} from "react-icons/fi";
import Card from "./Card";

const services = [
  {
    number: "01",
    Icon: FiLayout,
    title: "UI/UX Design",
    description:
      "Thoughtful product experiences that make complex ideas feel clear, intuitive and easy to use.",
    capabilities: [
      "Product strategy and user journeys",
      "Wireframes and interactive prototypes",
      "Design systems and usability testing",
    ],
  },
  {
    number: "02",
    Icon: FiPenTool,
    title: "Web Design",
    description:
      "Clear, conversion-focused interfaces shaped around your brand, customers and business goals.",
    capabilities: [
      "Conversion-focused page strategy",
      "Responsive website design",
      "Visual identity and interaction direction",
    ],
  },
  {
    number: "03",
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
    number: "04",
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
    number: "05",
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
              From idea to a <span className="accent">dependable digital product.</span>
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
  background: var(--bg-services);
  color: var(--services-text);
`;

const Container = styled.div`
  width: min(90%, 1180px);
  margin: 0 auto;
  padding: clamp(5rem, 9vw, 8rem) 0;

  @media (max-width: 520px) {
    width: min(92%, 1180px);
    padding: 4rem 0;
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
    color: var(--services-text);
    font-family: "Barlow Condensed", sans-serif;
    font-size: clamp(2.35rem, 4.6vw, 4.2rem);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1.03;
  }

  h2 .accent {
    color: var(--services-text);
  }
`;

const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--services-muted);
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  span {
    width: 28px;
    height: 2px;
    background: var(--services-text);
  }
`;

const Intro = styled.div`
  display: grid;
  gap: 1.25rem;

  p {
    color: var(--services-muted);
    font-size: 0.98rem;
    line-height: 1.75;
  }

  a {
    width: fit-content;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--services-text);
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
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1rem;

  > article {
    grid-column: span 2;
  }

  > article:nth-last-child(-n + 2) {
    grid-column: span 3;
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    > article,
    > article:nth-last-child(-n + 2) {
      grid-column: span 1;
    }

    > article:last-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;

    > article,
    > article:last-child {
      grid-column: span 1;
    }
  }
`;
