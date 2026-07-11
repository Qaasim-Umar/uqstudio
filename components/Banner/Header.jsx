"use client";

import React, { useState } from 'react'
import styled from 'styled-components';
import { GiCandleFlame } from "react-icons/gi";

const Header = () => {
    const [bar, setBar] = useState(false);
    return (
        <Container bar={bar}>
            <Logo>
                <span className='green'><GiCandleFlame /></span>
                <h1>UQ Studio</h1>
            </Logo>
            <Nav bar={bar}>
                <span><a href="#home">Home</a></span>
                <span><a href="#service">Services</a></span>
                <span><a href="#project">Work</a></span>
                <span><a href="#client">Testimonials</a></span>
                <span><a href="#footer">Contact Us</a></span>
            </Nav>
            <div
                onClick={() => setBar(!bar)}
                className="bars">
                <div className="bar"></div>
            </div>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    @media(max-width: 840px){
        width: 90%;
    }
    .bars{
        display: none;
    }
    @media(max-width:640px){
        .bars{
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            .bar{
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "#fff"};
                transition: all 400ms ease-in-out;
                :before, :after{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    position: absolute;
                }

                :before{
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }

                :after{
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span{
        font-size: 1.8rem;
    }

    h1{
        font-weight: 600;
        font-size: 1.2rem;
    }
`
const Nav = styled.div`
    @media(max-width:640px){
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        background-color: #01be96;
        padding: ${props => props.bar ? "1rem 0" : "0"};
        gap: 0.5rem;
        font-weight: 500;
        max-height: ${props => props.bar ? "300px" : "0"};
        transition: max-height 400ms ease-in-out, padding 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
        border-radius: 0 0 8px 8px;
        box-shadow: ${props => props.bar ? "0 4px 6px rgba(0,0,0,0.1)" : "none"};
    }
    span{
        margin-left: 1rem;
        @media(max-width:640px){
            margin-left: 0;
            padding: 0.8rem 1.5rem;
            :hover{
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
        a{
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            :before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            :hover:before{
                transform: scale(1);
                transform-origin: left;
            }
            :hover{
                opacity: 0.7;
            }
        }
    }
`