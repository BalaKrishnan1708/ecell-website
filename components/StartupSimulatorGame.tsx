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


  const decisions = [
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
      risk: 0.05
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
      risk: 0.08
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
    },
    {
      id: 7,
      title: "Viral Marketing Blitz",
      description: "High-risk, high-reward marketing strategy",
      cost: 200000,
      effect: { users: { min: 100, max: 300 }, satisfaction: { min: -10, max: 20 }, innovation: { min: 0, max: 10 } },
      probability: 0.3,
      risk: 0.5
    },
    {
      id: 8,
      title: "AI/ML Integration",
      description: "Integrate artificial intelligence features",
      cost: 300000,
      effect: { users: { min: 40, max: 80 }, satisfaction: { min: 25, max: 45 }, innovation: { min: 40, max: 60 } },
      probability: 0.7,
      risk: 0.15
    },
    {
      id: 9,
      title: "Customer Support Team",
      description: "Build dedicated customer support",
      cost: 80000,
      effect: { users: { min: 10, max: 30 }, satisfaction: { min: 30, max: 50 }, innovation: { min: 5, max: 15 } },
      probability: 0.9,
      risk: 0.03
    },
    {
      id: 10,
      title: "Tier-2/3 City Expansion",
      description: "Expand to smaller Indian cities",
      cost: 400000,
      effect: { users: { min: 80, max: 200 }, satisfaction: { min: -5, max: 15 }, innovation: { min: 10, max: 30 } },
      probability: 0.5,
      risk: 0.3
    },
    {
      id: 11,
      title: "Advanced Analytics",
      description: "Implement data analytics and insights",
      cost: 150000,
      effect: { users: { min: 20, max: 50 }, satisfaction: { min: 15, max: 30 }, innovation: { min: 25, max: 40 } },
      probability: 0.8,
      risk: 0.1
    },
    {
      id: 12,
      title: "Crisis Management",
      description: "Handle a potential crisis situation",
      cost: 50000,
      effect: { users: { min: -50, max: 20 }, satisfaction: { min: -20, max: 30 }, innovation: { min: 0, max: 20 } },
      probability: 0.6,
      risk: 0.6
    },
    {
      id: 13,
      title: "Government Scheme Application",
      description: "Apply for Indian startup schemes and grants",
      cost: 30000,
      effect: { users: { min: 0, max: 0 }, satisfaction: { min: 0, max: 0 }, innovation: { min: 0, max: 0 }, money: { min: 500000, max: 2000000 } },
      probability: 0.4,
      risk: 0.1
    },
    {
      id: 14,
      title: "Angel Investor Pitch",
      description: "Pitch to Indian angel investors",
      cost: 40000,
      effect: { users: { min: 0, max: 0 }, satisfaction: { min: 0, max: 0 }, innovation: { min: 0, max: 0 }, money: { min: 1000000, max: 5000000 } },
      probability: 0.25,
      risk: 0.3
    },
    {
      id: 15,
      title: "Export to Global Markets",
      description: "Expand internationally from India",
      cost: 500000,
      effect: { users: { min: 100, max: 300 }, satisfaction: { min: 10, max: 30 }, innovation: { min: 20, max: 40 } },
      probability: 0.35,
      risk: 0.4
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

  const randomEvents = [
    {
      name: "Viral on Instagram/YouTube",
      probability: 0.05,
      effect: { users: 200, satisfaction: 10, innovation: 5, money: 0 },
      message: "Your startup went viral on Indian social media platforms!"
    },
    {
      name: "Competitor from Bangalore",
      probability: 0.08,
      effect: { users: -50, satisfaction: -15, innovation: 0, money: 0 },
      message: "A major competitor launched from Bangalore with similar features."
    },
    {
      name: "Indian Angel Investor",
      probability: 0.06,
      effect: { users: 0, satisfaction: 0, innovation: 0, money: 2000000 },
      message: "An Indian angel investor is interested in your startup!"
    },
    {
      name: "Critical Bug Found",
      probability: 0.1,
      effect: { users: -30, satisfaction: -20, innovation: 0, money: -50000 },
      message: "A critical bug was discovered in your product."
    },
    {
      name: "Economic Times Coverage",
      probability: 0.04,
      effect: { users: 150, satisfaction: 20, innovation: 10, money: 0 },
      message: "Your startup was featured in The Economic Times!"
    },
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
    }
  ]

  // Game loop
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (gameState.isPlaying) {
      interval = setInterval(() => {
        setGameState(prev => {
          const newState = { ...prev }
          newState.timeElapsed += 1
          newState.eventCooldown = Math.max(0, newState.eventCooldown - 1)
          
          // Passive income from users (decreases with level for difficulty)
          if (newState.users > 0) {
            const incomeMultiplier = Math.max(0.05, 0.1 - (newState.level * 0.01))
            newState.money += Math.floor(newState.users * incomeMultiplier)
            newState.score += Math.floor(newState.users * 0.05)
          }
          
          // Decay effects (increase with level for difficulty)
          const decayMultiplier = 1 + (newState.level * 0.1)
          newState.satisfaction = Math.max(0, newState.satisfaction - (0.1 * decayMultiplier))
          newState.innovation = Math.max(0, newState.innovation - (0.05 * decayMultiplier))
          
          // Level up (increasing difficulty)
          const requiredScore = newState.level * 1000 * (1 + newState.level * 0.2)
          if (newState.score >= requiredScore) {
            newState.level += 1
            newState.money += 100000 * newState.level // More money per level
          }
          
          // Record game history every 5 seconds
          if (newState.timeElapsed % 5 === 0) {
            newState.gameHistory.push({
              timestamp: newState.timeElapsed,
              money: newState.money,
              users: newState.users,
              satisfaction: newState.satisfaction,
              innovation: newState.innovation,
              level: newState.level
            })
            
            // Keep only last 100 data points to prevent memory issues
            if (newState.gameHistory.length > 100) {
              newState.gameHistory = newState.gameHistory.slice(-100)
            }
          }
          
          // Level-based challenges
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
            const randomEvent = randomEvents.find(event => Math.random() < event.probability)
            if (randomEvent) {
              newState.users = Math.max(0, newState.users + randomEvent.effect.users)
              newState.satisfaction = Math.min(100, Math.max(0, newState.satisfaction + randomEvent.effect.satisfaction))
              newState.innovation = Math.min(100, Math.max(0, newState.innovation + randomEvent.effect.innovation))
              newState.money = Math.max(0, newState.money + randomEvent.effect.money)
              newState.lastEvent = randomEvent.message
              newState.eventCooldown = 10 // 10 second cooldown between events
            }
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

  const makeDecision = useCallback((decision: typeof decisions[0]) => {
    if (gameState.money >= decision.cost) {
      // Check if decision succeeds based on probability
      const success = Math.random() < decision.probability
      
      if (success) {
        // Calculate random effects within the range
        const userEffect = Math.floor(
          Math.random() * (decision.effect.users.max - decision.effect.users.min + 1) + decision.effect.users.min
        )
        const satisfactionEffect = Math.floor(
          Math.random() * (decision.effect.satisfaction.max - decision.effect.satisfaction.min + 1) + decision.effect.satisfaction.min
        )
        const innovationEffect = Math.floor(
          Math.random() * (decision.effect.innovation.max - decision.effect.innovation.min + 1) + decision.effect.innovation.min
        )
        
        // Handle money effects (for funding decisions)
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
          satisfaction: Math.min(100, Math.max(0, prev.satisfaction + satisfactionEffect)),
          innovation: Math.min(100, Math.max(0, prev.innovation + innovationEffect)),
          decisions: [...prev.decisions, decision.title],
          score: prev.score + 100 + (userEffect > 0 ? userEffect * 2 : 0) + (moneyEffect > 0 ? Math.floor(moneyEffect / 1000) : 0)
        }))
      } else {
        // Decision failed - still cost money but no benefits
        setGameState(prev => ({
          ...prev,
          money: prev.money - decision.cost,
          decisions: [...prev.decisions, `${decision.title} (Failed)`],
          score: prev.score - 50
        }))
      }
    }
  }, [gameState.money])

  const toggleGame = () => {
    setGameState(prev => ({ ...prev, isPlaying: !prev.isPlaying }))
  }

  const resetGame = () => {
    setGameState({
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
  }

  const toggleAnalytics = () => {
    setGameState(prev => ({ ...prev, showAnalytics: !prev.showAnalytics }))
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
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

  // Analytics Component
  const AnalyticsDashboard = () => {
    if (!gameState.showAnalytics || gameState.gameHistory.length === 0) return null

    const maxMoney = Math.max(...gameState.gameHistory.map(h => h.money))
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
                  backgroundColor: color,
                  minHeight: '2px'
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

    const topDecisions = Object.entries(decisionStats)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-2xl border border-gray-700 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                Startup Analytics Dashboard
              </h2>
              <Button onClick={toggleAnalytics} variant="outline" size="sm">
                Close
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Performance Charts */}
              <div className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Performance Trends</h3>
                    <div className="space-y-4">
                      <SimpleChart
                        data={gameState.gameHistory.map(h => h.money)}
                        color="#10b981"
                        label="Money (₹)"
                        maxValue={maxMoney}
                      />
                      <SimpleChart
                        data={gameState.gameHistory.map(h => h.users)}
                        color="#3b82f6"
                        label="Users"
                        maxValue={maxUsers}
                      />
                      <SimpleChart
                        data={gameState.gameHistory.map(h => h.satisfaction)}
                        color="#f59e0b"
                        label="Satisfaction (%)"
                        maxValue={100}
                      />
                      <SimpleChart
                        data={gameState.gameHistory.map(h => h.innovation)}
                        color="#8b5cf6"
                        label="Innovation (%)"
                        maxValue={100}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Key Metrics */}
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Key Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-green-500/10 rounded-lg">
                        <div className="text-2xl font-bold text-green-400">{formatRupees(maxMoney)}</div>
                        <div className="text-sm text-gray-400">Peak Money</div>
                      </div>
                      <div className="text-center p-3 bg-blue-500/10 rounded-lg">
                        <div className="text-2xl font-bold text-blue-400">{maxUsers}</div>
                        <div className="text-sm text-gray-400">Peak Users</div>
                      </div>
                      <div className="text-center p-3 bg-yellow-500/10 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-400">{maxSatisfaction.toFixed(1)}%</div>
                        <div className="text-sm text-gray-400">Peak Satisfaction</div>
                      </div>
                      <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                        <div className="text-2xl font-bold text-purple-400">{maxInnovation.toFixed(1)}%</div>
                        <div className="text-sm text-gray-400">Peak Innovation</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Decision Analysis */}
              <div className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Decision Analysis</h3>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-400 mb-2">Most Used Strategies:</div>
                      {topDecisions.map(([decision, count], index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-700/30 rounded">
                          <span className="text-gray-300 text-sm truncate flex-1 mr-2">{decision}</span>
                          <Badge variant="secondary" className="bg-indigo-500/20 text-indigo-300">
                            {count}x
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Game Summary</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Decisions Made:</span>
                        <span className="text-white">{gameState.decisions.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Achievements Unlocked:</span>
                        <span className="text-white">{gameState.achievements.length}/12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Final Level:</span>
                        <span className="text-white">{gameState.level}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Final Score:</span>
                        <span className="text-white">{gameState.score.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Play Time:</span>
                        <span className="text-white">{formatTime(gameState.timeElapsed)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-4">Performance Rating</h3>
                    <div className="space-y-3">
                      {(() => {
                        const rating = Math.min(5, Math.max(1, 
                          (gameState.score / 10000) + 
                          (gameState.level / 2) + 
                          (gameState.achievements.length / 3)
                        ))
                        const stars = Math.floor(rating)
                        const hasHalfStar = rating % 1 >= 0.5
                        
                        return (
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-2xl ${
                                i < stars ? 'text-yellow-400' : 
                                i === stars && hasHalfStar ? 'text-yellow-400' : 
                                'text-gray-600'
                              }`}>
                                {i < stars ? '★' : i === stars && hasHalfStar ? '☆' : '☆'}
                              </span>
                            ))}
                            <span className="ml-2 text-gray-300 text-sm">
                              {rating.toFixed(1)}/5.0
                            </span>
                          </div>
                        )
                      })()}
                      <div className="text-xs text-gray-400">
                        Based on score, level progression, and achievements
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Event Notification */}
      {gameState.lastEvent && (
        <div className="mb-4 p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">{gameState.lastEvent}</span>
          </div>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
          <Trophy className="w-8 h-8 text-yellow-400" />
          Startup Simulator
        </h2>
        <p className="text-gray-300 mb-4">Build your virtual startup and become an entrepreneur!</p>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        {/* Game Stats */}
        <div className="space-y-4">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Your Startup Stats
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Money</span>
                  <span className="text-green-400 font-bold">{formatRupees(gameState.money)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Users</span>
                  <span className="text-blue-400 font-bold">{gameState.users}</span>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Satisfaction</span>
                    <span className="text-yellow-400 font-bold">{Math.round(gameState.satisfaction)}%</span>
                  </div>
                  <Progress value={gameState.satisfaction} className="h-2" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Innovation</span>
                    <span className="text-purple-400 font-bold">{Math.round(gameState.innovation)}%</span>
                  </div>
                  <Progress value={gameState.innovation} className="h-2" />
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Level</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-indigo-500 text-white">
                      {gameState.level}
                    </Badge>
                    <span className={`text-xs ${
                      gameState.level >= 7 ? 'text-red-400' :
                      gameState.level >= 5 ? 'text-yellow-400' :
                      gameState.level >= 3 ? 'text-orange-400' :
                      'text-green-400'
                    }`}>
                      {gameState.level >= 7 ? 'Expert' :
                       gameState.level >= 5 ? 'Advanced' :
                       gameState.level >= 3 ? 'Intermediate' :
                       'Beginner'}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Score</span>
                  <span className="text-orange-400 font-bold">{gameState.score}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Time</span>
                  <span className="text-gray-400">{formatTime(gameState.timeElapsed)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Game Controls */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-white mb-4">Game Controls</h3>
              <div className="flex gap-2">
                <Button
                  onClick={toggleGame}
                  variant={gameState.isPlaying ? "destructive" : "default"}
                  className="flex-1"
                >
                  {gameState.isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                  {gameState.isPlaying ? 'Pause' : 'Play'}
                </Button>
                <Button onClick={resetGame} variant="outline">
                  <RotateCcw className="w-4 h-4" />
                </Button>
                {gameState.gameHistory.length > 0 && (
                  <Button onClick={toggleAnalytics} variant="outline">
                    <TrendingUp className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          {gameState.achievements.length > 0 && (
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  Achievements
                </h3>
                <div className="space-y-2">
                  {gameState.achievements.map((achievement, index) => (
                    <Badge key={index} variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Predictions & Challenges */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-400" />
                Predictions & Challenges
              </h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="font-medium text-blue-300 mb-1">Next Level Target</div>
                  <div className="text-gray-300">
                    Need {Math.ceil((gameState.level * 1000 * (1 + gameState.level * 0.2)) - gameState.score)} more points
                  </div>
                </div>
                
                {gameState.level >= 3 && (
                  <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                    <div className="font-medium text-orange-300 mb-1">Level {gameState.level} Challenge</div>
                    <div className="text-gray-300">
                      Operational costs increase by {Math.round(gameState.level * 10)}% every 30 seconds
                    </div>
                  </div>
                )}
                
                {gameState.level >= 5 && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <div className="font-medium text-red-300 mb-1">Advanced Challenge</div>
                    <div className="text-gray-300">
                      Competitors become more aggressive - expect user loss
                    </div>
                  </div>
                )}
                
                {gameState.level >= 7 && (
                  <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                    <div className="font-medium text-purple-300 mb-1">Expert Challenge</div>
                    <div className="text-gray-300">
                      Customer service crises occur more frequently
                    </div>
                  </div>
                )}
                
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="font-medium text-green-300 mb-1">Income Prediction</div>
                  <div className="text-gray-300">
                    Next income: {formatRupees(Math.floor(gameState.users * Math.max(0.05, 0.1 - (gameState.level * 0.01))))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Game Decisions */}
        <div className="lg:col-span-2">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                Make Strategic Decisions
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Choose decisions to grow your startup. Each decision costs money but can increase users, satisfaction, or innovation.
              </p>
              
              <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                {decisions.map((decision) => (
                  <div
                    key={decision.id}
                    className={`p-4 rounded-lg border transition-all cursor-pointer ${
                      gameState.money >= decision.cost
                        ? 'bg-gray-700/50 border-gray-600 hover:border-indigo-500 hover:bg-gray-700/70'
                        : 'bg-gray-800/30 border-gray-700 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => gameState.money >= decision.cost && makeDecision(decision)}
                  >
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {decision.id}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-sm sm:text-base mb-1">{decision.title}</h4>
                          <p className="text-gray-400 text-xs sm:text-sm">{decision.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-xs px-2 py-1 rounded ${
                          decision.probability >= 0.8 ? 'bg-green-500/20 text-green-400' :
                          decision.probability >= 0.6 ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {Math.round(decision.probability * 100)}% success
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          decision.risk >= 0.4 ? 'bg-red-500/20 text-red-400' :
                          decision.risk >= 0.2 ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {decision.risk >= 0.4 ? 'High Risk' : decision.risk >= 0.2 ? 'Medium Risk' : 'Low Risk'}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Cost:</span>
                          <span className="text-red-400 font-medium">{formatRupees(decision.cost)}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Users:</span>
                          <span className="text-blue-400">
                            {decision.effect.users.min > 0 ? '+' : ''}{decision.effect.users.min}-{decision.effect.users.max}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Satisfaction:</span>
                          <span className="text-yellow-400">
                            {decision.effect.satisfaction.min > 0 ? '+' : ''}{decision.effect.satisfaction.min}-{decision.effect.satisfaction.max}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Innovation:</span>
                          <span className="text-purple-400">
                            {decision.effect.innovation.min > 0 ? '+' : ''}{decision.effect.innovation.min}-{decision.effect.innovation.max}
                          </span>
                        </div>
                        {decision.effect.money && (
                          <div className="flex items-center justify-between sm:col-span-2">
                            <span className="text-gray-400">Funding:</span>
                            <span className="text-green-400">
                              {formatRupees(decision.effect.money.min)}-{formatRupees(decision.effect.money.max)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Game Instructions */}
      <Card className="mt-6 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border-indigo-500/30">
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Target className="w-5 h-5 text-indigo-400" />
            How to Play
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="space-y-1">
              <div className="font-semibold text-white">1. Start the Game</div>
              <div>Click the Play button to begin your startup journey with ₹5,00,000</div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-white">2. Make Decisions</div>
              <div>Choose strategic decisions to grow your startup. Each has success probability and risk level</div>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-white">3. Earn Achievements</div>
              <div>Reach milestones to unlock achievements and level up for more challenges</div>
            </div>
            <div className="space-y-1 sm:col-span-2 lg:col-span-1">
              <div className="font-semibold text-white">4. Indian Context</div>
              <div>Experience real Indian startup scenarios with government schemes, partnerships, and market challenges</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analytics Dashboard */}
      <AnalyticsDashboard />
    </div>
  )
}

export default StartupSimulatorGame
