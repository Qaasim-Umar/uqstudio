"use client";

import React from 'react'
import styled from 'styled-components';
import Project from './Project';
import { Zoom } from 'react-awesome-reveal';
import assessly from '../images/assessly.png'
import scholaris from '../images/scholaris.png'
import ecomwordslab from '../images/ecom.png'
import albaahith from '../images/baahith.png'
import kingsmeal from '../images/kingsmeal.png'
import piggyvest from '../images/piggyvest.png'
import metabnb from '../images/metabnb.png'
import gallery from '../images/gallery.png'

const projectData = [
  {
    img: scholaris,
    title: "Scholaris – School Management Platform",
    disc: "A mobile-first web application that helps schools manage students, run CBT exams, and streamline administration.",
    demo: "https://scholarishq.com",
    stacks: "Next.js, Supabase, Tailwind CSS"
  },
  {
    img: ecomwordslab,
    title: "EcomWords Lab",
    disc: "A professional copywriting agency website built to attract and convert e-commerce brands with a clean, conversion-focused design.",
    demo: "https://ecomwordslab.com",
    stacks: "Next.js, Tailwind CSS"
  },
  {
    img: albaahith,
    title: "Al Baahith Academy",
    disc: "An online learning platform offering Quran memorization, Tajweed, recitation, Arabic language, and Islamic Studies classes with qualified instructors available 24/7.",
    demo: "https://www.albaahithacademy.com",
    stacks: "Next.js, Tailwind CSS"
  },
  {
    img: assessly,
    title: "Assessly – AI Exam Platform",
    disc: "An AI-powered web platform that helps students practice and prepare for exams through structured, interactive assessments.",
    demo: "https://assessly.ng",
    stacks: "Next.js, Tailwind CSS, Supabase"
  },
  {
    img: piggyvest,
    title: "Piggyvest Clone",
    disc: "A direct clone of the popular Piggyvest Bank platform, replicating its core features and user interface.",
    demo: "https://piggyvest-bella.netlify.app",
    stacks: "React, CSS Modules, Sass"
  },
  {
    img: kingsmeal,
    title: "KingsMeal Restaurant",
    disc: "A restaurant web application featuring order management, shopping cart functionality, and a streamlined checkout process.",
    demo: "https://kingsmeal.netlify.app",
    stacks: "React, Tailwind CSS"
  },
  {
    img: metabnb,
    title: "MetaBnB",
    disc: "A hotel booking website concept that leverages NFT technology for transactions and reservations.",
    demo: "https://metabnbnft.netlify.app",
    stacks: "React, CSS"
  },
  {
    img: gallery,
    title: "Drag & Drop Gallery",
    disc: "An interactive gallery application that allows users to rearrange and organize images through drag-and-drop functionality.",
    demo: "https://hng-x3galleryapp.netlify.app",
    stacks: "React, CSS"
  }
];

const Projects = () => {
  return (
    <Container id='project'>
      <Zoom>
        <Header>
          <h1>Our Recent <span className="green">Work</span></h1>
          <p>A selection of web applications we've built — from AI-powered platforms to e-commerce solutions.</p>
        </Header>
      </Zoom>
      <Grid>
        {projectData.map((project, index) => (
          <Project key={index} item={project} />
        ))}
      </Grid>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
`

const Header = styled.div`
    text-align: center;
    margin-bottom: 3rem;
    
    h1{
        font-size: 2.2rem;
        margin-bottom: 1rem;
        @media(max-width: 640px){
            font-size: 1.8rem;
        }
    }

    p{
        max-width: 600px;
        margin: 0 auto;
        font-size: 1rem;
        color: #d4d4d4;
        line-height: 1.6;
        @media(max-width: 500px){
            width: 90%;
            font-size: 0.9rem;
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    
    @media(max-width: 768px){
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
    }
    
    @media(max-width: 500px){
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`