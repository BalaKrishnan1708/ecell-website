"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Define a type for a team member for better type safety
type TeamMember = {
  id: number;
  name: string;
  position: string;
  team: string;
  image: string;
  linkedin?: string;
  email?: string;
};

// Team member data with Twitter links added
const teamMembers: TeamMember[] = [
  { id: 1, name: "John Doe", position: "President", team: "Core Team", image: "/placeholder.svg?height=400&width=400", linkedin: "https://linkedin.com", email: "john@example.com" },
  { id: 2, name: "Jane Smith", position: "Vice President", team: "Core Team", image: "/placeholder.svg?height=400&width=400", linkedin: "https://linkedin.com", email: "jane@example.com" },
  { id: 3, name: "Michael Johnson", position: "Secretary", team: "Core Team", image: "/placeholder.svg?height=400&width=400", linkedin: "https://linkedin.com", email: "michael@example.com" },
  { id: 4, name: "Emily Brown", position: "Treasurer", team: "Core Team", image: "/placeholder.svg?height=400&width=400", linkedin: "https://linkedin.com", email: "emily@example.com" },
  { id: 5, name: "David Wilson", position: "Marketing Lead", team: "Marketing Team", image: "/placeholder.svg?height=400&width=400", linkedin: "https://linkedin.com", email: "david@example.com" },
  { id: 6, name: "Sarah Lee", position: "Events Coordinator", team: "Events Team", image: "/placeholder.svg?height=400&width=400", linkedin: "https://linkedin.com", email: "sarah@example.com" },
];

// Grouping logic remains the same
const groupedTeamMembers = teamMembers.reduce(
  (acc, member) => {
    if (!acc[member.team]) {
      acc[member.team] = [];
    }
    acc[member.team].push(member);
    return acc;
  },
  {} as Record<string, TeamMember[]>
);

// New Component for the Flipping Card
function TeamMemberCard({ member, isFlipped, onFlip }: { member: TeamMember; isFlipped: boolean; onFlip: () => void }) {
  const cardVariants = {
    flipped: { rotateY: 180 },
    unflipped: { rotateY: 0 },
  };

  return (
    <div className="aspect-square w-full [perspective:1000px]" onClick={onFlip}>
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
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.position}</p>
            </div>
          </div>
        </div>

        {/* Card Back */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="bg-primary text-white rounded-xl shadow-lg h-full flex flex-col items-center justify-center p-4">
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-accent mb-4">{member.position}</p>
            <div className="flex gap-5 mt-2">
              {member.linkedin && <Link href={member.linkedin} target="_blank" className="hover:text-accent transition-colors"><Linkedin size={24} /></Link>}
              {member.email && <Link href={`mailto:${member.email}`} className="hover:text-accent transition-colors"><Mail size={24} /></Link>}
            </div>
            <Link
              href={`/team/${member.id}`}
              className="mt-6 px-4 py-2 text-sm bg-white text-primary font-semibold rounded-full hover:bg-gray-200 transition-colors text-center w-full"
              onClick={e => e.stopPropagation()}
            >
              View Profile
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function TeamPage() {
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const handleCardFlip = (memberId: number) => {
    setFlippedCardId(prevId => (prevId === memberId ? null : memberId));
  };

  // Close card when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pageRef.current && !pageRef.current.contains(event.target as Node)) {
        setFlippedCardId(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pageRef]);

  return (
    <div className="pt-20 bg-gray-50/50" onClick={() => setFlippedCardId(null)}>
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Meet the passionate individuals behind E-cell SVCE dedicated to fostering entrepreneurship.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20" ref={pageRef}>
        <div className="container mx-auto px-4">
          {Object.entries(groupedTeamMembers).map(([team, members]) => (
            <div key={team} className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">{team}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {members.map(member => (
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
  );
}