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
        title: "Theblueeconomist International Association",
        description: "The Blue Economist is an International Association for Blue Economy from maritim muda nusantara",
        image: "/assets/img/project/theblueeconomist.png",
        technologies: [
            { name: "React Js", image: "/assets/img/tech/react.svg" },
            { name: "Laravel", image: "/assets/img/tech/laravel.svg" },
        ],
    },
    {
        id: 4,
        title: "Theblueeconomist International Association",
        description: "The Blue Economist is an International Association for Blue Economy from maritim muda nusantara",
        image: "/assets/img/project/theblueeconomist.png",
        technologies: [
            { name: "React Js", image: "/assets/img/tech/react.svg" },
            { name: "Laravel", image: "/assets/img/tech/laravel.svg" },
        ],
    },
    {
        id: 5,
        title: "Theblueeconomist International Association",
        description: "The Blue Economist is an International Association for Blue Economy from maritim muda nusantara",
        image: "/assets/img/project/theblueeconomist.png",
        technologies: [
            { name: "React Js", image: "/assets/img/tech/react.svg" },
            { name: "Laravel", image: "/assets/img/tech/laravel.svg" },
        ],
    },
    {
        id: 6,
        title: "Theblueeconomist International Association",
        description: "The Blue Economist is an International Association for Blue Economy from maritim muda nusantara",
        image: "/assets/img/project/theblueeconomist.png",
        technologies: [
            { name: "React Js", image: "/assets/img/tech/react.svg" },
            { name: "Laravel", image: "/assets/img/tech/laravel.svg" },
        ],
    },
];

const Project = () => {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen((cur) => !cur);
    };

    return (
        <div id="education" className="grid min-h-[43vh] bg-[#050810]">
            <div className="container mx-auto px-32">
            <h2 className="text-center mb-16 mt-36 text-[2.5rem] text-sd font-poppins-reguler text-white">Education & Experience</h2>
            <div className="container mx-auto px-16 mb-11">
                <h2 className="font-poppins-reguler text-white text-[36px] font-bold mb-3">Projects I've Created 💼</h2>
                <p className="text-[16px] font-poppins-reguler text-slate-400">
                    I've created a few projects while I was learning about frontend website development, and all of the projects I'll explain below
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto px-16">
                {projects.map((project) => (
                    <div key={project.id} className="mb-6">
                        <Card className="mt-6 w-[21rem] bg-slate-800">
                            <CardHeader color="blue-gray" className="relative h-52">
                                <img
                                    src={project.image}
                                    alt="card-image"
                                    className="h-52 cursor-pointer"
                                    onClick={() => handleOpen(project)}
                                />
                            </CardHeader>
                            <CardBody style={{ height: "15rem", overflow: "hidden" }}>
                                <Typography variant="h5" color="blue-gray" className="mb-2 text-white">
                                    {project.title}
                                </Typography>
                                <div className="grid grid-cols-2 gap-3 mb-2">
                                    {project.technologies.map((technology, index) => (
                                        <div key={index} className="bg-opacity-20 bg-blue-200 p-2 h-[30px] border-1 flex items-center">
                                            <Image width={500} height={500} src={technology.image} alt={technology.name} className="mr-4 w-[8%] md:w-[20%] aspect-[3/4] object-contain transition-transform transform hover:scale-105 hover:shadow-lg" />
                                            <span className="text-[12px] text-white font-poppins-reguler">{technology.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <Typography className="text-justify text-slate-400">
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
                <button className="btn btn-primary justify-center items-center"> More all</button>
            </div>
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
