"use client";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { motion, useAnimation } from "framer-motion";
import faqData from "./faq-data";

export default function Faq() {
    const [showAnswer, setShowAnswer] = useState(new Array(faqData.length).fill(false));

    // this page has been temporarily disabled, redirect to home page 
    // TODO: discuss how to change this page and add it back in
    useEffect(() => {
        window.location.href = "/";
    }, []);
    return null;

    const toggleAnswer = (index: number) => {
        setShowAnswer((prevState) => {
            const newShowAnswer = [...prevState];
            newShowAnswer[index] = !newShowAnswer[index];
            for (let i = 0; i < newShowAnswer.length; i++) {
                if (i !== index) {
                    newShowAnswer[i] = false;
                }
            }
            return newShowAnswer;
        });
    };

    const Container = ({ index, question, answer }) => {
        const containerRef = useRef(null);
        const controls = useAnimation();

        const handleClick = () => {
            toggleAnswer(index);
        };

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        controls.start({ opacity: 1, y:0, transition: { duration: .5 } });
                    }
                },
                { threshold: 1 }
            );

            if (containerRef.current) {
                observer.observe(containerRef.current);
            }

            return () => {
                if (containerRef.current) {
                    observer.unobserve(containerRef.current);
                }
            };
        }, [controls]);

        return (
            <motion.div
                ref={containerRef}
                className="w-[70%] mx-auto bg-primary rounded-3xl tablet-s:w-[85%] mobile:w-[90%]"
                initial={{ opacity: 1, y: 0 }}
                animate={controls}
            >
                <div className="flex justify-between items-center cursor-pointer mobile:items-start py-[2rem] tablet-s:py-[1.2rem] px-10 tablet-s:px-5" onClick={handleClick}>
                    <p className="text-dark font-[600] text-[1.3rem] text-center select-none tablet-s:text-[1rem] tablet-s:text-left mr-3">{question}</p>
                    <div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{ rotate: showAnswer[index] ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 300, duration: .8 }}
                        >
                            <FontAwesomeIcon icon={faHouse} className="w-[2.3rem] h-[2.3rem] mb-1 select-none text-accent tablet-s:w-[1.6rem] tablet-s:h-[1.6rem]" />
                        </motion.div>
                    </div>
                </div>

                {showAnswer[index] && (
                    <motion.p
                        className="bg-white pb-[2rem] tablet-s:pb-[1.5rem] text-[1.1rem] tablet-s:text-[1rem] text-dark ease-in-out duration-300 cursor-text px-10 tablet-s:px-5"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.4 }}
                    >
                        {answer}
                    </motion.p>
                )}
            </motion.div>
        );
    };

    const renderContainers = () => {
        return faqData.map((item, index) => (
            <Container key={index} index={index} question={item.question} answer={item.answer} />
        ));
    };

    return (
        <section className="flex flex-col gap-y-[3rem] relative animate-faq opacity-0">
            {renderContainers()}
        </section>
    );
}
