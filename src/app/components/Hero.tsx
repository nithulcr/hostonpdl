"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

/* ✅ Type Definition */
type SlideType = {
  imageSrc?: string;
  videoSrc?: string; // optional
  heading: string;
  description1: string;
  contactLink: string;
  contactLink2: string;
};

/* ✅ Slides Data */
const slidesContent: SlideType[] = [
  {
    imageSrc: "/hero5.webp",
    heading: "Invest in Dubai <span>Real Estate</span>",
    description1:
      "Experience exponential growth in the world's most dynamic capital market. Secure your legacy with high-yield Solaris curator assets.",
    contactLink: "#",
    contactLink2: "#",
  },
  {
    imageSrc: "/hero1.webp",
    heading: "Binghatti, Redefining <span>Real Estate Design</span>",
    description1:
      "Binghatti creates iconic hyper-properties through innovative design.",
    contactLink: "#",
    contactLink2: "#",
  },
  {
    imageSrc: "/hero2.webp",
    heading:
      "Danube Properties,  <span>Multi-Million Dollar Group</span>",
    description1:
      "The Group runs award-winning brands including Danube Building Materials, Danube Home, and Alucopanel.",
    contactLink: "#",
    contactLink2: "#",
  },
  {
    imageSrc: "/hero3.webp",
    heading: "Sobha Realty,  <span>Building Excellence</span>",
    description1:
      "We focus on craftsmanship and detailing is a part of our legacy, spanning five decades.",
    contactLink: "#",
    contactLink2: "#",
  },

  // ✅ Optional video slide (can enable anytime)
  // {
  //   videoSrc: "/video.mp4",
  //   heading: "",
  //   description1: "",
  //   contactLink: "",
  //   contactLink2: "",
  // },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  return (
    <section className="relative flex bg-[var(--foreground)]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1500}
        onSwiper={(swiper: SwiperType) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex;
          setActiveIndex(realIndex);

          const current = slidesContent[realIndex];

          // ✅ Safe check (no TS error)
          if (current?.videoSrc) {
            swiper.autoplay.stop();

            const videoEl = videoRefs.current[realIndex];
            if (videoEl) {
              try {
                videoEl.currentTime = 0;
                void videoEl.play();
              } catch {}
            }
          } else {
            if (!swiper.autoplay.running) {
              swiper.autoplay.start();
            }
          }
        }}
        className="w-full hero text-white flex flex-col md:max-h-[calc(100dvh-80px)] justify-center items-center text-center px-6 relative"
      >
        {slidesContent.map((slide, index) => (
          <SwiperSlide key={index} className="h-full">
            {/* Background */}
            <div className="absolute hero-cover hero-cover2 md:max-h-[calc(100dvh-80px)] inset-0 bg-cover h-full bg-center">
              {slide.imageSrc ? (
                <Image
                  src={slide.imageSrc}
                  width={1000}
                  height={1000}
                  alt="bg"
                  className="w-full h-full object-cover"
                />
              ) : slide.videoSrc ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={slide.videoSrc}
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  onEnded={() => {
                    const swiper = swiperRef.current;
                    if (swiper) {
                      swiper.slideNext();
                      swiper.autoplay.start();
                    }
                  }}
                />
              ) : null}
            </div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 max-w-[1400px] max-h-[calc(100dvh-80px)] mx-auto px-4 md:px-6 py-30 lg:py-40 h-full flex flex-col justify-center text-left"
            >
              <h5 className="bg-[var(--siteColor)] w-fit px-3 py-[2px] mb-2 uppercase text-sm md:text-md">
               Solaris Luxe Elite
              </h5>

              {slide.heading && (
                <h1
                  className="text-4xl md:text-[74px] font-bold mb-2 head-font max-w-[850px]"
                  dangerouslySetInnerHTML={{ __html: slide.heading }}
                />
              )}

              {slide.description1 && (
                <div className=" max-w-[600px]">
                  <p className="text-md md:text-xl my-3 font-light2  leading-tight">
                    {slide.description1}
                  </p>
                </div>
              )}

              {slide.contactLink && (
                <div className="flex flex-wrap gap-3 xs:gap-4 mt-3 max-w-[540px]">
                  <AnimatedButton
                    href={slide.contactLink}
                    label="Book Consultation"
                    className="w-fit"
                  />
                  <AnimatedButton
                    href={slide.contactLink2}
                    label="View Portfolio"
                    className="w-fit transparent-btn"
                  />
                </div>
              )}

              {/* Pagination */}
              <div className="absolute right-8 xl:right-0 bottom-[20px] lg:bottom-[40px] flex gap-3 z-20">
                {slidesContent.map((_, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={i}
                      onClick={() => swiperRef.current?.slideToLoop(i)}
                      className={`w-[40px] lg:w-[70px] h-[2px] ${
                        isActive ? "bg-white" : "bg-white/25"
                      }`}
                    />
                  );
                })}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;