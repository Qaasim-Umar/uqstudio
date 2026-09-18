"use client";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";

const clients = [
  { name: "Scholaris Team", position: "Founder, Scholaris", project: "Scholaris", service: "Product design · Web · Mobile", mark: "SC", disc: "UQ Studio built our school management platform from the ground up. The mobile-first design, CBT exam flow, and admin tools work reliably for our team every day." },
  { name: "Qudus Hameed", position: "Founder, EcomWords Lab", project: "EcomWords Lab", service: "Brand website · Development", mark: "EL", disc: "They captured our brand voice and delivered a conversion-focused site that looks professional and loads fast. It has helped us attract the right e-commerce clients." },
  { name: "Abdullahi Qaasim", position: "Founder, Al Baahith Academy", project: "Al Baahith Academy", service: "UI/UX design · Web development", mark: "AB", disc: "Our academy needed a trustworthy online presence for Quran and Arabic classes. UQ Studio created a clean, easy-to-navigate site that helps parents enroll with confidence." },
  { name: "Omar Qm", position: "Co-founder, Assessly", project: "Assessly", service: "Product design · Web application", mark: "AS", disc: "From concept to launch, the team delivered a polished AI exam platform with a smooth student experience. The build is scalable and ready for us to grow." },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  adaptiveHeight: false,
};

const Clients = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 650px)");
    const tabletQuery = window.matchMedia("(max-width: 990px)");

    const syncSlides = () => {
      setSlidesToShow(mobileQuery.matches ? 1 : tabletQuery.matches ? 2 : 3);
    };

    syncSlides();
    mobileQuery.addEventListener("change", syncSlides);
    tabletQuery.addEventListener("change", syncSlides);

    return () => {
      mobileQuery.removeEventListener("change", syncSlides);
      tabletQuery.removeEventListener("change", syncSlides);
    };
  }, []);

  return (
    <Section id="client">
      <Container>
        <Results aria-label="UQ Studio results">
          <Result><strong>10+</strong><span>products shipped</span></Result>
          <Result><strong>1M+</strong><span>users reached</span></Result>
          <Result><strong>3</strong><span>product disciplines</span></Result>
        </Results>

        <HeadingRow>
          <HeadingCopy>
            <Eyebrow>Client results</Eyebrow>
            <h2>Built with care. <span className="accent">Remembered for the outcome.</span></h2>
          </HeadingCopy>
          <HeaderAside>
            <p>From first idea to launch and beyond, we become the product team our clients can rely on.</p>
            <Controls aria-label="Testimonial carousel controls">
              <button type="button" onClick={() => sliderRef.current?.slickPrev()} aria-label="Show previous testimonial"><IoIosArrowBack aria-hidden="true" /></button>
              <button type="button" onClick={() => sliderRef.current?.slickNext()} aria-label="Show next testimonial"><IoIosArrowForward aria-hidden="true" /></button>
            </Controls>
          </HeaderAside>
        </HeadingRow>

        <Carousel aria-label="Client testimonials">
          <Slider key={slidesToShow} ref={sliderRef} {...settings} slidesToShow={slidesToShow}>
            {clients.map((item) => <ClientSlider item={item} key={item.project} />)}
          </Slider>
        </Carousel>

        <ContactBridge>
          <div>
            <span>Have a product in mind?</span>
            <h2>Let’s turn it into something people want to use.</h2>
          </div>
          <a href="#footer">Start a conversation <FiArrowUpRight aria-hidden="true" /></a>
        </ContactBridge>
      </Container>
    </Section>
  );
};

export default Clients;

const Section = styled.section`
  overflow: hidden;
  background: radial-gradient(circle at 8% 20%, rgba(1,190,150,.08), transparent 24%), var(--bg-deep);
`;

const Container = styled.div`
  width: min(90%, 1180px);
  margin: 0 auto;
  padding: 6.5rem 0 0;
  @media (max-width: 650px) { width: min(92%, 1180px); padding-top: 4rem; }
`;

const Results = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 6rem;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--surface-tint);
  @media (max-width: 650px) {
    margin-bottom: 2.5rem;
    border-radius: 16px;
  }
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .35rem;
  padding: 1.6rem 1rem;
  text-align: center;
  & + & { border-left: 1px solid var(--border); }
  strong { color: var(--text-primary); font-size: clamp(1.35rem, 3vw, 2rem); line-height: 1; }
  span { color: var(--text-muted); font-size: .7rem; letter-spacing: .04em; text-transform: uppercase; }
  @media (max-width: 520px) {
    padding: 1.1rem .35rem;
    strong { font-size: 1.25rem; }
    span { font-size: .62rem; line-height: 1.35; letter-spacing: .02em; }
  }
`;

const HeadingRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(280px, .8fr);
  align-items: end;
  gap: clamp(2rem, 7vw, 6rem);
  margin-bottom: 2.6rem;
  @media (max-width: 780px) { grid-template-columns: 1fr; gap: .9rem; margin-bottom: 1.5rem; }
`;

const HeadingCopy = styled.div`
  max-width: 680px;
  h2 { max-width: 650px; margin: .8rem 0 0; color: var(--text-primary); font-family: "Barlow Condensed", sans-serif; font-size: clamp(2rem, 4vw, 3.4rem); font-weight: 700; line-height: 1.08; letter-spacing: -.04em; }
  h2 .accent { color: var(--accent); }
  @media (max-width: 520px) { h2 { font-size: 2.15rem; line-height: 1.04; } }
`;

const HeaderAside = styled.div`
  p { max-width: 440px; margin: 0; color: var(--text-muted); font-size: .98rem; line-height: 1.7; }
  @media (max-width: 520px) { p { font-size: .9rem; line-height: 1.65; } }
`;

const Eyebrow = styled.span`
  color: var(--accent-soft);
  font-size: .72rem;
  font-weight: 800;
  letter-spacing: .16em;
  text-transform: uppercase;
`;

const Controls = styled.div`
  display: flex;
  gap: .65rem;
  margin-top: 1.4rem;
  button { width: 46px; height: 46px; display: grid; place-items: center; border: 1px solid var(--border-strong); border-radius: 50%; background: var(--surface-tint); color: var(--text-primary); cursor: pointer; font-size: 1.15rem; transition: background 180ms ease, border-color 180ms ease, transform 180ms ease; }
  button:hover, button:focus-visible { border-color: var(--accent); background: var(--accent); color: var(--on-accent); outline: none; transform: translateY(-2px); }
  @media (max-width: 650px) { display: none; }
`;

const Carousel = styled.div`
  margin: 0 -.65rem;
  .slick-track { display: flex; }
  .slick-slide { height: auto; }
  .slick-slide > div { height: 100%; }
  .slick-dots { position: static; display: flex !important; justify-content: center; gap: .3rem; margin: 2rem 0 0; }
  .slick-dots li { width: auto; height: auto; margin: 0; }
  .slick-dots li button { position: relative; width: 44px; height: 44px; padding: 0; }
  .slick-dots li button::before { top: 20px; left: 8px; width: 28px; height: 4px; border-radius: 99px; background: var(--border-strong); color: transparent; content: ""; opacity: 1; transition: background 180ms ease; }
  .slick-dots li.slick-active button::before { background: var(--accent); }
  .slick-dots li button:focus-visible { outline: 2px solid #5ee4c6; outline-offset: 2px; }
  @media (prefers-reduced-motion: reduce) { .slick-track { transition-duration: 0ms !important; } }
  @media (max-width: 530px) {
    margin: 0;
    .slick-slider,
    .slick-list,
    .slick-track { padding: 0; }
    .slick-dots { gap: 0; margin-top: .85rem; }
  }
`;

const ContactBridge = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 6rem;
  padding: 3rem clamp(1.5rem, 5vw, 4rem);
  border-radius: 28px 28px 0 0;
  border: 1px solid var(--cta-border);
  background: var(--bg-cta);
  color: var(--text-primary);
  span { color: var(--accent); font-size: .72rem; font-weight: 800; letter-spacing: .13em; text-transform: uppercase; }
  h2 { max-width: 650px; margin: .55rem 0 0; font-family: "Barlow Condensed", sans-serif; font-size: clamp(1.65rem, 3vw, 2.45rem); font-weight: 700; line-height: 1.12; letter-spacing: -.035em; }
  a { min-height: 48px; flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; gap: .55rem; padding: .8rem 1.15rem; border-radius: 999px; background: var(--accent); color: var(--on-accent); font-size: .83rem; font-weight: 700; text-decoration: none; transition: transform 180ms ease, background 180ms ease; }
  a:hover, a:focus-visible { background: var(--accent-soft); outline: none; transform: translateY(-2px); }
  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 1.4rem;
    margin-top: 3.5rem;
    padding: 1.6rem 1.35rem;
    border-radius: 20px 20px 0 0;
    h2 { font-size: 1.9rem; }
    a { width: 100%; }
  }
`;
