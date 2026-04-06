"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useStaggeredFadeUp } from "./useStaggeredFadeUp";
import { Check } from "lucide-react";


const featuresEn = [
    {
        id: '01',
        icon: <><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_402_8619)">
                <g clipPath="url(#clip1_402_8619)">
                    <path d="M22 6H11.3333C8.38781 6 6 8.38781 6 11.3333V22C6 24.9455 8.38781 27.3333 11.3333 27.3333H22C24.9455 27.3333 27.3333 24.9455 27.3333 22V11.3333C27.3333 8.38781 24.9455 6 22 6Z" stroke="#fe5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.667 27.334V38.0006C16.667 39.4151 17.2289 40.7717 18.2291 41.7719C19.2293 42.772 20.5858 43.334 22.0003 43.334H32.667" stroke="#fe5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M48.667 32.666H38.0003C35.0548 32.666 32.667 35.0539 32.667 37.9994V48.666C32.667 51.6116 35.0548 53.9994 38.0003 53.9994H48.667C51.6125 53.9994 54.0003 51.6116 54.0003 48.666V37.9994C54.0003 35.0539 51.6125 32.666 48.667 32.666Z" stroke="#fe5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_402_8619">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
                <clipPath id="clip1_402_8619">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
            </defs>
        </svg>


        </>,

        title: "Workflow Automation",
        description: "Build custom reporting and alert workflows on a schedule. You get flagged the moment a competitor gains ground.",

    },
    {
        id: '02',
        icon: <><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_402_8631)">
                <g clipPath="url(#clip1_402_8631)">
                    <path d="M35 15V5H25" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 15H33" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27 15H33" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M19 45L8 55V20C8 18.6739 8.57946 17.4021 9.61091 16.4645C10.6424 15.5268 12.0413 15 13.5 15H46.5C47.9587 15 49.3576 15.5268 50.3891 16.4645C51.4205 17.4021 52 18.6739 52 20V40C52 41.3261 51.4205 42.5979 50.3891 43.5355C49.3576 44.4732 47.9587 45 46.5 45H19Z" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 23V26" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M37 23V26" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_402_8631">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
                <clipPath id="clip1_402_8631">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
            </defs>
        </svg>


        </>,

        title: "Chat With Your Data",
        description: "Ask any question about your SEO or GEO performance in plain language. The AI Assistant returns data-backed answers in seconds.",

    },
    {
        id: '03',
        icon: <><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_402_8646)">
                <g clipPath="url(#clip1_402_8646)">
                    <path d="M29.9961 32.2461V50.2461" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.3299 36.5187C10.6892 34.8107 9.45148 32.7448 8.71051 30.4773C7.96954 28.2098 7.74474 25.8002 8.05315 23.4311C8.36155 21.062 9.19507 18.7954 10.4906 16.8031C11.7861 14.8108 13.5095 13.145 15.5305 11.9319C17.5515 10.7188 19.8169 9.9902 22.1551 9.80125C24.4934 9.61231 26.8432 9.968 29.0266 10.8414C31.21 11.7148 33.1696 13.0829 34.7571 14.8423C36.3447 16.6016 37.5184 18.706 38.1895 20.9959H42.1424C44.2746 20.9957 46.3503 21.6942 48.0629 22.9882C49.7756 24.2822 51.0343 26.1031 51.6532 28.182C52.2721 30.2609 52.2183 32.4874 51.4998 34.5328C50.7813 36.5781 49.4362 38.3338 47.6632 39.5404" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.1631 41.2461L29.9964 32.2461L38.8298 41.2461" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_402_8646">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
                <clipPath id="clip1_402_8646">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
            </defs>
        </svg>


        </>,

        title: "One-Click CMS Publishing",
        description: "When an article is ready, publish directly to your connected CMS. No copy-pasting, no reformatting, no manual image insertions.",

    },
    {
        id: '04',
        icon: <><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_402_8658)">
                <g clipPath="url(#clip1_402_8658)">
                    <path d="M22.5 42.5H17.5C14.1848 42.5 11.0054 41.183 8.66117 38.8388C6.31696 36.4946 5 33.3152 5 30C5 26.6848 6.31696 23.5054 8.66117 21.1612C11.0054 18.817 14.1848 17.5 17.5 17.5H22.5" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M37.5 17.5H42.5C45.8152 17.5 48.9946 18.817 51.3388 21.1612C53.683 23.5054 55 26.6848 55 30C55 33.3152 53.683 36.4946 51.3388 38.8388C48.9946 41.183 45.8152 42.5 42.5 42.5H37.5" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 30H40" stroke="#fe5722" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_402_8658">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
                <clipPath id="clip1_402_8658">
                    <rect width="60" height="60" fill="white" />
                </clipPath>
            </defs>
        </svg>

        </>,

        title: "Backlink Intelligence Add-On",
        description: "Expand your competitive intelligence with deeper backlink analysis covering referring domains, link velocity, and anchor distribution.",

    }
];

export default function Features() {
    const features = featuresEn;
    const fadeRef = useRef<HTMLHeadingElement>(null);
    useStaggeredFadeUp(fadeRef as React.RefObject<HTMLElement>);


    return (
        <section id="features" className="py-14 lg:py-24  relative ">
            <div className="max-w-[1400px] mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }} className="heading flex flex-col gap-2 items-center max-w-[600px] mx-auto mb-8 md:mb-14">
                    <div className="flex items-center gap-2 text-site mb-2 uppercase text-md">

                        PLATFORM
                    </div>
                    <h2 ref={fadeRef} className="text-center fade-up-stagger text-3xl lg:text-[54px] font-medium mb-1 leading-none">
                      All IT Services
                    </h2>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className=" grid  lg:grid-cols-2  gap-5  relative  ">


                    <div className="bg-[#fffdf3] p-8 ">
                        <h3 className="text-xl font-semibold mb-4">Integrations</h3>
                        <p className="text-gray-500 mb-6">
                            Data flows seamlessly between your tools and Pixis Visibility.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                            {/* Google */}
                            <div className="border border-gray-300 p-4 flex flex-col items-center gap-2 hover:shadow-md transition">
                                <svg className="w-8 h-8" viewBox="0 0 48 48">
                                    <path fill="#EA4335" d="M24 9.5c3.2 0 6 1.1 8.2 3.2l6.1-6.1C34.5 2.3 29.7 0 24 0 14.7 0 6.7 5.6 2.9 13.7l7.5 5.8C12.2 13.4 17.6 9.5 24 9.5z" />
                                    <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-2.8-.4-4H24v7.6h12.8c-.3 2-1.9 5-5.3 7l8.2 6.4c4.8-4.4 7.6-10.8 7.6-17z" />
                                    <path fill="#FBBC05" d="M10.4 28.5c-.5-1.5-.8-3-.8-4.5s.3-3 .8-4.5l-7.5-5.8C1 17.1 0 20.5 0 24s1 6.9 2.9 10.3l7.5-5.8z" />
                                    <path fill="#34A853" d="M24 48c6.5 0 12-2.1 16-5.7l-8.2-6.4c-2.3 1.6-5.3 2.7-7.8 2.7-6.4 0-11.8-3.9-13.6-9.5l-7.5 5.8C6.7 42.4 14.7 48 24 48z" />
                                </svg>
                                <p className="text-xs text-center text-gray-600">Google</p>
                            </div>

                            {/* WordPress */}
                            <div className="border border-gray-300 p-4 flex flex-col items-center gap-2 hover:shadow-md transition">
                                <svg className="w-8 h-8 fill-gray-700" viewBox="0 0 24 24">
                                    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.5 9.5L4.7 9.7c-.3-.7.1-1.5.9-1.5h2.3l3.1 9.3 2.4-7.1-1-2.2c-.3-.7.2-1.5 1-1.5h2.1l3.1 9.3c1.4-1.6 2.2-3.6 2.2-5.8C22 6.5 17.5 2 12 2z" />
                                </svg>
                                <p className="text-xs text-center text-gray-600">WordPress</p>
                            </div>

                            {/* Slack */}
                            <div className="border border-gray-300 p-4 flex flex-col items-center gap-2 hover:shadow-md transition">
                                <svg className="w-8 h-8" viewBox="0 0 122.8 122.8">
                                    <path fill="#E01E5A" d="M30.6 77.2c0 8.4-6.8 15.2-15.2 15.2S0 85.6 0 77.2 6.8 62 15.2 62h15.4v15.2z" />
                                    <path fill="#36C5F0" d="M45.8 77.2c0-8.4 6.8-15.2 15.2-15.2s15.2 6.8 15.2 15.2v37.6c0 8.4-6.8 15.2-15.2 15.2s-15.2-6.8-15.2-15.2V77.2z" />
                                </svg>
                                <p className="text-xs text-center text-gray-600">Slack</p>
                            </div>

                            {/* Shopify */}
                            <div className="border border-gray-300 p-4 flex flex-col items-center gap-2 hover:shadow-md transition">
                                <svg className="w-8 h-8 fill-green-600" viewBox="0 0 24 24">
                                    <path d="M15.5 2.5c-.5 0-1 .3-1.2.8l-.7 1.8c-1-.2-2-.3-3-.2-.2-.5-.7-.8-1.2-.8-.7 0-1.2.5-1.2 1.2v1c-2 .6-3.5 2.4-3.5 4.6v9c0 1.1.9 2 2 2h12.5c1.1 0 2-.9 2-2v-9c0-2.2-1.5-4-3.5-4.6v-1c0-.7-.5-1.2-1.2-1.2z" />
                                </svg>
                                <p className="text-xs text-center text-gray-600">Shopify</p>
                            </div>
                             <div className="border border-gray-300 p-4 flex flex-col items-center gap-2 hover:shadow-md transition">
                                <svg className="w-8 h-8" viewBox="0 0 48 48">
                                    <path fill="#EA4335" d="M24 9.5c3.2 0 6 1.1 8.2 3.2l6.1-6.1C34.5 2.3 29.7 0 24 0 14.7 0 6.7 5.6 2.9 13.7l7.5 5.8C12.2 13.4 17.6 9.5 24 9.5z" />
                                    <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-2.8-.4-4H24v7.6h12.8c-.3 2-1.9 5-5.3 7l8.2 6.4c4.8-4.4 7.6-10.8 7.6-17z" />
                                    <path fill="#FBBC05" d="M10.4 28.5c-.5-1.5-.8-3-.8-4.5s.3-3 .8-4.5l-7.5-5.8C1 17.1 0 20.5 0 24s1 6.9 2.9 10.3l7.5-5.8z" />
                                    <path fill="#34A853" d="M24 48c6.5 0 12-2.1 16-5.7l-8.2-6.4c-2.3 1.6-5.3 2.7-7.8 2.7-6.4 0-11.8-3.9-13.6-9.5l-7.5 5.8C6.7 42.4 14.7 48 24 48z" />
                                </svg>
                                <p className="text-xs text-center text-gray-600">Google</p>
                            </div>

                            {/* WordPress */}
                            <div className="border border-gray-300 p-4 flex flex-col items-center gap-2 hover:shadow-md transition">
                                <svg className="w-8 h-8 fill-gray-700" viewBox="0 0 24 24">
                                    <path d="M12 2C6.5 2 2 6.5 2 12c0 4.3 2.7 8 6.5 9.5L4.7 9.7c-.3-.7.1-1.5.9-1.5h2.3l3.1 9.3 2.4-7.1-1-2.2c-.3-.7.2-1.5 1-1.5h2.1l3.1 9.3c1.4-1.6 2.2-3.6 2.2-5.8C22 6.5 17.5 2 12 2z" />
                                </svg>
                                <p className="text-xs text-center text-gray-600">WordPress</p>
                            </div>

                            {/* Slack */}
                            <div className="border border-gray-300 p-4 flex flex-col items-center gap-2 hover:shadow-md transition">
                                <svg className="w-8 h-8" viewBox="0 0 122.8 122.8">
                                    <path fill="#E01E5A" d="M30.6 77.2c0 8.4-6.8 15.2-15.2 15.2S0 85.6 0 77.2 6.8 62 15.2 62h15.4v15.2z" />
                                    <path fill="#36C5F0" d="M45.8 77.2c0-8.4 6.8-15.2 15.2-15.2s15.2 6.8 15.2 15.2v37.6c0 8.4-6.8 15.2-15.2 15.2s-15.2-6.8-15.2-15.2V77.2z" />
                                </svg>
                                <p className="text-xs text-center text-gray-600">Slack</p>
                            </div>

                            {/* Shopify */}
                            <div className="border border-gray-300 p-4 flex flex-col items-center gap-2 hover:shadow-md transition">
                                <svg className="w-8 h-8 fill-green-600" viewBox="0 0 24 24">
                                    <path d="M15.5 2.5c-.5 0-1 .3-1.2.8l-.7 1.8c-1-.2-2-.3-3-.2-.2-.5-.7-.8-1.2-.8-.7 0-1.2.5-1.2 1.2v1c-2 .6-3.5 2.4-3.5 4.6v9c0 1.1.9 2 2 2h12.5c1.1 0 2-.9 2-2v-9c0-2.2-1.5-4-3.5-4.6v-1c0-.7-.5-1.2-1.2-1.2z" />
                                </svg>
                                <p className="text-xs text-center text-gray-600">Shopify</p>
                            </div>

                        </div>

                        <div className="flex items-center gap-2 mt-6 text-sm text-gray-500">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            BI-DIRECTIONAL SYNC
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="bg-[#fffdf3]  p-8 ">
                        <h3 className="text-xl font-semibold mb-4">
                            Security & Compliance
                        </h3>

                        <p className="text-gray-500 mb-6">
                            Enterprise-grade security with SOC 2, GDPR, and full data encryption.
                        </p>

                        <div className="space-y-4">

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <Check className="text-green-500 w-5 h-5" />
                                    <span>SOC 2 Type II Certified</span>
                                </div>
                                <span className="text-xs bg-gray-100 text-green-500 border-green-500 border px-3 py-1 rounded-full">Verified</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <Check className="text-green-500 w-5 h-5" />
                                    <span>GDPR Compliant</span>
                                </div>
                                <span className="text-xs bg-gray-100 text-green-500 border-green-500 border px-3 py-1 rounded-full">Active</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Check className="text-green-500 w-5 h-5" />
                                <span>Data encryption (AES-256)</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Check className="text-green-500 w-5 h-5" />
                                <span>Role-based access control</span>
                            </div>

                        </div>

                        <div className="mt-8 bg-gray-100 border border-gray-300 p-4 text-sm text-gray-500 flex items-center gap-2">
                            🔒 Your data never leaves your secure environment
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
