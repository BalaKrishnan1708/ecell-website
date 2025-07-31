import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

// Dummy data for demonstration; replace with real data source or fetch logic
const teamMembers = [
  { id: 1, name: "John Doe", position: "President", team: "Core Team", image: "/placeholder.svg?height=400&width=400", linkedin: "https://linkedin.com", email: "john@example.com" },
  { id: 2, name: "Jane Smith", position: "Vice President", team: "Core Team", image: "/placeholder.svg?height=400&width=400", linkedin: "https://linkedin.com", email: "jane@example.com" },
  { id: 3, name: "Michael Johnson", position: "Secretary", team: "Core Team", image: "/placeholder.svg?height=400&width=400", linkedin: "https://linkedin.com", email: "michael@example.com" },
  { id: 4, name: "Emily Brown", position: "Treasurer", team: "Core Team", image: "/placeholder.svg?height=400&width=400", linkedin: "https://linkedin.com", email: "emily@example.com" },
  { id: 5, name: "David Wilson", position: "Marketing Lead", team: "Marketing Team", image: "/placeholder.svg?height=400&width=400", linkedin: "https://linkedin.com", email: "david@example.com" },
  { id: 6, name: "Sarah Lee", position: "Events Coordinator", team: "Events Team", image: "/placeholder.svg?height=400&width=400", linkedin: "https://linkedin.com", email: "sarah@example.com" },
];

export default function ProfilePage({ params }: { params: { id: string } }) {
  const member = teamMembers.find(m => m.id === Number(params.id));
  if (!member) return notFound();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-16 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center border border-border/30">
        <div className="relative w-32 h-32 mb-4">
          <Image src={member.image} alt={member.name} fill className="object-cover rounded-full border-4 border-primary shadow-lg" />
        </div>
        <h1 className="text-3xl font-bold mb-1 text-center">{member.name}</h1>
        <p className="text-muted-foreground mb-2 text-center">{member.position}</p>
        <div className="flex gap-4 justify-center mt-4">
          {member.linkedin && (
            <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin size={28} />
            </Link>
          )}
          {member.email && (
            <Link href={`mailto:${member.email}`} className="text-primary hover:text-accent transition-colors" aria-label="Email">
              <Mail size={28} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
