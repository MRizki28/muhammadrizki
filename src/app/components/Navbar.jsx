"use client";
import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";


const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (

        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-[16px] font-poppins-reguler"
            >
                <a href="#" className="flex items-center">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-[16px] font-poppins-reguler"
            >
                <a href="#" className="flex items-center">
                    Tools
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-[16px] font-poppins-reguler"
            >
                <a href="#" className="flex items-center">
                    Educations
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-[16px] font-poppins-reguler"
            >
                <a href="#" className="flex items-center">
                    Experience
                </a>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="fixed 2xl:p-[30px] max-w-screen-3xl top-0 w-full z-50 py-2 px-4 lg:px-8 lg:py-4 rounded-none border-0 navbar-color bg-transparent shadow-md">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 text-[24px] font-medium font-poppins-reguler"
                >
                    Muhammad Rizki
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal text-[16px] font-poppins-reguler hidden lg:inline-block"
                    >
                        <a href="#" className="flex items-center">
                        <FontAwesomeIcon icon={faLinkedin}> </FontAwesomeIcon>
                           </a>
                       
                       
                    </Typography>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    {navList}

                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal text-[16px] font-poppins-reguler"
                    >
                       
                       <a href="#" className="flex items-center">
                        <FontAwesomeIcon icon={faLinkedin}> </FontAwesomeIcon>
                           </a>
                    </Typography>


                </div>
            </Collapse>
        </Navbar>
    );
}
export default NavBar