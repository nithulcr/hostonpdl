'use client';

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import Image from "next/image";

const features = [
    {
        icon: "/golden-visa.png",
        title: "Golden Visa Era",
        desc: "Long-term residency security for global investors, unlocking a permanent gateway to economic dominance.",
    },
    {
        icon: "/high-roi.png",

        title: "High ROI Focus",
        desc: "Tax-free rental yields and capital appreciation that outperform traditional European markets.",
    },
    {
        icon: "/safety.png",

        title: "Regulatory Safety",
        desc: "Benefit from the world's most transparent real estate framework, protected by DLD regulations.",
    },
];


export default function Insights() {
    const fadeRef = useRef<HTMLHeadingElement>(null);
    useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);
    return (
        <section className=" bg-[var(--background2)] py-14 lg:py-24 rounded-3xl relative top-shape overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

                <div className="flex flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }} className="heading flex flex-col gap-2 ">

                        <div className="flex items-center gap-2 text-site mb-2 uppercase text-md ">

                            Market Insights
                        </div>
                        <h2 ref={fadeRef} className="fade-up-stagger text-3xl lg:text-[54px] max-w-[550px] font-bold mb-10 leading-none">
                            <span className="block">Why the UAE?</span>
                            A New Era of <span className=" text-site">Wealth Creation.</span>
                        </h2>
                        <div className="space-y-8">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex gap-5 items-start group"
                                >
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-16 h-16 bg-primary flex items-center justify-center text-on-primary transform group-hover:rotate-12 transition-transform duration-300">
                                        <span className="bg-[var(--siteColor)] p-2">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="font-headline text-lg font-bold mb-2 uppercase tracking-tighter">
                                            {item.title}
                                        </h3>
                                        <p className="opacity-80 text-sm md:text-[16px] leading-tight font-light">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </motion.div>

                </div>
                <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }} className="relative  h-full w-full">

                    <div className="bg-img   overflow-hidden  ml-auto max-w-[94%] h-[94%]">
                        <Image
                            src="/insight.png"
                            alt="Insights"
                            width={1000}
                            height={1000}
                            className="object-cover   w-full "
                        />
                    </div>
                    <div className="bg-[var(--siteColor)] p-5 lg:p-8 absolute left-0 bottom-0 text-white space-y-2 md:space-y-3">
                        <div className="flex items-center gap-2   uppercase text-sm md:text-md   relative">
                            <span className="pulse-action"></span>
                            <span className="pl-4">Live Pulse</span>
                        </div>
                        <h3 className="uppercase text-md  md:text-lg font-semibold">Avg. Rental Yield</h3>
                        <h3 className="text-3xl md:text-5xl font-black">8.2% <span className="opacity-60 text-sm">NET P.A</span></h3>
                    </div>


                </motion.div>

            </div>
        </section>
    );
}
