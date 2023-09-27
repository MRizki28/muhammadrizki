"use client"
import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "Certification Blue Economy Company Center",
        description: "The Blue Economy Company Index (BECdex) is an international standard and toolkit..",
        image: "/assets/img/project/becdex.png",
        technologies: [
            { name: "CodeIgniter", image: "/assets/img/tech/ci.svg" },
            { name: "Bootstrap", image: "/assets/img/tech/bootstrap.svg" },
        ],

    },
    {
        id: 2,
        title: "Theblueeconomist International Association",
        description: "The Blue Economist is an International Association for Blue Economy from maritim muda nusantara",
        image: "/assets/img/project/theblueeconomist.png",
        technologies: [
            { name: "React Js", image: "/assets/img/tech/react.svg" },
            { name: "Laravel", image: "/assets/img/tech/laravel.svg" },
        ],
    },
    {
        id: 3,
        title: "PENA Organization profile",
        description: "Pena is an intra-campus organization that operates in the field of software development (Programming Engineering and Networking) ",
        image: "/assets/img/project/pena1.png",
        technologies: [
            { name: "Bootstrap", image: "/assets/img/tech/bootstrap.svg" },
            { name: "Laravel", image: "/assets/img/tech/laravel.svg" },
        ],
    },
    {
        id: 4,
        title: "PENA Bazar",
        description: "Pena Bazar is a website created and managed by the Pena organization to be a platform for purchasing and ordering various types of food & drinks.",
        image: "/assets/img/project/pena-bazar.png",
        technologies: [
            { name: "Bootstrap", image: "/assets/img/tech/bootstrap.svg" },
            { name: "Laravel", image: "/assets/img/tech/laravel.svg" },
        ],
    },
    {
        id: 5,
        title: "PENA Organization profile v2",
        description: "Pena is an intra-campus organization that operates in the field of software development (Programming Engineering and Networking) ",
        image: "/assets/img/project/pena2.png",
        technologies: [
            { name: "Bootstrap", image: "/assets/img/tech/bootstrap.svg" },
            { name: "Laravel", image: "/assets/img/tech/laravel.svg" },
        ],
    },
    {
        id: 6,
        title: "Sistem Absensi in maritim muda nusantara jakarta",
        description: "This system is an absence system created for attendance purposes in mbkm batch 4",
        image: "/assets/img/project/siamud.png",
        technologies: [
            { name: "REST Api", image: "/assets/img/tech/restapi.png" },
            { name: "Laravel", image: "/assets/img/tech/laravel.svg" },
        ],
    },
    {
        id: 7,
        title: "Archive system in Kawauna sub-district",
        description: "This system was created for archival needs at the sub-district office",
        image: "/assets/img/project/kawatuna.png",
        technologies: [
            { name: "REST Api", image: "/assets/img/tech/restapi.png" },
            { name: "Laravel", image: "/assets/img/tech/laravel.svg" },
        ],
    },
    {
        id: 8,
        title: "Portofolio Website Muhammad Rizki",
        description: "This is a portfolio website",
        image: "/assets/img/project/portofolio.png",
        technologies: [
            { name: "Next.Js", image: "/assets/img/tech/nextjs.png" },
            { name: "REST Api", image: "/assets/img/tech/restapi.png" },
            { name: "Laravel", image: "/assets/img/tech/laravel.svg" },
        ],
    },
    {
        id: 9,
        title: "Burger Kapten",
        description: "This is a website for a burger food business",
        image: "/assets/img/project/burger-kapten.png",
        technologies: [
            { name: "React.js", image: "/assets/img/tech/react.svg" },
        ],
    },
];

const Project = () => {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [visibleProjects, setVisibleProjects] = useState(3);
    const [showAll, setShowAll] = useState(false);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen((cur) => !cur);
    };

    const toggleView = () => {
        if (showAll) {
            setVisibleProjects(3);
        } else {
            setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
        }
        setShowAll((prevShowAll) => !prevShowAll);
    };
    


    return (
        <div id="education" className="grid min-h-[43vh]  overflow-y-auto bg-[#050810]">
            <h2 className="text-center mb-16 mt-36 text-[2.5rem] text-sd font-poppins-reguler text-white">Project</h2>
            <div className="container mx-auto px-16 mb-11 sm:text-center">
                <h2 className="font-poppins-reguler text-white text-[36px] font-bold mb-3">Projects I've Created 💼</h2>
                <p className="text-[16px] font-poppins-reguler text-slate-400">
                    I've created a few projects while I was learning about frontend website development, and all of the projects I'll explain below
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 overflow-x-auto max-h-[104rem] 2xl:max-h-[100rem] md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-1 lg:gap-x-14 md:container md:mx-auto md:px-16 ">
                {projects.slice(0, visibleProjects).map((project) => (
                    <div key={project.id} className="mb-6 mx-auto">
                        <Card className="mt-6 w-[21rem] md:w-[19rem] 2xl:w-[25rem] sm:w-full  bg-slate-800">
                            <CardHeader color="blue-gray" className="relative h-52 sm:h-[19rem] md:h-52">
                                <img
                                    src={project.image}
                                    alt="card-image"
                                    className="h-52 sm:w-full  sm:h-full md:h-52 cursor-pointer"
                                    onClick={() => handleOpen(project)}
                                />
                            </CardHeader>
                            <CardBody className="overflow-hidden h-[15rem] md:h-[20rem]">
                                <Typography variant="h5" color="blue-gray" className="mb-2 sm:text-[24px] text-white">
                                    {project.title}
                                </Typography>
                                <div className="grid grid-cols-2 gap-3 mb-2">
                                    {project.technologies.map((technology, index) => (
                                        <div key={index} className="bg-opacity-20 bg-blue-200 p-2 h-[30px] sm:h-[40px] border-1 flex items-center">
                                            <Image width={500} height={500} src={technology.image} alt={technology.name} className="mr-4 w-[8%] md:w-[20%] sm:w-[10%] aspect-[3/4] object-contain transition-transform transform hover:scale-105 hover:shadow-lg" />
                                            <span className="text-[12px] sm:text-[16px] text-white font-poppins-reguler">{technology.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <Typography className="text-justify text-slate-400 sm:text-[16px]">
                                    {project.description}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Button className="btn btn-primary">Read More</Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>

            <div className="footer justify-center">
                <button className="btn btn-primary justify-center items-center" onClick={toggleView}>
                    {showAll ? "Sort View" : "More all"}
                </button>
            </div>


            <Dialog size="xl" open={open} handler={handleOpen}>
                <DialogBody divider={true} className="p-0 mb-10 mt-10">
                    {selectedProject && (
                        <img
                            alt="nature"
                            className="lg:h-[48rem] w-full object-cover object-center"
                            src={selectedProject.image}
                        />
                    )}
                </DialogBody>
            </Dialog>
        </div>
    );
};

export default Project;
