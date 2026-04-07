"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useStaggeredFadeUp } from "../components/useStaggeredFadeUp";


import Header from "../components/Header";


import Footer from "../components/Footer";


interface Feature {
  id: string;

  title: string;
  description: string;
}

const featuresEn: Feature[] = [
  {
    id: "01",

    title: "Downtown Dubai",
    description:
      "The heart of Dubai, known for iconic landmarks and premium lifestyle offerings, making it one of the most sought-after residential and investment destinations.",
  },
  {
    id: "02",

    title: "Business Bay",
    description:
      "A fast-growing business and residential hub offering modern developments with strong connectivity to key areas of the city.",
  },
  {
    id: "03",

    title: "Dubai Marina",
    description:
      "A vibrant waterfront community popular for its lifestyle appeal, high-rise living, and consistent rental demand.",
  },
  {
    id: "04",

    title: "Palm Jumeirah",
    description:
      "One of Dubai’s most prestigious addresses, offering luxury beachfront living with limited supply and strong global appeal.",
  },
  {
    id: "05",

    title: "Dubai Hills Estate",
    description:
      "A premium family-friendly community featuring green spaces, golf course views, and integrated lifestyle amenities.",
  },
  {
    id: "06",

    title: "Dubai Creek Harbour",
    description:
      "An emerging waterfront destination offering modern infrastructure, scenic views, and large-scale master planning.",
  },
  {
    id: "07",

    title: "Emaar Beachfront",
    description:
      "An exclusive beachfront development combining private beach access with luxury residential living.",
  },
  {
    id: "08",

    title: "Dubai South",
    description:
      "A rapidly developing area near major infrastructure projects, attracting long-term growth and new community developments.",
  },
  {
    id: "09",

    title: "Dubailand",
    description:
      "A diverse and expanding area featuring family-oriented communities, villas, and new off-plan developments.",
  },
  {
    id: "10",

    title: "Ras Al Khaimah",
    description:
      "An emerging investment destination in the UAE, gaining attention for waterfront developments, tourism growth, and major integrated resort projects such as Wynn Al Marjan Island, supporting the emirate’s growing global appeal.",
  },
];


export default function ProjectLocations() {
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
              Project Locations
            </h5>


            <h1 className="text-4xl md:text-[44px] xl:text-[76px] font-bold mb-2 head-font max-w-[780px]">
              Explore Dubai’s Top Off-Plans <span className="text-site">Investment Locations</span>

            </h1>


            <div className=" max-w-[700px]">
              <p className="text-md md:text-xl my-3 font-light2  leading-tight text-justify">
                Dubai continues to attract global investors with its well-planned communities, modern infrastructure, and transparent property regulations governed by the Dubai Land Department. Off-plan developments across key locations offer buyers access to new projects with flexible payment structures and contemporary lifestyle features.

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
                src="/project-location.png"
                alt="Business for Success"
                width={1000}
                height={1000}
                className="object-cover f-full w-full "
              />


            </div>
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }} className="heading flex flex-col gap-2 ">

                <div className="flex items-center gap-2 text-site mb-2 uppercase text-md ">

                  Get to Know Us
                </div>
                <h2 ref={fadeRef} className="fade-up-stagger text-3xl lg:text-[54px] max-w-[650px] font-bold mb-6 leading-none">
                  Why Consider These Locations
                </h2>

                <ul className="text-md  leading-snug  font-light list-site text-justify max-w-[550px]">
                  <li><b>Strategic Growth Areas:</b> Carefully planned communities with ongoing infrastructure and connectivity improvements</li>
                  <li><b>Diverse Investment Options:</b> From waterfront luxury to affordable residential communities</li>
                  <li><b>Rental Demand:</b> Popular locations driven by tourism, business hubs, and lifestyle appeal</li>
                  <li><b>Long-Term Potential:</b> Opportunities for value appreciation depending on market conditions and project selection</li>

                </ul>


              </motion.div>






            </div>


          </div>

        </div>
      </section>
      <section className="py-14 lg:py-24  relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }} className="heading flex flex-col gap-2 items-center max-w-[700px] mx-auto mb-14">
            <div className="flex items-center gap-2 text-site mb-2 uppercase text-md">

              LOCATIONS
            </div>
            <h2 ref={fadeRef} className="text-center fade-up-stagger text-3xl lg:text-[54px] font-medium mb-1 leading-none">
              Top Locations for Off-Plan Projects in Dubai

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

                <span className="h-15 block">
                  <img src="/location.png" className="w-10" />
                </span>


                <div className="flex gap-4 items-center pt-8">

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
      <section className="w-full h-[400px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps?q=Dubai&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>


      <Footer />

    </>
  );
}
