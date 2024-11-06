"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Categories({ scrollToCategories }) {
  const centerLineRef = useRef();
  // when the scrollToCategories prop changes, increase the scroll position
  useEffect(() => {
    if (scrollToCategories) {
      let count = 0;
      console.log("scrolling to categories");
      const interval = setInterval(() => {
        count++;
        scrolledY += 5;
        if (count % 10 === 0) {
          window.dispatchEvent(new Event("scroll"));
        }
        // make sure the center line does not go past the bottom of its parent
        if (scrolledY > 0) {
          scrolledY = 0;
        }
        if (centerLineRef.current) {
          (
            centerLineRef.current as HTMLDivElement
          ).style.transform = `translateY(${scrolledY}px)`;
        }

        if (scrolledY > 0) {
          console.log("clearing interval");
          clearInterval(interval);
        }
      }, 10);
    }
  }, [scrollToCategories]);
  // ref for the section
  const sectionRef = useRef();

  let scrolledY = -999999;
  let lineBottom = -999999;


  function CategoryItemLeft({ text, width }) {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 1 });
    const reference = useRef<HTMLDivElement | null>(null);
    const [alreadyAnimated, setAlreadyAnimated] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (alreadyAnimated) return;
        // get the absolute position of the element
        if (reference.current) {
          const rect = reference.current.getBoundingClientRect();
          const position = rect.bottom;
          if (position < lineBottom) {
            setAlreadyAnimated(true);
            controls.start({ opacity: 1 }, { duration: 0.4 });
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lineBottom]); // re-run the effect when the lineBottom changes

    return (
      <a href={`../project-gallery#${text.toLowerCase()}`}>
        <motion.div
          className="relative flex items-center z-[20] tablet-s:justify-center"
          ref={reference} // attach the ref to the element
          initial={{ opacity: 0 }}
          animate={controls}
        >
          <h1 className="text-[3rem] tablet-s:text-[2.5rem] tablet-s:px-[3rem] tablet-s:py-[.5rem] text-primary bg-secondary px-6 py-4 rounded-[2rem] cursor-pointer hover:bg-accent duration-200">
            {text}
          </h1>
          <div
            style={{ width: width }}
            className="h-[.8rem] bg-secondary right-[-16rem] top-[50%] tablet-s:hidden"
          ></div>
        </motion.div>
      </a>
    );
  }

  function CategoryItemRight({ text, width }) {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 1 });
    const reference = useRef<HTMLDivElement | null>(null);
    const [alreadyAnimated, setAlreadyAnimated] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (alreadyAnimated) return;
        // get the absolute position of the element
        if (reference.current) {
          const rect = reference.current.getBoundingClientRect();
          const position = rect.bottom;
          if (position < lineBottom) {
            setAlreadyAnimated(true);

            controls.start({ opacity: 1 }, { duration: 0.4 });
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lineBottom]); // re-run the effect when the lineBottom changes

    return (
      <a href={`../project-gallery#${text.toLowerCase()}`}>
        <motion.div
          className="relative flex items-center flex-row-reverse z-[10] tablet-s:justify-center"
          ref={reference}
          initial={{ opacity: 0 }}
          animate={controls}
        >
          <h1 className="text-[3rem] tablet-s:text-[2.5rem] tablet-s:px-[3rem] tablet-s:py-[.5rem] text-primary bg-secondary px-6 py-4 rounded-[2rem] cursor-pointer hover:bg-accent duration-200">
            {text}
          </h1>
          <div
            style={{ width: width }}
            className="h-[.8rem] bg-secondary left-[-13.5rem] top-[50%] tablet-s:hidden"
          ></div>
        </motion.div>
      </a>
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", function () {
      var scrolled = window.scrollY;
      // get the height of the section in pixels
      if (sectionRef.current) {
        let scrollHeight = (sectionRef.current as HTMLDivElement).scrollHeight;
        scrolled -= scrollHeight + 200;
      }
      // if the scrolled value is greater than the last value
      if (scrolled > scrolledY) {
        scrolledY = scrolled;
      }
      // subtract the hight of the section with id "hero" from the scrolled value
      // get the element with the id "hero"
      const hero = document.getElementById("hero");
      // make sure the center line does not go past the bottom of its parent
      let displayedScrolledY = scrolledY + this.window.innerHeight - hero.clientHeight
      if (displayedScrolledY > 0) {
        displayedScrolledY = 0;
      }
      if (centerLineRef.current) {
        (
          centerLineRef.current as HTMLDivElement
        ).style.transform = `translateY(${displayedScrolledY}px)`;
      }
      if (centerLineRef.current) {
        const centerLine = centerLineRef.current as HTMLDivElement;
        centerLine.style.transform = `translateY(${displayedScrolledY}px)`;

        const rect = centerLine.getBoundingClientRect();
        const centerLineBottomPosition = rect.bottom;
        lineBottom = centerLineBottomPosition;
      }
      // hide the part of the line that is outside of its parent
    });
  });

  return (
    <section
      className="bg-primary text-dark px-[2rem] relative overflow-hidden"
      id="categoriesSection"
      ref={sectionRef}
    >
      <div className="flex justify-center">
        <div
          className="w-[.8rem] bg-secondary absolute top-0 bottom-0 m-auto mx-0"
          ref={centerLineRef}
          style={{ transform: `translateY(-200%)` }}
        ></div>
      </div>

      <div className="flex justify-center items-center mt-[2rem] mb-14 gap-0 z-[10] tablet-s:flex-wrap tablet-s:flex-col-reverse tablet-s:gap-y-[4rem]">
        <div className="flex flex-col gap-y-[5rem] tablet-s:gap-y-[4rem]">
          <CategoryItemLeft text="KITCHENS" width="18.2rem"></CategoryItemLeft>
          <CategoryItemLeft text="OUTDOOR" width="17.5rem"></CategoryItemLeft>
          <CategoryItemLeft text="CLOSETS" width="20rem"></CategoryItemLeft>
          <CategoryItemLeft text="OTHER" width="23rem"></CategoryItemLeft>
        </div>

        <div className="flex flex-col gap-y-[5rem] tablet-s:gap-y-[4rem]">
          <CategoryItemRight text="BATHROOMS" width="14rem"></CategoryItemRight>
          <CategoryItemRight
            text="FIREPLACES"
            width="16rem"
          ></CategoryItemRight>
          <CategoryItemRight text="NEW HOMES" width="15rem"></CategoryItemRight>
        </div>
      </div>

      <Image width={400} height={400} alt="background" src="/images/floorplan.png" className="absolute top-0 left-0 h-[100%] w-[100%] opacity-30 pointer-events-none"/>
    </section>
  );
}