"use client";

import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { FiArrowUp, FiArrowUpRight, FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";

const contactLinks = [
  {
    label: "WhatsApp",
    value: "+234 9165 276 094",
    href: "https://wa.link/20ozs4",
    icon: <FiPhoneCall aria-hidden="true" />,
  },
  {
    label: "Email",
    value: "omayr010@gmail.com",
    href: "mailto:omayr010@gmail.com",
    icon: <FiMail aria-hidden="true" />,
  },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#service" },
  { label: "Work", href: "#project" },
  { label: "Testimonials", href: "#client" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Section id="footer" aria-labelledby="contact-title">
      <Container>
        <ContactGrid>
          <Intro>
            <Eyebrow>Start a project</Eyebrow>
            <h2 id="contact-title">Tell us what <span className="accent">you’re building.</span></h2>
            <p>
              Share the idea, the challenge, or where your current product feels
              stuck. We’ll help you find the clearest way forward.
            </p>

            <ContactList>
              {contactLinks.map((item) => (
                <ContactLink key={item.label} href={item.href} target={item.label === "WhatsApp" ? "_blank" : undefined} rel={item.label === "WhatsApp" ? "noreferrer" : undefined}>
                  <IconBox>{item.icon}</IconBox>
                  <span>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </span>
                  <FiArrowUpRight className="arrow" aria-hidden="true" />
                </ContactLink>
              ))}
            </ContactList>

            <Location>
              <FiMapPin aria-hidden="true" />
              <span>Based in Ilorin, Nigeria · Working with teams everywhere</span>
            </Location>
          </Intro>

          <FormCard>
            <FormHeader>
              <span>Project enquiry</span>
              <small>All fields are required</small>
            </FormHeader>
            <form action="https://smartforms.dev/submit/6426f0bf0dd8ac0a532015bb" method="POST">
              <FieldRow>
                <Field>
                  <label htmlFor="contact-name">Your name</label>
                  <input id="contact-name" type="text" name="name" placeholder="Muhammad Qaasim" autoComplete="name" required />
                </Field>
                <Field>
                  <label htmlFor="contact-email">Email address</label>
                  <input id="contact-email" type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
                </Field>
              </FieldRow>

              <Field>
                <label htmlFor="contact-service">What do you need?</label>
                <SelectWrap>
                  <select id="contact-service" name="service" defaultValue="" required>
                    <option value="" disabled>Select a service</option>
                    <option value="ui-ux-design">UI/UX design</option>
                    <option value="website">Website design & development</option>
                    <option value="mobile-app">Mobile app development</option>
                    <option value="product-support">Product support</option>
                    <option value="not-sure">I’m not sure yet</option>
                  </select>
                </SelectWrap>
              </Field>

              <Field>
                <label htmlFor="contact-message">Tell us about the project</label>
                <textarea id="contact-message" name="description" rows="6" placeholder="What are you building, and what would a successful outcome look like?" required />
              </Field>

              <SubmitButton type="submit">
                Send project enquiry <FiArrowUpRight aria-hidden="true" />
              </SubmitButton>
              <FormNote>Prefer a quick conversation? Use WhatsApp instead.</FormNote>
            </form>
          </FormCard>
        </ContactGrid>

        <FooterBar>
          <Brand>
            <BrandMark aria-hidden="true">UQ</BrandMark>
            <span>
              <strong>UQ Studio</strong>
              <small>Digital products built to perform.</small>
            </span>
          </Brand>

          <FooterNav aria-label="Footer navigation">
            {footerLinks.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}
          </FooterNav>

          <Socials>
            <a href="https://github.com/Qaasim-Umar" target="_blank" rel="noreferrer" aria-label="UQ Studio on GitHub">
              <AiFillGithub aria-hidden="true" />
            </a>
            <BackToTop type="button" onClick={scrollToTop} aria-label="Back to top">
              <FiArrowUp aria-hidden="true" />
            </BackToTop>
          </Socials>
        </FooterBar>

        <Legal>
          <span>© {currentYear} UQ Studio. All rights reserved.</span>
          <span>UI/UX · Web · Mobile</span>
        </Legal>
      </Container>
    </Section>
  );
};

export default Footer;

const Section = styled.footer`
  background: var(--bg-contact);
  color: var(--contact-text);

  @media (prefers-reduced-motion: reduce) {
    a,
    button,
    input,
    select,
    textarea {
      transition: none !important;
    }
  }
`;

const Container = styled.div`
  width: min(90%, 1180px);
  margin: 0 auto;
  padding: 7rem 0 2rem;
  @media (max-width: 700px) { width: min(92%, 1180px); padding-top: 4.5rem; }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(480px, 1.1fr);
  gap: clamp(3rem, 7vw, 7rem);
  align-items: start;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
  @media (max-width: 520px) { gap: 2.5rem; }
`;

const Intro = styled.div`
  h2 { max-width: 560px; margin: .8rem 0 0; color: var(--contact-text); font-family: "Barlow Condensed", sans-serif; font-size: clamp(2.35rem, 5vw, 4.5rem); font-weight: 700; line-height: 1.02; letter-spacing: -.05em; }
  h2 .accent { color: var(--contact-accent); }
  > p { max-width: 570px; margin: 1.4rem 0 0; color: var(--contact-muted); font-size: 1rem; line-height: 1.75; }
`;

const Eyebrow = styled.span`
  color: var(--contact-accent);
  font-size: .72rem;
  font-weight: 800;
  letter-spacing: .16em;
  text-transform: uppercase;
`;

const ContactList = styled.div`
  display: grid;
  gap: .75rem;
  margin-top: 2.4rem;
`;

const ContactLink = styled.a`
  min-height: 72px;
  display: grid;
  grid-template-columns: 44px 1fr 24px;
  align-items: center;
  gap: .9rem;
  padding: .8rem;
  border: 1px solid var(--border);
  border-radius: 16px;
  color: var(--contact-text);
  text-decoration: none;
  transition: border-color 180ms ease, background 180ms ease;
  small, strong { display: block; }
  small { color: var(--contact-muted); font-size: .68rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
  strong { margin-top: .18rem; font-size: .87rem; }
  .arrow { color: var(--contact-muted); transition: transform 180ms ease, color 180ms ease; }
  &:hover, &:focus-visible { border-color: rgba(1,190,150,.58); background: rgba(1,190,150,.06); outline: none; }
  &:hover .arrow, &:focus-visible .arrow { color: var(--accent-soft); transform: translate(2px, -2px); }
`;

const IconBox = styled.span`
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: rgba(1,190,150,.11);
  color: var(--accent-soft);
  font-size: 1.1rem;
`;

const Location = styled.div`
  display: flex;
  align-items: flex-start;
  gap: .65rem;
  margin-top: 1.4rem;
  color: var(--contact-muted);
  font-size: .78rem;
  line-height: 1.55;
  svg { flex: 0 0 auto; margin-top: .15rem; color: var(--contact-accent); }
`;

const FormCard = styled.div`
  padding: clamp(1.25rem, 4vw, 2.2rem);
  border: 1px solid var(--border);
  border-radius: 24px;
  background: var(--bg-elevated);
  box-shadow: 0 24px 70px var(--shadow);
  @media (max-width: 520px) { border-radius: 18px; box-shadow: 0 16px 38px var(--shadow); }
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.8rem;
  span { font-size: 1.15rem; font-weight: 750; }
  small { color: var(--text-muted); font-size: .72rem; }
  @media (max-width: 420px) {
    flex-direction: column;
    gap: .3rem;
  }
`;

const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media (max-width: 560px) { grid-template-columns: 1fr; gap: 0; }
`;

const Field = styled.div`
  margin-bottom: 1.15rem;
  label { display: block; margin-bottom: .5rem; color: var(--text-secondary); font-size: .78rem; font-weight: 650; }
  input, select, textarea { width: 100%; border: 1px solid var(--border-strong); border-radius: 12px; background: var(--bg-input); color: var(--text-primary); font: inherit; font-size: .9rem; transition: border-color 180ms ease, background 180ms ease, box-shadow 180ms ease; }
  input, select { min-height: 50px; padding: 0 .9rem; }
  textarea { min-height: 150px; resize: vertical; padding: .9rem; line-height: 1.6; }
  input::placeholder, textarea::placeholder { color: var(--text-muted); opacity: .72; }
  input:focus, select:focus, textarea:focus { border-color: #01be96; background: rgba(1,190,150,.035); box-shadow: 0 0 0 3px rgba(1,190,150,.12); outline: none; }
  select option { background: var(--bg-section); color: var(--text-primary); }
`;

const SelectWrap = styled.div`
  position: relative;
  select { cursor: pointer; }
`;

const SubmitButton = styled.button`
  min-height: 52px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .6rem;
  border: 0;
  border-radius: 12px;
  background: var(--accent);
  color: var(--on-accent);
  cursor: pointer;
  font: inherit;
  font-size: .88rem;
  font-weight: 800;
  transition: background 180ms ease, transform 180ms ease;
  &:hover, &:focus-visible { background: #5ee4c6; outline: none; transform: translateY(-2px); }
  &:active { transform: translateY(0); }
`;

const FormNote = styled.p`
  margin: .85rem 0 0;
  color: var(--text-muted);
  font-size: .72rem;
  text-align: center;
`;

const FooterBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;
  margin-top: 7rem;
  padding: 2rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  @media (max-width: 820px) { grid-template-columns: 1fr auto; }
  @media (max-width: 560px) { margin-top: 4rem; align-items: start; gap: 1.25rem; }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
  min-width: 0;
  strong, small { display: block; }
  strong { font-size: .88rem; }
  small { margin-top: .15rem; color: var(--contact-muted); font-size: .68rem; }
`;

const BrandMark = styled.span`
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(1,190,150,.32);
  border-radius: 11px;
  background: rgba(1,190,150,.1);
  color: var(--accent-soft);
  font-size: .7rem;
  font-weight: 850;
`;

const FooterNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  a { min-height: 44px; display: inline-flex; align-items: center; color: var(--contact-muted); font-size: .76rem; text-decoration: none; transition: color 180ms ease; }
  a:hover, a:focus-visible { color: var(--accent-soft); outline: none; }
  @media (max-width: 820px) { grid-column: 1 / -1; grid-row: 2; flex-wrap: wrap; }
  @media (max-width: 560px) { gap: .5rem 1.2rem; }
`;

const Socials = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: .6rem;
  a, button { width: 44px; height: 44px; display: grid; place-items: center; border: 1px solid var(--border); border-radius: 50%; background: transparent; color: var(--text-primary); cursor: pointer; font-size: 1.1rem; transition: border-color 180ms ease, background 180ms ease, color 180ms ease; }
  a:hover, a:focus-visible, button:hover, button:focus-visible { border-color: var(--accent); background: var(--accent); color: var(--on-accent); outline: none; }
`;

const BackToTop = styled.button``;

const Legal = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.5rem;
  color: var(--contact-muted);
  font-size: .68rem;
  @media (max-width: 520px) { flex-direction: column; }
`;
