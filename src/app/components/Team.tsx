"use client";

import { useRef } from "react";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import { motion } from "framer-motion";
import Image from "next/image";

// ✅ Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

// ✅ Icons
import { ArrowLeft, ArrowRight } from "lucide-react";

const caseStudies = [
  { name: "Raju Padinhatayil", position: "CEO and Founder", image: "/ceo.png" },
  { name: "Nithul KP", position: "Frontend Developer", image: "/ceo.png" },
  { name: "Arjun", position: "Frontend Developer", image: "/ceo.png" },
  { name: "Abhishek", position: "Frontend Developer", image: "/ceo.png" },
  { name: "Nikhil", position: "Frontend Developer", image: "/ceo.png" },
  { name: "Akhil", position: "Frontend Developer", image: "/ceo.png" },
  { name: "Vyshnav", position: "Frontend Developer", image: "/ceo.png" },
  { name: "Gokul", position: "Frontend Developer", image: "/ceo.png" },
];

const Team = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const fadeRef = useRef<HTMLHeadingElement>(null);
  useStaggeredFadeUp(fadeRef as unknown as React.RefObject<HTMLElement>);

  return (
    <section
      ref={containerRef}
      id="Team"
      className="team section overflow-hidden py-14 lg:py-28"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        {/* Heading + Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="heading md:flex justify-between items-center text-left mb-10 md:mb-16 gap-4"
        >
          <div className="max-w-[500px] flex flex-col gap-2">
            <div className="flex items-center gap-2 text-site mb-2 uppercase text-md">
              Our Team
            </div>
            <h2
              ref={fadeRef}
              className="text-3xl lg:text-[54px] font-bold mb-2 leading-none"
            >
              The Team Behind <span className="text-site">Our Success</span>
            </h2>
          </div>

          {/* ✅ Arrows */}
          <div className="flex gap-3">
            <button className="cursor-pointer team-prev w-10 h-10 flex items-center justify-center bg-[var(--siteColor)] text-white hover:opacity-80 transition">
              <ArrowLeft size={18} />
            </button>
            <button className="cursor-pointer team-next w-10 h-10 flex items-center justify-center bg-[var(--siteColor)] text-white hover:opacity-80 transition">
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* ✅ Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".team-next",
            prevEl: ".team-prev",
          }}
          loop={true}
          className="team-slider cursor-grab"
        >
          {caseStudies.map((item) => (
            <SwiperSlide key={item.name}>
              <div className=" case-col group hover:-translate-y-[5px] overflow-hidden bg-[#fffdf3] transition-all duration-300 relative">
                
                {/* Image */}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;