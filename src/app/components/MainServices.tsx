"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import { motion, number } from "framer-motion";

import AnimatedButton from "../components/AnimatedButton";


gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({
    title,
    description,
    number
}: {
    title: string;
    description: string;
    number?: string;
}) => (
    <div className="service-card group relative sm:py-8 pt-5 pb-6 overflow-hidden w-full flex items-center services-right">
        <div className="w-full flex align-center">
            <div className="grid md:grid-cols-2 w-full items-center">
                <div className="flex gap-2">
                    <span className="text-[var(--siteColor3)]">{number}</span>
                    <h5 className="md:text-4xl text-[30px] font-light text-start text-center duration-1000 ease-in-out ">
                        {title}
                    </h5>
                </div>
                <p className="text-lg duration-500  ease-in-out overflow-hidden pt-2 font-light md:text-right max-w-[500px] md:ml-auto">
                    {description}
                </p>
            </div>
        </div>
    </div>
);

const Services = () => {
    const containerRef = useRef<HTMLElement | null>(null);
    const fadeRef = useRef<HTMLHeadingElement>(null);

    // Use a double cast on fadeRef to satisfy TS generic constraint.
    useStaggeredFadeUp(fadeRef as unknown as React.RefObject<HTMLElement>);

    useEffect(() => {
        if (!containerRef.current) return;
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".services-right").forEach((elem) => {
                gsap.fromTo(
                    elem,
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: elem,
                            start: "top 90%",
                            end: "bottom 20%",
                            scrub: 0.7,
                        },
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Card Data
    const serviceCards = [
        {
            number: "01",
            title: "Website Design & Development",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
            number: "02",

            title: "Business Website Solutions",
           description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
            number: "03",

            title: "Landing Page Development",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
            number: "04",

            title: "Lead Generation Campaigns",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
            number: "05",

            title: "Digital Business Support",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
        {
            number: "06",

            title: " Social Media Marketing",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        },
    ];

    return (
        <section ref={containerRef} id="services" className="bg-[var(--foreground)] text-white section overflow-hidden py-14 lg:py-28">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="heading flex items-center justify-between  font-light text-white text-left mb-14"
                >
                    <div className=" max-w-[460px]">
                        <div className="flex gap-2 mb-3 uppercase  text-sm md:justify-start white-icon">
                           
                            Our Services
                        </div>
                        <h2
                            ref={fadeRef}
                            className="mt-3 text-left fade-up-stagger text-3xl lg:text-[54px] font-light mb-1 leading-none"
                        >
                            We Create, Launch, and Grow Your Brand
                        </h2>
                    </div>
                    <AnimatedButton href="" label="Learn More" className="w-fit transparent-btn hidden md:block mt-3" />

                </motion.div>
                {/* ServiceCard (Simple style) */}
                <div className="grid">
                    {serviceCards.map((card, idx) => (
                        <ServiceCard key={card.title + idx} title={card.title} description={card.description} number={card.number} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
