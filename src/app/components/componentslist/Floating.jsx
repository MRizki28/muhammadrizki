"use client";
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const PageUpButton = () => {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`fixed bottom-5 right-3 xl:right-[1.75rem] p-2 bg-blue-500 text-white rounded-md cursor-pointer z-50 transform transition-transform duration-700 ease-in-out ${showButton ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            onClick={scrollToTop}
        >
           <FontAwesomeIcon icon={faArrowCircleUp}></FontAwesomeIcon>
        </button>
    );
};

export default PageUpButton;
