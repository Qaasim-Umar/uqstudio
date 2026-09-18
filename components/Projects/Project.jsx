"use client";

import Image from "next/image";
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";

const Project = ({ item }) => {
  const {
    actionLabel,
    description,
    href,
    image,
    imageFit,
    screens,
    services,
    status,
    title,
    type,
  } = item;

  return (
    <Card>
      <Visual $contain={imageFit === "contain"} $gallery={Boolean(screens)}>
        {screens ? (
          <ScreenGallery $count={screens.length} aria-label={`${title} app screens`}>
            {screens.map((screen) => (
              <ScreenFrame key={screen.alt}>
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  fill
                  sizes="(max-width: 680px) 22vw, 90px"
                />
              </ScreenFrame>
            ))}
          </ScreenGallery>
        ) : (
          <Image
            src={image}
            alt={`${title} product interface`}
            fill
            sizes="(max-width: 680px) 92vw, (max-width: 900px) 45vw, 55vw"
          />
        )}
        <Type>{type}</Type>
        <Status>{status}</Status>
      </Visual>

      <Content>
        <h3>{title}</h3>
        <Description>{description}</Description>

        <Services aria-label={`${title} services`}>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </Services>

        <ProjectLink href={href} target="_blank" rel="noopener noreferrer">
          {actionLabel} <FiArrowUpRight aria-hidden="true" />
        </ProjectLink>
      </Content>
    </Card>
  );
};

export default Project;

const Card = styled.article`
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--bg-elevated);
  transition: transform 220ms ease, border-color 220ms ease,
    box-shadow 220ms ease;

  &:hover,
  &:focus-within {
    border-color: rgba(1, 190, 150, 0.34);
    box-shadow: 0 24px 54px var(--shadow);
    transform: translateY(-5px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Visual = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${({ $gallery }) =>
    $gallery
      ? "radial-gradient(circle at 50% 115%, rgba(1, 190, 150, 0.26), transparent 55%), #dde3e5"
      : "#e9ecee"};

  > img {
    object-fit: ${({ $contain }) => ($contain ? "contain" : "cover")};
    object-position: center;
    padding: ${({ $contain }) => ($contain ? "0.75rem" : "0")};
    transition: transform 300ms ease;
  }

  ${Card}:hover & > img,
  ${Card}:focus-within & > img {
    transform: scale(1.025);
  }

  @media (prefers-reduced-motion: reduce) {
    > img {
      transition: none;
    }
  }
`;

const ScreenGallery = styled.div`
  position: absolute;
  inset: 0;
  padding: 0.75rem 1rem 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: ${({ $count }) => ($count === 4 ? "0.42rem" : "0.65rem")};
  @media (max-width: 420px) { padding: .5rem .55rem 0; gap: .3rem; }
`;

const ScreenFrame = styled.div`
  position: relative;
  width: min(22%, 86px);
  aspect-ratio: 9 / 19.5;
  overflow: hidden;
  border: 2px solid rgba(22, 24, 31, 0.9);
  border-bottom: 0;
  border-radius: 11px 11px 0 0;
  background: #fff;
  box-shadow: 0 10px 22px rgba(20, 24, 31, 0.22);
  transition: transform 250ms ease;

  &:nth-child(even) {
    transform: translateY(0.55rem);
  }

  img {
    object-fit: cover;
    object-position: top;
  }

  ${Card}:hover &,
  ${Card}:focus-within & {
    transform: translateY(-0.15rem);
  }

  ${Card}:hover &:nth-child(even),
  ${Card}:focus-within &:nth-child(even) {
    transform: translateY(0.35rem);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 1rem;
  z-index: 2;
  min-height: 30px;
  padding: 0.4rem 0.65rem;
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 999px;
  color: #fff;
  background: rgba(25, 25, 35, 0.86);
  backdrop-filter: blur(10px);
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const Type = styled(Badge)`
  left: 1rem;
  @media (max-width: 420px) { top: .65rem; left: .65rem; }
`;

const Status = styled(Badge)`
  right: 1rem;
  border-color: rgba(1, 190, 150, 0.4);
  color: #8fe4d0;
  @media (max-width: 420px) { top: .65rem; right: .65rem; }
`;

const Content = styled.div`
  min-height: 315px;
  padding: clamp(1.35rem, 2.5vw, 1.8rem);
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
    color: var(--text-primary);
    font-family: "Barlow Condensed", sans-serif;
    font-size: clamp(1.5rem, 2.2vw, 2rem);
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.15;
  }

  @media (max-width: 680px) {
    min-height: auto;
    padding: 1.25rem;
  }
`;

const Description = styled.p`
  max-width: 620px;
  margin-top: 0.8rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.7;
`;

const Services = styled.ul`
  margin-top: 1.35rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;

  li {
    padding: 0.42rem 0.62rem;
    border: 1px solid var(--border);
    border-radius: 999px;
    color: var(--text-secondary);
    background: var(--surface-tint);
    font-size: 0.7rem;
    line-height: 1.2;
  }
`;

const ProjectLink = styled.a`
  width: fit-content;
  min-height: 44px;
  margin-top: auto;
  padding-top: 1.25rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent);
  text-decoration: none;
  font-size: 0.86rem;
  font-weight: 700;

  svg {
    transition: transform 180ms ease;
  }

  &:hover svg {
    transform: translate(2px, -2px);
  }

  &:focus-visible {
    outline: 3px solid rgba(1, 190, 150, 0.5);
    outline-offset: 4px;
    border-radius: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }
  }
`;
