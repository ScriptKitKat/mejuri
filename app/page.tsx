"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  const videoRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"],
  })

  // Transform values based on scroll position
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], [20, 0])

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 flex flex-col items-center justify-center text-center min-h-screen">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold max-w-4xl leading-tight mb-8">
            Revolutionizing
            <br />
            Medical Records Summarization
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12">
            AI medical summaries for personal injury law firms,
            <br />
            medical assessment, and insurance companies.
          </p>

          <button className="px-8 py-4 text-lg rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all">
            Request a Demo
          </button>
        </section>

        {/* Video Section */}
        <section className="relative min-h-[200vh] flex items-start justify-center">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center pt-16 pb-16">
            <motion.div
              ref={videoRef}
              style={{
                scale,
                opacity,
                borderRadius,
              }}
              className="w-[90%] h-[70%] md:w-[80%] md:h-[80%] overflow-hidden bg-black"
            >
              <div className="relative w-full h-full">
                <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 to-transparent pointer-events-none flex items-end p-8">
                  <div className="text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">See MeJurix in Action</h2>
                    <p className="text-gray-300 max-w-lg">
                      Watch how our AI technology transforms complex medical records into clear, concise summaries.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Platform Features Section */}
        <section className="py-24 px-4 md:px-8 bg-[#111827]">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Augment All of Your Work on
              <br />
              One Integrated, Secure Platform
            </h2>
          </div>

          <div className="max-w-6xl mx-auto overflow-hidden rounded-lg">
            <div className="flex flex-col md:flex-row">
              {/* Left side - Document with video overlay */}
              <div className="w-full md:w-1/2 bg-white text-black relative">
                <div className="p-8 h-full">
                  <div className="text-gray-700 text-sm mb-4">
                    <div className="bg-gray-100 p-2 inline-block rounded mb-2">Merger Agreement.doc</div>
                    <p className="leading-relaxed">
                      As requested, I am providing a detailed summary of the main interim operating covenants for
                      AvantiBio during the period between signing and closing of the merger agreement with Solid
                      Biosciences Inc. These covenants are designed to ensure that AvantiBio maintains its business
                      operations in a manner consistent with past practices and does not undertake any actions that
                      could adversely affect the merger...
                    </p>
                    <p className="mt-4 leading-relaxed">
                      § 3. Conduct of Business in the Ordinary Course.AvantiBio is required to use commercially
                      reasonable efforts to continue to operate...
                    </p>
                  </div>
                </div>

                {/* Video overlay with play button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <video
                    className="absolute inset-0 w-full h-full object-cover opacity-0"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source
                      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="w-16 h-16 rounded-full bg-black/20 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              {/* Right side - Feature description */}
              <div className="w-full md:w-1/2 bg-[#1c1c1c] p-8 flex flex-col justify-center">
                <div className="text-purple-400 font-medium mb-2">Assistant</div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Tailored to
                  <br />
                  Your Expertise
                </h3>
                <p className="text-gray-300 mb-6">
                  Delegate complex tasks in natural language to your domain-specific personal assistant.
                </p>
                <button className="text-purple-400 flex items-center text-sm font-medium">
                  Explore Assistant
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          {/* Second Feature Section */}
          <div className="max-w-6xl mx-auto overflow-hidden rounded-lg mt-8">
            <div className="flex flex-col md:flex-row">
              {/* Left side - Feature description */}
              <div className="w-full md:w-1/2 bg-[#1c1c1c] p-8 flex flex-col justify-center">
                <div className="text-purple-400 font-medium mb-2">Knowledge</div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Rapid Research,
                  <br />
                  Grounded Results
                </h3>
                <p className="text-gray-300 mb-6">
                  Get answers to complex research questions across multiple domains in legal, regulatory, and tax with
                  accurate citations.
                </p>
                <button className="text-purple-400 flex items-center text-sm font-medium">
                  Explore Knowledge
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              {/* Right side - Data visualization */}
              <div className="w-full md:w-1/2 bg-gray-300 relative">
                <div className="absolute inset-0">
                  <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                    <source
                      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>

                {/* Overlay content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-6 w-64 text-center">
                    <h4 className="text-black text-xl font-medium">Your Firm's Data</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional content can go here */}
        <section className="container mx-auto px-4 py-24">
          <h2 className="text-4xl font-serif font-bold text-center mb-16">How It Works</h2>
          {/* Additional content */}
        </section>
      </main>

      <Footer />
    </div>
  )
}

