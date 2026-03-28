"use client"

import React, { useState, useEffect, useMemo } from 'react'
import { 
  Rocket, 
  RotateCcw, 
  TrendingUp, 
  TrendingDown, 
  Zap,
  BarChart3,
  IndianRupee,
  Users,
  Target,
  ArrowUpRight,
  ShieldAlert
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// REAL-TIME INCUBATION ENGINE
interface FinancialState {
  capital: number
  users: number
  pmf: number // 0-100%
  valuation: number
  stage: number
  pnl: number // Real-time net flow (₹/sec)
  revenue: number
  burn: number
  isPlaying: boolean
  logs: string[]
}

const STAGES = ["Ideation", "Validation", "Scaling", "Market Dominance", "Unicorn"]

const StartupSimulatorGame: React.FC = () => {
  const [state, setState] = useState<FinancialState>({
    capital: 500000,
    users: 0,
    pmf: 30,
    valuation: 1000000,
    stage: 0,
    pnl: 0,
    revenue: 0,
    burn: 0,
    isPlaying: false,
    logs: ["Status: Operational. Awaiting Founder Initiation."]
  })

  // STRATEGIC FOUNDER ACTIONS
  const actions = [
    { id: "a1", name: "Product Development", cost: 65000, pmf: 12, val: 400000, desc: "Refine MVP features and tech stack." },
    { id: "a2", name: "Digital Marketing", cost: 120000, users: 4500, pmf: -3, val: 800000, desc: "Aggressive user acquisition campaign." },
    { id: "a3", name: "Team Expansion", cost: 180000, burn: 1500, pmf: 8, val: 1200000, desc: "Onboard core talent (Dev + Growth)." },
    { id: "a4", name: "Raise Funding", cost: 0, val: 5000000, risk: 0.45, desc: "Pitch to Venture Capital for fuel." }
  ]

  const formatINR = (v: number) => {
    const abs = Math.abs(v)
    if (abs >= 10000000) return `₹${(v/10000000).toFixed(2)}Cr`
    if (abs >= 100000) return `₹${(v/100000).toFixed(1)}L`
    if (abs >= 1000) return `₹${(v/1000).toFixed(1)}K`
    return `₹${Math.floor(v).toLocaleString()}`
  }

  const addLog = (m: string) => setState(s => ({ ...s, logs: [m, ...s.logs].slice(0, 5) }))

  const performAction = (action: any) => {
    if (!state.isPlaying || state.capital < action.cost) return
    
    const success = Math.random() > (action.risk || 0.1)
    if (success) {
      setState(s => ({
        ...s,
        capital: s.capital - (action.cost || 0),
        users: s.users + (action.users || 0),
        pmf: Math.min(100, s.pmf + (action.pmf || 0)),
        valuation: s.valuation + (action.val || 0),
        burn: s.burn + (action.burn || 0),
        stage: s.valuation > (s.stage + 1) * 7500000 ? Math.min(4, s.stage + 1) : s.stage
      }))
      addLog(`[SUCCESS] Registered: ${action.name}`)
    } else {
      setState(s => ({ ...s, capital: s.capital - (action.cost || 0) }))
      addLog(`[FAIL] Resources depleted on ${action.name}.`)
    }
  }

  // REAL-TIME ENGINE
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (state.isPlaying) {
      timer = setInterval(() => {
        setState(s => {
          // Accurate Real-time Calculation
          const baseBurn = 3500 * (s.stage + 1)
          const totalBurn = baseBurn + s.burn + (s.users * 1.5) // Infra cost per user
          const revPerUser = (s.pmf / 100) * 25 // ARPU influenced by PMF
          const totalRev = s.users * revPerUser
          const netFlow = totalRev - totalBurn
          
          if (s.capital + (netFlow / 10) <= 0) {
            addLog("Bankruptcy: Fund depletion. Shutdown.")
            return { ...s, isPlaying: false, capital: 0 }
          }

          return { 
            ...s, 
            capital: s.capital + (netFlow / 10), // Update every 100ms cycle
            revenue: totalRev,
            burn: totalBurn,
            pnl: netFlow,
            valuation: s.valuation + (netFlow * 0.5) + (s.users * 10)
          }
        })
      }, 100) // 100ms for "Real-time" feel
    }
    return () => clearInterval(timer)
  }, [state.isPlaying])

  return (
    <div className="w-full max-w-6xl mx-auto bg-[#050505] p-6 md:p-14 rounded-[2.5rem] md:rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full" />
      
      {/* HEADER: REAL-TIME P&L */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 md:gap-10 mb-10 md:mb-16 relative z-10">
        <div className="flex flex-col gap-2">
           <div className="flex items-center gap-4">
             <div className="p-3 md:p-4 bg-indigo-600 rounded-2xl md:rounded-3xl shadow-[0_0_30px_rgba(79,70,229,0.2)]">
               <Rocket className="text-white w-6 h-6 md:w-10 md:h-10" />
             </div>
             <div>
               <h1 className="text-xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none">E-CELL <span className="text-indigo-500">FOUNDER</span></h1>
               <p className="text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-gray-500 mt-1">{STAGES[state.stage]} Operating Level</p>
             </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 bg-black/40 px-8 py-5 md:px-12 md:py-7 rounded-3xl md:rounded-[2.5rem] border border-white/10 backdrop-blur-xl w-full md:w-auto">
           <div className="text-center group flex md:flex-col items-center justify-between md:justify-center gap-4 md:gap-0">
              <span className="text-[9px] font-black text-gray-500 uppercase block md:mb-1">Valuation</span>
              <div className="text-xl md:text-3xl font-mono font-black text-indigo-400">{formatINR(state.valuation)}</div>
           </div>
           <div className="w-full md:w-[1px] h-[1px] md:h-10 bg-white/10" />
           <div className="text-center relative flex md:flex-col items-center justify-between md:justify-center gap-4 md:gap-0">
              <span className="text-[9px] font-black text-gray-500 uppercase block md:mb-1">Seed Capital</span>
              <div className="text-xl md:text-3xl font-mono font-black text-white">{formatINR(state.capital)}</div>
              <div className={`text-[9px] md:text-[10px] font-black ${state.pnl >= 0 ? 'text-emerald-500' : 'text-rose-500'} md:absolute md:-bottom-6 md:left-0 md:right-0`}>
                {state.pnl >= 0 ? '+' : ''}{formatINR(state.pnl)} / sec
              </div>
           </div>
        </div>

        <div className="flex gap-4">
           <button onClick={() => setState({...state, capital: 500000, users: 0, pmf: 30, valuation: 1000000, stage: 0, isPlaying: false, logs: ["System Reset."]} )} className="p-5 bg-white/5 rounded-3xl hover:bg-white/10 transition-all border border-white/5">
             <RotateCcw className="text-gray-400" />
           </button>
           <button 
             onClick={() => setState(s => ({...s, isPlaying: !s.isPlaying}))}
             className={`px-12 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest transition-all shadow-2xl ${
               state.isPlaying ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' : 'bg-indigo-600 text-white'
             }`}
           >
             {state.isPlaying ? 'END SESSION' : 'INITIATE OPS'}
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 relative z-10">
        
        {/* P&L STATEMENT MINI */}
        <div className="xl:col-span-4 flex flex-col gap-8">
           <div className="bg-white/5 p-10 rounded-[3rem] border border-white/5 shadow-inner">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xs font-black uppercase text-gray-500 tracking-widest">P&L Breakdown</h3>
                <BarChart3 size={16} className="text-indigo-500" />
              </div>

              <div className="space-y-8">
                <div className="flex justify-between items-center group">
                   <div className="flex items-center gap-3">
                      <TrendingUp size={16} className="text-emerald-500" />
                      <span className="text-sm font-bold text-gray-400">Monthly Revenue</span>
                   </div>
                   <span className="text-sm font-black text-emerald-500">{formatINR(state.revenue)}</span>
                </div>
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-3">
                      <TrendingDown size={16} className="text-rose-500" />
                      <span className="text-sm font-bold text-gray-400">Operating Burn</span>
                   </div>
                   <span className="text-sm font-black text-rose-500">-{formatINR(state.burn)}</span>
                </div>
                <div className="h-[1px] bg-white/5" />
                <div className="flex justify-between items-center pt-2">
                   <span className="text-xs font-black uppercase text-white">Net Income</span>
                   <span className={`text-xl font-black ${state.pnl >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                     {formatINR(state.pnl)}
                   </span>
                </div>
              </div>
           </div>

           <div className="bg-indigo-600/5 p-10 rounded-[3.5rem] border border-indigo-500/20 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform"><Target size={80}/></div>
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-1">Operational Stage</span>
              <h4 className="text-2xl font-black text-white italic tracking-tighter uppercase">{STAGES[state.stage]}</h4>
           </div>
        </div>

        {/* STRATEGIC ACTIONS */}
        <div className="xl:col-span-8 flex flex-col gap-10">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {actions.map(a => (
                <motion.div 
                  key={a.id}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => performAction(a)}
                  className={`p-8 rounded-[3rem] border transition-all cursor-pointer relative overflow-hidden group ${
                    state.isPlaying && state.capital >= a.cost 
                      ? 'bg-white/5 border-white/10 hover:border-indigo-500/60' 
                      : 'opacity-30 pointer-events-none'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-black tracking-tight">{a.name}</h3>
                      <div className="p-2 bg-indigo-500/10 rounded-xl"><Zap size={14} className="text-indigo-500" /></div>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-medium mb-12 italic">"{a.desc}"</p>
                    <div className="flex justify-between items-end border-t border-white/5 pt-6">
                       <div>
                         <span className="text-[9px] font-black text-gray-600 uppercase block mb-1">Investment</span>
                         <span className="text-lg font-black text-white">{formatINR(a.cost || 0)}</span>
                       </div>
                       <div className="text-right">
                         <span className="text-[9px] font-black text-indigo-400 uppercase block mb-1">Impact</span>
                         <ArrowUpRight size={16} className="text-indigo-500 ml-auto" />
                       </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-500 group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
           </div>

           {/* FEED / STATUS */}
           <div className="bg-black/60 p-10 rounded-[3rem] border border-white/10 flex flex-col gap-8 flex-1">
              <div className="flex items-center gap-4">
                 <ShieldAlert size={16} className="text-indigo-400" />
                 <span className="text-xs font-black uppercase text-gray-400 tracking-[0.2em]">Live System Feed</span>
              </div>
              <div className="flex flex-col gap-4 overflow-hidden">
                <AnimatePresence mode="popLayout">
                  {state.logs.map((log, i) => (
                    <motion.p 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }}
                      className={`text-xs font-bold leading-none ${i === 0 ? 'text-indigo-400' : 'text-gray-700'}`}
                    >
                      {log}
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
