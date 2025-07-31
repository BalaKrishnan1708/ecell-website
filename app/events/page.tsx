"use client" // Add if this is a client component, needed for useState

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
import { useState } from "react"

// Define types for our data structures for better type safety
type Participant = {
  id: number
  name: string
  studentClass: string // Renamed from 'class' (a reserved keyword)
  idea: string
  description: string
}

type Event = {
  id: number
  title: string
  category: string
  description: string
  date: string
  location:string
  participantsInfo: string // Renamed from 'participants' for clarity
  image: string
  color: "primary" | "secondary" | "accent"
  participants?: Participant[] // Participants are now optional and nested
}

// A mapping to ensure Tailwind's JIT compiler can find the classes
const colorVariants = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-accent/10 text-accent",
}

// Data is now correctly structured and typed
const events: Event[] = [
  {
    id: 1,
    title: "Entrepreneurship Workshop",
    category: "Workshop",
    description: "A comprehensive workshop on entrepreneurship basics, business model canvas, and pitching techniques for aspiring entrepreneurs.",
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
    description: "Students presented their innovative startup ideas to a panel of judges from the industry. Cash prizes and mentorship opportunities were awarded.",
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
    description: "A series of talks by industry experts sharing their entrepreneurial journey, challenges faced, and insights on building successful startups.",
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
    description: "A 24-hour coding marathon where participants worked on innovative solutions to real-world problems. Prizes were awarded for the best solutions.",
    date: "December 5, 2022",
    location: "Computer Science Block, SVCE",
    participantsInfo: "30 Teams",
    image: "/placeholder.svg?height=600&width=800",
    color: "primary",
    // Participant data is now correctly nested within the event
    participants: [
      { id: 1, name: "Team Innovate", studentClass: "CSE, 3rd Year", idea: "AI-Powered Waste Sorting", description: "A system to automate recycling processes." },
      { id: 2, name: "Code Wizards", studentClass: "IT, 2nd Year", idea: "Health Monitoring Wearable", description: "A low-cost band for tracking vital signs." },
      { id: 3, name: "Future Coders", studentClass: "ECE, 4th Year", idea: "Smart Traffic Management", description: "IoT solution to reduce city congestion." },
      { id: 4, name: "Data Dynamos", studentClass: "CSE, 3rd Year", idea: "Personalized Learning Platform", description: "An adaptive platform for K-12 students." },
    ],
  },
  {
    id: 5,
    title: "Business Plan Workshop",
    category: "Workshop",
    description: "An interactive workshop on creating effective business plans, financial projections, and market analysis for startups.",
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
    description: "Annual entrepreneurship summit featuring keynote speeches, panel discussions, workshops, and networking opportunities with industry leaders.",
    date: "October 15-16, 2022",
    location: "SVCE Campus",
    participantsInfo: "500+ Attendees",
    image: "/placeholder.svg?height=600&width=800",
    color: "accent",
  },
]

export default function EventsPage() {
  const [openEventId, setOpenEventId] = useState<number | null>(null)

  const handleToggleParticipants = (eventId: number) => {
    setOpenEventId(prevId => (prevId === eventId ? null : eventId))
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our past and upcoming events designed to inspire and nurture entrepreneurial talent.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  index % 2 !== 0 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 0 ? "order-2 md:order-1" : "order-2"}>
                  <div className="p-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${colorVariants[event.color]}`}
                    >
                      {event.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <p className="text-muted-foreground mb-6">{event.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={18} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{event.participantsInfo}</span>
                      </div>
                    </div>
                    
                    {/* Robust way to show participant data */}
                    {event.participants && event.participants.length > 0 && (
                      <div className="mt-4">
                        <Button onClick={() => handleToggleParticipants(event.id)}>
                          {openEventId === event.id ? "Hide Participants" : "View Participants"}
                        </Button>
                        
                        {openEventId === event.id && (
                          <div className="overflow-x-auto mt-4 rounded-lg border border-border/50 bg-white shadow-lg">
                            <table className="min-w-full text-sm text-left">
                              <thead className="bg-primary/10">
                                <tr>
                                  <th className="px-4 py-2 font-bold">S.no</th>
                                  <th className="px-4 py-2 font-bold">Team Name</th>
                                  <th className="px-4 py-2 font-bold">Department</th>
                                  <th className="px-4 py-2 font-bold">Idea Pitched</th>
                                  <th className="px-4 py-2 font-bold">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                {event.participants.map((p, i) => (
                                  <tr key={p.id} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <td className="px-4 py-2 font-medium">{i + 1}</td>
                                    <td className="px-4 py-2">{p.name}</td>
                                    <td className="px-4 py-2">{p.studentClass}</td>
                                    <td className="px-4 py-2">{p.idea}</td>
                                    <td className="px-4 py-2">{p.description}</td>
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

                <div className={index % 2 === 0 ? "order-1 md:order-2" : "order-1"}>
                  <div className="event-card overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={event.image || "/placeholder.svg"}
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
        </div>
      </section>
    </div>
  )
}