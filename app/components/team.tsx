import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Team() {
    const [animate, setAnimate] = useState(false);
    function TeamItem({ name, image, delay }) {
        const [hasAnimated, setHasAnimated] = useState(false);
        const [inView, setInView] = useState(false);
        const ref = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !hasAnimated || animate && !hasAnimated) { 
                        setInView(true);
                        setHasAnimated(true);
                        setAnimate(true);
                    }
                },
                { threshold: 0.5 }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, [hasAnimated, animate]);

        return (
            <motion.div
                ref={ref}
                className="flex flex-col z-[20]"
                initial={{ opacity: 0, y: 20, rotateZ: -10 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20, rotateZ: inView ? 0 : -10 }}
            >
                <Image
                    width={200}
                    height={200}
                    alt="team"
                    src={image}
                    className="rounded-3xl w-[14.5em] aspect-[2/3] object-cover tablet-s:w-[11rem]"
                />
                <p className="text-center mt-5 font-[500] font-[Outfit] text-dark text-[1.3rem] tablet-s:text-[1.1rem] z-[20]">{name}</p>
            </motion.div>
        );
    }

    const team = [
        { name: "Timothy Schoolland", image: "/images/team3.png" },
        { name: "Levi Sawyer", image: "/images/team1.png" },
        { name: "Ben", image: "/images/team2.png" },
        { name: "Greg Schoolland", image: "/images/team4.png " },
    ];

    return (
        <section className="bg-primary relative tablet-s:px-[2rem] mobile:px-[1rem]">
            <h1 className="text-dark tracking-wide mobile:px-[1rem] z-[20] mx-0">MEET THE TEAM CARRYING ON THE TRADITION</h1>
            <div className="flex justify-center flex-wrap w-[80rem] tablet-s:w-[90%] mobile:w-[100%] mx-auto items-center mt-[4rem] gap-16 mb-[4rem] z-[20] 
            tablet-s:justify-center max-w-[1500px] laptop-s:gap-10">
                {team.map((person, index) => (
                    <TeamItem key={index} name={person.name} image={person.image} delay={index * 0.15} />
                ))}
            </div>
            <Image width={400} height={400} alt="background" src="/images/floorplan.png" className="absolute top-0 left-0 h-[100%] w-[100%] opacity-30 pointer-events-none"/>
        </section>
    );
}
