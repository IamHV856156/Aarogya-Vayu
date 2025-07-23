import React from "react";
import Feadbackform from "./feedbackform";
import applogo from "../assets/images/aarogya-vayu-logo.jpeg";
const Footer = () =>{
    const currentyear = new Date().getFullYear();
    return (
        <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg rounded-b-lg dark:from-gray-800 dark:to-gray-900 dark:shadow-xl transition-all duration-300 rounded-t-lg" >
            <div className="container mx-auto">
                {/* top row */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-12">
                    <div className="flex items-center justify-center md:justify-start mb-4">
                        <div>
                            <img src={applogo} alt="Aarogya Vayu Logo" className="w-20 h-20 md:w-20 md:h-20 rounded-full shadow-lg felx items-center justify-center mr-3 md:mr-4 glow-effect shadow-500/20"/>
                        </div>
                        <h1 className="text-3xl font-bold text-bule-200 dark:text-gray-100 font-inter hover:underline">Aarogya Vayu</h1>
                    </div>
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <a href="https://github.com/IamHV856156" target="_blank" rel="noopener noreferrer" className="p-2.5 md:p-3 bg-white/10 dark:bg-black/20 rounded-full text-gray-800 dark:text-gray-300 hover:text-green-300 dark:hover:text-green-400 hover:bg-white/20 dark:hover:bg-black/30 transition-all shadow-md hover:shadow-green-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github h-5 w-5 md:h-6 md:w-6" aria-hidden="true">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                        </svg>
                        <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/harshit-vashisht/" target="_blank" rel="noopener noreferrer" className="p-2.5 md:p-3 bg-white/10 dark:bg-black/20 rounded-full text-gray-800 dark:text-gray-300 hover:text-green-300 dark:hover:text-green-400 hover:bg-white/20 dark:hover:bg-black/30 transition-all shadow-md hover:shadow-green-500/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin h-5 w-5 md:h-6 md:w-6" aria-hidden="true">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/>
                        <circle cx="4" cy="4" r="2"/>
                        </svg>
                        <span className="sr-only">LinkedIn</span>
                        </a>
                    </div>
                    </div>
                </div>
                {/* middle row */}
                <div className="flex flex-col md:flex-row md:justify-around md:space-x-8 space-y-8 md:space-y-0 text-center md:text-left mb-8">
                    {/* Qwick links */}
                    <div className="w-full md:w-1/2 lg:w-1/3">
                    <h3 className="font-bold mb-3 text-lg text-blue-200 dark:text-gray-100">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-200 transition-colors duration-200 dark:hover:text-gray-400">Home</a></li>
                            <li><a href="#" className="hover:text-blue-200 transition-colors duration-200 dark:hover:text-gray-400">About AQI</a></li>
                            <li><a href="#" className="hover:text-blue-200 transition-colors duration-200 dark:hover:text-gray-400">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-200 transition-colors duration-200 dark:hover:text-gray-400">Follow</a></li>
                        </ul>
                    </div>
                    {/* contact/feedback form*/}
                    <div className="w-full md:w-1/2 lg:w-1/3">
                        {/* <h3 className="font-bold mb-3 text-lg text-blue-200 dark:text-gray-100">Connect With Us</h3> */}
                        <Feadbackform/>
                    </div>
                </div>
                {/* bottom row */}
                <div>
                {/* Copyright and attribution */}
                    <div className="w-full text-center mt-8 pt-4 border-t border-blue-300 dark:border-gray-200">
                        <p className="text-sm">@ {currentyear} Aarogya-Vayu. All rights reserved.</p>
                        <p className="text-xs mt-1 text-blue-200 dark:text-gray-400">Data Provided by <a href="https://www.isro.gov.in/" target="_blank" className="hover:text-white">ISRO VEDAS</a>, SENTENIL-5P and CPCB</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;