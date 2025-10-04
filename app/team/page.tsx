"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { AnimatedHeading } from "@/components/ui/AnimatedHeading"

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

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Roshan",
    position: "President",
    team: "Core Leadership",
    domain: "Leadership",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "roshan@ecell.svce.ac.in",
  },
  {
    id: 2,
    name: "R. Dharshini",
    position: "Vice President",
    team: "Core Leadership",
    domain: "Leadership",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "dharshini@ecell.svce.ac.in",
  },
  {
    id: 3,
    name: "Manojkumar",
    position: "Secretary",
    team: "Core Leadership",
    domain: "Leadership",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "manojkumar@ecell.svce.ac.in",
  },
  {
    id: 4,
    name: "Sree Varshini",
    position: "Joint Secretary",
    team: "Core Leadership",
    domain: "Leadership",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "sreevarshini@ecell.svce.ac.in",
  },
  {
    id: 5,
    name: "Pradeep",
    position: "CEO",
    team: "Executive Committee",
    domain: "Executive",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "pradeep@ecell.svce.ac.in",
  },
  {
    id: 6,
    name: "Bhargavi",
    position: "COO",
    team: "Executive Committee",
    domain: "Executive",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "bhargavi@ecell.svce.ac.in",
  },
  {
    id: 7,
    name: "Nithish",
    position: "CFO",
    team: "Executive Committee",
    domain: "Executive",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "nithish@ecell.svce.ac.in",
  },
  {
    id: 8,
    name: "Roobuck",
    position: "CMO",
    team: "Executive Committee",
    domain: "Executive",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "roobuck@ecell.svce.ac.in",
  },
  {
    id: 9,
    name: "Karthik R",
    position: "CTO",
    team: "Executive Committee",
    domain: "Executive",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "karthik@ecell.svce.ac.in",
  },
  {
    id: 10,
    name: "Janani T",
    position: "Tech Head",
    team: "Department Heads",
    domain: "Technology",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "janani@ecell.svce.ac.in",
  },
  {
    id: 11,
    name: "Sankaranarayanan",
    position: "Execution Head",
    team: "Department Heads",
    domain: "Operations",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "sankaranarayanan@ecell.svce.ac.in",
  },
  {
    id: 12,
    name: "Meyyappan",
    position: "Content Head",
    team: "Department Heads",
    domain: "Content",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "meyyappan@ecell.svce.ac.in",
  },
  {
    id: 13,
    name: "Vikaash B G",
    position: "Design Head",
    team: "Department Heads",
    domain: "Design",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "vikaash@ecell.svce.ac.in",
  },
  {
    id: 14,
    name: "Daksha S",
    position: "Marketing Head",
    team: "Department Heads",
    domain: "Marketing",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "daksha@ecell.svce.ac.in",
  },
  {
    id: 15,
    name: "Balapranav",
    position: "Community Manager",
    team: "Department Heads",
    domain: "Community",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "balapranav@ecell.svce.ac.in",
  },
  {
    id: 16,
    name: "Thirumurugan S",
    position: "Executive Team",
    team: "Executive Team",
    domain: "CSE C - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "thirumurugan@ecell.svce.ac.in",
  },
  {
    id: 17,
    name: "Mahalakshmi L",
    position: "Executive Team",
    team: "Executive Team",
    domain: "ECE B - 1st Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "mahalakshmi@ecell.svce.ac.in",
  },
  {
    id: 18,
    name: "Akshay V",
    position: "Executive Team",
    team: "Executive Team",
    domain: "Mech A - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "akshay@ecell.svce.ac.in",
  },
  {
    id: 19,
    name: "Dimple K",
    position: "Executive Team",
    team: "Executive Team",
    domain: "EEE A - 1st Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "dimple@ecell.svce.ac.in",
  },
  {
    id: 20,
    name: "Anushri V",
    position: "Executive Team",
    team: "Executive Team",
    domain: "ECE A - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "anushri@ecell.svce.ac.in",
  },
  {
    id: 21,
    name: "Darsan Chelvaa S",
    position: "Executive Team",
    team: "Executive Team",
    domain: "ECE A - 3rd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "darsan@ecell.svce.ac.in",
  },
  {
    id: 22,
    name: "Yogavarthanee R",
    position: "Executive Team",
    team: "Executive Team",
    domain: "Chem - 1st Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "yogavarthanee@ecell.svce.ac.in",
  },
  {
    id: 23,
    name: "Bala Krishnan R",
    position: "Tech Team",
    team: "Tech Team/Developers",
    domain: "AIDS A - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "balakrishnan@ecell.svce.ac.in",
  },
  {
    id: 24,
    name: "Aravindhan L",
    position: "Tech Team",
    team: "Tech Team/Developers",
    domain: "CSE A - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "aravindhan@ecell.svce.ac.in",
  },
  {
    id: 25,
    name: "Baarath Arumugaraj",
    position: "Tech Team",
    team: "Tech Team/Developers",
    domain: "CSE - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "baarath@ecell.svce.ac.in",
  },
  {
    id: 26,
    name: "Ragul R",
    position: "Tech Team",
    team: "Tech Team/Developers",
    domain: "ECE B - 3rd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "ragul@ecell.svce.ac.in",
  },
  {
    id: 27,
    name: "Prabha M",
    position: "Tech Team",
    team: "Tech Team/Developers",
    domain: "AIDS - 3rd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "prabha@ecell.svce.ac.in",
  },
  {
    id: 28,
    name: "Janani T",
    position: "Tech Team",
    team: "Tech Team/Developers",
    domain: "CSE A - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "janani.tech@ecell.svce.ac.in",
  },
  {
    id: 29,
    name: "Divya Shree M",
    position: "Design Team",
    team: "Design Team",
    domain: "IT - 1st Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "divyashree@ecell.svce.ac.in",
  },
  {
    id: 30,
    name: "Priyanka S",
    position: "Design Team",
    team: "Design Team",
    domain: "AIDS - 3rd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "priyanka@ecell.svce.ac.in",
  },
  {
    id: 31,
    name: "Vikaash BG",
    position: "Design Team",
    team: "Design Team",
    domain: "ECE C - 3rd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "vikaash.design@ecell.svce.ac.in",
  },
  {
    id: 32,
    name: "Sri Hari Roshan",
    position: "Design Team",
    team: "Design Team",
    domain: "CSE D - 1st Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "srihari@ecell.svce.ac.in",
  },
  {
    id: 33,
    name: "Tharun S",
    position: "Design Team",
    team: "Design Team",
    domain: "Mech & Auto - 1st Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "tharun@ecell.svce.ac.in",
  },
  {
    id: 34,
    name: "Srinidhi K",
    position: "Design Team",
    team: "Design Team",
    domain: "Biotech - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "srinidhi@ecell.svce.ac.in",
  },
  {
    id: 35,
    name: "Neha Ranganesh",
    position: "Marketing Team",
    team: "Marketing Team",
    domain: "Biotech A - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "neha@ecell.svce.ac.in",
  },
  {
    id: 36,
    name: "Ashika Haseen",
    position: "Marketing Team",
    team: "Marketing Team",
    domain: "AIDS A - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "ashika@ecell.svce.ac.in",
  },
  {
    id: 37,
    name: "Benoah Ritla F",
    position: "Marketing Team",
    team: "Marketing Team",
    domain: "Chem - 1st Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "benoah@ecell.svce.ac.in",
  },
  {
    id: 38,
    name: "Mahathi R",
    position: "Marketing Team",
    team: "Marketing Team",
    domain: "EEE - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "mahathi@ecell.svce.ac.in",
  },
  {
    id: 39,
    name: "Daksha S",
    position: "Marketing Team",
    team: "Marketing Team",
    domain: "Biotech - 1st Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "daksha.marketing@ecell.svce.ac.in",
  },
  {
    id: 40,
    name: "Sankara Narayanan S",
    position: "Content Team",
    team: "Content Team",
    domain: "Biotech - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "sankara@ecell.svce.ac.in",
  },
  {
    id: 41,
    name: "Harshith B",
    position: "Content Team",
    team: "Content Team",
    domain: "MNA - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "harshith@ecell.svce.ac.in",
  },
  {
    id: 42,
    name: "Srilega R N",
    position: "Content Team",
    team: "Content Team",
    domain: "CSE D - 1st Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "srilega@ecell.svce.ac.in",
  },
  {
    id: 43,
    name: "Vaishnavi Madabhushi",
    position: "Content Team",
    team: "Content Team",
    domain: "BT A - 3rd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "vaishnavi@ecell.svce.ac.in",
  },
  {
    id: 44,
    name: "Nitish N",
    position: "Community Manager",
    team: "Community Managers",
    domain: "AIDS B - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "nitish@ecell.svce.ac.in",
  },
  {
    id: 45,
    name: "Madhav Krishna",
    position: "Community Manager",
    team: "Community Managers",
    domain: "CSE B - 1st Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "madhav@ecell.svce.ac.in",
  },
  {
    id: 46,
    name: "Balapranav K",
    position: "Community Manager",
    team: "Community Managers",
    domain: "EEE A - 1st Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "balapranav.community@ecell.svce.ac.in",
  },
  {
    id: 47,
    name: "Murgesh Raghavendra A",
    position: "Community Manager",
    team: "Community Managers",
    domain: "EEE - 3rd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "murgesh@ecell.svce.ac.in",
  },
  {
    id: 48,
    name: "Sanjana",
    position: "LinkedIn Manager",
    team: "LinkedIn Managers",
    domain: "IT B - 2nd Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "sanjana@ecell.svce.ac.in",
  },
  {
    id: 49,
    name: "Praveen A",
    position: "LinkedIn Manager",
    team: "LinkedIn Managers",
    domain: "Mech - 1st Year",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com",
    email: "praveen@ecell.svce.ac.in",
  },
]

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

function TeamMemberCard({ member, isFlipped, onFlip }: { member: TeamMember; isFlipped: boolean; onFlip: () => void }) {
  const cardVariants = {
    flipped: { rotateY: 180 },
    unflipped: { rotateY: 0 },
  }

  return (
    <div className="aspect-square w-full [perspective:1000px] relative cursor-pointer" onClick={onFlip}>
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        variants={cardVariants}
        initial="unflipped"
        animate={isFlipped ? "flipped" : "unflipped"}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
            <div className="aspect-square relative">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <div className="p-3 sm:p-4 text-center flex-1 flex flex-col justify-center">
              <h3 className="text-base sm:text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">{member.position}</p>
              <span className="inline-block px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                {member.domain}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="bg-[#0b1b34] text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center justify-center p-3 sm:p-4">
            <h3 className="text-lg sm:text-xl font-bold mb-1 text-center">{member.name}</h3>
            <p className="text-brand-primary mb-3 text-center text-sm sm:text-base">{member.position}</p>
            <span className="inline-block mb-4 px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
              {member.domain}
            </span>
            <div className="flex gap-4 sm:gap-5 mt-2">
              {member.linkedin && (
                <Link href={member.linkedin} target="_blank" className="hover:text-brand-primary transition-colors p-1">
                  <Linkedin size={20} className="sm:w-6 sm:h-6" />
                </Link>
              )}
              {member.email && (
                <Link href={`mailto:${member.email}`} className="hover:text-brand-primary transition-colors p-1">
                  <Mail size={20} className="sm:w-6 sm:h-6" />
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
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null)
  const pageRef = useRef<HTMLDivElement>(null)

  const handleCardFlip = (memberId: number) => {
    setFlippedCardId((prevId) => (prevId === memberId ? null : memberId))
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pageRef.current && !pageRef.current.contains(event.target as Node)) {
        setFlippedCardId(null)
      }
    }
    function handleTouchOutside(event: TouchEvent) {
      if (pageRef.current && !pageRef.current.contains(event.target as Node)) {
        setFlippedCardId(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleTouchOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleTouchOutside)
    }
  }, [pageRef])

  return (
    <div
      className="min-h-screen relative overflow-hidden mt-24"
      style={{
        background: "radial-gradient(circle at 50% 40%, #23255d 0%, #181e36 100%)"
      }}
      onClick={() => setFlippedCardId(null)}
    >
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="page-hero relative z-20 py-12 sm:py-16 md:py-20"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(59,130,246,0.1),transparent_35%)]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-40">
          <AnimatedHeading className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl">Our Team</AnimatedHeading>
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
              <span className="text-white">E-cell</span>{" "}
              <span className="text-blue-300">Members</span>
            </h2>
            <p className="text-base sm:text-lg text-white/90 px-2">
              Passionate students driving innovation and entrepreneurship
            </p>
          </motion.div>
          <motion.p
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-brand-secondary px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Meet the passionate individuals behind E-cell SVCE dedicated to fostering entrepreneurship.
          </motion.p>
        </div>
      </motion.section>

      <section className="page-content py-8 sm:py-12" ref={pageRef}>
        <div className="container mx-auto px-4 sm:px-6">
          {Object.entries(groupedTeamMembers).map(([team, members]) => (
            <div key={team} className="mb-12 sm:mb-16">
              <AnimatedHeading className="text-brand-primary text-2xl sm:text-3xl mb-8 sm:mb-12 text-center px-2">{team}</AnimatedHeading>
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
                {members.map((member) => (
                  <div key={member.id} onClick={(e) => e.stopPropagation()} className="transform transition-transform duration-200 hover:scale-105">
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
          <div className="block sm:hidden mt-8 text-center">
            <p className="text-sm text-gray-500 mb-4">Tap cards to flip and learn more</p>
            <div className="w-8 h-1 bg-gray-300 rounded-full mx-auto"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
