"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function ContactUsPage() {
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
             Contact Us
            </h5>

            <h1 className="text-4xl md:text-[44px] xl:text-[76px] font-bold mb-2 head-font max-w-[700px]">
             Let’s discuss your next <span className="text-site">legacy.</span>
            </h1>

            <div className=" max-w-[480px]">
              <p className="text-md md:text-xl my-3 font-light2  leading-tight text-justify">
                Integrating physical asset acquisition with digital infrastructure. We build the foundations of your wealth and the interfaces of your business.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </>
  );
}
