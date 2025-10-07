"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Lightbulb, 
  Target, 
  Zap,
  Trophy,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react'

interface GameState {
  money: number
  users: number
  satisfaction: number
  innovation: number
  isPlaying: boolean
  level: number
  score: number
  timeElapsed: number
  decisions: string[]
  achievements: string[]
  lastEvent: string
  eventCooldown: number
  gameHistory: {
    timestamp: number
    money: number
    users: number
    satisfaction: number
    innovation: number
    level: number
  }[]
  showAnalytics: boolean
}

interface Decision {
  id: number
  title: string
  description: string
  cost: number
  effect: {
    users: { min: number; max: number }
    satisfaction: { min: number; max: number }
    innovation: { min: number; max: number }
    money?: { min: number; max: number }
  }
  probability: number
  risk: number
}

const randomEvents = [
  {
    name: "GST Compliance Issue",
    probability: 0.03,
    effect: { users: -100, satisfaction: -10, innovation: 0, money: -250000 },
    message: "GST compliance issues are affecting your business."
  },
  {
    name: "Tata/Reliance Partnership",
    probability: 0.07,
    effect: { users: 80, satisfaction: 15, innovation: 20, money: 0 },
    message: "A potential partnership with a major Indian conglomerate emerged."
  },
  {
    name: "RBI Guidelines Update",
    probability: 0.05,
    effect: { users: 0, satisfaction: -5, innovation: 0, money: -100000 },
    message: "New RBI guidelines require compliance updates."
  },
  {
    name: "Startup India Recognition",
    probability: 0.04,
    effect: { users: 50, satisfaction: 25, innovation: 15, money: 500000 },
    message: "Your startup got recognized under Startup India scheme!"
  },
  {
    name: "Jio Partnership",
    probability: 0.03,
    effect: { users: 300, satisfaction: 30, innovation: 25, money: 0 },
    message: "Jio is interested in a strategic partnership!"
  },
  {
    name: "Data Localization Requirements",
    probability: 0.06,
    effect: { users: 0, satisfaction: -10, innovation: 0, money: -200000 },
    message: "New data localization requirements increase operational costs."
  },
  {
    name: "Flipkart/Amazon Listing",
    probability: 0.05,
    effect: { users: 120, satisfaction: 20, innovation: 10, money: 0 },
    message: "Your product got featured on major e-commerce platforms!"
  },
  {
    name: "Major Data Breach",
    probability: 0.04,
    effect: { users: -200, satisfaction: -40, innovation: -10, money: -500000 },
    message: "A major data breach has severely damaged your reputation and user trust."
  },
  {
    name: "Key Team Member Quits",
    probability: 0.06,
    effect: { users: -80, satisfaction: -25, innovation: -30, money: -100000 },
    message: "Your lead developer quit to join a competitor, taking critical knowledge with them."
  },
  {
    name: "Economic Recession",
    probability: 0.05,
    effect: { users: -150, satisfaction: -20, innovation: -15, money: -300000 },
    message: "Economic downturn has reduced consumer spending and investor confidence."
  },
  {
    name: "TechCrunch India Feature",
    probability: 0.06,
    effect: { users: 180, satisfaction: 25, innovation: 20, money: 0 },
    message: "Your startup was featured in TechCrunch India!"
  },
  {
    name: "Series A Funding Success",
    probability: 0.05,
    effect: { users: 0, satisfaction: 0, innovation: 0, money: 5000000 },
    message: "Your Series A funding round was successful!"
  }
]

const achievements = [
  { id: 1, name: "First Users", condition: (state: GameState) => state.users >= 100 },
  { id: 2, name: "High Satisfaction", condition: (state: GameState) => state.satisfaction >= 80 },
  { id: 3, name: "Innovation Leader", condition: (state: GameState) => state.innovation >= 90 },
  { id: 4, name: "Millionaire", condition: (state: GameState) => state.money >= 100000 },
  { id: 5, name: "Viral Growth", condition: (state: GameState) => state.users >= 1000 },
  { id: 6, name: "Perfect Score", condition: (state: GameState) => state.score >= 10000 },
  { id: 7, name: "Risk Taker", condition: (state: GameState) => state.decisions.filter(d => d.includes('Viral') || d.includes('Pivot')).length >= 3 },
  { id: 8, name: "Steady Growth", condition: (state: GameState) => state.users >= 500 && state.satisfaction >= 70 },
  { id: 9, name: "Tech Pioneer", condition: (state: GameState) => state.innovation >= 95 },
  { id: 10, name: "Market Leader", condition: (state: GameState) => state.users >= 2000 },
  { id: 11, name: "Crisis Survivor", condition: (state: GameState) => state.decisions.filter(d => d.includes('Crisis')).length >= 1 },
  { id: 12, name: "Strategic Master", condition: (state: GameState) => state.decisions.length >= 20 }
]

const StartupSimulatorGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    money: 500000, // Starting with ₹5,00,000
    users: 0,
    satisfaction: 50,
    innovation: 30,
    isPlaying: false,
    level: 1,
    score: 0,
    timeElapsed: 0,
    decisions: [],
    achievements: [],
    lastEvent: '',
    eventCooldown: 0,
    gameHistory: [],
    showAnalytics: false
  })

  const getDecisionsForLevel = (level: number): Decision[] => {
    switch(level) {
      case 1:
        return [
    {
      id: 1,
      title: "Digital Marketing Campaign",
      description: "Invest in social media and Google ads to attract users",
      cost: 50000,
      effect: { users: { min: 30, max: 70 }, satisfaction: { min: 5, max: 15 }, innovation: { min: 2, max: 8 } },
      probability: 0.8,
      risk: 0.1
    },
    {
      id: 2,
      title: "Hire Full-Stack Developer",
      description: "Add a skilled developer to improve your product",
      cost: 120000,
      effect: { users: { min: 15, max: 35 }, satisfaction: { min: 15, max: 25 }, innovation: { min: 25, max: 40 } },
      probability: 0.9,
            risk: 0.03
    },
    {
      id: 3,
      title: "User Research & Feedback",
      description: "Conduct user research to improve satisfaction",
      cost: 25000,
      effect: { users: { min: 5, max: 20 }, satisfaction: { min: 20, max: 35 }, innovation: { min: 10, max: 25 } },
      probability: 0.95,
      risk: 0.02
    },
    {
      id: 4,
      title: "Product Feature Update",
      description: "Add new features to increase innovation",
      cost: 75000,
      effect: { users: { min: 20, max: 45 }, satisfaction: { min: 10, max: 25 }, innovation: { min: 20, max: 35 } },
      probability: 0.85,
            risk: 0.05
    },
    {
      id: 5,
      title: "Strategic Partnership",
      description: "Form partnership with Indian companies",
      cost: 100000,
      effect: { users: { min: 60, max: 120 }, satisfaction: { min: 0, max: 10 }, innovation: { min: 5, max: 15 } },
      probability: 0.6,
      risk: 0.2
    },
    {
      id: 6,
      title: "Product Pivot",
      description: "Major product direction change",
      cost: 150000,
      effect: { users: { min: -30, max: 10 }, satisfaction: { min: -15, max: 5 }, innovation: { min: 35, max: 55 } },
      probability: 0.4,
      risk: 0.4
           }
        ]
      
      case 2:
        return [
          {
            id: 1,
            title: "AI/ML Integration",
            description: "Integrate artificial intelligence features",
            cost: 300000,
            effect: { users: { min: 40, max: 80 }, satisfaction: { min: 25, max: 45 }, innovation: { min: 40, max: 60 } },
            probability: 0.7,
            risk: 0.15
          },
          {
            id: 2,
            title: "Customer Support Team",
            description: "Build dedicated customer support",
            cost: 200000,
            effect: { users: { min: 20, max: 50 }, satisfaction: { min: 40, max: 60 }, innovation: { min: 10, max: 20 } },
            probability: 0.9,
            risk: 0.05
          },
          {
            id: 3,
            title: "Tier-2/3 City Expansion",
            description: "Expand to smaller Indian cities",
            cost: 400000,
            effect: { users: { min: 100, max: 200 }, satisfaction: { min: 15, max: 30 }, innovation: { min: 5, max: 15 } },
            probability: 0.75,
            risk: 0.1
          },
          {
            id: 4,
      title: "Viral Marketing Blitz",
      description: "High-risk, high-reward marketing strategy",
            cost: 500000,
            effect: { users: { min: 150, max: 400 }, satisfaction: { min: -10, max: 20 }, innovation: { min: 0, max: 10 } },
            probability: 0.3,
            risk: 0.5
          },
          {
            id: 5,
            title: "Enterprise Sales Team",
            description: "Build B2B sales capabilities",
            cost: 600000,
            effect: { users: { min: 30, max: 60 }, satisfaction: { min: 20, max: 35 }, innovation: { min: 15, max: 25 }, money: { min: 1000000, max: 2000000 } },
            probability: 0.65,
            risk: 0.25
          },
          {
            id: 6,
            title: "Platform Optimization",
            description: "Optimize for scale and performance",
            cost: 350000,
            effect: { users: { min: 50, max: 100 }, satisfaction: { min: 30, max: 45 }, innovation: { min: 25, max: 40 } },
            probability: 0.8,
            risk: 0.1
           }
        ]
      
      case 3:
        return [
          {
            id: 1,
            title: "International Expansion",
            description: "Expand to global markets",
            cost: 1000000,
            effect: { users: { min: 200, max: 500 }, satisfaction: { min: 10, max: 25 }, innovation: { min: 30, max: 50 } },
            probability: 0.5,
            risk: 0.4
          },
          {
            id: 2,
            title: "Acquire Competitor",
            description: "Acquire a smaller competitor",
            cost: 2000000,
            effect: { users: { min: 100, max: 200 }, satisfaction: { min: 20, max: 40 }, innovation: { min: 15, max: 30 }, money: { min: -500000, max: 1000000 } },
            probability: 0.4,
            risk: 0.6
          },
          {
            id: 3,
            title: "Complete Platform Rebuild",
            description: "Rebuild entire platform with modern tech",
            cost: 1500000,
            effect: { users: { min: -100, max: 50 }, satisfaction: { min: -20, max: 10 }, innovation: { min: 50, max: 80 } },
      probability: 0.3,
            risk: 0.7
          },
          {
            id: 4,
            title: "Massive Layoffs",
            description: "Cut costs by reducing team size significantly",
            cost: 200000,
            effect: { users: { min: -150, max: -50 }, satisfaction: { min: -50, max: -20 }, innovation: { min: -40, max: -10 } },
            probability: 0.8,
            risk: 0.3
          },
          {
            id: 5,
            title: "Desperate Funding Round",
            description: "Accept unfavorable terms to get emergency funding",
            cost: 100000,
            effect: { 
              users: { min: 0, max: 0 }, 
              satisfaction: { min: 0, max: 0 }, 
              innovation: { min: 0, max: 0 }, 
              money: { min: 2000000, max: 5000000 } 
            },
            probability: 0.6,
            risk: 0.8
          },
          {
            id: 6,
            title: "Pivot to Completely New Market",
            description: "Abandon current market and enter entirely new sector",
            cost: 1200000,
            effect: { users: { min: -300, max: 100 }, satisfaction: { min: -60, max: 20 }, innovation: { min: 10, max: 50 } },
            probability: 0.2,
            risk: 0.9
           }
        ]
      
      default:
        // Level 4+ - Most challenging decisions
        return [
          {
            id: 1,
            title: "IPO Preparation",
            description: "Prepare for initial public offering",
            cost: 5000000,
            effect: { users: { min: 300, max: 600 }, satisfaction: { min: 40, max: 60 }, innovation: { min: 20, max: 40 }, money: { min: 10000000, max: 50000000 } },
            probability: 0.3,
            risk: 0.8
          },
          {
            id: 2,
            title: "Global Acquisition Spree",
            description: "Acquire multiple companies worldwide",
            cost: 10000000,
            effect: { users: { min: 500, max: 1000 }, satisfaction: { min: 30, max: 50 }, innovation: { min: 40, max: 70 }, money: { min: -20000000, max: 10000000 } },
            probability: 0.2,
            risk: 0.9
          },
          {
            id: 3,
            title: "Revolutionary Technology R&D",
            description: "Invest in breakthrough technology research",
            cost: 8000000,
            effect: { users: { min: 0, max: 100 }, satisfaction: { min: 0, max: 20 }, innovation: { min: 80, max: 100 } },
            probability: 0.1,
            risk: 0.95
          },
          {
            id: 4,
            title: "Market Monopoly Attempt",
            description: "Try to dominate entire market through aggressive tactics",
            cost: 15000000,
            effect: { users: { min: 1000, max: 2000 }, satisfaction: { min: -30, max: 10 }, innovation: { min: 10, max: 30 }, money: { min: -50000000, max: 100000000 } },
            probability: 0.05,
            risk: 0.98
          },
          {
            id: 5,
            title: "Complete Business Model Pivot",
            description: "Change entire business model and revenue streams",
            cost: 6000000,
            effect: { users: { min: -500, max: 200 }, satisfaction: { min: -40, max: 20 }, innovation: { min: 60, max: 90 } },
            probability: 0.15,
            risk: 0.85
          },
          {
            id: 6,
            title: "Emergency Restructuring",
            description: "Complete organizational restructuring to survive",
            cost: 3000000,
            effect: { users: { min: -200, max: 0 }, satisfaction: { min: -60, max: -20 }, innovation: { min: -20, max: 10 }, money: { min: -10000000, max: 5000000 } },
            probability: 0.6,
            risk: 0.7
          }
        ]
    }
  }

  const getRandomEvent = () => {
    return randomEvents.find(event => Math.random() < event.probability)
  }

  const formatRupees = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)}Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(1)}K`
    } else {
      return `₹${amount.toLocaleString()}`
    }
  }

  const handleDecision = (decision: Decision) => {
    if (gameState.money >= decision.cost) {
      // Calculate random effects within the specified ranges
      const userEffect = Math.floor(
        Math.random() * (decision.effect.users.max - decision.effect.users.min + 1) + decision.effect.users.min
      )
      const satisfactionEffect = Math.floor(
        Math.random() * (decision.effect.satisfaction.max - decision.effect.satisfaction.min + 1) + decision.effect.satisfaction.min
      )
      const innovationEffect = Math.floor(
        Math.random() * (decision.effect.innovation.max - decision.effect.innovation.min + 1) + decision.effect.innovation.min
      )
      
      let moneyEffect = 0
      if (decision.effect.money) {
        moneyEffect = Math.floor(
          Math.random() * (decision.effect.money.max - decision.effect.money.min + 1) + decision.effect.money.min
        )
      }
      
      setGameState(prev => ({
        ...prev,
        money: prev.money - decision.cost + moneyEffect,
        users: Math.max(0, prev.users + userEffect),
        satisfaction: Math.max(0, Math.min(100, prev.satisfaction + satisfactionEffect)),
        innovation: Math.max(0, Math.min(100, prev.innovation + innovationEffect)),
        decisions: [...prev.decisions, decision.title],
        lastEvent: `Executed: ${decision.title}`
      }))
      
      // Check if decision fails based on probability
      if (Math.random() > decision.probability) {
        // Decision failed - apply additional negative effects
        const additionalLoss = Math.floor(decision.cost * 0.2) // 20% additional cost
        const additionalUserLoss = Math.floor(Math.random() * 20) + 5 // 5-25 user loss
        const additionalSatisfactionLoss = Math.floor(Math.random() * 15) + 5 // 5-20 satisfaction loss
        
        setGameState(prev => ({
          ...prev,
          money: prev.money - additionalLoss,
          users: Math.max(0, prev.users - additionalUserLoss),
          satisfaction: Math.max(0, prev.satisfaction - additionalSatisfactionLoss),
          lastEvent: Math.random() < 0.1 ? 
            `Decision failed catastrophically! Lost ${formatRupees(additionalLoss)} and ${additionalUserLoss} users` :
            `Decision failed - lost ${formatRupees(decision.cost)}`
        }))
      }
    }
  }

  const toggleGame = () => {
    setGameState(prev => ({ ...prev, isPlaying: !prev.isPlaying }))
  }

  const resetGame = () => {
    setGameState({
      money: 500000,
      users: 0,
      satisfaction: 50,
      innovation: 30,
      level: 1,
      score: 0,
      timeElapsed: 0,
      isPlaying: false,
      lastEvent: "Welcome to the Startup Simulator!",
      decisions: [],
      achievements: [],
      eventCooldown: 0,
      gameHistory: [],
      showAnalytics: false
    })
  }

  const toggleAnalytics = () => {
    setGameState(prev => ({ ...prev, showAnalytics: !prev.showAnalytics }))
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Game loop
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (gameState.isPlaying) {
      interval = setInterval(() => {
        setGameState(prev => {
          const newState = { ...prev }
          newState.timeElapsed += 1
          newState.eventCooldown = Math.max(0, newState.eventCooldown - 1)
          
          // Passive income from users (more variable and sometimes negative)
          if (newState.users > 0) {
            const baseMultiplier = Math.max(0.02, 0.08 - (newState.level * 0.01))
            const randomFactor = 0.5 + Math.random() // 0.5 to 1.5 multiplier
            const satisfactionFactor = newState.satisfaction / 100 // 0 to 1 based on satisfaction
            const innovationFactor = newState.innovation / 100 // 0 to 1 based on innovation
            
            // Calculate income with variability
            const incomeMultiplier = baseMultiplier * randomFactor * satisfactionFactor
            const income = Math.floor(newState.users * incomeMultiplier)
            
            // Sometimes have negative income (operational losses)
            const lossChance = Math.max(0.05, 0.15 - (newState.level * 0.01)) // Higher levels = more loss chance
            if (Math.random() < lossChance) {
              const lossAmount = Math.floor(newState.users * baseMultiplier * 0.3)
              newState.money -= lossAmount
              newState.lastEvent = `Operational losses: -${formatRupees(lossAmount)}`
            } else {
              newState.money += income
              newState.lastEvent = `Income: +${formatRupees(income)}`
            }
          }
          
          // Score calculation with innovation bonus
          newState.score = Math.floor(
            (newState.users * 0.1) + 
            (newState.satisfaction * 0.5) + 
            (newState.innovation * 0.3) + 
            (newState.money * 0.001) +
            (newState.level * 100)
          )
          
          // Level up logic
          if (newState.score >= newState.level * 1000) {
            newState.level += 1
            newState.lastEvent = `Level up! Now at level ${newState.level}`
          }
          
          // Progressive challenges based on level
          if (newState.level >= 3 && newState.timeElapsed % 30 === 0) {
            // Every 30 seconds after level 3, small random challenges
            const challenge = Math.random()
            if (challenge < 0.1) {
              newState.money -= 25000
              newState.lastEvent = "Unexpected operational cost: ₹25,000"
            }
          }
          
          if (newState.level >= 5 && newState.timeElapsed % 45 === 0) {
            // Every 45 seconds after level 5, medium challenges
            const challenge = Math.random()
            if (challenge < 0.15) {
              newState.users = Math.max(0, newState.users - 20)
              newState.lastEvent = "Competitor launched aggressive marketing campaign"
            }
          }
          
          if (newState.level >= 7 && newState.timeElapsed % 60 === 0) {
            // Every 60 seconds after level 7, major challenges
            const challenge = Math.random()
            if (challenge < 0.2) {
              newState.satisfaction = Math.max(0, newState.satisfaction - 15)
              newState.lastEvent = "Customer service crisis - satisfaction dropped"
            }
          }
          
          // Random events (only if cooldown is 0)
          if (newState.eventCooldown === 0) {
            const randomEvent = getRandomEvent()
            if (randomEvent) {
              newState.users = Math.max(0, newState.users + randomEvent.effect.users)
              newState.satisfaction = Math.min(100, Math.max(0, newState.satisfaction + randomEvent.effect.satisfaction))
              newState.innovation = Math.min(100, Math.max(0, newState.innovation + randomEvent.effect.innovation))
              newState.money = Math.max(0, newState.money + randomEvent.effect.money)
              newState.lastEvent = randomEvent.message
              newState.eventCooldown = 10 // 10 second cooldown between events
            }
          }
          
          // Add to game history
            newState.gameHistory.push({
            timestamp: Date.now(),
              money: newState.money,
              users: newState.users,
              satisfaction: newState.satisfaction,
              innovation: newState.innovation,
              level: newState.level
            })
            
          // Keep only last 100 history entries
            if (newState.gameHistory.length > 100) {
              newState.gameHistory = newState.gameHistory.slice(-100)
          }
          
          return newState
        })
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [gameState.isPlaying])

  // Check achievements
  useEffect(() => {
    achievements.forEach(achievement => {
      if (!gameState.achievements.includes(achievement.name) && achievement.condition(gameState)) {
        setGameState(prev => ({
          ...prev,
          achievements: [...prev.achievements, achievement.name]
        }))
      }
    })
  }, [gameState, achievements])

  // Analytics Component
  const AnalyticsDashboard = () => {
    const maxUsers = Math.max(...gameState.gameHistory.map(h => h.users))
    const maxSatisfaction = Math.max(...gameState.gameHistory.map(h => h.satisfaction))
    const maxInnovation = Math.max(...gameState.gameHistory.map(h => h.innovation))

    const SimpleChart = ({ data, color, label, maxValue }: { data: number[], color: string, label: string, maxValue: number }) => (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-300">{label}</span>
          <span className="text-sm text-gray-400">{data[data.length - 1]?.toFixed(1) || 0}</span>
        </div>
        <div className="h-20 bg-gray-700/30 rounded-lg p-2 relative overflow-hidden">
          <div className="flex items-end h-full gap-1">
            {data.slice(-20).map((value, index) => (
              <div
                key={index}
                className="flex-1 rounded-t"
                style={{
                  height: `${(value / maxValue) * 100}%`,
                  backgroundColor: color
                }}
              />
            ))}
          </div>
        </div>
      </div>
    )

    const decisionStats = gameState.decisions.reduce((acc, decision) => {
      acc[decision] = (acc[decision] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-2xl border border-gray-700 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                Analytics Dashboard
              </h2>
              <button
                onClick={toggleAnalytics}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <SimpleChart
                        data={gameState.gameHistory.map(h => h.users)}
                        color="#3b82f6"
                        label="Users"
                maxValue={maxUsers || 1}
                      />
                      <SimpleChart
                        data={gameState.gameHistory.map(h => h.satisfaction)}
                color="#10b981"
                label="Satisfaction"
                maxValue={maxSatisfaction || 1}
                      />
                      <SimpleChart
                        data={gameState.gameHistory.map(h => h.innovation)}
                color="#f59e0b"
                label="Innovation"
                maxValue={maxInnovation || 1}
                      />
                    </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-4">Decision History</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {Object.entries(decisionStats).map(([decision, count]) => (
                    <div key={decision} className="flex justify-between text-sm">
                      <span className="text-gray-300">{decision}</span>
                      <span className="text-gray-400">{count}x</span>
                      </div>
                  ))}
                      </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-4">Achievements</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {gameState.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <span className="text-yellow-400">🏆</span>
                      <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                  {gameState.achievements.length === 0 && (
                    <p className="text-gray-400 text-sm">No achievements yet</p>
                  )}
                    </div>
                      </div>
                      </div>
                      </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Startup Simulator</h1>
              <p className="text-gray-400">Build your startup empire in real-time!</p>
          </div>
            <div className="flex gap-3">
              <button
                onClick={toggleAnalytics}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Analytics
              </button>
              <button
                onClick={resetGame}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Reset
              </button>
        </div>
          </div>
      </div>

        {/* Game Stats */}
        <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">{formatRupees(gameState.money)}</div>
            <div className="text-sm text-gray-400">Money</div>
                </div>
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">{gameState.users.toLocaleString()}</div>
            <div className="text-sm text-gray-400">Users</div>
                </div>
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">{gameState.satisfaction}%</div>
            <div className="text-sm text-gray-400">Satisfaction</div>
                  </div>
          <div className="bg-gray-800/50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">{gameState.innovation}%</div>
            <div className="text-sm text-gray-400">Innovation</div>
                </div>
                </div>

          {/* Game Controls */}
        <div className="p-6 border-t border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button
                  onClick={toggleGame}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  gameState.isPlaying
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {gameState.isPlaying ? 'Pause' : 'Start'}
              </button>
              <div className="text-gray-400">
                <span className="font-mono">{formatTime(gameState.timeElapsed)}</span>
                <span className="ml-2">Level {gameState.level}</span>
              </div>
                </div>
            <div className="text-right">
              <div className="text-lg font-bold text-white">Score: {gameState.score.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Last Event: {gameState.lastEvent}</div>
                  </div>
                </div>
                    </div>

        {/* Decisions */}
        <div className="p-6 border-t border-gray-700">
          <h2 className="text-xl font-bold text-white mb-4">Available Decisions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getDecisionsForLevel(gameState.level).map((decision) => (
                  <div
                    key={decision.id}
                className={`bg-gray-800/50 rounded-lg p-4 border transition-colors ${
                      gameState.money >= decision.cost
                    ? 'border-gray-600 hover:border-gray-500 cursor-pointer'
                    : 'border-red-600 opacity-50 cursor-not-allowed'
                }`}
                onClick={() => gameState.money >= decision.cost && handleDecision(decision)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">{decision.title}</h3>
                  <span className="text-sm text-gray-400">Risk: {Math.round(decision.risk * 100)}%</span>
                        </div>
                <p className="text-sm text-gray-400 mb-3">{decision.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-400 font-semibold">{formatRupees(decision.cost)}</span>
                  <span className="text-sm text-gray-400">Success: {Math.round(decision.probability * 100)}%</span>
                        </div>
                      </div>
            ))}
                      </div>
                        </div>

        {/* Achievements */}
        {gameState.achievements.length > 0 && (
          <div className="p-6 border-t border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">Achievements</h2>
            <div className="flex flex-wrap gap-2">
              {gameState.achievements.map((achievement, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-yellow-600/20 text-yellow-400 rounded-full text-sm border border-yellow-600/30"
                >
                  {achievement}
                          </span>
              ))}
                        </div>
                          </div>
                        )}
      </div>

      {gameState.showAnalytics && <AnalyticsDashboard />}
    </div>
  )
}

export default StartupSimulatorGame