"use client";

import styled from "styled-components";
import Project from "./Project";
import assessly from "../images/assessly.png";
import ecomwordslab from "../images/ecom.png";
import scholaris from "../images/scholaris.png";
import scholarisDesign from "../images/uiux-scholaris.png";
import scholarisMobileOne from "../images/mobile-scholaris-1.webp";
import scholarisMobileTwo from "../images/mobile-scholaris-2.webp";
import scholarisMobileThree from "../images/mobile-scholaris-3.webp";
import stake from "../images/uiux-stake.png";
import alaje from "../images/uiux-alaje.png";
import albaahith from "../images/uiux-baahith.png";
import whiteNoise from "../images/mobile-white-noise.jpg";
import whiteNoiseSplash from "../images/mobile-white-noise-splash.jpg";
import whiteNoiseProfile from "../images/mobile-white-noise-profile.jpg";
import whiteNoiseSettings from "../images/mobile-white-noise-settings.jpg";
import teesas from "../images/mobile-teesas.jpg";
import teesasSplash from "../images/mobile-teesas-splash.jpg";
import teesasLesson from "../images/mobile-teesas-lesson.jpg";
import biuda from "../images/mobile-biuda.webp";
import hotelsNg from "../images/mobile-hotels-ng.webp";

const projectData = [
  {
    slug: "scholaris",
    category: "Websites",
    image: scholaris,
    title: "Scholaris",
    type: "Education platform",
    status: "Live product",
    description:
      "A mobile-first school management platform that brings administration, attendance, CBT exams and academic operations into one clear product experience.",
    href: "https://scholarishq.com",
    actionLabel: "View live platform",
    services: ["UI/UX Design", "Web Development", "Product Engineering"],
  },
  {
    slug: "scholaris-uiux",
    category: "UI/UX Design",
    image: scholarisDesign,
    title: "Scholaris",
    type: "Education product",
    status: "Shipped",
    description:
      "A mobile-first product experience that simplifies attendance, CBT exams, school finance and administration for teachers, parents and school leaders.",
    href: "https://scholarishq.com",
    actionLabel: "View live product",
    services: ["Product Strategy", "UX Architecture", "Interface Design"],
  },
  {
    slug: "stake-ng",
    category: "UI/UX Design",
    image: stake,
    title: "Stake NG",
    type: "Fintech product",
    status: "Prototype",
    description:
      "An investment experience designed to make fractional real-estate opportunities, portfolio tracking and account verification feel approachable and trustworthy.",
    href: "https://www.figma.com/proto/fSZ3LiNt6RIZC7siE4qIOT/Stake-App?page-id=0%3A1&node-id=81-14293&viewport=-717%2C-1101%2C0.23&t=1XN0KuZ67osRx3Uj-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=81%3A14072&show-proto-sidebar=1&hotspot-hints=0",
    actionLabel: "Explore prototype",
    services: ["Product Strategy", "UI/UX Design", "Prototyping"],
  },
  {
    slug: "alaje-connect",
    category: "UI/UX Design",
    image: alaje,
    title: "Alajé Connect",
    type: "Service marketplace",
    status: "Prototype",
    description:
      "A mobile marketplace experience that helps customers discover trusted local artisans while giving service providers a clear path into the platform.",
    href: "https://www.figma.com/proto/omMtZxJopW2RluNAFwwXaT/ALAJE-CONNECT?node-id=47-296",
    actionLabel: "Explore prototype",
    services: ["UX Flows", "Mobile UI", "Interactive Prototype"],
  },
  {
    slug: "al-baahith",
    category: "Websites",
    image: albaahith,
    title: "Al Baahith Academy",
    type: "Education website",
    status: "Live product",
    description:
      "A bilingual learning platform for Quran, Arabic and Islamic Studies, designed to serve both English- and Arabic-speaking students with clarity.",
    href: "https://www.albaahithacademy.com",
    actionLabel: "View live website",
    services: ["Bilingual UI/UX", "Web Design", "Web Development"],
  },
  {
    slug: "assessly",
    category: "Websites",
    image: assessly,
    title: "Assessly",
    type: "AI exam platform",
    status: "Live product",
    description:
      "An AI-powered assessment platform that helps students prepare through structured practice, interactive exams and focused learning workflows.",
    href: "https://assessly.ng",
    actionLabel: "View live platform",
    services: ["Product Design", "Next.js Development", "AI Integration"],
  },
  {
    slug: "ecomwords-lab",
    category: "Websites",
    image: ecomwordslab,
    title: "EcomWords Lab",
    type: "Agency website",
    status: "Live product",
    description:
      "A conversion-focused website that positions a specialist copywriting agency clearly and helps e-commerce brands move confidently toward an enquiry.",
    href: "https://ecomwordslab.com",
    actionLabel: "View live website",
    services: ["Web Strategy", "Interface Design", "Next.js Development"],
  },
  {
    slug: "scholaris-mobile",
    category: "Mobile Apps",
    image: scholarisMobileOne,
    screens: [
      { src: scholarisMobileOne, alt: "Scholaris multilingual dashboard screens" },
      { src: scholarisMobileTwo, alt: "Scholaris multi-tenant profile switcher" },
      { src: scholarisMobileThree, alt: "Scholaris school payment dashboard" },
    ],
    title: "Scholaris Mobile",
    type: "School management",
    status: "Live product",
    description:
      "A trilingual school-management app that brings attendance, fees, CBT assessments and multi-school access into one mobile experience.",
    href: "https://play.google.com/store/apps/details?id=com.scholarishq.mobile",
    actionLabel: "View on Play Store",
    services: ["Mobile Product Design", "Flutter Development", "Product Engineering"],
  },
  {
    slug: "white-noise",
    category: "Mobile Apps",
    image: whiteNoise,
    screens: [
      { src: whiteNoiseSplash, alt: "White Noise welcome screen" },
      { src: whiteNoiseProfile, alt: "White Noise profile screen" },
      { src: whiteNoise, alt: "White Noise encrypted chat screen" },
      { src: whiteNoiseSettings, alt: "White Noise settings screen" },
    ],
    title: "White Noise",
    type: "Private messaging",
    status: "Open source",
    description:
      "A decentralised, privacy-first messenger built with Flutter and a Rust cryptography core for end-to-end encrypted group conversations over NOSTR.",
    href: "https://github.com/marmot-protocol/whitenoise-archive/releases",
    actionLabel: "Explore the project",
    services: ["Flutter Development", "Rust Integration", "Secure Messaging"],
  },
  {
    slug: "teesas-education",
    category: "Mobile Apps",
    image: teesas,
    screens: [
      { src: teesasSplash, alt: "Teesas Education splash screen" },
      { src: teesas, alt: "Teesas Education learning home screen" },
      { src: teesasLesson, alt: "Teesas Education video lesson screen" },
    ],
    title: "Teesas Education",
    type: "Learning app",
    status: "Live product",
    description:
      "A gamified learning app with video lessons, live tutoring and exam preparation for Nigerian students from primary school through JAMB, WAEC and NECO.",
    href: "https://play.google.com/store/apps/details?id=app.teesas",
    actionLabel: "View on Play Store",
    services: ["Flutter Development", "Learning Experience", "Product Engineering"],
  },
  {
    slug: "biuda",
    category: "Mobile Apps",
    image: biuda,
    title: "Biuda",
    type: "Kids EdTech",
    status: "Live product",
    description:
      "A gamified EdTech app helping children and teenagers learn coding, design, Python, AI and game development through live classes and self-paced projects.",
    href: "https://play.google.com/store/apps/details?id=com.biudahq.mobile.app",
    actionLabel: "View on Play Store",
    services: ["Flutter Development", "Gamified Learning", "Product Engineering"],
  },
  {
    slug: "hotels-ng",
    category: "Mobile Apps",
    image: hotelsNg,
    title: "Hotels.ng",
    type: "Travel booking",
    status: "Live product",
    description:
      "A hotel-booking app that helps travellers search and book more than 10,000 hotels across over 1,000 Nigerian cities, with flexible stay management.",
    href: "https://play.google.com/store/apps/details?id=ng.hotels.booking.app",
    actionLabel: "View on Play Store",
    services: ["Flutter Development", "Booking Experience", "Product Engineering"],
  },
];

const workSections = [
  {
    number: "01",
    title: "UI/UX Designs",
    category: "UI/UX Design",
    description:
      "Product concepts, user journeys and interactive prototypes shaped for intuitive mobile experiences.",
  },
  {
    number: "02",
    title: "Websites",
    category: "Websites",
    description:
      "Clear, conversion-focused websites that give growing organisations a stronger digital presence.",
  },
  {
    number: "03",
    title: "Mobile Apps",
    category: "Mobile Apps",
    description:
      "Production mobile products engineered for scale, reliability and everyday use across iOS and Android.",
  },
];

const Projects = () => {
  return (
    <Section id="project" aria-labelledby="work-title">
      <Container>
        <SectionHeader>
          <HeadingGroup>
            <Eyebrow><span aria-hidden="true" /> Selected work</Eyebrow>
            <h2 id="work-title">
              Products designed for <span className="accent">real people and real use.</span>
            </h2>
          </HeadingGroup>

          <Intro>
            Selected product design and development work across websites,
            mobile applications and digital platforms.
          </Intro>
        </SectionHeader>

        <WorkSections>
          {workSections.map((workSection) => {
            const projects = projectData.filter(
              (project) => project.category === workSection.category
            );

            return (
              <WorkGroup
                key={workSection.category}
                aria-labelledby={`work-${workSection.number}`}
              >
                <GroupHeader>
                  <GroupNumber aria-hidden="true">{workSection.number}</GroupNumber>
                  <div>
                    <h3 id={`work-${workSection.number}`}>{workSection.title}</h3>
                    <p>{workSection.description}</p>
                  </div>
                  <ProjectCount>{projects.length} projects</ProjectCount>
                </GroupHeader>

                <GroupGrid $count={projects.length}>
                  {projects.map((project) => (
                    <Project key={project.slug} item={project} />
                  ))}
                </GroupGrid>
              </WorkGroup>
            );
          })}
        </WorkSections>
      </Container>
    </Section>
  );
};

export default Projects;

const Section = styled.section`
  scroll-margin-top: 76px;
  background: var(--bg-work);
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
    max-width: 760px;
    margin-top: 1rem;
    color: var(--text-primary);
    font-family: "Barlow Condensed", sans-serif;
    font-size: clamp(2.35rem, 4.6vw, 4.2rem);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1.03;
  }

  h2 .accent {
    color: var(--accent);
  }
`;

const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--text-secondary);
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  span {
    width: 28px;
    height: 2px;
    background: var(--accent);
  }
`;

const Intro = styled.p`
  max-width: 480px;
  color: var(--text-muted);
  font-size: 0.98rem;
  line-height: 1.75;
`;

const WorkSections = styled.div`
  margin-top: clamp(3.5rem, 7vw, 6rem);
  display: grid;
  gap: clamp(4rem, 8vw, 7rem);
`;

const WorkGroup = styled.section``;

const GroupHeader = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: start;
  gap: 1rem;
  padding-bottom: 1.4rem;
  border-bottom: 1px solid var(--border);

  h3 {
    color: var(--text-primary);
    font-family: "Barlow Condensed", sans-serif;
    font-size: clamp(1.55rem, 3vw, 2.35rem);
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.1;
  }

  p {
    max-width: 600px;
    margin-top: 0.55rem;
    color: var(--text-muted);
    font-size: 0.88rem;
    line-height: 1.65;
  }

  @media (max-width: 620px) {
    grid-template-columns: auto minmax(0, 1fr);

    > span:last-child {
      grid-column: 2;
    }
  }
`;

const GroupNumber = styled.span`
  min-width: 34px;
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 2;
`;

const ProjectCount = styled.span`
  padding: 0.42rem 0.65rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text-muted);
  font-size: 0.7rem;
  white-space: nowrap;
`;

const GroupGrid = styled.div`
  margin-top: 1.25rem;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1.25rem;

  > * {
    grid-column: span ${({ $count }) =>
      $count === 3 || $count === 5 || $count === 6 ? 2 : 3};
  }

  ${({ $count }) =>
    $count === 5 &&
    `
      > *:nth-last-child(2) {
        grid-column: 2 / span 2;
      }

      > *:last-child {
        grid-column: 4 / span 2;
      }
    `}

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    > *,
    > *:nth-last-child(2),
    > *:last-child {
      grid-column: auto;
      width: auto;
      justify-self: stretch;
    }

    ${({ $count }) =>
      $count % 2 === 1 &&
      `
        > *:last-child {
          width: calc(50% - 0.625rem);
          grid-column: 1 / -1;
          justify-self: center;
        }
      `}
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 1rem;

    > *,
    > *:nth-last-child(2),
    > *:last-child {
      width: 100%;
      grid-column: 1 / -1;
      justify-self: stretch;
    }
  }
`;
