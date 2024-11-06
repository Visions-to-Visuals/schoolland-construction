"use client"
import React, { useEffect, useRef, useState, createRef } from 'react';
import categories from "./gallery-data";
import Image from 'next/image';

export default function Gallery() {

    const [categoryRefs, setCategoryRefs] = useState([]);

    useEffect(() => {
        setCategoryRefs((refs) => Array(categories.length).fill(null).map((_, i) => refs[i] || createRef()));
    }, []);
    
    function Category({ text, index }: { text: string; index: number }) {
        const handleClick = () => {
            const element = categoryRefs[index]?.current;
            if (element) {
                const offsetTop = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offsetTop, 
                    behavior: 'smooth',
                });
            }
        };

        return (
            <p className="category py-2 cursor-pointer" onClick={handleClick}>{text}</p>
        );
    }

    function Images({ image }: { image: string }) {
        return (
            <Image 
                src={image} 
                width={600}  
                height={600} 
                quality={50} 
                placeholder='empty'
                className="w-[27rem] tablet-s:w-[47%] rounded-xl" 
                alt="Gallery Image" 
            />
        );
    }
    

    function CategorySection({ category, index }: { category: { text: string; images: string[] }; index: number }) {
        const { text, images } = category;
        return (
            <div key={text} ref={categoryRefs[index]} id={text.toLowerCase()}>
                <h2 className="text-primary text-[2.5rem] font-[600] bg-accent rounded-3xl w-[57rem] px-6 py-2 uppercase 
                tablet-s:w-[90%] tablet-s:mx-auto tablet-s:text-[2.2rem] mt-8">{text}</h2>
                <div className="flex flex-wrap w-[57rem] gap-[2rem] mt-[2rem] justify-center mb-[6rem] tablet-s:w-[90%] 
                tablet-s:mx-auto tablet-s:gap-x-[1rem]">
                    {images.map((image, index) => (
                        <Images key={index} image={image} />
                    ))}
                </div>
            </div>
        );
    }

    return (
        <section className="flex justify-center gap-[6rem] animate-faq opacity-0">
            <div className="text-primary text-[1.5rem] font-[500] flex flex-col gap-y-[2rem] h-fit sticky top-[3rem] tablet-s:hidden mt-[1.5rem]">
                {categories.map((category, index) => (
                    <Category key={index} text={category.text} index={index} />
                ))}
            </div>

            <div className="flex flex-col">
                {categories.map((category, index) => (
                    <CategorySection key={index} category={category} index={index} />
                ))}
            </div>
        </section>
    );
}
