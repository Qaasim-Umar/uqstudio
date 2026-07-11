"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import '../../styles/global.css'
import { AiOutlineTwitter } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import profileImage3 from "../images/hero.png"


const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Welcome to <span className="green">UQ Studio</span>
          </h4>
          <h1 className="green">UQ Studio</h1>
          <h3>Web Design & Development Agency</h3>
          <p>
            We're a team specializing in building ( and occasionally designing ) exceptional digital experiences for businesses.
          </p>
          <div className="button-flex">
            <a href="https://wa.link/20ozs4"> <button>Let's talk</button></a>
            <a href="#project"> <button>View Our Work</button></a>
          </div>
          <Social>
            <p>Follow us on</p>
            <div className="social-icons">
              <span>
                <a href="https://twitter.com/i_codejs">
                  <AiOutlineTwitter />
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="https://ng.linkedin.com/in/qaasim-umar-103949195">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <Image
            src={profileImage3}
            alt="Qaasim Umar profile photo"
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  justify-content:center;
  align-items:center;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    max-width: 2000px;
    height: auto;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
  
    @media (max-width: 840px) {
      max-width: 380px;
    }

    @media (max-width: 640px) {
      max-width: 320px;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
