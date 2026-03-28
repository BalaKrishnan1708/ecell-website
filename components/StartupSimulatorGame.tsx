"use client"

import React, { useState, useEffect } from 'react'
import { 
  RotateCcw, 
  TrendingUp, 
  TrendingDown, 
  ShieldAlert,
  ArrowUpRight,
  ChevronRight,
  Database,
  Users,
  Briefcase
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// E-CELL SVCE: MINIMALIST FOUNDER TERMINAL (HARDCORE)
interface FinancialState {
  capital: number
  pmf: number
  users: number
  monthlyBurn: number
  revenue: number
  runway: number // Months left
  isPlaying: boolean
  logs: string[]
}

const StartupSimulatorGame: React.FC = () => {
  const [state, setState] = useState<FinancialState>({
    capital: 1000000, // ₹10L Seed
    pmf: 15,
    users: 0,
    monthlyBurn: 60000, // ₹60K base burn
    revenue: 0,
    runway: 16.6,
    isPlaying: false,
    logs: ["SYSTEM INITIALIZED. SEED: ₹10.0L. EST. RUNWAY: 16 MONTHS."]
  })

  // HARDCORE TASKS: High Cost, High Risk, Real Consequence
  const tasks = [
    { id: "t1", name: "BUILD V1.0 PLATFORM", cost: 350000, pmf: 30, burn: 20000, risk: 0.35, desc: "Engineering core product infrastructure." },
    { id: "t2", name: "MARKET ALPHA LAUNCH", cost: 150000, users: 4000, pmf: 5, risk: 0.25, desc: "Localized launch strategies." },
    { id: "t3", name: "ONBOARD OPS TEAM", cost: 200000, pmf: 10, burn: 80000, risk: 0.15, desc: "Scale human execution capabilities." },
    { id: "t4", name: "SERIES A PITCH", cost: 0, capital: 15000000, pmf: 10, risk: 0.85, desc: "Institutional VC round. Extremely high risk." }
  ]

  const formatINR = (v: number) => {
    const abs = Math.abs(v)
    if (abs >= 10000000) return `₹${(v/10000000).toFixed(2)}Cr`
    if (abs >= 100000) return `₹${(v/100000).toFixed(1)}L`
    return `₹${v.toLocaleString()}`
  }

  const addLog = (m: string) => setState(s => ({ ...s, logs: [m, ...s.logs].slice(0, 5) }))

  const executeTask = (t: any) => {
    if (!state.isPlaying || (t.cost > 0 && state.capital < t.cost)) return
    
    // Risk check: PMF reduces risk slightly
    const actualRisk = Math.max(0.1, t.risk - (state.pmf / 300))
    const success = Math.random() > actualRisk
    
    if (success) {
      setState(s => ({
        ...s,
        capital: s.capital - (t.cost || 0) + (t.capital || 0),
        pmf: Math.min(100, s.pmf + (t.pmf || 0)),
        users: s.users + (t.users || 0),
        monthlyBurn: s.monthlyBurn + (t.burn || 0)
      }))
      addLog(`[SUCCESS] ${t.name} COMPLETED.`)
    } else {
      setState(s => ({ ...s, capital: s.capital - (t.cost || 0) }))
      addLog(`[FAIL] ${t.name} REJECTED. CAPITAL LOST.`)
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (state.isPlaying) {
      timer = setInterval(() => {
        setState(s => {
          const rev = s.users * (s.pmf / 100) * 120 
          const netMonthly = rev - s.monthlyBurn
          const net100ms = netMonthly / 300 
          
          if (s.capital + net100ms <= 0) {
            return { ...s, isPlaying: false, capital: 0, logs: ["LIQUIDITY EXHAUSTED. BANKRUPTCY DECLARED.", ...s.logs] }
          }

          return { 
            ...s, 
            capital: s.capital + net100ms,
            revenue: rev,
            runway: s.capital / Math.max(1, Math.abs(netMonthly))
          }
        })
      }, 100)
    }
    return () => clearInterval(timer)
  }, [state.isPlaying])

  return (
    <div className="w-full max-w-5xl mx-auto bg-black p-6 md:p-12 border border-white/10 rounded-2xl shadow-2xl font-mono text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-1 bg-indigo-600/30 opacity-50" />
      
      {/* MINIMAL HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 relative z-10">
        <div>
           <div className="flex items-center gap-3 mb-2">
              <Database size={16} className="text-indigo-500" />
              <h1 className="text-sm font-black tracking-[0.4em] uppercase opacity-60">Founder Terminal v1.0</h1>
           </div>
           <div className="text-2xl font-black uppercase text-white tracking-tighter">FINANCIAL ENGINE // <span className="text-indigo-500">ACTIVE</span></div>
        </div>

        <div className="flex gap-4">
           <button onClick={() => setState({capital: 1000000, pmf: 15, users: 0, monthlyBurn: 60000, revenue: 0, runway: 16.6, isPlaying: false, logs: ["RESET SEQUENCE INITIATED."]} )} className="p-3 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
             <RotateCcw size={16} className="opacity-50" />
           </button>
           <button 
             onClick={() => setState(s => ({...s, isPlaying: !s.isPlaying}))}
             className={`px-10 py-3 rounded-lg font-black text-[10px] uppercase tracking-[0.2em] transition-all border ${
               state.isPlaying ? 'border-rose-500/50 text-rose-500' : 'bg-white text-black hover:bg-gray-200'
             }`}
           >
             {state.isPlaying ? 'HALT SIMULATION' : 'INITIATE RUNWAY'}
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* CORE STATS (MINIMALIST) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
           <div className="bg-white/5 p-8 border border-white/10 rounded-xl space-y-10">
              <div className="space-y-2">
                 <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Liquid Reserves</span>
                 <div className="text-4xl font-black tabular-nums">{formatINR(state.capital)}</div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
                 <div className="space-y-1">
                    <span className="text-[9px] font-bold text-gray-600 uppercase">Est. Runway</span>
                    <div className="text-lg font-black">{state.runway.toFixed(1)} Months</div>
                 </div>
                 <div className="space-y-1">
                    <span className="text-[9px] font-bold text-gray-600 uppercase">Product Fit</span>
                    <div className="text-lg font-black">{state.pmf}%</div>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-6">
                 <div className="space-y-1">
                    <span className="text-[9px] font-bold text-gray-600 uppercase">Monthly Burn</span>
                    <div className="text-lg font-black text-rose-500">-{formatINR(state.monthlyBurn)}</div>
                 </div>
                 <div className="space-y-1">
                    <span className="text-[9px] font-bold text-gray-600 uppercase">Monthly Rev</span>
                    <div className="text-lg font-black text-emerald-500">+{formatINR(state.revenue)}</div>
                 </div>
              </div>
           </div>

           {/* LOGS */}
           <div className="bg-black border border-white/10 p-6 rounded-xl space-y-4 h-44 overflow-hidden">
              <div className="flex items-center gap-2 opacity-30">
                 <ShieldAlert size={12} />
                 <span className="text-[9px] font-bold uppercase tracking-widest">System Logs</span>
              </div>
              <div className="space-y-2">
                <AnimatePresence mode="popLayout">
                  {state.logs.map((log, i) => (
                    <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className={`text-[11px] leading-tight ${i === 0 ? 'text-indigo-400 font-bold' : 'text-gray-700'}`}>
                      <span className="mr-3 opacity-20">{i+1}.</span> {log}
                    </motion.p>
                  ))}
                </AnimatePresence>
              </div>
           </div>
        </div>

        {/* DECISION TERMINAL */}
        <div className="lg:col-span-7 space-y-4">
           {tasks.map(t => (
             <motion.div 
               key={t.id}
               onClick={() => executeTask(t)}
               className={`p-6 border rounded-xl transition-all cursor-pointer group flex items-center justify-between ${
                 state.isPlaying && (t.cost === 0 || state.capital >= t.cost) 
                   ? 'bg-black border-white/10 hover:border-indigo-500' 
                   : 'opacity-10 pointer-events-none'
               }`}
             >
                <div className="space-y-1">
                   <h3 className="text-sm font-black uppercase text-white tracking-widest">{t.name}</h3>
                   <p className="text-[10px] text-gray-600 italic font-medium">{t.desc}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                   <span className="text-[11px] font-black tabular-nums">{t.cost > 0 ? formatINR(t.cost) : 'PILOT'}</span>
                   <div className="flex items-center gap-2 text-[9px] font-bold text-indigo-400 opacity-60">
                      EXECUTE <ArrowUpRight size={12} />
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

      </div>
    </div>
  )
}

export default StartupSimulatorGame
