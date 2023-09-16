"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const AboutBase = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div id="about" className="about grid min-h-[43vh] bg-[#050810]">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content container mx-auto sm:px-9 xl:px-28 md:px-10 lg:px-20 lg:gap-x-7 xl:gap-x-14 2xl:gap-0 2xl:px-4 flex-col lg:flex-row">
                    <Image src="assets/img/me.jpeg" className="max-w-sm w-[50%] md:w-[45%] lg:w-full rounded-lg shadow-2xl" data-aos="flip-left" data-aos-duration="1000" />
                    <div className="ml-0 2xl:ml-[180px] text-center sm:text-center md:text-center lg:text-left">
                        <div className="mb-3">
                            <h1 className="text-[25px] sm:text-[32px] lg:text-[32px] xl:text-[32px]  font-poppins-reguler font-bold " data-aos="fade-down-right" data-aos-duration="1000">Hello   <FontAwesomeIcon icon={faHand} className="fa-shake fa-sm pb-[13px] text-[#E2C799]" />  <span className="text-[#9400FF] ">I'm Muhammad Rizki</span></h1>
                        </div>
                        <div data-aos="fade-down-right" data-aos-duration="1200">
                            <h1 className="text-[20px] sm:text-[30px] lg:text-[30px] xl:text-[30px] fontcontainer mx-auto  font-poppins-reguler ">A <span className="text-[#9400FF]">Fullstack Developer</span> 🧑‍💻 Based in <span className="text-[#9400FF]">indonesia</span> 🌏</h1>
                        </div>
                        <div data-aos="zoom-in-up" data-aos-duration="1500">
                            <p className="py-6 text-[16px] sm:text-[18px] lg:text-[18px] xl:text-[18px] ">Hello everyone, I am Muhammad Rizki, I am a software developer. I like learning new things, especially in the field of technology and I also like challenges. I often work with other developer teams</p>
                        </div>
                        <div className="border-b-2 border-white" data-aos="fade-up" data-aos-duration="1700"></div>
                        <div className=" mt-5 grid gap-x-4 grid-cols-3" data-aos="fade-up" data-aos-duration="1700">
                            <div className="card  rounded-sm shadow-xl border-y-4 border-[#9400FF] lg:h-[185px]  h-[160px] p-3 sm:p-5 md:p-5 lg:p-5">
                                <div className="">
                                    <h2 className="text-center text-[18px] sm:text-[34px] md:text-[34px] lg:text-[34px] ">1</h2>
                                </div>
                                <div>
                                    <h2 className="text-center mt-5 font-poppins-reguler text-[18px]">Years Of Experience</h2>
                                </div>
                            </div>
                            <div className="card  rounded-sm shadow-xl border-y-4 border-[#9400FF] lg:h-[185px]  h-[160px] p-3 sm:p-5 md:p-5 lg:p-5">
                                <div className="">
                                    <h2 className="text-center text-[18px] sm:text-[34px] md:text-[34px] lg:text-[34px] ">3+</h2>
                                </div>
                                <div>
                                    <h2 className="text-center mt-5 font-poppins-reguler text-[18px]">Programming Languange Used</h2>
                                </div>
                            </div>
                            <div className="card  rounded-sm shadow-xl border-y-4 border-[#9400FF] lg:h-[185px]  h-[160px] p-3 sm:p-5 md:p-5 lg:p-5">
                                <div className="">
                                    <h2 className="text-center text-[18px] sm:text-[34px] md:text-[34px] lg:text-[34px] ">7+</h2>
                                </div>
                                <div>
                                    <h2 className="text-center mt-5 font-poppins-reguler text-[18px]">Successed Project</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default AboutBase