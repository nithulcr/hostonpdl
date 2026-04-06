"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";


gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const containerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            // heading fill


            // cards rotate in from right
            gsap.utils.toArray(".services-rotate-right").forEach((elem) => {
                const target = elem as HTMLElement;
                gsap.fromTo(
                    target,
                    { x: -100, opacity: 0, rotate: -5 },
                    {
                        x: 0,
                        opacity: 1,
                        rotate: 0,
                        duration: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: target,
                            start: "top 90%",
                            end: "bottom 40%",
                            scrub: 0.7,
                        },
                    }
                );
            });
            gsap.utils.toArray(".services-up-bottom").forEach((elem) => {
                const target = elem as HTMLElement;
                gsap.fromTo(
                    target,
                    { y: 100, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: target,
                            start: "top 90%",
                            end: "bottom 40%",
                            scrub: 0.7,
                        },
                    }
                );
            });

            // cards rotate in from left
            gsap.utils.toArray(".services-rotate-left").forEach((elem) => {
                const target = elem as HTMLElement;
                gsap.fromTo(
                    target,
                    { x: 100, opacity: 0, rotate: 5 },
                    {
                        x: 0,
                        opacity: 1,
                        rotate: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: target,
                            start: "top 90%",
                            end: "bottom 40%",
                            scrub: 0.7,
                        },
                    }
                );
            });


        }, containerRef);

        return () => ctx.revert();
    }, []);



    const fadeRef = useRef<HTMLHeadingElement>(null);
    useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);

    return (
        <section ref={containerRef} id="services" className="section overflow-hidden py-14 lg:py-24">
            <div className="max-w-[1400px] mx-auto px-6">


                <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-1  w-full">

                    <div className="services-rotate-right bg-[#fffdf3]  hover:bg-[#26957d40] relative  p-8 flex flex-col justify-between">
                        <h3 className="text-7xl font-monument text-[var(--siteColor)] font-bold">100+</h3>
                        <div className="leading-snug text-right tracking-wide max-w-[340px] ml-auto mt-10 lg:mt-20">
                            <h4 className="text-xl font-medium uppercase ">
                                Global Clients
                            </h4>
                            <p className="text-[15px] font-light  mt-3">
                                Strategic property acquisition for high-net-worth portfolios across 24 nations.
                            </p>
                        </div>
                    </div>
                    <div className="services-up-bottom bg-[var(--siteColor)]  hover:bg-[var(--siteColor3)] text-white relative p-8 flex flex-col justify-between">
                        <h3 className="text-7xl font-monument font-bold">7+</h3>
                        <div className="leading-snug text-right tracking-wide max-w-[340px] ml-auto mt-10 lg:mt-20" >
                            <h4 className="text-xl font-medium uppercase ">
                              Years Excellence
                            </h4>
                            <p className="text-[15px] font-light  mt-3">
                               A legacy of navigating Dubai&apos;s market shifts with radiant precision and integrity.
                            </p>
                        </div>
                    </div>
                    <div className="services-rotate-left bg-[#fffdf3]  hover:bg-[#6f8f1042] relative p-8 flex flex-col justify-between">
                        <h3 className="text-7xl font-monument text-[var(--siteColor)] font-bold">30+</h3>
                        <div className="leading-snug text-right tracking-wide max-w-[340px] ml-auto mt-10 lg:mt-20">
                            <h4 className="text-xl font-medium uppercase ">
                               Campaigns
                            </h4>
                            <p className="text-[15px] font-light  mt-3">
                               Record-shattering sell-outs across Dubai’s most prestigious luxury residential sectors.
                            </p>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
};

export default Services;
