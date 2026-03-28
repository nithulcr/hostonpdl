"use client";
import { useRef, useState, useEffect } from "react";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "../components/AnimatedButton";
import { MapPin } from "lucide-react";




const caseStudies = [
    {
        title: "Mercedes-Benz Places by Binghatti",
        location: "Downtown Dubai",
        location2: "High ROI",

        starting: "AED 8.8M",
        handover: "Q4 2025",

        image: "/bingati-bg.png",
        video: "/video.mp4",
    },
    {
        title: "Sobha Central",
        location: "MBR City",
        location2: "Prime Selection",

        starting: "AED 8.9M",
                handover: "Ready",

        image: "/sobha-bg.png",
        video: "/video.mp4",
    },
    {
        title: "Danube Breeze",
        location: "Water Canal",
        location2: "New Launch",

       starting: "AED 1.2M",
                handover: "Q2 2026",
        image: "/danube-bg.png",
        video: "/video.mp4",
    },


];

const CaseStudy = () => {
    const containerRef = useRef<HTMLElement | null>(null);
    const fadeRef = useRef<HTMLHeadingElement>(null);
    useStaggeredFadeUp(fadeRef as unknown as React.RefObject<HTMLElement>);

    // Index of the currently showing/playing video. Null means nothing is hovered and it's auto-play mode.
    const [playingIdx, setPlayingIdx] = useState(0);
    const [isManual, setIsManual] = useState(false); // true if user is hovering a card
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        // When not in manual mode, set up auto-play switching between videos
        if (!isManual) {
            const currentRef = videoRefs.current[playingIdx];
            const handler = () => setPlayingIdx((idx) => (idx + 1) % caseStudies.length);

            if (currentRef) {
                currentRef.currentTime = 0; // Reset video to start
                currentRef.play();
                currentRef.onended = handler;
            }
            return () => {
                if (currentRef) currentRef.onended = null;
            };
        }
    }, [isManual, playingIdx]);

    // When hover, set playingIdx and manual to true
    const handleMouseEnter = (idx: number) => {
        setIsManual(true);
        setPlayingIdx(idx);
    };

    // When mouse leaves, set manual mode to false and continue auto-play from this video
    const handleMouseLeave = () => {
        setIsManual(false);
    };

    return (
        <section ref={containerRef} id="CaseStudy" className="section overflow-hidden py-14 lg:py-28">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="heading flex justify-between items-center  text-left mb-10 gap-2"
                >
                    <div className="max-w-[400px] flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-site mb-2 uppercase text-md ">

                            The Portfolio
                        </div>
                        <h2 ref={fadeRef} className="text-3xl lg:text-[54px] max-w-[550px] font-bold mb-10 leading-none">
                            Curated Developments
                        </h2>
                    </div>

                    <AnimatedButton href="" label="View All Projects" className="w-fit  mt-3" />

                </motion.div>
                <div className="grid md:grid-cols-3  gap-10">
                    {caseStudies.map((item, idx) => (
                        <div
                            className="case-col group  overflow-hidden bg-white transition-shadow duration-200 relative"
                            key={item.title}
                            onMouseEnter={() => handleMouseEnter(idx)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="w-full aspect-[1.2/1.4]  relative overflow-hidden flex justify-center items-center bg-gray-100">
                                {playingIdx === idx ? (
                                    <video
                                        ref={el => { videoRefs.current[idx] = el; }}

                                        src={item.video}
                                        width={800}
                                        height={1200}
                                        autoPlay
                                        muted
                                        loop={isManual}
                                        playsInline
                                        className="object-cover w-full grayscale h-full"
                                    />
                                ) : (
                                    <Image src={item.image} alt={item.title} width={800} height={1200} className="object-cover grayscale w-full h-full" />
                                )}
                                
                                <div className="absolute inset-0 bg-[#ff572233] mix-blend-overlay group-hover:bg-transparent transition-colors"></div>
                                <span className="bg-[var(--siteColor)] text-sm text-white px-3 py-1 absolute top-[30px] left-[30px]">{item.location2}</span>

                            </div>
                            <div className="p-8 pb-10">
                                <div className="">
                                    <h5 className="xl md:text-[26px] font-bold uppercase mb-2">{item.title}</h5>
                                    <div className="max-w-[500px] text-gray font-sm text-lg flex items-center gap-1">
                                        <MapPin className="text-site h-5" /> {item.location}
                                    </div>
                                </div>
                                <span className="bg-gray-300 block w-full h-[1px] my-8"></span>
                                <div className="grid md:grid-cols-2">
                                    <div>
                                        <h3 className="uppercase text-gray mb-1 text-xs font-semibold">Starting From</h3>
                                        <h3 className="text-2xl font-black text-site">{item.starting}</h3>
                                    </div>
                                    <div>
                                        <h3 className="uppercase text-gray mb-1 text-xs font-semibold">Handover</h3>
                                        <h3 className="text-2xl font-black">{item.handover}</h3>
                                    </div>
                                </div>
                                <span className="bg-[var(--siteColor)] block w-full h-[4px] absolute bottom-0 left-0"></span>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
