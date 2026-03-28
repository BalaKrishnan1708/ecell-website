"use client"

import { motion } from "framer-motion"
import { AnimatedHeading } from "@/components/ui/AnimatedHeading"
import { MessageCircle, Instagram, Linkedin, ArrowRight, ExternalLink } from "lucide-react"

const communityLinks = [
  {
    name: "WhatsApp Community",
    description: "Join our official daily log and community group for real-time updates and venture news.",
    link: "https://chat.whatsapp.com/Gf3tw3YTHLwLpiOtGofj1Q",
    icon: <MessageCircle className="w-8 h-8 text-green-500" />,
    color: "from-green-500/10 to-emerald-500/20",
    borderColor: "border-green-500/20",
    hoverColor: "hover:border-green-500/50"
  },
  {
    name: "Instagram",
    description: "Follow us for event highlights, founder stories, and behind-the-scenes content.",
    link: "https://www.instagram.com/ecell.svce?igshid=YmMyMTA2M2Y%3D",
    icon: <Instagram className="w-8 h-8 text-pink-500" />,
    color: "from-pink-500/10 to-rose-500/20",
    borderColor: "border-pink-500/20",
    hoverColor: "hover:border-pink-500/50"
  },
  {
    name: "LinkedIn",
    description: "Connect with our professional network and keep track of our corporate partnerships.",
    link: "https://www.linkedin.com/company/e-cell-svce/",
    icon: <Linkedin className="w-8 h-8 text-blue-500" />,
    color: "from-blue-500/10 to-indigo-500/20",
    borderColor: "border-blue-500/20",
    hoverColor: "hover:border-blue-500/50"
  }
]

export default function JoinUsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050505] flex flex-col">
       {/* Background Gradients */}
      <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 pt-40 pb-32 px-4 flex-1 container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="heading-xl mb-6">JOIN OUR <span className="text-indigo-500">COMMUNITY</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed italic">
            "Empowering the next generation of visionary founders through innovation, mentorship, and world-class incubation."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityLinks.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group relative glass-card p-10 rounded-[2.5rem] border ${item.borderColor} ${item.hoverColor} transition-all duration-500 flex flex-col items-center text-center hover:scale-[1.02] hover:-translate-y-2`}
            >
              {/* Card Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]`} />
              
              <div className="relative z-10 mb-8 p-6 bg-white/[0.03] rounded-3xl border border-white/5 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110">
                {item.icon}
              </div>
              
              <h3 className="relative z-10 text-2xl font-black text-white uppercase tracking-tighter mb-4">
                {item.name}
              </h3>
              
              <p className="relative z-10 text-gray-400 text-sm font-medium leading-relaxed mb-10 min-h-[60px]">
                {item.description}
              </p>
              
              <div className="relative z-10 w-full pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-white font-black uppercase tracking-widest text-[10px] group-hover:text-indigo-400 transition-colors">
                Connect Now <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </div>
              
              <ExternalLink size={14} className="absolute top-8 right-8 text-white/10 group-hover:text-white/40 transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}
