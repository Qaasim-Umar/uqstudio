"use client";

import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';



const Project = (props) => {
    const { img, disc, demo, stacks, title } = props.item;
    return (
        <Container className='project'>
            <ImageWrapper>
                <Image src={img} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                <Overlay>
                    <a href={demo} target="_blank" rel="noopener noreferrer" className="view-btn">
                        View Live Site →
                    </a>
                </Overlay>
            </ImageWrapper>
            <Content>
                <h2>{title}</h2>
                <p className="description">{disc}</p>
                <TechStack>
                    <span className="label">Tech Stack:</span>
                    <span className="stack">{stacks}</span>
                </TechStack>
            </Content>
        </Container>
    )
}

export default Project;

const Container = styled.div`
    background-color: #2d2d3a;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 400ms ease, box-shadow 400ms ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    
    :hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(1, 190, 150, 0.2);
    }
`

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
    background-color: #4e5156;
    
    img {
        transition: transform 600ms ease;
    }
    
    :hover img {
        transform: scale(1.08);
    }
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 1.5rem;
    opacity: 0;
    transition: opacity 400ms ease;
    
    ${ImageWrapper}:hover & {
        opacity: 1;
    }
    
    .view-btn {
        background-color: #01be96;
        color: #fff;
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
        transition: all 300ms ease;
        
        :hover {
            background-color: #00d4aa;
            transform: scale(1.05);
        }
    }
`

const Content = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    flex: 1;
    
    h2 {
        font-size: 1.3rem;
        color: #01be96;
        font-weight: 600;
        margin: 0;
        line-height: 1.3;
    }
    
    .description {
        font-size: 0.9rem;
        line-height: 1.6;
        color: #d4d4d4;
        margin: 0;
        flex: 1;
    }
`

const TechStack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding-top: 0.8rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    
    .label {
        font-size: 0.75rem;
        color: #01be96;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    .stack {
        font-size: 0.85rem;
        color: #b4b4b4;
        line-height: 1.4;
    }
`