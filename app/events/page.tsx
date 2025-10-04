"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin, Users } from "lucide-react"


type Participant = {
  id: number
  name: string
  studentClass: string
  idea?: string
  description?: string
}

type Event = {
  id: number
  title: string
  category: string
  description: string
  date: string
  location: string
  participantsInfo: string
  image: string
  color: "primary" | "secondary" | "accent"
  participants?: Participant[]
}

const colorVariants = {
  primary: "bg-blue-900/30 text-blue-300",
  secondary: "bg-purple-900/30 text-purple-300",
  accent: "bg-teal-900/30 text-teal-300",
}


const AnimatedHeading = ({
  className,
  children,
}: {
  className: string
  children: React.ReactNode
}) => <h1 className={className}>{children}</h1>

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void
  children: React.ReactNode
}) => (
  <button
    onClick={onClick}
    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
  >
    {children}
  </button>
)


const events: Event[] = [
  {
    id: 20,
    title: "IIT Madras E-Summit 2025 & E-Auction",
    category: "Summit",
    description:
      "SVCE E-Cell members participated in the E-Auction, simulating real-world investment and startup valuation scenarios, testing financial decision-making, negotiation, and strategic thinking.",
    date: "March 1, 2025",
    location: "IIT Madras",
    participantsInfo: "SVCE E-Cell Team",
    image: "/placeholder.svg?height=600&width=800",
    color: "primary",
  },
  {
    id: 19,
    title: "MSME Idea Hackathon 4.0",
    category: "Hackathon",
    description:
      "A high-energy hackathon where students pitched innovative solutions to real-world challenges. 18 proposals from SVCE were forwarded for incubation.",
    date: "October 29, 2024",
    location: "Library Conference Hall, SVCE",
    participantsInfo: "18 Proposals Selected",
    image: "/placeholder.svg?height=600&width=800",
    color: "secondary",
  },
  {
    id: 18,
    title: "MoU with E-Cell MANIT Bhopal",
    category: "Collaboration",
    description:
      "A collaboration to promote joint events and mutual support. SVCE E-Cell was named the official outreach partner for MANIT Bhopal’s E-Summit 2025.",
    date: "October 14, 2024",
    location: "SVCE & MANIT Bhopal",
    participantsInfo: "Official Partnership",
    image: "/placeholder.svg?height=600&width=800",
    color: "accent",
  },
  {
    id: 17,
    title: "IIT Madras EDD Cohort – Growth Track",
    category: "Program",
    description:
      "A collaborative entrepreneurship program with IIT Madras, offering mentorship, startup ideation, market validation, and exposure to funding mechanisms.",
    date: "April 1, 2024",
    location: "IIT Madras & SVCE",
    participantsInfo: "2024-2025 Cohort",
    image: "/placeholder.svg?height=600&width=800",
    color: "primary",
  },
  {
    id: 16,
    title: "Entrepreneurship Pitching League (EPL)",
    category: "Competition",
    description:
      "A pitching competition where students created innovative products by blending multiple fields such as education, automobiles, waste management, and electronics.",
    date: "March 18, 2024",
    location: "SVCE (Highways 2024)",
    participantsInfo: "Winners Announced",
    image: "/placeholder.svg?height=600&width=800",
    color: "secondary",
    participants: [
      { id: 1, name: "Johin Gill & Kavi Raj E", studentClass: "AE, 2nd Year" },
      { id: 2, name: "N. Jegatheesh & Giridharan S N", studentClass: "ECE A, 1st Year" },
    ],
  },
  {
    id: 15,
    title: "Meme Marketing Competition",
    category: "Competition",
    description: "A creative challenge where students designed witty and impactful marketing memes blending humor with branding.",
    date: "March 17, 2024",
    location: "SVCE (Highways 2024)",
    participantsInfo: "Winners Announced",
    image: "/placeholder.svg?height=600&width=800",
    color: "accent",
    participants: [
      { id: 1, name: "Infant Rohith A", studentClass: "IT A, 1st Year" },
      { id: 2, name: "Nihil Rayen P", studentClass: "AIDS, 1st Year" },
    ],
  },
  {
    id: 14,
    title: "Pitch Palooza – Women’s Day Competition",
    category: "Competition",
    description:
      "A business pitch competition for women entrepreneurs to showcase innovative ideas and receive mentorship from judges.",
    date: "March 11, 2024",
    location: "Library Seminar Hall, SVCE",
    participantsInfo: "Multiple Teams",
    image: "/placeholder.svg?height=600&width=800",
    color: "primary",
  },
  {
    id: 13,
    title: "Pitch Perfect Workshop",
    category: "Workshop",
    description:
      "An interactive workshop on effective pitching, persuasive communication, and storytelling, led by Gurunathraj E (Founder of Metal Protection in EPIC).",
    date: "February 29, 2024",
    location: "Online (E-Lobby Webinar Series)",
    participantsInfo: "Open to all students",
    image: "/placeholder.svg?height=600&width=800",
    color: "secondary",
  },
  {
    id: 12,
    title: "IP & Patent Filing Seminar",
    category: "Seminar",
    description:
      "An expert session on intellectual property rights and the patent filing process, conducted by Dr. R. Senthil (Professor, ECE).",
    date: "February 5, 2024",
    location: "Online (E-Lobby Webinar Series)",
    participantsInfo: "Open to all students",
    image: "/placeholder.svg?height=600&width=800",
    color: "accent",
  },
  {
    id: 1,
    title: "Entrepreneurship Workshop",
    category: "Workshop",
    description:
      "A comprehensive workshop on entrepreneurship basics, business model canvas, and pitching techniques for aspiring entrepreneurs.",
    date: "March 15, 2023",
    location: "Main Auditorium, SVCE",
    participantsInfo: "120 Participants",
    image: "/placeholder.svg?height=600&width=800",
    color: "primary",
  },
  {
    id: 2,
    title: "Startup Pitch Competition",
    category: "Competition",
    description:
      "Students presented their innovative startup ideas to a panel of judges from the industry. Cash prizes and mentorship opportunities were awarded.",
    date: "February 28, 2023",
    location: "Seminar Hall, SVCE",
    participantsInfo: "50 Teams",
    image: "/placeholder.svg?height=600&width=800",
    color: "secondary",
  },
  {
    id: 3,
    title: "Industry Expert Talk Series",
    category: "Seminar",
    description:
      "A series of talks by industry experts sharing their entrepreneurial journey, challenges faced, and insights on building successful startups.",
    date: "January 10, 2023",
    location: "Virtual Event",
    participantsInfo: "200+ Attendees",
    image: "/placeholder.svg?height=600&width=800",
    color: "accent",
  },
  {
    id: 4,
    title: "Hackathon 2023",
    category: "Competition",
    description:
      "A 24-hour coding marathon where participants worked on innovative solutions to real-world problems. Prizes were awarded for the best solutions.",
    date: "December 5, 2022",
    location: "Computer Science Block, SVCE",
    participantsInfo: "30 Teams",
    image: "/placeholder.svg?height=600&width=800",
    color: "primary",
    participants: [
      {
        id: 1,
        name: "Team Innovate",
        studentClass: "CSE, 3rd Year",
        idea: "AI-Powered Waste Sorting",
        description: "A system to automate recycling processes.",
      },
      {
        id: 2,
        name: "Code Wizards",
        studentClass: "IT, 2nd Year",
        idea: "Health Monitoring Wearable",
        description: "A low-cost band for tracking vital signs.",
      },
      {
        id: 3,
        name: "Future Coders",
        studentClass: "ECE, 4th Year",
        idea: "Smart Traffic Management",
        description: "IoT solution to reduce city congestion.",
      },
      {
        id: 4,
        name: "Data Dynamos",
        studentClass: "CSE, 3rd Year",
        idea: "Personalized Learning Platform",
        description: "An adaptive platform for K-12 students.",
      },
    ],
  },
  {
    id: 5,
    title: "Business Plan Workshop",
    category: "Workshop",
    description:
      "An interactive workshop on creating effective business plans, financial projections, and market analysis for startups.",
    date: "November 20, 2022",
    location: "MBA Department, SVCE",
    participantsInfo: "80 Participants",
    image: "/placeholder.svg?height=600&width=800",
    color: "secondary",
  },
  {
    id: 6,
    title: "E-Summit 2022",
    category: "Conference",
    description:
      "Annual entrepreneurship summit featuring keynote speeches, panel discussions, workshops, and networking opportunities with industry leaders.",
    date: "October 15, 2022",
    location: "SVCE Campus",
    participantsInfo: "500+ Attendees",
    image: "/placeholder.svg?height=600&width=800",
    color: "accent",
  },
]

const eventsByYear = events.reduce(
  (acc: Record<string, Event[]>, event) => {
    const year = new Date(event.date).getFullYear().toString()
    if (!acc[year]) acc[year] = []
    acc[year].push(event)
    return acc
  },
  {}
)


export default function EventsPage() {
  const [openEventId, setOpenEventId] = useState<number | null>(null)

  const handleToggleParticipants = (eventId: number) => {
    setOpenEventId(prevId => (prevId === eventId ? null : eventId))
  }

  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden">
      <motion.section
        className="page-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] bg-[repeating-linear-gradient(135deg,rgba(59,130,246,0.5)_0px,rgba(59,130,246,0.5)_2px,transparent_2px,transparent_8px)]"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedHeading className="text-brand-primary mb-4 text-4xl md:text-5xl">
            Events
          </AnimatedHeading>
          <motion.p
            className="text-xl max-w-2xl mx-auto text-brand-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Discover our past and upcoming events designed to inspire and
            nurture entrepreneurial talent.
          </motion.p>
        </div>
      </motion.section>

      <section className="page-content">
        <div className="container mx-auto px-4 space-y-20">
          {Object.keys(eventsByYear)
            .map(year => (
              <div key={year} className="space-y-12">
                <AnimatedHeading className="text-brand-primary text-3xl mb-4">
                  {year}
                </AnimatedHeading>
                {eventsByYear[year].map((event, index) => (
                  <div
                    key={event.id}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                      index % 2 !== 0 ? "md:grid-flow-dense" : ""
                    }`}
                  >
                    <div
                      className={
                        index % 2 === 0 ? "order-2 md:order-1" : "order-2"
                      }
                    >
                      <div className="p-6">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                            colorVariants[event.color]
                          }`}
                        >
                          {event.category}
                        </span>
                        <AnimatedHeading className="text-2xl mb-4">
                          {event.title}
                        </AnimatedHeading>
                        <p className="text-brand-secondary mb-6">
                          {event.description}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-brand-muted" />
                            <span className="text-sm text-brand-muted">
                              {event.date}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-brand-muted" />
                            <span className="text-sm text-brand-muted">
                              {event.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users size={18} className="text-brand-muted" />
                            <span className="text-sm text-brand-muted">
                              {event.participantsInfo}
                            </span>
                          </div>
                        </div>

                        {event.participants &&
                          event.participants.length > 0 && (
                            <div className="mt-4">

                              {openEventId === event.id && (
                                <div className="overflow-x-auto overflow-y-auto mt-4 rounded-lg border border-gray-700 bg-gray-800 shadow-lg max-h-64">
                                  <table className="min-w-full text-sm text-left">
                                    <thead className="bg-gray-900 text-white sticky top-0">
                                      <tr>
                                        <th className="px-4 py-2 font-bold">#</th>
                                        <th className="px-4 py-2 font-bold">Name / Team</th>
                                        <th className="px-4 py-2 font-bold">Class / Dept</th>
                                        {event.participants.some(p => p.idea) && <th className="px-4 py-2 font-bold">Idea Pitched</th>}
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {event.participants.map((p, i) => (
                                        <tr key={p.id} className={ i % 2 === 0 ? "bg-gray-800" : "bg-gray-900/50"}>
                                          <td className="px-4 py-2 font-medium text-blue-300">{i + 1}</td>
                                          <td className="px-4 py-2 text-gray-200">{p.name}</td>
                                          <td className="px-4 py-2 text-gray-200">{p.studentClass}</td>
                                          {event.participants && event.participants.some(p => p.idea) && <td className="px-4 py-2 text-gray-200">{p.idea || "N/A"}</td>}
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              )}
                            </div>
                          )}
                      </div>
                    </div>
                    <div
                      className={
                        index % 2 === 0 ? "order-1 md:order-2" : "order-1"
                      }
                    >
                      <div className="overflow-hidden rounded-xl shadow-lg">
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
            ))}
        </div>
      </section>
    </div>
  )
}