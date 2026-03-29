"use client";
import { useRef } from "react";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "../components/AnimatedButton";

const caseStudies = [
  {
    name: "Raju Padinhatayil",
    position: "CEO and Founder",
    image: "/ceo.png",
  },
  {
    name: "Nithul KP",
    position: "Frontend Developer",
    image: "/ceo.png",
  },
    {
    name: "Arjun",
    position: "Frontend Developer",
    image: "/ceo.png",
  },
  {
    name: "Abhishek",
    position: "Frontend Developer",
    image: "/ceo.png",
  },
    {
    name: "Nikhil",
    position: "Frontend Developer",
    image: "/ceo.png",
  },
  {
    name: "Akhil",
    position: "Frontend Developer",
    image: "/ceo.png",
  },
    {
    name: "Vyshnav",
    position: "Frontend Developerr",
    image: "/ceo.png",
  },
  {
    name: "Gokul",
    position: "Frontend Developer",
    image: "/ceo.png",
  },

];

const Team = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const fadeRef = useRef<HTMLHeadingElement>(null);
  useStaggeredFadeUp(fadeRef as unknown as React.RefObject<HTMLElement>);

  return (
    <section ref={containerRef} id="Team" className="team bg-[var(--background2)] section overflow-hidden py-14 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="heading md:flex justify-between items-center text-left mb-10 md:mb-16 gap-2"
        >
          <div className="max-w-[500px] flex flex-col gap-2">
            <div className="flex items-center gap-2 text-site mb-2 uppercase text-md">
              Our Team
            </div>
            <h2
              ref={fadeRef}
              className="text-3xl lg:text-[54px]  font-bold mb-2 leading-none"
            >
              The Team Behind <span className="text-site">Our Success</span>
            </h2>
          </div>

         
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {caseStudies.map((item) => (
            <div
              className="case-col group hover:-translate-y-[5px] overflow-hidden bg-[var(--background)] transition-all duration-300 relative"
              key={item.name}
            >
              {/* Image Only */}
              <div className="w-full aspect-[1.2/1.3] relative overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={800}
                  height={1200}
                  className="object-cover grayscale w-full h-full group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#ff572233] mix-blend-overlay group-hover:bg-transparent transition-colors"></div>

              
              </div>

              {/* Content */}
              <div className="p-4 md:p-8 md:pb-10">
                <h5 className="text-md md:text-[22px] font-bold uppercase mb-2">
                  {item.name}
                </h5>

                <div className="font-light text-sm md:text-md">
                
                  {item.position}
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

export default Team;