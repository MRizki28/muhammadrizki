"use client";
import ReactTypingEffect from "react-typing-effect"

const Education = () => {
    return (
        <div id="education" className=" grid min-h-[43vh]  bg-[#050810]">
            <h2 className="text-center  mb-16 mt-36 text-[2.5rem] text-sd font-poppins-reguler text-white">Education & Experience</h2>
            <div className="container mx-auto px-4 py-5 grid grid-cols-1 lg:grid-cols-2 ">
                <div className="text-center mb-[100px] my-18 md:my-28 md:ml-[79px] xl:ml-6 xl:my-28" data-aos="flip-left" data-aos-duration="1000" >
                    <div className=" mt-14">
                        <span className="text-[40px] md:text-[50px] font-bold font-poppins-reguler text-center text-sd text-[#9400FF]">
                            <ReactTypingEffect speed={100} text={['Timeline Education and Experience']} />
                        </span>
                    </div>
                    <div className="font-poppins-reguler text-[18px] text-white">
                        <p>There are some tech stack and tools that i&apos;ve learned and experienced</p>
                    </div>
                </div>
                <ol className="grid grid-cols-2 ">
                    <div className="relative border-l h-[34%] border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                2020 - Present
                            </time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                STMIK ADHI GUNA PALU
                            </h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Informatic Enginnering
                            </p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                2020
                            </time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                SMKN 1 SARJO
                            </h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Computer and Network Engineering
                            </p>
                        </li>
                    </div>
                    <div className="relative border-l border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                August 2023 - Present
                            </time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Jocodes
                            </h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Backend Developer
                            </p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                Juni 2023 - Present
                            </time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Paerte Code
                            </h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Fullstack Webdeveloper
                            </p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                May 2023
                            </time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Dicoding
                            </h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Learn Basic Javascript
                            </p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                May 2023
                            </time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Dicoding
                            </h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Cloud Practitioner Essentials (Learn Basic AWS Cloud)
                            </p>
                        </li>
                        <li className="mb-10 ml-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                February 2023
                            </time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Maritim Muda Nusantara
                            </h3>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Intern at Maritime Muda Nusantara as a web developer specializing in backend developer
                            </p>
                        </li>
                    </div>
                </ol>
            </div>
        </div>
    )
}

export default Education