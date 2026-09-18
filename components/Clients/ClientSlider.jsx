"use client";

import React from "react";
import styled from "styled-components";
import { IoIosQuote } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";

const ClientSlider = ({ item }) => {
  const { name, position, project, service, mark, disc } = item;

  return (
    <SlideShell>
      <Card>
        <CardTop>
          <ProjectIdentity>
            <BrandMark aria-hidden="true">{mark}</BrandMark>
            <div>
              <ProjectName>{project}</ProjectName>
              <Service>{service}</Service>
            </div>
          </ProjectIdentity>
          <QuoteMark aria-hidden="true"><IoIosQuote /></QuoteMark>
        </CardTop>
        <Rating aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, index) => <AiFillStar key={index} aria-hidden="true" />)}
        </Rating>
        <Quote>“{disc}”</Quote>
        <Attribution>
          <span>{name}</span>
          <small>{position}</small>
        </Attribution>
      </Card>
    </SlideShell>
  );
};

export default ClientSlider;

const SlideShell = styled.div`
  height: 100%;
  padding: 0 0.65rem;
  @media (max-width: 530px) { padding: 0; }
`;

const Card = styled.article`
  height: 100%;
  min-height: 360px;
  display: flex;
  flex-direction: column;
  padding: 1.7rem;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: var(--card-gradient);
  box-shadow: 0 20px 50px var(--shadow);
  @media (max-width: 530px) {
    min-height: 0;
    padding: 1.25rem;
    border-radius: 18px;
    box-shadow: 0 14px 34px var(--shadow);
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

const ProjectIdentity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const BrandMark = styled.span`
  width: 46px;
  height: 46px;
  flex: 0 0 46px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background: rgba(1, 190, 150, 0.12);
  border: 1px solid rgba(1, 190, 150, 0.28);
  color: var(--accent-soft);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  @media (max-width: 530px) { width: 42px; height: 42px; flex-basis: 42px; }
`;

const ProjectName = styled.h3`
  margin: 0;
  color: var(--text-primary);
  font-size: 1rem;
  line-height: 1.25;
`;

const Service = styled.p`
  margin: 0.25rem 0 0;
  color: var(--text-muted);
  font-size: 0.72rem;
  line-height: 1.4;
`;

const QuoteMark = styled.span`
  color: var(--accent);
  font-size: 2.6rem;
  line-height: 0.8;
  opacity: 0.72;
  @media (max-width: 530px) { font-size: 2.15rem; }
`;

const Rating = styled.div`
  display: flex;
  gap: 0.18rem;
  margin-top: 1.75rem;
  color: #f4c95d;
  font-size: 0.95rem;
  @media (max-width: 530px) { margin-top: 1.2rem; }
`;

const Quote = styled.blockquote`
  flex: 1;
  margin: 1rem 0 1.7rem;
  color: var(--text-secondary);
  font-size: 0.94rem;
  line-height: 1.75;
  @media (max-width: 530px) {
    margin: .85rem 0 1.3rem;
    font-size: .9rem;
    line-height: 1.65;
  }
`;

const Attribution = styled.footer`
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  span, small { display: block; }
  span { color: var(--text-primary); font-size: 0.9rem; font-weight: 700; }
  small { margin-top: 0.25rem; color: var(--text-muted); font-size: 0.74rem; }
`;
