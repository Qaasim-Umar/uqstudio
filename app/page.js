"use client";

import styled from "styled-components";
import Header from "../components/Banner/Header";
import ProfComponent from "../components/Banner/ProfComponent";
import Clients from "../components/Clients/Clients";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects";
import Services from "../components/Service/Services";

export default function Home() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Services />
      <LightColor>
        <Projects />
      </LightColor>
      <Clients />
      <LightColor>
        <Footer />
      </LightColor>
    </Container>
  );
}

const Container = styled.div``;
const Banner = styled.div`
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 78% 35%, rgba(1, 190, 150, 0.08), transparent 28%),
    linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(38, 38, 49) 100%);
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
