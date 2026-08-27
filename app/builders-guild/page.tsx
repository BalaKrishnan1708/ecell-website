"use client"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { Code2, ArrowUpRight, Globe, Cpu } from "lucide-react"

export default function BuildersGuildPage() {
  const guildLink = "https://e-cell-builders-guild.vercel.app/"

  useEffect(() => {
    // Redirect immediately when visiting page directly
    const timer = setTimeout(() => {
      window.location.href = guildLink
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 font-sans overflow-hidden">
      {/* Background Matrix Grid */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#4f46e5_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[200px] rounded-full pointer-events-none" />
      
      <main className="container mx-auto px-4 sm:px-6 py-28 sm:py-36 md:py-48 relative z-10 flex flex-col items-center justify-center min-h-[85vh]">
        <div className="max-w-4xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
              <div className="p-4 sm:p-5 bg-indigo-600 rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_0_60px_rgba(79,70,229,0.4)]">
                <Code2 className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 leading-none">
              BUILDERS <span className="text-indigo-500">GUILD</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-bold leading-relaxed tracking-tight mb-10 sm:mb-16 italic px-2">
              "The technical neural network of E-Cell SVCE. Redirecting to live ecosystem..."
            </p>

            <motion.a 
              href={guildLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 sm:gap-6 px-8 sm:px-16 py-4 sm:py-8 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] rounded-2xl sm:rounded-[2.5rem] transition-all shadow-[0_30px_100px_-20px_rgba(79,70,229,0.5)] group"
            >
              Enter Guild Ecosystem Live <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </motion.div>

          {/* Minimal Stats */}
          <div className="flex justify-center gap-6 sm:gap-12 pt-12 sm:pt-20 border-t border-white/5 opacity-40">
             <div className="text-center">
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mb-2 sm:mb-4 flex items-center gap-2 justify-center">
                  <Globe size={10} /> Live Network
                </div>
                <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest">Global Access</div>
             </div>
             <div className="text-center">
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mb-2 sm:mb-4 flex items-center gap-2 justify-center">
                  <Cpu size={10} /> Neural Node
                </div>
                <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest">Authorized Only</div>
             </div>
          </div>
        </div>
      </main>
    </div>
  )
}
