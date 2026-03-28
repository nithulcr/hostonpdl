"use client";
import { useRef } from "react";
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
  },
  {
    title: "Sobha Central",
    location: "MBR City",
    location2: "Prime Selection",
    starting: "AED 8.9M",
    handover: "Ready",
    image: "/sobha-bg.png",
  },
  {
    title: "Danube Breeze",
    location: "Water Canal",
    location2: "New Launch",
    starting: "AED 1.2M",
    handover: "Q2 2026",
    image: "/danube-bg.png",
  },
];

const CaseStudy = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const fadeRef = useRef<HTMLHeadingElement>(null);
  useStaggeredFadeUp(fadeRef as unknown as React.RefObject<HTMLElement>);

  return (
    <section ref={containerRef} id="CaseStudy" className="section overflow-hidden py-14 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="heading md:flex justify-between items-center text-left mb-10 md:mb-16 gap-2"
        >
          <div className="max-w-[400px] flex flex-col gap-2">
            <div className="flex items-center gap-2 text-site mb-2 uppercase text-md">
              The Portfolio
            </div>
            <h2
              ref={fadeRef}
              className="text-3xl lg:text-[54px] max-w-[550px] font-bold mb-2 leading-none"
            >
              Curated Developments
            </h2>
          </div>

          <AnimatedButton href="" label="View All Projects" className="w-fit mt-3" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((item) => (
            <div
              className="case-col group hover:-translate-y-[15px] overflow-hidden bg-white transition-all duration-300 relative"
              key={item.title}
            >
              {/* Image Only */}
              <div className="w-full aspect-[1.2/1.3] relative overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={1200}
                  className="object-cover grayscale w-full h-full group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#ff572233] mix-blend-overlay group-hover:bg-transparent transition-colors"></div>

                <span className="bg-[var(--siteColor)] text-sm text-white px-3 py-1 absolute top-[30px] left-[30px]">
                  {item.location2}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 pb-10">
                <h5 className="xl md:text-[26px] font-bold uppercase mb-2">
                  {item.title}
                </h5>

                <div className="text-gray text-lg flex items-center gap-1">
                  <MapPin className="text-site h-5" />
                  {item.location}
                </div>

                <span className="bg-gray-300 block w-full h-[1px] my-8"></span>

                <div className="grid md:grid-cols-2">
                  <div>
                    <h3 className="uppercase text-gray mb-1 text-xs font-semibold">
                      Starting From
                    </h3>
                    <h3 className="text-2xl font-black text-site">
                      {item.starting}
                    </h3>
                  </div>
                  <div>
                    <h3 className="uppercase text-gray mb-1 text-xs font-semibold">
                      Handover
                    </h3>
                    <h3 className="text-2xl font-black">
                      {item.handover}
                    </h3>
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