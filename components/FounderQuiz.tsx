"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight, 
  Award, 
  Brain, 
  Flame, 
  Target, 
  Users, 
  TrendingUp,
  ChevronLeft,
  Crown,
  BookOpen
} from 'lucide-react'
import Link from 'next/link'

interface Question {
  id: number
  category: string
  question: string
  options: {
    text: string
    score: number // 1 to 4
    feedback: string
  }[]
}

const QUIZ_QUESTIONS: Question[] = [
  // Category 1: Mindset & Risk Resilience
  {
    id: 1,
    category: "Mindset & Resilience",
    question: "How do you react when a major project or prototype fails completely?",
    options: [
      { text: "Analyze root causes immediately, pivot strategy, and restart next day.", score: 4, feedback: "Top founder resilience!" },
      { text: "Take a few days to evaluate feedback before making adjustments.", score: 3, feedback: "Good thoughtful approach." },
      { text: "Feel discouraged and wait for team guidance before trying again.", score: 2, feedback: "Build more independent resilience." },
      { text: "Consider dropping the idea and switching to something safe.", score: 1, feedback: "Startups require perseverance." }
    ]
  },
  {
    id: 2,
    category: "Mindset & Resilience",
    question: "What motivates you most to start a venture?",
    options: [
      { text: "Solving a deep, systemic problem that impacts thousands of lives.", score: 4, feedback: "Mission-driven mindset." },
      { text: "Building a scalable product and achieving financial independence.", score: 3, feedback: "Strong practical motivation." },
      { text: "Gaining prestige, recognition, and founder title.", score: 2, feedback: "Title is temporary, impact lasts." },
      { text: "Following current startup trends and hype.", score: 1, feedback: "Focus on real problems over hype." }
    ]
  },
  {
    id: 3,
    category: "Mindset & Resilience",
    question: "How comfortable are you making high-stakes decisions with 60% information?",
    options: [
      { text: "Extremely comfortable; bias for action over analysis paralysis.", score: 4, feedback: "Essential speed-over-perfection!" },
      { text: "Comfortable if I can consult key mentors first.", score: 3, feedback: "Balanced decision style." },
      { text: "Uncomfortable; I prefer 90%+ data before deciding.", score: 2, feedback: "Speed is critical in early startups." },
      { text: "Avoid making decisions until certainty is guaranteed.", score: 1, feedback: "Risk avoidance stalls growth." }
    ]
  },
  {
    id: 4,
    category: "Mindset & Resilience",
    question: "How do you handle negative feedback from potential users?",
    options: [
      { text: "Treat it as gold dust; actively seek criticism to refine the product.", score: 4, feedback: "Growth mindset master!" },
      { text: "Filter out emotional feedback and fix valid technical bugs.", score: 3, feedback: "Pragmatic filter." },
      { text: "Defend my original design because users don't know what they want.", score: 2, feedback: "Listen to user signals." },
      { text: "Take it personally and get demotivated.", score: 1, feedback: "Feedback is a gift." }
    ]
  },
  {
    id: 5,
    category: "Mindset & Resilience",
    question: "Are you willing to work 60+ hours a week during the early launch stage?",
    options: [
      { text: "Yes, fully committed to doing whatever it takes to succeed.", score: 4, feedback: "Unstoppable drive!" },
      { text: "Yes, but with scheduled rest to avoid burnout.", score: 3, feedback: "Sustainable founder pace." },
      { text: "Only if required for short hackathons or deadlines.", score: 2, feedback: "Early stages demand intensity." },
      { text: "No, strict 9-to-5 work balance only.", score: 1, feedback: "Startup founding is intense." }
    ]
  },

  // Category 2: Problem Discovery & Customer Validation
  {
    id: 6,
    category: "Problem Discovery",
    question: "How did you discover your startup idea?",
    options: [
      { text: "Experienced the pain point firsthand & interviewed 30+ affected users.", score: 4, feedback: "Deep customer empathy!" },
      { text: "Spoke with industry experts and identified a clear market inefficiency.", score: 3, feedback: "Solid market validation." },
      { text: "Brainstormed ideas in a weekend group hackathon.", score: 2, feedback: "Validate with real users next." },
      { text: "Thought of a cool tech feature and looking for a problem to solve.", score: 1, feedback: "Find problem first, then tech." }
    ]
  },
  {
    id: 7,
    category: "Problem Discovery",
    question: "How many target customers have you interviewed in-depth?",
    options: [
      { text: "50+ detailed qualitative interviews conducted.", score: 4, feedback: "Rigorous customer discovery!" },
      { text: "15 to 30 interviews with structured notes.", score: 3, feedback: "Good baseline validation." },
      { text: "5 to 10 friends and classmates.", score: 2, feedback: "Expand beyond immediate circle." },
      { text: "0 interviews yet; relying on online research.", score: 1, feedback: "Get out of the building!" }
    ]
  },
  {
    id: 8,
    category: "Problem Discovery",
    question: "Are users currently spending money or time trying to solve this problem?",
    options: [
      { text: "Yes, using clunky workarounds or paying expensive competitors.", score: 4, feedback: "Proven urgent demand!" },
      { text: "Yes, spending considerable time manually doing it.", score: 3, feedback: "Strong pain point." },
      { text: "Somewhat, but it's more a 'nice-to-have' than a 'must-have'.", score: 2, feedback: "Focus on pain vs gain." },
      { text: "Not really, but they will love it once they see it.", score: 1, feedback: "Dangerous assumption." }
    ]
  },
  {
    id: 9,
    category: "Problem Discovery",
    question: "What is your target market size (TAM)?",
    options: [
      { text: "Clearly calculated bottom-up TAM exceeding ₹100Cr+.", score: 4, feedback: "Venture scale market!" },
      { text: "Defined niche market expanding rapidly year-over-year.", score: 3, feedback: "Great beachhead strategy." },
      { text: "Vague estimate based on general internet reports.", score: 2, feedback: "Calculate bottom-up TAM." },
      { text: "Haven't estimated market size yet.", score: 1, feedback: "Define your market scope." }
    ]
  },
  {
    id: 10,
    category: "Problem Discovery",
    question: "Who is your primary buyer persona?",
    options: [
      { text: "Laser-focused profile with specific role, budget, and decision power.", score: 4, feedback: "Sharp target targeting!" },
      { text: "General demographic group (e.g. engineering students in Chennai).", score: 3, feedback: "Narrow down further." },
      { text: "Anyone who uses a smartphone.", score: 2, feedback: "Targeting everyone = targeting no one." },
      { text: "Haven't defined a buyer persona yet.", score: 1, feedback: "Identify target user first." }
    ]
  },

  // Category 3: Product Strategy & Innovation
  {
    id: 11,
    category: "Product Strategy",
    question: "What is your strategy for building your Minimum Viable Product (MVP)?",
    options: [
      { text: "Build minimal core feature in 3-4 weeks & ship to early testers.", score: 4, feedback: "Speed to market champion!" },
      { text: "Build a no-code prototype or landing page to pre-sell.", score: 3, feedback: "Smart lean approach." },
      { text: "Spend 6 months polishing all features before public release.", score: 2, feedback: "Ship faster to learn faster." },
      { text: "Wait for major funding before starting product development.", score: 1, feedback: "Build MVP first, funding follows." }
    ]
  },
  {
    id: 12,
    category: "Product Strategy",
    question: "What is your startup's core 'Unfair Advantage' or Moat?",
    options: [
      { text: "Proprietary IP, network effects, or deep domain expertise.", score: 4, feedback: "Strong defensibility!" },
      { text: "Significantly faster execution & 10x better UX than existing tools.", score: 3, feedback: "Competitive speed edge." },
      { text: "Lower pricing than competitors.", score: 2, feedback: "Price is a weak moat." },
      { text: "No direct competition exists anywhere.", score: 1, feedback: "No competition usually means no market." }
    ]
  },
  {
    id: 13,
    category: "Product Strategy",
    question: "How do you track product usage and health?",
    options: [
      { text: "Obsess over Retention Rate, Cohort Analysis, & Daily Active Users.", score: 4, feedback: "Data-driven founder!" },
      { text: "Track total registered users and monthly signups.", score: 3, feedback: "Focus on retention next." },
      { text: "Look at website page views & social media likes.", score: 2, feedback: "Avoid vanity metrics." },
      { text: "Don't track product analytics yet.", score: 1, feedback: "Instrument analytics early." }
    ]
  },
  {
    id: 14,
    category: "Product Strategy",
    question: "How do you handle feature requests from early adopters?",
    options: [
      { text: "Prioritize features that align with core vision & recurring user pain.", score: 4, feedback: "Strategic product lead!" },
      { text: "Build features requested by the highest paying customers.", score: 3, feedback: "Good commercial focus." },
      { text: "Try to build every feature requested by every user.", score: 2, feedback: "Feature bloat risk." },
      { text: "Ignore requests and stick 100% to original plan.", score: 1, feedback: "Listen to product signals." }
    ]
  },
  {
    id: 15,
    category: "Product Strategy",
    question: "How tech-enabled is your core solution?",
    options: [
      { text: "Custom software/hardware architecture built for scale.", score: 4, feedback: "Scalable tech engine!" },
      { text: "Leverages API integrations and low-code automated workflows.", score: 3, feedback: "Efficient tech stack." },
      { text: "Manual operations assisted by standard spreadsheets.", score: 2, feedback: "Automate manual tasks." },
      { text: "Non-scalable offline process.", score: 1, feedback: "Explore digital leverage." }
    ]
  },

  // Category 4: Team & Execution
  {
    id: 16,
    category: "Team & Execution",
    question: "How is your founding team structured?",
    options: [
      { text: "Complementary skill set (Hacker, Hipster/Designer, Hustler).", score: 4, feedback: "Balanced dream team!" },
      { text: "Technical co-founders with shared vision and clear roles.", score: 3, feedback: "Strong technical core." },
      { text: "Solo founder looking for co-founders.", score: 2, feedback: "Recruit complementary leads." },
      { text: "Friends working together without defined responsibilities.", score: 1, feedback: "Define equity & roles." }
    ]
  },
  {
    id: 17,
    category: "Team & Execution",
    question: "Have you agreed on founder equity vesting and governance?",
    options: [
      { text: "Yes, formal 4-year vesting schedule with 1-year cliff.", score: 4, feedback: "Institutional standard!" },
      { text: "Verbal agreement on split based on future contributions.", score: 3, feedback: "Formalize in writing soon." },
      { text: "Equal 50/50 split with no vesting schedule.", score: 2, feedback: "Vesting protects the venture." },
      { text: "Haven't discussed equity yet.", score: 1, feedback: "Discuss equity early." }
    ]
  },
  {
    id: 18,
    category: "Team & Execution",
    question: "How do you handle internal team disagreements?",
    options: [
      { text: "Data-driven debate followed by 'Disagree & Commit' policy.", score: 4, feedback: "High-performance culture!" },
      { text: "Vote and majority decision rules.", score: 3, feedback: "Democratic approach." },
      { text: "Leader makes final call regardless of feedback.", score: 2, feedback: "Encourage open input." },
      { text: "Avoid confrontation and delay resolving conflicts.", score: 1, feedback: "Resolve friction fast." }
    ]
  },
  {
    id: 19,
    category: "Team & Execution",
    question: "How effectively do you delegate non-core tasks?",
    options: [
      { text: "Empower team leads with clear ownership and KPIs.", score: 4, feedback: "Scalable leadership!" },
      { text: "Delegate tasks but review all work before submission.", score: 3, feedback: "Good quality oversight." },
      { text: "Micromanage every detail myself.", score: 2, feedback: "Delegation breeds growth." },
      { text: "Do everything solo because it's faster.", score: 1, feedback: "You can't scale alone." }
    ]
  },
  {
    id: 20,
    category: "Team & Execution",
    question: "What is your weekly execution rhythm?",
    options: [
      { text: "Weekly sprints, Monday goals, & Friday demo ship days.", score: 4, feedback: "Agile execution machine!" },
      { text: "Regular bi-weekly checkins and status meetings.", score: 3, feedback: "Steady momentum." },
      { text: "Ad-hoc meetings whenever urgent issues pop up.", score: 2, feedback: "Implement structured sprints." },
      { text: "No regular sync meetings.", score: 1, feedback: "Establish team cadence." }
    ]
  },

  // Category 5: Financial Literacy & Scaling
  {
    id: 21,
    category: "Financial Literacy",
    question: "What is your business monetization model?",
    options: [
      { text: "Validated pricing strategy (Subscription, SaaS, Transaction fee, Margin).", score: 4, feedback: "Clear revenue engine!" },
      { text: "Freemium model with paid premium upgrades planned.", score: 3, feedback: "Test conversion rates." },
      { text: "Ad-based revenue after reaching 100K users.", score: 2, feedback: "Ad models require massive scale." },
      { text: "Figure out monetization later after getting users.", score: 1, feedback: "Validate willingness to pay." }
    ]
  },

  {
    id: 22,
    category: "Financial Literacy",
    question: "Do you know your Unit Economics (LTV vs CAC)?",
    options: [
      { text: "Yes, projected Customer Lifetime Value > 3x Customer Acquisition Cost.", score: 4, feedback: "Unicorn economics!" },
      { text: "Know estimated CAC and testing initial acquisition channels.", score: 3, feedback: "Solid financial start." },
      { text: "Know product cost but not marketing acquisition costs.", score: 2, feedback: "Factor in acquisition CAC." },
      { text: "Don't know what LTV or CAC means.", score: 1, feedback: "Master key startup metrics." }
    ]
  },
  {
    id: 23,
    category: "Financial Literacy",
    question: "How long is your runway with current cash reserves?",
    options: [
      { text: "12+ months of runway with clear milestone budget.", score: 4, feedback: "Healthy financial runway!" },
      { text: "6 to 12 months with disciplined burn rate.", score: 3, feedback: "Plan next round now." },
      { text: "Under 3 months of cash remaining.", score: 2, feedback: "Urgent capital extension needed!" },
      { text: "Don't track monthly burn rate or runway.", score: 1, feedback: "Track cash burn daily." }
    ]
  },
  {
    id: 24,
    category: "Financial Literacy",
    question: "What is your pitch deck & fundraising preparation status?",
    options: [
      { text: "Polished 10-slide deck, data room, and audited financials ready.", score: 4, feedback: "Investor ready!" },
      { text: "Drafted pitch deck tested with campus mentors.", score: 3, feedback: "Refine storytelling next." },
      { text: "Basic presentation slides explaining the idea.", score: 2, feedback: "Format into standard 10 slides." },
      { text: "No pitch deck created yet.", score: 1, feedback: "Create pitch deck." }
    ]
  },
  {
    id: 25,
    category: "Financial Literacy",
    question: "How active are you in the SVCE E-Cell ecosystem?",
    options: [
      { text: "Active participant in meetups, incubation programs, and hackathons.", score: 4, feedback: "E-Cell Power Member!" },
      { text: "Attended several workshops and guest speaker sessions.", score: 3, feedback: "Great involvement!" },
      { text: "Follow E-Cell social media and website updates.", score: 2, feedback: "Join weekly Thursday meetups!" },
      { text: "First time discovering E-Cell SVCE.", score: 1, feedback: "Welcome to the ecosystem!" }
    ]
  }
]

export default function FounderQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isCompleted, setIsCompleted] = useState(false)

  const currentQ = QUIZ_QUESTIONS[currentIdx]

  const handleSelect = (score: number) => {
    setSelectedOption(score)
  }

  const handleNext = () => {
    if (selectedOption === null) return
    const updatedAnswers = [...answers, selectedOption]
    setAnswers(updatedAnswers)
    setSelectedOption(null)

    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx(currentIdx + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1)
      setSelectedOption(answers[currentIdx - 1] || null)
      setAnswers(answers.slice(0, -1))
    }
  }

  const resetQuiz = () => {
    setCurrentIdx(0)
    setAnswers([])
    setSelectedOption(null)
    setIsCompleted(false)
  }

  // Calculate Scores
  const totalScore = answers.reduce((a, b) => a + b, 0)
  const maxPossible = QUIZ_QUESTIONS.length * 4
  const percentage = Math.round((totalScore / maxPossible) * 100)

  // Persona Assignment
  let persona = {
    title: "Visionary Serial Founder",
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    desc: "You possess top-tier entrepreneurial resilience, strong customer validation habits, and sharp financial clarity. You are ready to launch and scale a high-growth venture!",
    rec: "Apply directly for SVCE Incubation & MSME Hackathon Funding."
  }

  if (percentage < 55) {
    persona = {
      title: "Explorer Founder",
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      desc: "You have great passion and raw ideas, but need deeper customer validation, structured execution, and financial planning.",
      rec: "Join the SVCE E-Cell Beginner's Bootcamp & Thursday Community Meetups."
    }
  } else if (percentage < 75) {
    persona = {
      title: "Strategic Product Builder",
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
      desc: "You have strong product and execution skills! Focus on refining your pitch deck, unit economics, and customer acquisition channels.",
      rec: "Join the Builders Guild & Participate in Pitching League Competitions."
    }
  } else if (percentage < 88) {
    persona = {
      title: "Agile Execution Leader",
      color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      desc: "You are highly disciplined and execution-focused with great team leadership skills. Now is the time to raise seed capital and scale!",
      rec: "Apply for SVCE Startup Accelerator & Investor Pitch Sessions."
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl text-white font-sans relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      {!isCompleted ? (
        <div className="relative z-10">
          {/* Top Progress Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full uppercase tracking-widest inline-flex items-center gap-1.5 mb-2">
                <Sparkles size={12} /> {currentQ.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                "Are You Ready to Founder?" <span className="text-indigo-400">Diagnostic</span>
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <div className="w-48 h-2 bg-white/5 rounded-full overflow-hidden mt-2 border border-white/10">
                <div 
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Question Text */}
          <div className="mb-8">
            <h3 className="text-lg sm:text-2xl font-bold text-white leading-relaxed">
              {currentQ.id}. {currentQ.question}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-4 mb-10">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === option.score
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleSelect(option.score)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected 
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.3)]' 
                      : 'bg-white/5 border-white/10 hover:border-white/20 text-gray-300'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    isSelected ? 'border-indigo-400 bg-indigo-500 text-white' : 'border-white/20'
                  }`}>
                    {isSelected && <CheckCircle2 size={14} />}
                  </div>
                  <div className="text-sm sm:text-base font-medium leading-relaxed">
                    {option.text}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="px-6 py-3 bg-white/5 hover:bg-white/10 disabled:opacity-20 text-gray-300 font-bold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center gap-2"
            >
              <ChevronLeft size={16} /> Back
            </button>

            <button
              onClick={handleNext}
              disabled={selectedOption === null}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-lg flex items-center gap-2"
            >
              {currentIdx + 1 === QUIZ_QUESTIONS.length ? 'Calculate Readiness' : 'Next Question'} <ArrowRight size={16} />
            </button>
          </div>
        </div>
      ) : (
        /* Results Screen */
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 text-center space-y-8">
          <div className="inline-block p-4 bg-indigo-600/20 border border-indigo-500/30 rounded-3xl mb-2">
            <Crown className="w-12 h-12 text-yellow-400 mx-auto" />
          </div>

          <div>
            <span className={`inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border mb-4 ${persona.color}`}>
              {persona.title}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Readiness Score: <span className="text-indigo-400">{percentage}%</span>
            </h2>
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mt-1">
              Total Score: {totalScore} / {maxPossible} Points
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl max-w-2xl mx-auto text-left space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Brain size={18} className="text-indigo-400" /> Diagnostic Insights
            </h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
              {persona.desc}
            </p>
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-1">Recommended SVCE E-Cell Program:</span>
              <p className="text-white text-sm font-bold">{persona.rec}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={resetQuiz}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-2xl border border-white/10 transition-all flex items-center gap-2"
            >
              <RotateCcw size={16} /> Retake Diagnostic
            </button>
            <Link href="/incubation-center">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-xl flex items-center gap-2">
                Apply for Program <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  )
}
