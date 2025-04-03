"use client"

import { useRef, useState, useEffect } from "react"
import { isMobile } from "react-device-detect"
import Link from "next/link"
import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import med1 from './images/med1.jpg';
import med2 from './images/med2.png';
import medthumb from './images/med-thumbnail.png';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"],
  })

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener("timeupdate", updateProgress);
    return () => video.removeEventListener("timeupdate", updateProgress);
  }, []);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = (parseFloat(e.target.value) / 100) * video.duration;
    video.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };


  // Transform values based on scroll position
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], [20, 0])

  return (
    <div className="min-h-screen bg-[#101728] text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 flex flex-col items-center justify-center text-center min-h-screen">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8">
            Revolutionizing
            <br />
            Medical Records Summarization
          </h1>

          <p className="font-sans text-lg md:text-xl max-w-2xl mb-12">
            AI medical summaries for personal injury law firms,
            <br />
            medical assessment, and insurance companies.
          </p>

          <Link
            href="/contact">
            <button className="px-8 py-4 font-medium text-sm md:text-lg lg:text-xl font-sans rounded-full bg-gradient-to-r from-[#9340ff] to-[#ff3c5f] hover:from-purple-600 hover:to-pink-600 transition-all">
              Request a Demo
            </button>
          </Link>

        </section>
        {/* Video Section */}
        <section className="relative min-h-[200vh] flex items-start justify-center">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center pt-16 pb-16">
            <motion.div
              style={{
                scale,
                opacity,
                borderRadius,
              }}
              className={`${isMobile ? "w-[20%] h-[20%]" : "w-[80%] h-[100%]"} overflow-hidden bg-black`}
            >
                <div className="relative w-full h-full">
                {/* Video Element */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={medthumb.src} // Adding the video thumbnail
                >
                   <source src="/videos/medicalsummary.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <button
                  onClick={togglePlayPause}
                  aria-label="Play/Pause Video"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
                >
                  <div
                  className={`group transition-all duration-500 ease-in-out ${
                    isPlaying
                    ? "size-[56px] flex items-center rounded bg-white/25 hover:bg-white/30"
                    : "size-[56px] hover:w-[150px] flex items-center overflow-hidden rounded bg-white/25 hover:bg-white/30"
                  }`}
                  >
                  <div className="flex translate-x-4 items-center gap-1 transition-transform duration-500 ease-in-out">
                    {isPlaying ? (
                    /* Pause Icon */
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 5H6V19H10V5Z" fill="#FAFAF9"></path>
                      <path d="M18 5H14V19H18V5Z" fill="#FAFAF9"></path>
                    </svg>
                    ) : (
                    /* Play Icon */
                    <div className="flex items-center gap-1 transition-transform duration-500 ease-in-out">
                      <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <path
                        d="M19 12.6719L7 20.6719L7 4.67187L19 12.6719Z"
                        className="fill-gray-300 transition-colors duration-300 group-hover:fill-white"
                      ></path>
                      </svg>
                      <span className="mt-[3px] whitespace-nowrap leading-none text-white transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                      Watch Film
                      </span>
                    </div>
                    )}
                  </div>
                  </div>
                </button>

                <div className="absolute bottom-5 left-0 w-full px-5">
                  <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleSeek}
                  className="w-full cursor-pointer appearance-none bg-gray-400 h-1 rounded-md"
                  />
                </div>
                </div>
            </motion.div>
          </div>
        </section>

        {/* Platform Features Section */}
        <section className="py-24 px-4 md:px-8 bg-[#111827]">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Streamline Your Medical-Legal Workflow
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Our AI assistant simplifies the most complex and time-consuming <br/>parts of medical record analysis for legal cases.
            </p>
          </div>

          <div className="max-w-[1728px] mx-auto col-span-2 md:col-span-6 lg:col-start-2 lg:col-end-12 xl:col-start-2 xl:col-span-10">
            <div className="flex flex-col gap-xl">
              
              {/* Box 1 */}
              <article id="medical-report" className="flex w-full flex-col md:flex-row">
                {/* Video Section */}
                <div className="relative aspect-square w-full overflow-hidden rounded-t md:flex-1 md:rounded-l-xl">
                  <img src={med1.src} alt="Medical Report" className="absolute inset-0 w-full h-full object-cover" />
                </div>

                {/* Text Section */}
                <div className="flex w-full flex-col items-center justify-center bg-[#1b2743] p-6 md:flex-1 min-h-[400px] md:rounded-r-xl">
                  <div className="flex w-full flex-col gap-4 px-6 py-6 md:px-12">
                    <span className="heading-4 text-purple-400 text-[1.5vw] font-medium mb-2 font-sans capitalize">Medical Report</span>
                    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                      <h2 className="text-balance text-[4vw]">Instant Medical Summaries</h2>
                      <p className="max-w-[75%] text-[1vw]">All medical information structured into a concise summary relevant to your case:</p>
                      <ul className="list-disc pl-5 text-[1vw]">
                        <li>Patient background and accident details</li>
                        <li>Pre-existing and post-accident conditions</li>
                        <li>Medication history with page references</li>
                        <li>Chronological organization of key events</li>
                      </ul>
                      <p className="max-w-[75%] text-[1vw]">Every piece of information includes page references that link directly to the source documents.</p>
                      <button className="text-purple-400 flex items-center text-[1vw] font-medium font-sans">
                        Explore Medical Report
                        <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </article>

              {/* Box 2 (Text First) */}
              <article id="assessment" className="flex w-full flex-col md:flex-row">
                {/* Text Section */}
                <div className="flex w-full flex-col items-center justify-center bg-[#1b2743] p-6 md:flex-1 min-h-[400px] md:rounded-r-xl">
                  <div className="flex w-full flex-col gap-4 px-6 py-6 md:px-12">
                    <span className="heading-4 text-purple-400 text-[1.5vw] font-medium mb-2 font-sans capitalize">Medical Q&A</span>
                    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                      <h2 className="text-balance text-[4vw]">Gain Conversational Insights</h2>
                      <p className="max-w-[75%] text-[1vw]">Engage naturally with medical records to extract key information with precision and efficiency.</p>
                      <ul className="list-disc pl-5 text-[1vw]">
                        <li>Ask direct questions about patient history and diagnoses</li>
                        <li>Receive accurate, evidence-based answers with source references</li>
                        <li>Follow suggested questions for deeper exploration</li>
                        <li>Generate customized reports for legal and medical documentation</li>
                      </ul>
                      <p className="max-w-[75%] text-[1vw]">This feature helps medical assessors draft legal documents, assists lawyers in communicating with clients, and supports the creation of court documents requiring medical summaries.</p>
                      <button className="text-purple-400 flex items-center text-[1vw] font-medium font-sans">
                        Explore Medical Q&A
                        <svg
                          className="ml-2 w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Video Section */}
                <div className="relative aspect-square w-full overflow-hidden rounded-b md:flex-1 md:rounded-none md:rounded-r-xl">
                  <img src={med2.src} alt="Medical Report" className="absolute inset-0 w-full h-full object-cover" />
                  {/* <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                  </video> */}
                </div>
              </article>

            </div>
          </div>

          
        </section>
      </main>
      <Footer />
    </div>
  )
}

