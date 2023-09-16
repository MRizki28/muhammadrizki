"use client";
import { faArrowDown,  faHandPointUp , faFileDownload} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Link } from 'react-scroll';
import AOS from "aos";
import 'aos/dist/aos.css';
import ReactTypingEffect from "react-typing-effect";

const HeroPage = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="hero min-h-screen bg-[#030204] md:mb-[100px] ">
                <div className="hero-content xl:mt-[100px] 2xl:mt-[10px] mb-[50px] md:mb-[100px] lg:max-w-[55rem] xl:max-w-[71rem] 2xl:max-w-[80rem] max-w-[90rem] flex-col lg:flex-row-reverse 2xl:flex-row-reverse">
                    <div className="avatar justify-center">
                        <div className="rounded-full relative p-[2rem] xl:left-[116px] lg:left-[92px] sm:w-[68%]  2xl:left-0 lg:w-[75%] xl:w-[68%] md:w-[60%] lg:p-[20px] 2xl:p-[20px] w-[78%] 2xl:w-[60%] 2xl:ml-[223px]" data-aos="fade-down" data-aos-duration="1000">
                            <img src="assets/img/me.jpeg" />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-center md:justify-center lg:justify-start">
                            <div className=" flex items-center mr-3 " data-aos="fade-up" data-aos-duration="1000">
                                <FontAwesomeIcon icon={faHandPointUp} className="fa-shake fa-xl pb-[13px] text-[#E2C799]" />
                                <h1 className="text-[22px] font-bold font-poppins-reguler ml-3 text-[#9400FF] text-sd">
                                    Hi There{' '}
                                    <ReactTypingEffect speed={100} text={['I\'m Muhammad Rizki', 'Welcome to my website']} />
                                </h1>
                            </div>
                        </div>
                        <h1 className="font-poppins-reguler md:text-center lg:text-left md:text-[37px] text-center text-[23px] lg:text-[37px] " data-aos="fade-up" data-aos-duration="1000">A <span className="text-[#9400FF] text-sd">Fullstack Developer</span> I help startups <span className="text-[#9400FF] text-sd">launch</span> and <span>grow</span> their products</h1>
                        <div className="2xl:text-left text-center lg:text-left mt-4 font-poppins-reguler">
                            <button className="btn btn-primary inline-block">Download CV <FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon></button>
                        </div>
                    </div>
                </div>


            </div>
            <div className="arrow-down absolute bottom-4 md:left-[42%] sm:left-[40%] lg:left-[44%] left-[40%] transform -translate-x-1/2 text-white text-[20px] sm:text-3xl md:text-3xl xl:text-3xl 2xl:text-3xl lg:text-3xl animate-bounce">
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