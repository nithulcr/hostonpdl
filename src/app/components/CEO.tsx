"use client";

import Image from "next/image";
import AnimatedButton from "./AnimatedButton";


export default function CEO() {

  return (

    <section className="bg-[var(--background2)] py-14 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        <div className="relative flex justify-center  lg:flex h-full">

          <Image
            src="/ceo.png"
            alt="CEO"
            width={700}
            height={700}
            className="object-cover f-full  mx-auto max-w-[700px] w-full"
          />

        </div>
        <div className="flex flex-col gap-4 lg:gap-6 relative pt-7 md:pt-0">
          <Image
            src="/quate.png"
            alt="quate"
            width={1000}
            height={1000}
            className="object-cover w-[50px] md:w-[100px] opacity-20 absolute top-[-20px] left-[-10px] lg:top-[-70px] lg:left-[-50px] scale-x-[-1]"
          />
          <Image
            src="/quate.png"
            alt="quate"
            width={1000}
            height={1000}
            className="object-cover w-[50px] md:w-[100px] opacity-20 absolute bottom-[-20px] right-0"
          />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-site mb-2 uppercase text-md">
              CEO Message
            </div>
            <h2

              className="text-3xl lg:text-[54px] max-w-[550px] font-bold mb-2 leading-none"
            >
              Raju Padinhattayil
            </h2>
            <span>Founder And CEO, HOST ON PDL</span>
          </div>

          <p className="leading-relaxed text-justify font-light2 text-sm md:text-md">
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
          

          <AnimatedButton label="Message on Whatsapp" className="w-fit text-white lg:mt-2 whatsapp-btn" />


        </div>

      </div>
    </section>

  );
}
