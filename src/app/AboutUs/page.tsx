"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useStaggeredFadeUp } from "../components/useStaggeredFadeUp";


import Header from "../components/Header";
import CEO from "../components/CEO";

import Footer from "../components/Footer";





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
                      className="object-cover w-[350px] opacity-40 absolute bottom-0 right-0 "
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


            <h1 className="text-4xl md:text-[4px] xl:text-[86px] font-bold mb-2 head-font max-w-[700px]">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="relative flex justify-center  lg:flex h-full">

              <Image
                src="/hero4.jpg"
                alt="Business for Success"
                width={1000}
                height={1000}
                className="object-cover f-full w-full  mx-auto max-w-[700px]"
              />


            </div>
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }} className="heading flex flex-col gap-2 py-8">

                <div className="flex items-center gap-2 text-site mb-2 uppercase text-md justify-center md:justify-start">

                  Get to Know Us
                </div>
                <h2 ref={fadeRef} className="fade-up-stagger text-3xl lg:text-[54px] max-w-[650px] font-bold mb-6 leading-none">
                  Dubai&apos;s most prestigious developers
                </h2>

                <p className="text-md  leading-snug  font-light">
                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, <br /><br />but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                </p>
                

              </motion.div>






            </div>


          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className=" grid  md:grid-cols-3 md:grid-cols-2 gap-5  relative  mt-16">

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

          </motion.div>
        </div>
      </section>

      <CEO />
      <Footer />

    </>
  );
}
