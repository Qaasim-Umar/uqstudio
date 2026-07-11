"use client";

import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

const clients = [
    {
        name: "Scholaris Team",
        position: "Founder, Scholaris",
        img_url: "https://ui-avatars.com/api/?name=Scholaris&background=01be96&color=fff&size=128",
        stars: 5,
        disc: `UQ Studio built our school management platform from the ground up. The mobile-first design, CBT exam flow, and admin tools work reliably for our team every day.`
    },
    {
        name: "Qudus Hameed",
        position: "Founder, EcomWords Lab",
        img_url: "https://ui-avatars.com/api/?name=Qudus+Hameed&background=01be96&color=fff&size=128",
        stars: 5,
        disc: `They captured our brand voice and delivered a conversion-focused site that looks professional and loads fast. It has helped us attract the right e-commerce clients.`
    },
    {
        name: "Abdullahi Qaasim",
        position: "Founder, Al Baahith Academy",
        img_url: "https://ui-avatars.com/api/?name=Abdullahi+Qaasim&background=01be96&color=fff&size=128",
        stars: 5,
        disc: `Our academy needed a trustworthy online presence for Quran and Arabic classes. UQ Studio created a clean, easy-to-navigate site that helps parents enroll with confidence.`
    },
    {
        name: "Omar Qm",
        position: "Co-founder, Assessly",
        img_url: "https://ui-avatars.com/api/?name=Omar+Qm&background=01be96&color=fff&size=128",
        stars: 5,
        disc: `From concept to launch, the team delivered a polished AI exam platform with a smooth student experience. The build is scalable and ready for us to grow.`
    },
]
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

const Clients = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <ClientSlider item={item} key={i} />
    ))
    return (
        <Container id='client'>
            <Slide direction="left">
                <span className="green">testimonials</span>
                <h1>what clients say</h1>
            </Slide>
            <Testimonials>
                <Slider ref={arrowRef} {...settings}>
                    {clientDisc}
                </Slider>
                <Buttons>
                    <button
                        onClick={() => arrowRef.current.slickPrev()}
                    ><IoIosArrowBack /></button>
                    <button
                        onClick={() => arrowRef.current.slickNext()}
                    ><IoIosArrowForward /></button>
                </Buttons>
            </Testimonials>
        </Container>
    )
}

export default Clients

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`