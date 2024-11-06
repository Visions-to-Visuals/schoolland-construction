"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function HeroSection({setScrollToCategories}) {

    const scrollToCategories = () => {
        setScrollToCategories(true);
        const categoriesSection = document.getElementById('categoriesSection');
        if (categoriesSection) {
            window.scrollTo({
                top: categoriesSection.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
    <div id="hero" className="z-25">

        <div className="bg-background bg-cover bg-no-repeat bg-center 
             w-full h-full absolute z-[-1] hidden tablet-s:flex"></div>
        <div className="absolute w-full h-full bg-cover
           bg-[#182C25] opacity-80 z-[-1] hidden tablet-s:flex"></div>

        <div className="flex flex-row justify-center items-center gap-[6rem]
        tablet-s:flex-col tablet-s:items-center tablet-s:px-[2rem] tablet-s:gap-[3rem]
        pt-[6rem] mobile:px-[1rem]">
            <div className="w-[44rem] max-w-[45rem] tablet-s:max-w-[100%] text-primary 
            tablet-s:justify-center tablet-s:text-center tablet-s:w-[100%]">
                <h1 className="text-[5.6rem] leading-[7rem]
                tablet-s:w-[100%] tablet-s:text-[4rem] tablet-s:leading-[4rem] mobile:text-[4rem] mobile:leading-[4.5rem]">
                    <span className="text-[8.2rem] tablet-s:text-[15vw] tracking-wide">Schoolland</span> Construction Inc.
                </h1>
                <p className="text-[1.5rem] font-[500] mt-[3rem] pr-6 pl-4
                tablet-s:text-[1.1rem] tablet-s:mt-[2rem] tablet-s:px-[3rem]">
                Residential Construction. From drafting to 3d design to final inspection. There for your project concept to completion.
                </p>
            </div>
            
            <div className="h-[28rem] w-[22rem] tablet-s:hidden">
                <Image width={100} height={100} layout="responsive" alt="Tim and Greg Schoolland" src="/images/owners.png"></Image>
            </div>
       
        </div>

        <div className="flex justify-center items-center my-[7rem] tablet-s:mb-[6rem] tablet-s:mt-[14rem] mobile:mt-[18rem] relative">

                <FontAwesomeIcon icon={faCircle}
                className="absolute top-[-9rem] tablet-s:top-[-8rem] text-primary w-[1rem] h-[1rem] opacity-0 animate-circle3 tablet-s:hidden"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faCircle} 
                className="absolute top-[-7.5rem] tablet-s:top-[-6.5rem] text-primary w-[1.5rem] h-[1.5rem] opacity-0 animate-circle2 tablet-s:hidden"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faCircle} 
                className="absolute top-[-5.5rem] tablet-s:top-[-4.5rem] text-primary w-[2rem] h-[2rem] opacity-0 animate-circle1 tablet-s:hidden"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faAngleDown}
                className="absolute top-[-4rem] tablet-s:top-[-3rem] text-primary w-[3.5rem] h-[3.5rem] opacity-0 animate-arrow tablet-s:hidden"></FontAwesomeIcon>

            <button className="font-[600] text-dark flex text-[1.5rem] 
            px-8 py-2 bg-primary rounded-[15px] hover:bg-accent hover:text-primary
            duration-200 ease-in
            tablet-s:text-[1.2rem] tablet-s:px-10 tablet-s:mt-4 mobile:mt-8 mobile:text-[1.4rem]"
            onClick={scrollToCategories}>WHAT WE OFFER
            </button>
        </div>
    </div>
    )
}