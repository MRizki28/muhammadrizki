"use client";
import { faArrowDown, faHandPointUp, faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Link } from 'react-scroll';
import AOS from "aos";
import 'aos/dist/aos.css';
import ReactTypingEffect from "react-typing-effect";
import Image from "next/image";

const HeroPage = () => {
    const [name, setName] = useState("");
    useEffect(() => {
        AOS.init();
        AOS.refresh();

        const storedName = localStorage.getItem('userName');
        if (storedName) {
            setName(storedName)
        }
    }, []);
    return (
        <>
            <div className="hero min-h-screen bg-[#030204] md:mb-[100px] ">
                <div className="hero-content xl:mt-[100px] 2xl:mt-[10px] mb-[50px] md:mb-[100px] lg:max-w-[55rem] xl:max-w-[71rem] 2xl:max-w-[95rem] max-w-[90rem] flex-col lg:flex-row-reverse 2xl:flex-row-reverse">
                    <div className="max-w-[90rem] text-[40px]">
                        <ReactTypingEffect speed={100}  text={['Hello '+ name +' Welcome to my portofolio , enjoy to your experience']} />
                    </div>
                </div>
            </div>
            <div className="arrow-down absolute bottom-4 md:left-[42%] sm:left-[40%] lg:left-[44%]  xl:left-[47%] left-[40%] transform -translate-x-1/2 text-white text-[20px] sm:text-3xl md:text-3xl xl:text-3xl 2xl:text-3xl lg:text-3xl animate-bounce">
                <Link to="about" smooth={true} duration={500} className="flex flex-col items-center cursor-pointer">
                    <span className="mb-2 font-exospace text-white text-sd transition">
                        About Us
                    </span>
                    <FontAwesomeIcon icon={faArrowDown} />
                </Link>
            </div>
        </>

    )
}

export default HeroPage