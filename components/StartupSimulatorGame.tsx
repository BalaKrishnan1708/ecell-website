"use client"

import React, { useState, useEffect, useMemo } from 'react'
import { 
  Rocket, 
  RotateCcw, 
  TrendingUp, 
  TrendingDown, 
  Zap,
  BarChart3,
  Target,
  ArrowUpRight,
  ShieldAlert,
  Award,
  Cpu,
  Globe
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// E-CELL SVCE INCUBATION ENGINE
interface FinancialState {
  capital: number
  users: number
  pmf: number
  valuation: number
  level: number
  pnl: number 
  revenue: number
  burn: number
  isPlaying: boolean
  logs: string[]
}

const LEVELS = ["Ideation Stage", "E1 - Prototype", "EPL Finalist", "MSME Supported", "Incubated Unicorn"]

const StartupSimulatorGame: React.FC = () => {
  const [state, setState] = useState<FinancialState>({
    capital: 500000,
    users: 0,
    pmf: 25,
    valuation: 1000000,
    level: 0,
    pnl: 0,
    revenue: 0,
    burn: 4000,
    isPlaying: false,
    logs: ["Status: Operational. Founder, initialize your startup journey."]
  })

  // SVCE E-CELL SPECIFIC ACTIONS
  const actions = [
    { id: "a1", name: "MVP Demo Day", cost: 50000, pmf: 15, val: 500000, desc: "Showcase your prototype to SVCE faculty and mentors." },
    { id: "a2", name: "Campus Alpha", cost: 80000, users: 3000, pmf: -2, val: 600000, desc: "Launch to 1000+ students across SVCE departments." },
    { id: "a3", name: "Builders Guild Sync", cost: 120000, burn: 1000, pmf: 10, val: 1500000, desc: "Collaborate with Tech Head & developers for robust IP." },
    { id: "a4", name: "Pitch at EPL", cost: 0, val: 4000000, risk: 0.55, desc: "Entrepreneurship Pitching League final round." },
    { id: "a5", name: "MSME Grant", cost: 0, val: 2000000, capital: 1000000, risk: 0.7, desc: "Apply for the MSME Idea Hackathon 4.0 grant." }
  ]

  const formatINR = (v: number) => {
    const abs = Math.abs(v)
    if (abs >= 10000000) return `₹${(v/10000000).toFixed(2)}Cr`
    if (abs >= 100000) return `₹${(v/100000).toFixed(1)}L`
    if (abs >= 1000) return `₹${(v/1000).toFixed(1)}K`
    return `₹${Math.floor(v).toLocaleString()}`
  }

  const addLog = (m: string) => setState(s => ({ ...s, logs: [m, ...s.logs].slice(0, 5) }))

  const performAction = (a: any) => {
    if (!state.isPlaying || (a.cost > 0 && state.capital < a.cost)) return
    
    const success = Math.random() > (a.risk || 0.1)
    if (success) {
      setState(s => ({
        ...s,
        capital: s.capital - (a.cost || 0) + (a.capital || 0),
        users: s.users + (a.users || 0),
        pmf: Math.min(100, s.pmf + (a.pmf || 0)),
        valuation: s.valuation + (a.val || 0),
        burn: s.burn + (a.burn || 0),
        level: s.valuation > (s.level + 1) * 8000000 ? Math.min(4, s.level + 1) : s.level
      }))
      addLog(`[SUCCESS] ${a.name} achieved.`)
    } else {
      setState(s => ({ ...s, capital: Math.max(0, s.capital - (a.cost || 0)) }))
      addLog(`[REJECTED] ${a.name} attempt failed.`)
    }
  }

  // REAL-TIME INCUBATION LOGIC
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (state.isPlaying) {
      timer = setInterval(() => {
        setState(s => {
          const totalBurn = (5000 * (s.level + 1)) + s.burn + (s.users * 1.8)
          const totalRev = s.users * (s.pmf / 100) * 30 
          const net = totalRev - totalBurn
          
          if (s.capital + (net / 10) <= 0) {
            return { ...s, isPlaying: false, capital: 0, logs: ["Bankrupt: Operation failed. Contact E-Cell for feedback.", ...s.logs] }
          }

          return { 
            ...s, 
            capital: s.capital + (net / 10),
            revenue: totalRev,
            burn: totalBurn,
            pnl: net,
            valuation: s.valuation + (net * 0.4) + (s.users * 12)
          }
        })
      }, 100)
    }
    return () => clearInterval(timer)
  }, [state.isPlaying])

  return (
    <div className="w-full max-w-6xl mx-auto bg-[#050505] p-6 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border border-white/5 shadow-3xl relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 md:gap-10 mb-10 md:mb-16 relative z-10">
        <div className="flex flex-col gap-2">
           <div className="flex items-center gap-4">
             <div className="p-3 md:p-5 bg-indigo-600 rounded-2xl md:rounded-[2rem] shadow-[0_0_40px_rgba(79,70,229,0.3)]">
               <Cpu className="text-white w-6 md:w-10 h-6 md:h-10" />
             </div>
             <div>
               <h1 className="text-xl md:text-3xl font-black uppercase tracking-tighter text-white leading-none">SVCE <span className="text-indigo-500">FOUNDER STUDIO</span></h1>
               <p className="text-[7px] md:text-[9px] font-black tracking-[0.3em] uppercase text-gray-500 mt-2">{LEVELS[state.level]} Stage</p>
             </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 bg-white/[0.02] px-8 py-5 md:px-14 md:py-8 rounded-3xl md:rounded-[3rem] border border-white/10 backdrop-blur-2xl w-full md:w-auto">
           <div className="text-center group flex md:flex-col items-center justify-between md:justify-center gap-4 md:gap-0">
              <span className="text-[9px] font-black text-indigo-400 uppercase block md:mb-1">Market Valuation</span>
              <div className="text-xl md:text-3xl font-mono font-black text-white">{formatINR(state.valuation)}</div>
           </div>
           <div className="w-full md:w-[1px] h-[1px] md:h-10 bg-white/10" />
           <div className="text-center relative flex md:flex-col items-center justify-between md:justify-center gap-4 md:gap-0">
              <span className="text-[9px] font-black text-gray-500 uppercase block md:mb-1">Seed Capital</span>
              <div className="text-xl md:text-3xl font-mono font-black text-white">{formatINR(state.capital)}</div>
              <div className={`text-[8px] md:text-[10px] font-black ${state.pnl >= 0 ? 'text-emerald-500' : 'text-rose-500'} md:absolute md:-bottom-8 md:left-0 md:right-0 flex items-center justify-center gap-1`}>
                {state.pnl >= 0 ? <TrendingUp size={10}/> : <TrendingDown size={10}/>} {formatINR(state.pnl)}/sec
              </div>
           </div>
        </div>

        <div className="flex gap-4">
           <button onClick={() => setState({...state, capital: 500000, users: 0, pmf: 25, valuation: 1000000, level: 0, isPlaying: false, logs: ["Reset confirmed."]} )} className="p-4 md:p-6 bg-white/5 rounded-2xl md:rounded-3xl hover:bg-white/10 border border-white/5 text-gray-500 hover:text-white transition-all">
             <RotateCcw size={18} />
           </button>
           <button 
             onClick={() => setState(s => ({...s, isPlaying: !s.isPlaying}))}
             className={`px-10 py-4 md:px-14 md:py-6 rounded-2xl md:rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] transition-all shadow-2xl ${
               state.isPlaying ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' : 'bg-indigo-600 text-white hover:bg-indigo-500'
             }`}
           >
             {state.isPlaying ? 'HALT STUDIO' : 'START JOURNEY'}
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 md:gap-14 relative z-10">
        
        {/* P&L BREAKDOWN */}
        <div className="xl:col-span-4 flex flex-col gap-10">
           <div className="bg-white/5 p-10 rounded-[3rem] border border-white/5 shadow-2xl">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em]">Operating Status</h3>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                   <span className="text-[10px] font-black text-indigo-400">SYNCED</span>
                </div>
              </div>

              <div className="space-y-10">
                <div className="flex justify-between items-center group">
                   <div className="flex items-center gap-4">
                      <div className="p-2 bg-emerald-500/10 rounded-xl"><TrendingUp size={16} className="text-emerald-500" /></div>
                      <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Revenue Flow</span>
                   </div>
                   <span className="text-sm font-black text-emerald-500">{formatINR(state.revenue || 0)}</span>
                </div>
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-4">
                      <div className="p-2 bg-rose-500/10 rounded-xl"><TrendingDown size={16} className="text-rose-500" /></div>
                      <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">OpEx Burn</span>
                   </div>
                   <span className="text-sm font-black text-rose-500">-{formatINR(state.burn || 0)}</span>
                </div>
                <div className="h-[1px] bg-white/5 w-full" />
                <div className="flex justify-between items-center pt-2">
                   <span className="text-[10px] font-black uppercase text-white tracking-widest">Net Profit/Loss</span>
                   <span className={`text-xl font-black ${state.pnl >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                     {formatINR(state.pnl)}
                   </span>
                </div>
              </div>
           </div>

           <div className="bg-indigo-600/5 p-12 rounded-[3.5rem] border border-indigo-500/20 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform"><Award size={100}/></div>
              <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest block mb-1">E-Cell Milestone</span>
              <h4 className="text-xl md:text-2xl font-black text-white italic tracking-tighter uppercase">{LEVELS[state.level]}</h4>
              <div className="w-full h-1 bg-white/5 mt-6 rounded-full overflow-hidden">
                 <motion.div 
                   animate={{ width: `${(state.valuation / ((state.level + 1) * 8000000)) * 100}%` }} 
                   className="h-full bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                 />
              </div>
           </div>
        </div>

        {/* ACTIONS */}
        <div className="xl:col-span-8 flex flex-col gap-10">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {actions.map(a => (
                <motion.div 
                  key={a.id}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => performAction(a)}
                  className={`p-8 rounded-[2.5rem] border transition-all cursor-pointer relative overflow-hidden group ${
                    state.isPlaying && (a.cost === 0 || state.capital >= a.cost) 
                      ? 'bg-white/5 border-white/10 hover:border-indigo-500/60 shadow-xl' 
                      : 'opacity-30 pointer-events-none'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-black tracking-tighter uppercase">{a.name}</h3>
                      <div className="p-2 bg-indigo-500/10 rounded-xl"><Zap size={14} className="text-indigo-500" /></div>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-relaxed font-bold mb-12 italic">"{a.desc}"</p>
                    <div className="flex justify-between items-end border-t border-white/5 pt-6">
                       <div>
                         <span className="text-[8px] font-black text-gray-700 uppercase block mb-1">Investment</span>
                         <span className="text-lg font-black text-white">{formatINR(a.cost)}</span>
                       </div>
                       <div className="text-right">
                         <span className="text-[8px] font-black text-indigo-400 uppercase block mb-1">{a.risk ? `Risk: ${Math.floor(a.risk * 100)}%` : 'Direct Path'}</span>
                         <ArrowUpRight size={18} className="text-indigo-500 ml-auto" />
                       </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-500 group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
           </div>

           {/* SYSTEM LOG */}
           <div className="bg-black/60 p-10 rounded-[3rem] border border-white/10 flex flex-col gap-8 flex-1 min-h-[250px]">
              <div className="flex items-center gap-4">
                 <ShieldAlert size={16} className="text-indigo-400" />
                 <span className="text-[10px] font-black uppercase text-gray-500 tracking-[0.3em]">Command Terminal</span>
              </div>
              <div className="flex flex-col gap-5 overflow-hidden">
                <AnimatePresence mode="popLayout">
                  {state.logs.map((log, i) => (
                    <motion.p 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }} 
                      animate={{ opacity: 1, x: 0 }}
                      className={`text-[11px] font-black tracking-tight ${i === 0 ? 'text-indigo-400' : 'text-gray-800'}`}
                    >
                      <span className="mr-4 text-gray-900">[{state.level + 1}.{i}]</span> {log}
                    </motion.p>
                  ))}
                </AnimatePresence>
              </div>
           </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.05); border-radius: 20px; }
      `}</style>
    </div>
  )
}

export default StartupSimulatorGame
