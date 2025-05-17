"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(null);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const toggleOverlay = () => setOverlayVisible(!overlayVisible);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Initialize isMobile state
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function NavItem({ text, page }) {
        return (
            <a href={page}>
                <li className="px-2 mobile:px-10 mobile:py-2 cursor-pointer font-[700] duration-300" onClick={toggleOverlay}>{text}</li>
            </a>
        );
    }

    if (isMobile === null) {
        return (
            <nav className="absolute h-[6rem] flex justify-end items-center px-[2rem] tablet-s:h-[4rem]">

            </nav>
        )
    }

    return (
        <div className="absolute top-0 right-0 z-[40] tablet-s:sticky">
            {isMobile ? (
                <nav className={`h-[4.5rem] flex justify-end items-center px-[4vw] top-0 z-[40] duration-300 absolute w-full  ${scrollPosition > 0 ? 'bg-accent' : 'bg-transparent'}`}>
                    <div className={`fixed top-0 bottom-0 z-10 bg-accent duration-500 ease-in-out ${overlayVisible ? 'right-0' : '-right-[300px]'} w-[300px] mobile:w-[240px]`}>
                        <ul className="flex flex-col items-center justify-center gap-y-10 text-primary mt-[8rem] text-[1.2rem]">
                            <NavItem text="Home" page="/" />
                            <NavItem text="Project Gallery" page="/project-gallery" />
                            {/* <NavItem text="FAQ" page="/faq" />  TODO: discuss how to change this page and add it back in*/}
                            <NavItem text="Contact" page="#contact"/>
                        </ul>
                    </div> 
                   
                    <FontAwesomeIcon
                        icon={overlayVisible ? faXmark : faBars}
                        className="cursor-pointer text-3xl z-10 px-4"
                        color="white"
                        onClick={toggleOverlay}
                    />
                </nav>
            ) : (
                <nav className="h-[6rem] flex justify-end items-center px-[2rem] tablet-s:h-[4rem]">
                    <ul className="flex flex-row items-center justify-center px-4 gap-x-8 text-primary text-[16px] laptop:text-[16px] laptop-s:text-[14px] tablet:text-[12px]">
                        <NavItem text="Home" page="/" />
                        <NavItem text="Project Gallery" page="/project-gallery" />
                        {/* <NavItem text="FAQ" page="/faq" /> TODO: discuss how to change this page and add it back in*/}
                        <NavItem text="Contact" page="#contact" />
                    </ul>
                </nav>
            )}
        </div>
    );
}
