'use client';

import { useState, useEffect } from "react";

import Header from "./Header";
import Hero from "./Hero";
import OurValues from "./OurValues";
import CaseStudy from "./CaseStudy";





import Services from "./Services";


import ThreeStepProcess from "./ThreeStepProcess";
import Insights from "./Insights";

import MainServices from "./MainServices";

import Testimonials from "./Testimonials";
import Blogs from "./Blogs";


import Footer from "./Footer";

export default function HomePageClient() {
    const [showContent, setShowContent] = useState(true);

  return (
    <div>

      {showContent && (
        <>
          <Header />
          <Hero />
          <OurValues />
          <Insights />
          <CaseStudy />



        
          <Services />
          


          <MainServices />
          <ThreeStepProcess />


          <Testimonials />
          <Blogs />






          <Footer />
        </>
      )}
    </div>
  );
}
