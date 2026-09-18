"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { FiArrowRight, FiCheck, FiSmartphone } from "react-icons/fi";
import scholaris from "../images/scholaris.png";
import whiteNoise from "../images/mobile-white-noise.jpg";

const ProfComponent = () => {
  return (
    <Hero id="home">
      <Copy>
        <Eyebrow><span aria-hidden="true" /> UI/UX, web &amp; mobile product studio</Eyebrow>
        <h1>
          Digital products built to <span className="accent">perform at real-world scale.</span>
        </h1>
        <Lead>
          We design intuitive product experiences and build conversion-focused
          websites and reliable mobile applications—from first idea to launch
          and ongoing support.
        </Lead>

        <Actions>
          <PrimaryAction href="https://wa.link/20ozs4">
            Start a project <FiArrowRight aria-hidden="true" />
          </PrimaryAction>
          <SecondaryAction href="#project">View our work</SecondaryAction>
        </Actions>

        <Proof aria-label="Agency highlights">
          <ProofItem><strong>1M+</strong><span>users reached</span></ProofItem>
          <ProofItem><strong>10+</strong><span>products shipped</span></ProofItem>
          <ProofItem><strong>Web + Mobile</strong><span>one product team</span></ProofItem>
        </Proof>
      </Copy>

      <Showcase aria-label="Selected web and mobile product work">
        <Glow aria-hidden="true" />
        <BrowserCard>
          <BrowserBar aria-hidden="true">
            <i /><i /><i /><span>scholarishq.com</span>
          </BrowserBar>
          <BrowserImage>
            <Image
              src={scholaris}
              alt="Scholaris school management platform homepage"
              fill
              priority
              sizes="(max-width: 860px) 90vw, 48vw"
            />
          </BrowserImage>
          <ProductLabel>
            <span><FiCheck aria-hidden="true" /> Live platform</span>
            <strong>Scholaris</strong>
          </ProductLabel>
        </BrowserCard>

        <PhoneCard>
          <PhoneTop aria-hidden="true" />
          <PhoneScreen>
            <Image
              src={whiteNoise}
              alt="White Noise private messaging application screen"
              fill
              priority
              sizes="180px"
            />
          </PhoneScreen>
        </PhoneCard>

        <ScaleBadge>
          <FiSmartphone aria-hidden="true" />
          <span><strong>1M+ users</strong>Mobile experience</span>
        </ScaleBadge>
      </Showcase>
    </Hero>
  );
};

export default ProfComponent;

const Hero = styled.section`
  width: min(90%, 1180px);
  min-height: 100svh;
  margin: 0 auto;
  padding: 8.5rem 0 5rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(420px, 0.9fr);
  align-items: center;
  gap: clamp(3rem, 7vw, 7rem);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding-top: 8rem;
    gap: 4rem;
  }

  @media (max-width: 520px) {
    width: min(92%, 1180px);
    padding-top: 7.5rem;
    padding-bottom: 4rem;
  }
`;

const Copy = styled.div`
  position: relative;
  z-index: 2;

  h1 {
    max-width: 760px;
    margin-top: 1.2rem;
    color: var(--text-primary);
    font-family: "Barlow Condensed", sans-serif;
    font-size: clamp(2.75rem, 5.4vw, 5rem);
    font-weight: 600;
    letter-spacing: -0.045em;
    line-height: 0.98;
  }

  h1 .accent {
    color: var(--accent);
    font-family: inherit;
    font-weight: inherit;
    letter-spacing: -0.06em;
  }

  @media (max-width: 520px) {
    h1 { font-size: clamp(2.5rem, 12vw, 3.5rem); line-height: 1; }
  }
`;

const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--text-secondary);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  span { width: 28px; height: 2px; background: var(--accent); }
`;

const Lead = styled.p`
  max-width: 640px;
  margin-top: 1.6rem;
  color: var(--text-secondary);
  font-size: clamp(1rem, 1.4vw, 1.12rem);
  line-height: 1.75;
`;

const Actions = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;

  @media (max-width: 420px) { a { width: 100%; } }
`;

const ActionBase = styled.a`
  min-height: 50px;
  padding: 0 1.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  border-radius: 10px;
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 700;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;

  &:hover { transform: translateY(-2px); }
  &:focus-visible { outline: 3px solid rgba(1, 190, 150, 0.55); outline-offset: 3px; }
`;

const PrimaryAction = styled(ActionBase)`
  color: var(--on-accent);
  background: var(--accent);
  &:hover { background: #13d4ab; }
`;

const SecondaryAction = styled(ActionBase)`
  border: 1px solid var(--border-strong);
  color: var(--text-primary);
  background: var(--surface-tint);
  &:hover { border-color: rgba(1, 190, 150, 0.65); background: rgba(1, 190, 150, 0.08); }
`;

const Proof = styled.div`
  margin-top: 2.4rem;
  padding-top: 1.35rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(.55rem, 2vw, 1.5rem);
  border-top: 1px solid var(--border);
`;

const ProofItem = styled.div`
  min-width: 0;
  display: grid;
  gap: 0.25rem;

  strong { color: var(--text-primary); font-size: clamp(.78rem, 2.8vw, 1rem); font-weight: 700; white-space: nowrap; }
  span { color: var(--text-muted); font-size: clamp(.58rem, 2vw, .72rem); line-height: 1.35; }
`;

const Showcase = styled.div`
  position: relative;
  min-height: 540px;
  display: grid;
  place-items: center;

  @media (max-width: 900px) {
    width: min(100%, 680px);
    min-height: 520px;
    margin: 0 auto;
  }

  @media (max-width: 520px) { min-height: 390px; }
`;

const Glow = styled.div`
  position: absolute;
  width: 72%;
  aspect-ratio: 1;
  border-radius: 999px;
  background: rgba(1, 190, 150, 0.14);
  filter: blur(65px);
`;

const BrowserCard = styled.div`
  position: absolute;
  top: 8%;
  right: 0;
  width: 88%;
  overflow: hidden;
  border: 1px solid var(--border-strong);
  border-radius: 18px;
  background: var(--bg-elevated);
  box-shadow: 0 34px 80px var(--shadow);
  transform: rotate(1.5deg);

  @media (max-width: 520px) { top: 5%; width: 94%; }
`;

const BrowserBar = styled.div`
  min-height: 38px;
  padding: 0 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--bg-soft);

  i { width: 7px; height: 7px; border-radius: 999px; background: var(--text-muted); }
  span { margin-left: 0.35rem; color: var(--text-muted); font-size: 0.62rem; }
`;

const BrowserImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background: #f3f6f7;

  img { object-fit: cover; object-position: top; }
`;

const ProductLabel = styled.div`
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  span { display: inline-flex; align-items: center; gap: 0.35rem; color: #8fe4d0; font-size: 0.68rem; }
  strong { color: var(--text-primary); font-size: 0.82rem; }
`;

const PhoneCard = styled.div`
  position: absolute;
  left: 0;
  bottom: 2%;
  z-index: 2;
  width: 37%;
  max-width: 185px;
  padding: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 26px;
  background: #101017;
  box-shadow: 0 28px 60px rgba(0, 0, 0, 0.48);
  transform: rotate(-4deg);

  @media (max-width: 520px) { width: 34%; border-radius: 20px; padding: 6px; }
`;

const PhoneTop = styled.div`
  position: absolute;
  top: 13px;
  left: 50%;
  z-index: 2;
  width: 34%;
  height: 12px;
  border-radius: 999px;
  background: #101017;
  transform: translateX(-50%);
`;

const PhoneScreen = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 19.5;
  overflow: hidden;
  border-radius: 19px;
  background: #fff;

  img { object-fit: cover; object-position: top; }
  @media (max-width: 520px) { border-radius: 14px; }
`;

const ScaleBadge = styled.div`
  position: absolute;
  right: -1rem;
  bottom: 10%;
  z-index: 3;
  min-height: 66px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  border: 1px solid rgba(1, 190, 150, 0.28);
  border-radius: 14px;
  color: var(--accent);
  background: var(--bg-elevated);
  box-shadow: 0 18px 45px var(--shadow);

  > svg { flex: 0 0 auto; font-size: 1.3rem; }
  span { display: grid; gap: 0.15rem; color: var(--text-muted); font-size: 0.64rem; }
  strong { color: var(--text-primary); font-size: 0.82rem; }

  @media (max-width: 520px) {
    right: 0;
    bottom: 6%;
    min-height: 58px;
    padding: 0.6rem 0.75rem;
  }
`;
