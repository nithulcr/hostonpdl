// components/ThreeStepProcess.tsx

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import SignatureIcon from "./SignatureIcon";
import Image from "next/image";



export default function ThreeStepProcess() {
    const fadeRef = useRef<HTMLHeadingElement>(null);
    useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);
    return (
        <section className=" bg-[var(--background2)] py-14 lg:py-24 rounded-3xl relative top-shape overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                <div className="relative flex justify-center  lg:flex h-full">

                    <Image
                        src="/it.jpg"
                        alt="Business for Success"
                        width={1000}
                        height={1000}
                        className="object-cover f-full w-full rounded-[16px] mx-auto max-w-[600px]"
                    />


                </div>
                <div className="flex flex-col">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }} className="heading flex flex-col gap-2 ">

                        <div className="flex items-center gap-2 text-site mb-2 uppercase text-md justify-center md:justify-start">
                            <SignatureIcon width={20} height={20} />
                            Alongside real estate services
                        </div>
                        <h2 ref={fadeRef} className="text-center md:text-left fade-up-stagger text-3xl lg:text-[54px] max-w-[500px] font-medium mb-1 leading-none text-site">
                            IT & Digital Services
                        </h2>
                        <p className="text-md  leading-snug  font-light text-justify">
                            Alongside its real estate operations, HOST ON PDL offers professional website development and digital
                            solutions to support businesses in building a strong and effective online presence.
                            With over 14 years of experience in website and software development, the company has successfully
                            delivered 100+ websites for businesses across various industries, including the commercial and service
                            sectors. The focus has always been on creating reliable, high-performance websites tailored to
                            business needs.
                            <br />
                            HOST ON PDL also specializes in lead generation strategies, having successfully completed and
                            managed 30+ lead generation campaigns, with several ongoing projects helping businesses attract the
                            right customers and generate qualified inquiries.
                            <br />
                            By combining technical expertise with practical marketing strategies, HOST ON PDL helps businesses
                            improve visibility, generate leads, and grow in an increasingly digital marketplace
                        </p>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}
