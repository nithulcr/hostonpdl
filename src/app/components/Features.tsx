"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";


const featuresEn = [
    {
        id: '01',
        icon: <><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_402_8619)">
                <g clipPath="url(#clip1_402_8619)">
                    <path d="M22 6H11.3333C8.38781 6 6 8.38781 6 11.3333V22C6 24.9455 8.38781 27.3333 11.3333 27.3333H22C24.9455 27.3333 27.3333 24.9455 27.3333 22V11.3333C27.3333 8.38781 24.9455 6 22 6Z" stroke="#fe5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.667 27.334V38.0006C16.667 39.4151 17.2289 40.7717 18.2291 41.7719C19.2293 42.772 20.5858 43.334 22.0003 43.334H32.667" stroke="#fe5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M48.667 32.666H38.0003C35.0548 32.666 32.667 35.0539 32.667 37.9994V48.666C32.667 51.6116 35.0548 53.9994 38.0003 53.9994H48.667C51.6125 53.9994 54.0003 51.6116 54.0003 48.666V37.9994C54.0003 35.0539 51.6125 32.666 48.667 32.666Z" stroke="#fe5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_402_8619">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
                <clipPath id="clip1_402_8619">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
            </defs>
        </svg>


        </>,

        title: "Workflow Automation",
        description: "Build custom reporting and alert workflows on a schedule. You get flagged the moment a competitor gains ground.",

    },
    {
        id: '02',
        icon: <><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_402_8631)">
                <g clipPath="url(#clip1_402_8631)">
                    <path d="M35 15V5H25" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 15H33" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 15H33" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 45L8 55V20C8 18.6739 8.57946 17.4021 9.61091 16.4645C10.6424 15.5268 12.0413 15 13.5 15H46.5C47.9587 15 49.3576 15.5268 50.3891 16.4645C51.4205 17.4021 52 18.6739 52 20V40C52 41.3261 51.4205 42.5979 50.3891 43.5355C49.3576 44.4732 47.9587 45 46.5 45H19Z" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 23V26" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M37 23V26" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_402_8631">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
                <clipPath id="clip1_402_8631">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
            </defs>
        </svg>


        </>,

        title: "Chat With Your Data",
        description: "Ask any question about your SEO or GEO performance in plain language. The AI Assistant returns data-backed answers in seconds.",

    },
    {
        id: '03',
        icon: <><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_402_8646)">
                <g clipPath="url(#clip1_402_8646)">
                    <path d="M29.9961 32.2461V50.2461" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.3299 36.5187C10.6892 34.8107 9.45148 32.7448 8.71051 30.4773C7.96954 28.2098 7.74474 25.8002 8.05315 23.4311C8.36155 21.062 9.19507 18.7954 10.4906 16.8031C11.7861 14.8108 13.5095 13.145 15.5305 11.9319C17.5515 10.7188 19.8169 9.9902 22.1551 9.80125C24.4934 9.61231 26.8432 9.968 29.0266 10.8414C31.21 11.7148 33.1696 13.0829 34.7571 14.8423C36.3447 16.6016 37.5184 18.706 38.1895 20.9959H42.1424C44.2746 20.9957 46.3503 21.6942 48.0629 22.9882C49.7756 24.2822 51.0343 26.1031 51.6532 28.182C52.2721 30.2609 52.2183 32.4874 51.4998 34.5328C50.7813 36.5781 49.4362 38.3338 47.6632 39.5404" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.1631 41.2461L29.9964 32.2461L38.8298 41.2461" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_402_8646">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
                <clipPath id="clip1_402_8646">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
            </defs>
        </svg>


        </>,

        title: "One-Click CMS Publishing",
        description: "When an article is ready, publish directly to your connected CMS. No copy-pasting, no reformatting, no manual image insertions.",

    },
    {
        id: '04',
        icon: <><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_402_8658)">
                <g clipPath="url(#clip1_402_8658)">
                    <path d="M22.5 42.5H17.5C14.1848 42.5 11.0054 41.183 8.66117 38.8388C6.31696 36.4946 5 33.3152 5 30C5 26.6848 6.31696 23.5054 8.66117 21.1612C11.0054 18.817 14.1848 17.5 17.5 17.5H22.5" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M37.5 17.5H42.5C45.8152 17.5 48.9946 18.817 51.3388 21.1612C53.683 23.5054 55 26.6848 55 30C55 33.3152 53.683 36.4946 51.3388 38.8388C48.9946 41.183 45.8152 42.5 42.5 42.5H37.5" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 30H40" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_402_8658">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
                <clipPath id="clip1_402_8658">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
            </defs>
        </svg>

        </>,

        title: "Backlink Intelligence Add-On",
        description: "Expand your competitive intelligence with deeper backlink analysis covering referring domains, link velocity, and anchor distribution.",

    }
];

export default function Features() {
    const features = featuresEn;
    const fadeRef = useRef<HTMLHeadingElement>(null);
    useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);


    return (
        <section id="features" className="py-14 lg:py-24  relative bg-[var(--background2)]">
            <div className="max-w-[1400px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }} className="heading flex flex-col gap-2 items-center max-w-[600px] mx-auto mb-14">
                    <div className="flex items-center gap-2 text-site mb-2 uppercase text-md">

                        ADDITIONAL FEATURES
                    </div>
                    <h2 ref={fadeRef} className="text-center fade-up-stagger text-3xl lg:text-[54px] font-medium mb-1 leading-none">
                        Everything else your team needs.
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className=" flex ml-[-22] md:ml-0 pl-4 mr-[-22] md:mr-0 pr-4  md:grid overflow-auto grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5  relative  ">
                    {features.map((feature) => (
                        <div

                            key={feature.id}

                            className="group min-w-[300px] md:min-w-auto  p-5 lg:p-7   bg-[var(--background)] relative transition-all duration-500 relative top-0 hover:top-[-5px]"
                        >

                            <span className="h-20 block">
                                {feature.icon}
                            </span>


                            <div className="flex gap-4 items-center pt-10">

                                <h3 className="text-[18px] font-semibold">{feature.title}</h3>
                            </div>
                            <p className="text-sm  leading-snug  pt-2 font-light lg:min-h-[100px]">
                                {feature.description}
                            </p>


                        </div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
}
