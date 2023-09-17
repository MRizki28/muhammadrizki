"use client";
import React, { useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";
import AOS from "aos";
import 'aos/dist/aos.css';
import Image from "next/image";

const TechBase = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div id="tech" className="tech grid min-h-[43vh]  bg-[#050810]">
            <h2 className="text-center mt-[47px] mb-16 text-[2.5rem] text-sd font-poppins-reguler text-white">Tooling</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-[90%] container mx-auto md:max-w-[90%] lg:max-w-[77%] xl:max-w-[89%] 2xl:max-w-[77%]">
                <div className="grid grid-cols-2 mb-[63px] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 mt-10 container mx-auto items-center lg:mb-[94px] border-b-4 md:border-b-0 md:border-r-4">
                    <div className="bg-transparent justify-center  p-4 flex items-center"  data-aos="fade-up" data-aos-duration="1000">
                        <Image width={500} height={500} src="/assets/img/tech/laravel.svg" alt="" className="mr-4 w-[8%] md:w-[20%] aspect-[3/4] object-contai transition-transform transform hover:scale-105 hover:shadow-lg" />
                        <span className="text-xl text-white font-poppins-reguler">Laravel</span>
                    </div>
                    <div className="bg-transparent justify-center  p-4 flex items-center"  data-aos="fade-down" data-aos-duration="1200">
                        <Image width={500} height={500} src="/assets/img/tech/lumen.svg" alt="" className="mr-4 w-[8%] md:w-[20%] aspect-[3/4] object-contai transition-transform transform hover:scale-105 hover:shadow-lg" />
                        <span className="text-xl text-white font-poppins-reguler">Lumen</span>
                    </div>
                    <div className="bg-transparent justify-center  p-4 flex items-center"  data-aos="fade-up" data-aos-duration="1400">
                        <Image width={500} height={500} src="/assets/img/tech/ci.svg" alt="" className="mr-4 w-[8%] md:w-[20%] aspect-[3/4] object-contai transition-transform transform hover:scale-105 hover:shadow-lg" />
                        <span className="text-xl text-white font-poppins-reguler">Codeigniter</span>
                    </div>
                    <div className="bg-transparent justify-center  p-4 flex items-center"  data-aos="fade-down" data-aos-duration="1600">
                        <Image width={500} height={500} src="/assets/img/tech/react.svg" alt="" className="mr-4 w-[8%] md:w-[20%] aspect-[3/4] object-contai transition-transform transform hover:scale-105 hover:shadow-lg" />
                        <span className="text-xl text-white font-poppins-reguler">React.Js</span>
                    </div>
                    <div className="bg-transparent justify-center  p-4 flex items-center"  data-aos="fade-up" data-aos-duration="1800">
                        <Image width={500} height={500} src="/assets/img/tech/express.png" alt="" className="mr-4 w-[8%] md:w-[20%] aspect-[3/4] object-contai transition-transform transform hover:scale-105 hover:shadow-lg" />
                        <span className="text-xl text-white font-poppins-reguler">Express.Js</span>
                    </div>
                    <div className="bg-transparent justify-center  p-4 flex items-center"  data-aos="fade-down" data-aos-duration="2000">
                        <Image width={500} height={500} src="/assets/img/tech/nextjs.png" alt="" className="mr-4 w-[8%] md:w-[20%] aspect-[3/4] object-contai transition-transform transform hover:scale-105 hover:shadow-lg" />
                        <span className="text-xl text-white font-poppins-reguler">Next.Js</span>
                    </div>
                    <div className="bg-transparent justify-center  p-4 flex items-center"  data-aos="fade-up" data-aos-duration="2200">
                        <Image width={500} height={500} src="/assets/img/tech/tailwind-css.svg" alt="" className="mr-4 w-[8%] md:w-[20%] aspect-[3/4] object-contai transition-transform transform hover:scale-105 hover:shadow-lg" />
                        <span className="text-xl text-white font-poppins-reguler">Talwinds</span>
                    </div>
                    <div className="bg-transparent justify-center  p-4 flex items-center"  data-aos="fade-down" data-aos-duration="2200">
                        <Image width={500} height={500} src="/assets/img/tech/bootstrap.svg" alt="" className="mr-4 w-[8%] md:w-[20%] aspect-[3/4] object-contai transition-transform transform hover:scale-105 hover:shadow-lg" />
                        <span className="text-xl text-white font-poppins-reguler">Bootstrap</span>
                    </div>
                    <div className="bg-transparent justify-center  p-4 flex items-center"  data-aos="fade-up" data-aos-duration="2200">
                        <Image width={500} height={500} src="/assets/img/tech/react.svg" alt="" className="mr-4 w-[8%] md:w-[20%] aspect-[3/4] object-contai transition-transform transform hover:scale-105 hover:shadow-lg" />
                        <span className="text-xl text-white font-poppins-reguler">React Native</span>
                    </div>
                    <div className="bg-transparent justify-center  p-4 flex items-center"  data-aos="fade-down" data-aos-duration="1000">
                        <Image width={500} height={500} src="/assets/img/tech/php.svg" alt="" className="mr-4 w-[8%] md:w-[20%] aspect-[3/4] object-contai transition-transform transform hover:scale-105 hover:shadow-lg" />
                        <span className="text-xl text-white font-poppins-reguler">PHP</span>
                    </div>
                    <div className="bg-transparent justify-center  p-4 flex items-center"  data-aos="fade-up" data-aos-duration="1000">
                        <Image width={500} height={500} src="/assets/img/tech/javascript.svg" alt="" className="mr-4 w-[8%] md:w-[20%] aspect-[3/4] object-contai transition-transform transform hover:scale-105 hover:shadow-lg" />
                        <span className="text-xl text-white font-poppins-reguler">JavaScript</span>
                    </div>
                    <div className="bg-transparent justify-center  p-4 flex items-center"  data-aos="fade-cown" data-aos-duration="1000">
                        <Image width={500} height={500} src="/assets/img/tech/restapi.png" alt="" className="mr-4 w-[8%] md:w-[20%] aspect-[3/4] object-contai transition-transform transform hover:scale-105 hover:shadow-lg" />
                        <span className="text-xl text-white font-poppins-reguler">REST API</span>
                    </div>
                    <div className="bg-transparent justify-center  p-4 flex items-center"  data-aos="fade-up" data-aos-duration="1000">
                        <Image width={500} height={500} src="/assets/img/tech/mysql.svg" alt="" className="mr-4 w-[8%] md:w-[20%] aspect-[3/4] object-contai transition-transform transform hover:scale-105 hover:shadow-lg" />
                        <span className="text-xl text-white font-poppins-reguler">MySQL</span>
                    </div>
                </div>
                <div className="text-center mb-[100px] my-18 md:my-28 md:ml-[79px] xl:ml-6 xl:my-28" data-aos="flip-left" data-aos-duration="1000" >
                    <div className=" mt-14">
                        <span className="text-[40px] md:text-[50px] font-bold font-poppins-reguler text-center text-sd text-[#9400FF]">
                            <ReactTypingEffect speed={100} text={['Tech Stack⚙️ & Tools🛠️']} />
                        </span>
                    </div>
                    <div className="font-poppins-reguler text-[18px] text-white">
                        <p>There are some tech stack and tools that i&apos;ve learned and experienced</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechBase