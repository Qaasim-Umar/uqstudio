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

const Container = styled.div`
  background: var(--bg-main);
  color: var(--text-primary);
`;
const Banner = styled.div`
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 78% 35%, rgba(1, 190, 150, 0.08), transparent 28%),
    var(--page-gradient);
`;

const LightColor = styled.div`
  background: var(--page-gradient);
`;
