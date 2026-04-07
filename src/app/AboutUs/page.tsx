"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useStaggeredFadeUp } from "../components/useStaggeredFadeUp";


import Header from "../components/Header";
import CEO from "../components/CEO";
import Team from "../components/Team";


import Footer from "../components/Footer";



interface Feature {
  id: string;
 icon: string;
  title: string;
  description: string;
}

const featuresEn: Feature[] = [
  {
    id: "01",
    icon: "/emaar.png",
    title: "Emaar Properties",
    description:
      " Downtown Dubai, Dubai Hills Estate, Dubai Creek Harbour.",
  },
  {
    id: "02",
    icon: "/binghatti.png",
    title: "Binghatti",
    description:
      " Business Bay, Al Jaddaf, Dubai Science Park.",
  },
  {
    id: "03",
     icon: "/danube.png",
    title: "Danube Properties",
    description:
      " JVC (Jumeirah Village Circle), Arjan, Liwan, Al Furjan.",
  },
  {
    id: "04",
     icon: "/sobha.png",
    title: "Sobha Realty",
    description:
      " Sobha Hartland, Mohammed Bin Rashid City.",
  },
  {
    id: "05",
     icon: "/nakheel.png",
    title: "Nakheel",
    description:
      " Palm Jumeirah, Dubai Islands, District One.",
  },
  {
    id: "06",
    icon: "/damac.png",
    title: "Damac Properties",
    description:
      " DAMAC Hills, Akoya, Business Bay.",
  },
  {
    id: "07",
    icon: "/meraas.png",
    title: "Meraas",
    description:
      " City Walk, Bluewaters Island, Port de La Mer.",
  },
  {
    id: "08",
     icon: "/ellington.png",
    title: "Ellington Properties",
    description:
      " Dubai Hills Estate, JVC (Jumeirah Village Circle), Downtown Dubai.",
  },
];

export default function Home() {
  const fadeRef = useRef<HTMLHeadingElement>(null);
  useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);
  return (
    <>
      <Header />
      <section className="py-14 lg:py-24  relative top-shape overflow-hidden">
        <Image
          src="/building.png"
          alt="building"
          width={600}
          height={600}
          className="object-cover w-[150px] lg:w-[350px] opacity-40 absolute bottom-0 right-0 "
        />
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1  gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 max-w-[1400px] max-h-[calc(100vh-80px)]   h-full flex flex-col  text-left"
          >
            <h5 className="bg-[var(--siteColor)] w-fit px-3 py-[2px] mb-2 uppercase text-sm md:text-md text-white">
              About Us
            </h5>


            <h1 className="text-4xl md:text-[44px] xl:text-[76px] font-bold mb-2 head-font max-w-[650px]">
              We Create, Launch, and <span className="text-site">Grow Your Brand</span>

            </h1>


            <div className=" max-w-[480px]">
              <p className="text-md md:text-xl my-3 font-light2  leading-tight text-justify">
                Integrating physical asset acquisition with digital infrastructure. We build the foundations of your wealth and the interfaces of your business.
              </p>

            </div>


          </motion.div>

        </div>
      </section>

      <section className="bg-[var(--background2)] py-14 lg:py-24  relative top-shape overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-18 items-center">
            <div className="relative flex justify-center  lg:flex h-full">

              <Image
                src="/real-estate.jpg"
                alt="Business for Success"
                width={1000}
                height={700}
                className="object-cover f-full w-full "
              />


            </div>
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }} className="heading flex flex-col gap-2 lg:py-8">

                <div className="flex items-center gap-2 text-site mb-2 uppercase text-md ">

                  Get to Know Us
                </div>
                <h2 ref={fadeRef} className="fade-up-stagger text-3xl lg:text-[54px] max-w-[650px] font-medium mb-4 leading-none">
                  Dubai&quot;s Most Trusted Real Estate Partner
                </h2>

                <p className="text-md  leading-snug  font-light text-justify">
                  Host on PDL was founded on a single conviction: that investors and homebuyers deserve a guide who understands
                  Dubai&quot;s property market at its deepest level — not just listings, but locations, developer track records, ROI trajectories,
                  and the timing that separates good deals from exceptional ones.

                  <br /> <br />
                  From the gleaming towers of Downtown Dubai and Dubai Marina to the emerging communities of Dubai Creek Harbour
                  and Meydan, our team has walked every development, met every key developer, and studied every market cycle. This is
                  Dubai-specific expertise built over years of on-the-ground experience.
                  <br /> <br />
                  &quot;We don&quot;t just sell properties. We identify where Dubai&quot;s growth is heading — and position
                  our clients ahead of it.&quot;
                  <br /> <br />
                  Whether you are a first-time buyer from India or the UK, a seasoned international investor seeking capital appreciation, or
                  a UAE resident upgrading to your dream home — we bring the same dedication, the same market intelligence, and the
                  same commitment to finding you the right property at the right price.

                </p>


              </motion.div>






            </div>


          </div>
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className=" grid  md:grid-cols-2 lg:grid-cols-3 gap-5  relative md:mt-16">

            <div

              className="group  p-5 lg:p-7   bg-[var(--background)] relative transition-all duration-500 relative top-0 hover:top-[-5px]"
            >


              <div className="flex gap-4 items-center">

                <h3 className="text-[18px] md:text-[22px]  font-semibold">Our Mission</h3>
              </div>
              <p className="text-sm  leading-snug  mt-4 font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>

            </div>
            <div

              className="group  p-5 lg:p-7    bg-[#f3f1ffba] relative transition-all duration-500 relative top-0 hover:top-[-5px]"
            >


              <div className="flex gap-4 items-center">

                <h3 className="text-[18px] md:text-[22px]  font-semibold">Our Vision</h3>
              </div>
              <p className="text-sm  leading-snug  mt-4 font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>

            </div>
            <div

              className="group  p-5 lg:p-7    bg-[#f3feea] relative transition-all duration-500 relative top-0 hover:top-[-5px]"
            >


              <div className="flex gap-4 items-center">

                <h3 className="text-[18px] md:text-[22px]  font-semibold">Our Values</h3>
              </div>
               <p className="text-sm  leading-snug  mt-4 font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
            </div>

          </motion.div> */}
        </div>
      </section>
      <section className="py-14 lg:py-24  relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }} className="heading text-center flex flex-col gap-2 items-center max-w-[700px] mx-auto mb-14">
            <div className="flex items-center gap-2 text-site mb-2 uppercase text-md">

              Trusted Developers
            </div>
            <h2 ref={fadeRef} className="text-center fade-up-stagger text-3xl lg:text-[54px] font-medium mb-1 leading-none">
              Explore Dubai’s Leading Developers

            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className=" flex ml-[-22] md:ml-0 pl-4 mr-[-22] md:mr-0 pr-4  md:grid overflow-auto grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5  relative  ">
            {featuresEn.map((feature: Feature) => (
              <div

                key={feature.id}

                className="group min-w-[300px] md:min-w-auto  p-5 lg:p-7   bg-[#fffdf3] relative transition-all duration-500 relative top-0 hover:top-[-5px]"
              >

                <span className="block">
                  <img
                    src={feature.icon}
                    alt="location"
                    className=" h-9 max-w-[130px] object-contain"
                  />
                </span>


                <div className="flex gap-4 items-center pt-14">

                  <h3 className="text-[20px] font-semibold uppercase">{feature.title}</h3>
                </div>
                <p className=" leading-snug  pt-3 font-light lg:min-h-[70px]">
                  {feature.description}
                </p>


              </div>
            ))}
          </motion.div>
        </div>
      </section >

      <CEO />
      <Team />

      <Footer />

    </>
  );
}
