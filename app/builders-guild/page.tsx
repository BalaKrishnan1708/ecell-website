"use client"
import { motion } from "framer-motion"
import { Code2, ArrowUpRight, Zap, Globe, Cpu } from "lucide-react"

export default function BuildersGuildPage() {
  const guildLink = "https://e-cell-builders-guild.vercel.app/"

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 font-sans overflow-hidden">
      {/* Background Matrix Grid */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#4f46e5_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[200px] rounded-full pointer-events-none" />
      
      <main className="container mx-auto px-6 py-32 md:py-48 relative z-10 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="p-5 bg-indigo-600 rounded-[2rem] shadow-[0_0_60px_rgba(79,70,229,0.4)]">
                <Code2 className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 leading-none">
              BUILDERS <span className="text-indigo-500">GUILD</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-bold leading-relaxed tracking-tight mb-16 italic">
              "The technical neural network of E-Cell SVCE. Access the internal ecosystem live."
            </p>

            <motion.a 
              href={guildLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-6 px-16 py-8 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm uppercase tracking-[0.4em] rounded-[2.5rem] transition-all shadow-[0_30px_100px_-20px_rgba(79,70,229,0.5)] group"
            >
              Enter Guild Ecosystem <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </motion.div>

          {/* Minimal Stats */}
          <div className="flex justify-center gap-12 pt-20 border-t border-white/5 opacity-40">
             <div className="text-center">
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mb-4 flex items-center gap-2 justify-center">
                  <Globe size={10} /> Live Network
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-widest">Global Access</div>
             </div>
             <div className="text-center">
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500 mb-4 flex items-center gap-2 justify-center">
                  <Cpu size={10} /> Neural Node
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-widest">Authorized Only</div>
             </div>
          </div>
        </div>
      </main>
    </div>
  )
}
