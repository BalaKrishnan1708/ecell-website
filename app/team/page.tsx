"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { AnimatedHeading } from "@/components/ui/AnimatedHeading"

// Define a type for a team member for better type safety
type TeamMember = {
  id: number
  name: string
  position: string
  team: string
  domain: string
  image: string
  linkedin?: string
  email?: string
}

// Team member data with domains
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Doe",
    position: "President",
    team: "Core Team",
    domain: "Tech",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Vice President",
    team: "Core Team",
    domain: "Content",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Secretary",
    team: "Core Team",
    domain: "Market",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "michael@example.com",
  },
  {
    id: 4,
    name: "Emily Brown",
    position: "Treasurer",
    team: "Core Team",
    domain: "Design",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "emily@example.com",
  },
  {
    id: 5,
    name: "David Wilson",
    position: "Marketing Lead",
    team: "Marketing Team",
    domain: "Outreach",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "david@example.com",
  },
  {
    id: 6,
    name: "Sarah Lee",
    position: "Events Coordinator",
    team: "Events Team",
    domain: "Operations",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "sarah@example.com",
  },
]

// Grouping logic
const groupedTeamMembers = teamMembers.reduce(
  (acc, member) => {
    if (!acc[member.team]) {
      acc[member.team] = []
    }
    acc[member.team].push(member)
    return acc
  },
  {} as Record<string, TeamMember[]>,
)

// Component for the Flipping Card
function TeamMemberCard({ member, isFlipped, onFlip }: { member: TeamMember; isFlipped: boolean; onFlip: () => void }) {
  const cardVariants = {
    flipped: { rotateY: 180 },
    unflipped: { rotateY: 0 },
  }

  return (
    <div className="aspect-square w-full [perspective:1000px] relative" onClick={onFlip}>
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        variants={cardVariants}
        initial="unflipped"
        animate={isFlipped ? "flipped" : "unflipped"}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Card Front */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
            <div className="aspect-square relative">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.position}</p>
              <span className="inline-block mt-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                {member.domain}
              </span>
            </div>
          </div>
        </div>

        {/* Card Back */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="bg-[#0b1b34] text-white rounded-xl shadow-lg h-full flex flex-col items-center justify-center p-4">
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-brand-primary mb-4">{member.position}</p>
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
              {member.domain}
            </span>
            <div className="flex gap-5 mt-2">
              {member.linkedin && (
                <Link href={member.linkedin} target="_blank" className="hover:text-brand-primary transition-colors">
                  <Linkedin size={24} />
                </Link>
              )}
              {member.email && (
                <Link href={`mailto:${member.email}`} className="hover:text-brand-primary transition-colors">
                  <Mail size={24} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function TeamPage() {
  // State for team page
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null)
  const pageRef = useRef<HTMLDivElement>(null)

  // Handler for flipping cards
  const handleCardFlip = (memberId: number) => {
    setFlippedCardId((prevId) => (prevId === memberId ? null : memberId))
  }

  // Effect to close card when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pageRef.current && !pageRef.current.contains(event.target as Node)) {
        setFlippedCardId(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [pageRef])

  return (
    <div className="min-h-screen" onClick={() => setFlippedCardId(null)}>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="page-hero relative z-20"
      >
        {/* Constellation dots */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(59,130,246,0.1),transparent_35%)]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-40">
          <AnimatedHeading className="text-white mb-4 text-4xl md:text-5xl">Our Team</AnimatedHeading>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-white">E-cell</span>{" "}
              <span className="text-blue-300">Members</span>
            </h2>
            <p className="text-lg text-white/90">
              Passionate students driving innovation and entrepreneurship
            </p>
          </motion.div>
          <motion.p
            className="text-xl max-w-2xl mx-auto text-brand-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Meet the passionate individuals behind E-cell SVCE dedicated to fostering entrepreneurship.
          </motion.p>
        </div>
      </motion.section>

      {/* Team Members Section */}
      <section className="page-content" ref={pageRef}>
        <div className="container mx-auto px-4">
          {Object.entries(groupedTeamMembers).map(([team, members]) => (
            <div key={team} className="mb-16">
              <AnimatedHeading className="text-brand-primary text-3xl mb-12 text-center">{team}</AnimatedHeading>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {members.map((member) => (
                  <div key={member.id} onClick={(e) => e.stopPropagation()}>
                    <TeamMemberCard
                      member={member}
                      isFlipped={flippedCardId === member.id}
                      onFlip={() => handleCardFlip(member.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
