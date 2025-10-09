"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Briefcase, Lightbulb, Users } from "lucide-react"
import { useState } from "react"
import ServiceModal from "@/components/ServiceModal"
import StartupSimulatorGame from "@/components/StartupSimulatorGame"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export default function Home() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

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
        "Networking with industry experts",
      ],
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
        "Access to investor networks",
      ],
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
        "Community building and networking",
      ],
    },
  ]

  const speakers = [
    {
      name: "Dr. Arvind A R",
      designation: "Deputy General Manager, Ashok Leyland Limited",
      image: "",
    },
    {
      name: "Mr. T. Vignesh",
      designation: "Chief Guest, Associate Business Facilitation Officer",
      image: "",
    },
    {
      name: "Gurunathraje",
      designation: "Executive Member, E-cell",
      image: "",
    },
    {
      name: "Subash Chandra Bose",
      designation: "Executive Member E-cell Svce, Co-founder, hraipal.com",
      image: "",
    },
    {
      name: "Mr. Palaniappan Narayanan",
      designation:
        "Co-Founder & CEO at Mocero Health Solutions, Chennai",
      image: "",
    },
    {
      name: "Mr. Shri Sivarajah Ramanathan",
      designation:
        "Chief Guest, Mission Director of Tamil Nadu Startup and Innovation Mission, Government of Tamil Nadu",
      image: "",
    },
    {
      name: "Nithin Alexander",
      designation:
        "Founder, Entrepreneurs of Madras, The Underdogs of Madras",
      image: "",
    },
    {
      name: "Mr. Ajay Prasath G A",
      designation: "Founder & CEO, Loopmans Automation Pvt Ltd.",
      image: "",
    },
    {
      name: "Mr. sarabesh Sriram",
      designation: "Founder & partner, Stacia corp",
      image: "",
    },
    {
      name: "Mr. Deepak Kumar",
      designation: "Founder of ScrollMe, Habitate.io, and C3",
      image: "",
    },
    {
      name: "T. G. Ramakrishnan",
      designation: "Founder of TGR Tex",
      image: "",
    },
  ]

  const [speakersApi, setSpeakersApi] = useState<CarouselApi | null>(null)

  // Simple autoplay that advances faster (every 0.7s)
  useState(() => {
    let interval: NodeJS.Timeout | null = null
    const start = () => {
      if (interval) return
      interval = setInterval(() => {
        speakersApi?.scrollNext()
      }, 700)
    }
    const stop = () => {
      if (interval) {
        clearInterval(interval)
        interval = null
      }
    }
    // Start when api becomes available
    if (speakersApi) start()
    return () => {
      stop()
    }
  })

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden page-hero z-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-transparent to-gray-900/80 opacity-80"></div>
        </div>
        
        <div className="relative z-40 w-full max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
              E - Cell <span className="text-indigo-400">SVCE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 drop-shadow mb-6">
              Passionate students driving innovation and entrepreneurship
            </p>
          </div>
          
          {/* Interactive Game */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
            <StartupSimulatorGame />
          </div>
        </div>
      </section>

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

      <section className="page-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Inspirational Speakers</h2>
            <p className="text-brand-secondary max-w-3xl mx-auto">
              Discover the influential speakers who have shared their wisdom and
              insights at E-Cell events.
            </p>
          </div>
          <div className="relative">
            <Carousel
              opts={{ align: "start", loop: true }}
              setApi={setSpeakersApi}
              className="w-full"
            >
              <CarouselContent>
                {speakers.map((speaker, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <div className="card-primary p-6 h-full flex flex-col items-center text-center">
                      <div className="h-24 w-24 rounded-full overflow-hidden bg-slate-800/70 flex items-center justify-center mb-4">
                        {speaker.image ? (
                          <Image
                            src={speaker.image}
                            alt={speaker.name}
                            width={96}
                            height={96}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <span className="text-lg font-semibold text-white">
                            {speaker.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </span>
                        )}
                      </div>
                      <h3 className="font-semibold text-white leading-tight">{speaker.name}</h3>
                      <p className="text-sm text-brand-secondary leading-snug">
                        {speaker.designation}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-6 md:-left-10 bg-black/30 border-white/10 hover:bg-black/50" />
              <CarouselNext className="-right-6 md:-right-10 bg-black/30 border-white/10 hover:bg-black/50" />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Recent Events</h2>
          </div>
          <div className="space-y-16">
            {[
              {
                id: 20,
                title: "IIT Madras E-Summit 2025 & E-Auction",
                category: "Summit",
                description: "SVCE E - Cell members participated in the E-Auction, simulating real-world investment and startup valuation scenarios, testing financial decision-making, negotiation, and strategic thinking.",
                date: "March 1, 2025",
                location: "IIT Madras",
                participantsInfo: "SVCE E - Cell Team",
                image: "/events/iit_2025.jpg",
                color: "primary",
              },
              {
                id: 19,
                title: "MSME Idea Hackathon 4.0",
                category: "Hackathon",
                description: "A high-energy hackathon where students pitched innovative solutions to real-world challenges. 18 proposals from SVCE were forwarded for incubation.",
                date: "October 29, 2024",
                location: "Library Conference Hall, SVCE",
                participantsInfo: "18 Proposals Selected",
                image: "/events/msme.JPG",
                color: "secondary",
              },
              {
                id: 18,
                title: "MoU with E - Cell MANIT Bhopal",
                category: "Collaboration",
                description: "A collaboration to promote joint events and mutual support. SVCE E - Cell was named the official outreach partner for MANIT Bhopal's E-Summit 2025.",
                date: "October 14, 2024",
                location: "SVCE & MANIT Bhopal",
                participantsInfo: "Official Partnership",
                image: "/events/bhopal.jpg",
                color: "accent",
              },
            ].map((event, index) => (
              <div
                key={event.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 !== 0 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 0 ? "order-2 md:order-1" : "order-2"}>
                  <div className="p-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                        event.color === 'primary'
                          ? 'bg-blue-900/30 text-blue-300'
                          : event.color === 'secondary'
                          ? 'bg-purple-900/30 text-purple-300'
                          : 'bg-teal-900/30 text-teal-300'
                      }`}
                    >
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
                    </div>
                  </div>
                </div>
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