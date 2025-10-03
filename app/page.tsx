"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Briefcase, Lightbulb, Users } from "lucide-react"
import { useState, useEffect } from "react"
import ServiceModal from "@/components/ServiceModal"

export default function Home() {
  // State for slideshow
  const [currentSlide, setCurrentSlide] = useState(0)
  // State for service modal
  const [selectedService, setSelectedService] = useState<number | null>(null)
  
  // Service data
  const services = [
    {
      title: "Entrepreneurship",
      icon: <Lightbulb className="w-6 h-6 text-indigo-400" />,
      description: "Start a roadmap that will determine where you want to go with your entrepreneurial efforts.",
      details: "We provide comprehensive guidance and resources to help students develop their entrepreneurial mindset and skills. Our programs include mentorship, workshops, and hands-on experience in business development.",
      features: [
        "Personalized mentorship programs",
        "Business model canvas workshops",
        "Pitching and presentation training",
        "Market research and validation support",
        "Networking with industry experts"
      ]
    },
    {
      title: "Incubation Center",
      icon: <Briefcase className="w-6 h-6 text-indigo-400" />,
      description: "Entrepreneurial and Managerial Development of SMEs through Incubator MSME.",
      details: "Our incubation center provides a supportive environment for startups to grow and scale. We offer workspace, funding opportunities, and expert guidance to help transform ideas into successful businesses.",
      features: [
        "Co-working spaces and facilities",
        "Seed funding and investment connections",
        "Legal and regulatory guidance",
        "Technology and infrastructure support",
        "Access to investor networks"
      ]
    },
    {
      title: "Our Services",
      icon: <BookOpen className="w-6 h-6 text-indigo-400" />,
      description: "Promoting Entrepreneurship and Facilities to help you grow your business ideas.",
      details: "We offer a comprehensive suite of services designed to support every stage of your entrepreneurial journey, from ideation to execution and growth.",
      features: [
        "Workshop and seminar series",
        "Competition and hackathon events",
        "Industry collaboration programs",
        "Resource library and tools",
        "Community building and networking"
      ]
    }
  ]
  
  // Static slideshow - no auto-advance
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % 3)
  //   }, 5000) // Change slide every 5 seconds
  //   return () => clearInterval(timer)
  // }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden page-hero z-20">
        {/* Slide 1: Image with E-cell Members text */}
        <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src="/main.png"
            alt="E-cell Members"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-transparent to-gray-900/80 opacity-80"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end z-40 pb-20 md:pb-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
                E-cell <span className="text-indigo-400">Members</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 drop-shadow">
                Passionate students driving innovation and entrepreneurship
              </p>
            </div>
          </div>
        </div>

{/* Slide 2: Welcome message */}
        <div className={`absolute inset-0 z-0 ${currentSlide === 1 ? 'block' : 'hidden'}`}>
          
          <div className="relative w-full h-full">

            {/* Background Image */}
            <Image
              src="/our mission.jpg" // Or your correct image path
              alt="E-cell Members"
              fill
              className="object-cover brightness-75"
              priority
            />

            {/* Content Layer: Changed justify-center to justify-end and added padding */}
            <div className="relative h-full flex flex-col items-center justify-end z-10 pb-20 md:pb-24">
              <div className="text-center">
               
                <p className="text-xl md:text-2xl text-gray-200 drop-shadow">
                  We strive to bridge the gap between academic knowledge and practical application by facilitating interactions with industry experts, successful entrepreneurs, and investors
                </p>
              </div>
            </div>

          </div>
        </div>


{/* Slide 3: Mission and Vision (Low Center Layout) */}
        <div className={`absolute inset-0 z-0 ${currentSlide === 2 ? 'block' : 'hidden'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900"></div>
          
          {/* Content Layer: Positioned at the low center */}
          <div className="relative w-full h-full flex flex-col items-center justify-end z-10 pb-20 md:pb-24">
            <div className="text-center max-w-4xl mx-auto px-4">

                          <Image
              src="/vision.jpg" // Or your correct image path
              alt="E-cell Members"
              fill
              className="object-cover brightness-75"
              priority
            />
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
                Our <span className="text-purple-400">Mission</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 drop-shadow mb-4">
                To create a vibrant entrepreneurial ecosystem that nurtures innovation, creativity, and leadership
              </p>
              <p className="text-lg md:text-xl text-gray-300 drop-shadow">
                Bridging the gap between academic knowledge and practical application
              </p>
            </div>
          </div>
        </div>



        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
          <button
            onClick={() => setCurrentSlide(0)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === 0 ? 'bg-indigo-400' : 'bg-gray-600'
            }`}
          />
          <button
            onClick={() => setCurrentSlide(1)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === 1 ? 'bg-indigo-400' : 'bg-gray-600'
            }`}
          />
          <button
            onClick={() => setCurrentSlide(2)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === 2 ? 'bg-indigo-400' : 'bg-gray-600'
            }`}
          />
        </div>
      </section>

 <div className="w-full flex justify-center gap-4 mt-6"> {/* Added flex container */}
  {/* Instagram Link Section */}
  <a
    href="https://www.instagram.com/ecell.svce?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 2.25h9A5.25 5.25 0 0 1 21.75 7.5v9a5.25 5.25 0 0 1-5.25 5.25h-9A5.25 5.25 0 0 1 2.25 16.5v-9A5.25 5.25 0 0 1 7.5 2.25zm9.75 3.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 7.875A4.125 4.125 0 1 0 12 16.125 4.125 4.125 0 0 0 12 7.875z" />
    </svg>
    Follow us on Instagram
  </a>

  {/* LinkedIn Link Section */}
  <a
    href="https://www.linkedin.com/company/e-cell-svce/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.25 6.5 1.75 1.75 0 0 1 6.5 8.25zM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.6-1.4c2.5 0 4.5 2.1 4.5 5.3V19z" />
    </svg>
    Follow us on LinkedIn
  </a>

  {/* WhatsApp Link Section */}
  <a
    href="https://chat.whatsapp.com/Gf3tw3YTHLwLpiOtGofj1Q"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.75.45 3.42 1.29 4.9L2 22l5.3-1.42c1.44.75 3.06 1.17 4.74 1.17h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.05 3.67c4.54 0 8.23 3.69 8.23 8.23s-3.69 8.23-8.23 8.23-8.23-3.69-8.23-8.23c0-2.22 1-4.3 2.6-5.83s3.51-2.4 5.63-2.4zM9.56 7.42c-.22-.12-.48-.2-1.03.28-.55.48-.91 1.17-.91 1.25s.12 1.48 1.17 2.53c1.05 1.05 2.25 2.02 3.82 2.02.23 0 1.05-.12 1.37-.91s.37-.91.28-1.03c-.12-.12-.25-.18-.46-.3l-1.48-.74c-.18-.09-.37-.15-.55.12s-.48.65-.58.78c-.12.12-.22.15-.37.09s-.65-.22-1.25-.78c-.78-.71-1.14-1.28-1.14-1.48s.18-.31.28-.42l.3-.34c.1-.12.15-.22.22-.37s.03-.28-.03-.43l-.43-1.03z" />
    </svg>
    Join our WhatsApp Group
  </a>
</div>
      {/* Services Section */}
      <section className="page-content">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="text-brand-secondary max-w-xl mx-auto">
              We provide a platform for students to learn, innovate, and launch their entrepreneurial journey through
              events, mentorship, and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-primary group hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-brand-secondary mb-4">
                  {service.description}
                </p>
                <button 
                  onClick={() => setSelectedService(index)}
                  className="text-brand-primary font-medium flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
                >
                  Learn more <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="page-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Recent Events</h2>
          </div>

          <div className="space-y-16">
            {/* Latest Events from Events Page */}
            {[
              {
                id: 20,
                title: "IIT Madras E-Summit 2025 & E-Auction",
                category: "Summit",
                description: "SVCE E-Cell members participated in the E-Auction, simulating real-world investment and startup valuation scenarios, testing financial decision-making, negotiation, and strategic thinking.",
                date: "March 1, 2025",
                location: "IIT Madras",
                participantsInfo: "SVCE E-Cell Team",
                image: "/placeholder.svg?height=600&width=800",
                color: "primary"
              },
              {
                id: 19,
                title: "MSME Idea Hackathon 4.0",
                category: "Hackathon",
                description: "A high-energy hackathon where students pitched innovative solutions to real-world challenges. 18 proposals from SVCE were forwarded for incubation.",
                date: "October 29, 2024",
                location: "Library Conference Hall, SVCE",
                participantsInfo: "18 Proposals Selected",
                image: "/placeholder.svg?height=600&width=800",
                color: "secondary"
              },
              {
                id: 18,
                title: "MoU with E-Cell MANIT Bhopal",
                category: "Collaboration",
                description: "A collaboration to promote joint events and mutual support. SVCE E-Cell was named the official outreach partner for MANIT Bhopal's E-Summit 2025.",
                date: "October 14, 2024",
                location: "SVCE & MANIT Bhopal",
                participantsInfo: "Official Partnership",
                image: "/placeholder.svg?height=600&width=800",
                color: "accent"
              }
            ].map((event, index) => (
              <div key={event.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 !== 0 ? "md:grid-flow-dense" : ""
              }`}>
                {/* Text Section */}
                <div className={index % 2 === 0 ? "order-2 md:order-1" : "order-2"}>
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                      event.color === 'primary' ? 'bg-blue-900/30 text-blue-300' :
                      event.color === 'secondary' ? 'bg-purple-900/30 text-purple-300' :
                      'bg-teal-900/30 text-teal-300'
                    }`}>
                      {event.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {event.description}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Users size={18} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {event.participantsInfo}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          {event.date}
                        </span>
                      </div>
                    </div> {/* <-- CORRECTED: Added missing closing div */}
                  </div> {/* <-- CORRECTED: Added missing closing div */}
                </div> {/* <-- CORRECTED: Added missing closing div */}
                
                {/* Image Section */}
                <div className={index % 2 === 0 ? "order-1 md:order-2" : "order-1"}>
                  <div className="event-card overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover aspect-video"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/events">
              <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                View All Events <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService !== null && (
        <ServiceModal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          service={services[selectedService]}
        />
      )}

    </div>
  )
}