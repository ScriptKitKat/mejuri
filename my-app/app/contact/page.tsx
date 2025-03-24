"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CalendarIcon } from "lucide-react"
import Navbar from "@/components/navbar"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { ToastContainer, toast } from 'react-toastify';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    demoDate: undefined as Date | undefined,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateSelect = (date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, demoDate: date }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    toast("Message Sent.", {
      position: "bottom-right",
      theme: "dark",
      style: {
        background: "#1e293b",
        color: "#ffffff",
        borderLeft: "4px solid #a855f7",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
      },
      progressClassName: "bg-[#1e293b]",
      icon: <span role="img" aria-label="purple-circle">🟣</span>
    });
    // Reset form
    setFormData({ name: "", email: "", message: "", demoDate: undefined })
  }

  return (
    <div className="min-h-screen pt-[4rem] bg-[#101728] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center mt-16">Contact Us</h1>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto px-4 py-10">
          {/* Left column - Contact Information */}
          <div className="space-y-2 flex flex-col justify-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Reach Out to Mejurix</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Have questions or interested in collaborations? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="text-[#a855f7] flex-shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                      stroke="#a855f7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                      stroke="#a855f7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Address</h3>
                  <p className="text-gray-300 text-lg">
                    1110 Finch Ave W #310, <br />
                    Toronto, Ontario, <br />
                    Canada M3J 2T2
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-[#a855f7] flex-shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                      fill="#a855f7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Email</h3>
                  <a
                    href="mailto:hi@medicalsummary.ai"
                    className="text-gray-300 hover:text-[#a855f7] transition-colors text-lg"
                  >
                    hi@medicalsummary.ai
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
              <p className="text-gray-300 text-lg">
                For inquiries about our medical summary AI solutions or to schedule a demo, please reach out via email
                or use the contact form.
              </p>
            </div>
          </div>

          {/* Right column - Contact Form */}
          <div className="flex flex-col justify-center">
            <div className="bg-[#1e293b] rounded-lg p-10">
              <div className="mb-6">
                <span className="text-[#a855f7] font-medium text-lg">Get in Touch</span>
                <h2 className="text-4xl font-bold mt-2">Send Us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-base font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-[#6b7280] border-none text-white placeholder:text-gray-300"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-base font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-[#6b7280] border-none text-white placeholder:text-gray-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="demoDate" className="block text-base font-medium mb-2">
                      Preferred Demo Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="demoDate"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-[#6b7280] border-none text-white hover:bg-[#7c838f] hover:text-white",
                            !formData.demoDate && "text-gray-300",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.demoDate ? format(formData.demoDate, "PPP") : <span>Select a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-[#1e293b] border-[#2d3748]">
                        <Calendar
                          mode="single"
                          selected={formData.demoDate}
                          onSelect={handleDateSelect}
                          initialFocus
                          className="bg-[#1e293b] text-white"
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-base font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-[#6b7280] border-none text-white placeholder:text-gray-300 min-h-[180px] text-base"
                      placeholder="Tell us how we can help you"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#a855f7] hover:bg-[#9333ea] text-white h-14 text-lg font-medium mt-6"
                >
                  <span>Send Message</span>
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </main>
    </div>
  )
}

