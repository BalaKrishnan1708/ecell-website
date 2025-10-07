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

  const getDecisionsForLevel = (level: number) => {
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
          },
          // ----- 5 More Decisions for Level 1 -----
          {
            id: 7,
            title: "Hire a UI/UX Designer",
            description: "Improve the look and feel of your product to boost user satisfaction.",
            cost: 90000,
            effect: { users: { min: 10, max: 25 }, satisfaction: { min: 25, max: 40 }, innovation: { min: 5, max: 15 } },
            probability: 0.9,
            risk: 0.05
          },
           {
             id: 8,
             title: "Content Marketing Initiative",
             description: "Create blog posts and videos to attract users organically over time.",
             cost: 30000,
             effect: { users: { min: 20, max: 50 }, satisfaction: { min: 0, max: 5 }, innovation: { min: 0, max: 0 } },
             probability: 0.7,
             risk: 0.1
           },
          {
            id: 9,
            title: "Bootstrap Operations",
            description: "Focus on extreme frugality to conserve cash, slowing growth but increasing runway.",
            cost: 5000,
            effect: { users: { min: -10, max: 5 }, satisfaction: { min: -5, max: 0 }, innovation: { min: 0, max: 0 }, money: { min: 50000, max: 100000 } },
            probability: 0.98,
            risk: 0.01
          },
           {
             id: 10,
             title: "Attend a Startup Conference",
             description: "Network with potential investors and partners, but it's a gamble.",
             cost: 20000,
             effect: { users: { min: 0, max: 0 }, satisfaction: { min: 0, max: 0 }, innovation: { min: 5, max: 20 } },
             probability: 0.3,
             risk: 0.1
           },
           {
             id: 11,
             title: "Offer a Freemium Plan",
             description: "Lure a large number of users with a free plan, hoping they upgrade later.",
             cost: 40000,
             effect: { users: { min: 100, max: 200 }, satisfaction: { min: -10, max: 5 } },
             probability: 0.6,
             risk: 0.3
           },
           // ----- 5 More Decisions for Level 1 -----
           {
             id: 12,
             title: "Create a Mobile App",
             description: "Develop a mobile version to reach users on the go.",
             cost: 80000,
             effect: { users: { min: 50, max: 120 }, satisfaction: { min: 15, max: 30 }, innovation: { min: 10, max: 20 } },
             probability: 0.8,
             risk: 0.1
           },
           {
             id: 13,
             title: "Implement User Feedback System",
             description: "Add in-app feedback collection to understand user needs better.",
             cost: 15000,
             effect: { users: { min: 5, max: 15 }, satisfaction: { min: 20, max: 35 }, innovation: { min: 5, max: 15 } },
             probability: 0.95,
             risk: 0.02
           },
           {
             id: 14,
             title: "Launch Referral Program",
             description: "Reward users for bringing in new customers.",
             cost: 25000,
             effect: { users: { min: 30, max: 80 }, satisfaction: { min: 10, max: 20 } },
             probability: 0.7,
             risk: 0.15
           },
           {
             id: 15,
             title: "Optimize Website Speed",
             description: "Improve loading times to reduce bounce rate and improve user experience.",
             cost: 35000,
             effect: { users: { min: 10, max: 30 }, satisfaction: { min: 15, max: 25 }, innovation: { min: 5, max: 10 } },
             probability: 0.9,
             risk: 0.05
           },
           {
             id: 16,
             title: "Hire a Marketing Intern",
             description: "Bring in a young, energetic intern to help with social media and content.",
             cost: 20000,
             effect: { users: { min: 15, max: 40 }, satisfaction: { min: 5, max: 15 }, innovation: { min: 2, max: 8 } },
             probability: 0.85,
             risk: 0.08
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
          },
          // ----- 5 More Decisions for Level 2 -----
           {
             id: 7,
             title: "Secure Series A Funding",
             description: "Raise a new round of funding to accelerate growth significantly.",
             cost: 100000,
             effect: { users: { min: 0, max: 0 }, satisfaction: { min: 0, max: 0 }, innovation: { min: 0, max: 0 }, money: { min: 3000000, max: 8000000 } },
             probability: 0.7,
             risk: 0.2
           },
          {
            id: 8,
            title: "Build a Data Analytics Team",
            description: "Invest in data science to understand user behavior and make better decisions.",
            cost: 450000,
            effect: { satisfaction: { min: 15, max: 25 }, innovation: { min: 30, max: 45 } },
            probability: 0.8,
            risk: 0.1
          },
          {
            id: 9,
            title: "Refactor Core Codebase",
            description: "Pause feature development to rewrite old code, improving stability and future speed.",
            cost: 500000,
            effect: { users: { min: -20, max: 0 }, satisfaction: { min: 20, max: 40 }, innovation: { min: 25, max: 35 } },
            probability: 0.75,
            risk: 0.15
          },
          {
            id: 10,
            title: "Launch a Brand Ambassador Program",
            description: "Incentivize your most loyal users to promote the product for you.",
            cost: 250000,
            effect: { users: { min: 80, max: 150 }, satisfaction: { min: 15, max: 25 } },
            probability: 0.6,
            risk: 0.2
          },
           {
             id: 11,
             title: "Open a Second Office",
             description: "Establish a new office in another major city to attract a wider talent pool.",
             cost: 700000,
             effect: { users: { min: 10, max: 30 }, innovation: { min: 20, max: 40 } },
             probability: 0.5,
             risk: 0.3
           },
           // ----- 5 More Decisions for Level 2 -----
           {
             id: 12,
             title: "Implement Advanced Analytics",
             description: "Deploy sophisticated data tracking to understand user behavior patterns.",
             cost: 200000,
             effect: { users: { min: 20, max: 50 }, satisfaction: { min: 25, max: 40 }, innovation: { min: 20, max: 35 } },
             probability: 0.85,
             risk: 0.1
           },
           {
             id: 13,
             title: "Launch API for Third-Party Developers",
             description: "Open your platform to external developers to create integrations.",
             cost: 300000,
             effect: { users: { min: 100, max: 250 }, innovation: { min: 30, max: 50 } },
             probability: 0.6,
             risk: 0.25
           },
           {
             id: 14,
             title: "Establish Customer Success Team",
             description: "Dedicated team to help customers achieve their goals with your product.",
             cost: 400000,
             effect: { users: { min: 30, max: 60 }, satisfaction: { min: 35, max: 55 }, innovation: { min: 10, max: 20 } },
             probability: 0.9,
             risk: 0.05
           },
           {
             id: 15,
             title: "Invest in Security Infrastructure",
             description: "Strengthen security measures to protect user data and build trust.",
             cost: 250000,
             effect: { users: { min: 10, max: 30 }, satisfaction: { min: 20, max: 35 }, innovation: { min: 15, max: 25 } },
             probability: 0.8,
             risk: 0.1
           },
           {
             id: 16,
             title: "Launch White-Label Solution",
             description: "Allow other companies to rebrand your product for their own use.",
             cost: 500000,
             effect: { users: { min: 50, max: 150 }, satisfaction: { min: 10, max: 20 }, money: { min: 500000, max: 1500000 } },
             probability: 0.7,
             risk: 0.2
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
            effect: { money: { min: 2000000, max: 5000000 } },
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
          },
          // ----- 5 More Decisions for Level 3 -----
           {
             id: 7,
             title: "Aggressive Poaching from Competitor",
             description: "Lure away the top talent from your main rival, risking a lawsuit.",
             cost: 800000,
             effect: { users: { min: 0, max: 0 }, satisfaction: { min: 0, max: 0 }, innovation: { min: 40, max: 60 }, money: { min: -1000000, max: 0 } },
             probability: 0.5,
             risk: 0.6
           },
           {
             id: 8,
             title: "Launch a Sub-Brand",
             description: "Create a new product line under a different brand to target a niche market.",
             cost: 1800000,
             effect: { users: { min: 150, max: 300 }, satisfaction: { min: 0, max: 0 }, innovation: { min: 20, max: 30 } },
             probability: 0.4,
             risk: 0.5
           },
           {
             id: 9,
             title: "Lobbying Efforts",
             description: "Spend heavily to influence government regulations in your favor.",
             cost: 2500000,
             effect: { users: { min: 0, max: 0 }, satisfaction: { min: -10, max: 0 }, innovation: { min: 0, max: 0 }, money: { min: 0, max: 5000000 } },
             probability: 0.3,
             risk: 0.7
           },
          {
            id: 10,
            title: "Initiate a Franchise Model",
            description: "Allow third parties to operate under your brand for rapid, low-cost expansion.",
            cost: 500000,
            effect: { users: { min: 400, max: 800 }, satisfaction: { min: -30, max: -10 }, innovation: { min: 0, max: 0 }, money: { min: 1000000, max: 2000000 } },
            probability: 0.6,
            risk: 0.4
          },
           {
             id: 11,
             title: "Automate Core Operations",
             description: "Replace manual processes with a huge investment in automation, reducing long-term costs.",
             cost: 3000000,
             effect: { users: { min: 0, max: 0 }, satisfaction: { min: -20, max: 0 }, innovation: { min: 10, max: 20 }, money: { min: -1000000, max: 500000 } },
             probability: 0.7,
             risk: 0.3
           },
           // ----- 5 More Decisions for Level 3 -----
           {
             id: 12,
             title: "Host a Major Industry Conference",
             description: "Organize a large-scale event to establish thought leadership and attract partners.",
             cost: 2000000,
             effect: { users: { min: 200, max: 500 }, satisfaction: { min: 30, max: 50 }, innovation: { min: 20, max: 35 } },
             probability: 0.6,
             risk: 0.4
           },
           {
             id: 13,
             title: "Launch a Venture Studio",
             description: "Create an internal incubator to develop new products and business lines.",
             cost: 5000000,
             effect: { innovation: { min: 40, max: 70 }, money: { min: -2000000, max: 10000000 } },
             probability: 0.4,
             risk: 0.6
           },
           {
             id: 14,
             title: "Establish Global Partnerships",
             description: "Form strategic alliances with major international corporations.",
             cost: 3000000,
             effect: { users: { min: 300, max: 600 }, satisfaction: { min: 20, max: 40 }, innovation: { min: 25, max: 45 } },
             probability: 0.5,
             risk: 0.5
           },
           {
             id: 15,
             title: "Implement Advanced AI/ML Systems",
             description: "Deploy cutting-edge artificial intelligence to revolutionize your product capabilities.",
             cost: 8000000,
             effect: { users: { min: 100, max: 300 }, satisfaction: { min: 40, max: 60 }, innovation: { min: 60, max: 90 } },
             probability: 0.3,
             risk: 0.7
           },
           {
             id: 16,
             title: "Launch a Corporate University",
             description: "Create an internal education system to train employees and attract top talent.",
             cost: 4000000,
             effect: { satisfaction: { min: 30, max: 50 }, innovation: { min: 35, max: 55 } },
             probability: 0.7,
             risk: 0.3
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
          },
          // ----- 5 More Decisions for Level 4+ -----
           {
             id: 7,
             title: "Sell the Company",
             description: "Final exit. Sell the entire company to a major corporation or private equity firm.",
             cost: 1000000,
             effect: { users: { min: 0, max: 0 }, satisfaction: { min: 0, max: 0 }, innovation: { min: 0, max: 0 }, money: { min: 50000000, max: 200000000 } },
             probability: 0.4,
             risk: 0.5
           },
          {
            id: 8,
            title: "Create a Venture Capital Arm",
            description: "Use your vast resources to start investing in the next generation of startups.",
            cost: 25000000,
            effect: { users: { min: 0, max: 0 }, satisfaction: { min: 0, max: 0 }, innovation: { min: 30, max: 50 }, money: { min: -50000000, max: 100000000 } },
            probability: 0.2,
            risk: 0.8
          },
          {
            id: 9,
            title: "Build a Corporate Campus",
            description: "Construct a massive, state-of-the-art campus to attract top global talent and boost morale.",
            cost: 50000000,
            effect: { users: { min: 0, max: 0 }, satisfaction: { min: 50, max: 70 }, innovation: { min: 40, max: 60 } },
            probability: 0.7,
            risk: 0.4
          },
          {
            id: 10,
            title: "Launch a Satellite Constellation",
            description: "Moonshot project: build and launch your own satellite network for a new global service.",
            cost: 100000000,
            effect: { users: { min: 0, max: 1000 }, satisfaction: { min: 0, max: 0 }, innovation: { min: 90, max: 100 }, money: { min: -200000000, max: 50000000 } },
            probability: 0.02,
            risk: 0.99
          },
           {
             id: 11,
             title: "Influence Public Policy",
             description: "Establish a foundation and use your influence to shape the technological and social future.",
             cost: 80000000,
             effect: { users: { min: 0, max: 0 }, satisfaction: { min: 10, max: 30 }, innovation: { min: 10, max: 30 } },
             probability: 0.1,
             risk: 0.9
           },
           // ----- 5 More Decisions for Level 4+ -----
           {
             id: 12,
             title: "Acquire a Major Media Company",
             description: "Buy a major news outlet to control the narrative and influence public opinion.",
             cost: 200000000,
             effect: { users: { min: 1000, max: 2000 }, satisfaction: { min: -20, max: 20 }, innovation: { min: 0, max: 0 }, money: { min: -500000000, max: 100000000 } },
             probability: 0.15,
             risk: 0.85
           },
           {
             id: 13,
             title: "Launch a Space Program",
             description: "Enter the space industry with satellite launches and space-based services.",
             cost: 500000000,
             effect: { users: { min: 500, max: 1500 }, satisfaction: { min: 0, max: 0 }, innovation: { min: 80, max: 100 }, money: { min: -1000000000, max: 200000000 } },
             probability: 0.05,
             risk: 0.95
           },
           {
             id: 14,
             title: "Create a Digital Currency",
             description: "Launch your own cryptocurrency and payment system to compete with traditional banking.",
             cost: 100000000,
             effect: { users: { min: 2000, max: 5000 }, satisfaction: { min: -30, max: 10 }, innovation: { min: 70, max: 95 }, money: { min: -200000000, max: 1000000000 } },
             probability: 0.08,
             risk: 0.92
           },
           {
             id: 15,
             title: "Establish a Global Monopoly",
             description: "Use aggressive tactics to eliminate all competition and dominate the market completely.",
             cost: 1000000000,
             effect: { users: { min: 5000, max: 10000 }, satisfaction: { min: -50, max: 0 }, innovation: { min: -20, max: 10 }, money: { min: -2000000000, max: 5000000000 } },
             probability: 0.02,
             risk: 0.98
           },
           {
             id: 16,
             title: "Achieve Immortality Through Technology",
             description: "Invest in life extension and consciousness transfer technologies to achieve digital immortality.",
             cost: 10000000000,
             effect: { users: { min: 0, max: 0 }, satisfaction: { min: 0, max: 0 }, innovation: { min: 95, max: 100 }, money: { min: -5000000000, max: 10000000000 } },
             probability: 0.001,
             risk: 0.999
           }
        ]
    }
  }

  // OLD STATIC ARRAYS REMOVED - Now using level-based system with getDecisionsForLevel()
  // The old decisions, achievements, and randomEvents arrays have been replaced with:
  // - getDecisionsForLevel() function that returns different decisions per level
  // - Level-based achievements and events are handled within the game logic
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
    },
    {
      id: 16,
      title: "Acquire Competitor",
      description: "High-risk acquisition of a smaller competitor",
      cost: 2000000,
      effect: { users: { min: -100, max: 200 }, satisfaction: { min: -30, max: 20 }, innovation: { min: -20, max: 30 } },
      probability: 0.25,
      risk: 0.7
    },
    {
      id: 17,
      title: "Complete Platform Rebuild",
      description: "Rebuild entire platform with new technology",
      cost: 1500000,
      effect: { users: { min: -200, max: 50 }, satisfaction: { min: -40, max: 40 }, innovation: { min: 30, max: 60 } },
      probability: 0.4,
      risk: 0.6
    },
    {
      id: 18,
      title: "Massive Layoffs",
      description: "Cut costs by reducing team size significantly",
      cost: 100000,
      effect: { users: { min: -150, max: -50 }, satisfaction: { min: -50, max: -20 }, innovation: { min: -40, max: -10 } },
      probability: 0.8,
      risk: 0.3
    },
    {
      id: 19,
      title: "Desperate Funding Round",
      description: "Accept unfavorable terms to get emergency funding",
      cost: 50000,
      effect: { users: { min: 0, max: 0 }, satisfaction: { min: 0, max: 0 }, innovation: { min: 0, max: 0 }, money: { min: 1000000, max: 3000000 } },
      probability: 0.6,
      risk: 0.8
    },
    {
      id: 20,
      title: "Pivot to Completely New Market",
      description: "Abandon current market and enter entirely new sector",
      cost: 800000,
      effect: { users: { min: -300, max: 100 }, satisfaction: { min: -60, max: 20 }, innovation: { min: 10, max: 50 } },
      probability: 0.2,
      risk: 0.9
    }
  // ]

  // const achievements = [
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
  // ]

  // const randomEvents = [
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
      name: "Database Corruption",
      probability: 0.08,
      effect: { users: -80, satisfaction: -35, innovation: -10, money: -200000 },
      message: "Database corruption has caused data loss and system instability."
    },
    {
      name: "API Integration Failure",
      probability: 0.12,
      effect: { users: -50, satisfaction: -25, innovation: -15, money: -100000 },
      message: "Third-party API integration has failed, breaking core functionality."
    },
    {
      name: "Memory Leak Crisis",
      probability: 0.09,
      effect: { users: -40, satisfaction: -30, innovation: -20, money: -150000 },
      message: "Severe memory leaks are causing server crashes and poor performance."
    },
    {
      name: "Security Vulnerability",
      probability: 0.07,
      effect: { users: -100, satisfaction: -40, innovation: -5, money: -300000 },
      message: "A major security vulnerability has been discovered in your codebase."
    },
    {
      name: "Payment Gateway Down",
      probability: 0.11,
      effect: { users: -60, satisfaction: -30, innovation: 0, money: -250000 },
      message: "Payment processing system is down, preventing user transactions."
    },
    {
      name: "Code Deployment Failure",
      probability: 0.13,
      effect: { users: -70, satisfaction: -25, innovation: -10, money: -120000 },
      message: "Latest code deployment has broken the production environment."
    },
    {
      name: "Server Overload",
      probability: 0.15,
      effect: { users: -90, satisfaction: -35, innovation: 0, money: -180000 },
      message: "Server infrastructure cannot handle the user load, causing frequent downtime."
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
    },
    // New challenging loss events
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
      name: "Regulatory Crackdown",
      probability: 0.03,
      effect: { users: -300, satisfaction: -50, innovation: 0, money: -1000000 },
      message: "Government regulatory crackdown on your industry sector has forced major changes."
    },
    {
      name: "Server Downtime Crisis",
      probability: 0.08,
      effect: { users: -100, satisfaction: -35, innovation: 0, money: -150000 },
      message: "Extended server downtime has caused massive user frustration and loss."
    },
    {
      name: "Patent Infringement Lawsuit",
      probability: 0.02,
      effect: { users: -50, satisfaction: -10, innovation: -20, money: -2000000 },
      message: "A major corporation is suing you for patent infringement."
    },
    {
      name: "Funding Round Failed",
      probability: 0.07,
      effect: { users: -60, satisfaction: -15, innovation: -10, money: -500000 },
      message: "Your Series A funding round failed, forcing major cost cuts and layoffs."
    },
    {
      name: "Competitor Price War",
      probability: 0.09,
      effect: { users: -120, satisfaction: -30, innovation: 0, money: -400000 },
      message: "Competitors launched aggressive price wars, forcing you to slash prices."
    },
    {
      name: "Supply Chain Disruption",
      probability: 0.06,
      effect: { users: -40, satisfaction: -25, innovation: 0, money: -300000 },
      message: "Global supply chain issues are affecting your product delivery and costs."
    },
    {
      name: "Customer Service Scandal",
      probability: 0.05,
      effect: { users: -180, satisfaction: -60, innovation: 0, money: -200000 },
      message: "A customer service scandal went viral, severely damaging your brand reputation."
    },
    {
      name: "Technology Obsolescence",
      probability: 0.04,
      effect: { users: -100, satisfaction: -20, innovation: -40, money: -600000 },
      message: "Your core technology has become obsolete, requiring complete platform rebuild."
    },
    {
      name: "Market Saturation",
      probability: 0.08,
      effect: { users: -80, satisfaction: -15, innovation: -25, money: -200000 },
      message: "Your market segment has become oversaturated with competitors."
    },
    {
      name: "Cybersecurity Attack",
      probability: 0.03,
      effect: { users: -250, satisfaction: -45, innovation: -15, money: -800000 },
      message: "A sophisticated cyber attack has compromised your systems and user data."
    },
    {
      name: "Talent Acquisition War",
      probability: 0.07,
      effect: { users: -30, satisfaction: -10, innovation: -20, money: -300000 },
      message: "Big tech companies are poaching your talent with massive salary offers."
    },
    {
      name: "Product Recall",
      probability: 0.02,
      effect: { users: -400, satisfaction: -70, innovation: -30, money: -1500000 },
      message: "A critical product defect forced a massive recall, destroying user trust."
    },
    // Additional positive events to balance the game
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
    },
    {
      name: "Product-Market Fit Achieved",
      probability: 0.07,
      effect: { users: 250, satisfaction: 40, innovation: 30, money: 0 },
      message: "You've achieved product-market fit! Users love your product."
    },
    {
      name: "International Expansion",
      probability: 0.05,
      effect: { users: 400, satisfaction: 20, innovation: 25, money: 0 },
      message: "Your product is gaining traction in international markets!"
    },
    {
      name: "Award Recognition",
      probability: 0.06,
      effect: { users: 100, satisfaction: 35, innovation: 20, money: 1000000 },
      message: "Your startup won a prestigious industry award!"
    },
    {
      name: "Key Hire Success",
      probability: 0.08,
      effect: { users: 30, satisfaction: 15, innovation: 40, money: 0 },
      message: "You hired a world-class CTO who's revolutionizing your tech stack."
    },
    {
      name: "Customer Success Story",
      probability: 0.09,
      effect: { users: 80, satisfaction: 30, innovation: 10, money: 0 },
      message: "A major customer shared their success story, boosting your credibility."
    },
    {
      name: "Government Contract",
      probability: 0.04,
      effect: { users: 0, satisfaction: 0, innovation: 0, money: 10000000 },
      message: "You secured a major government contract!"
    },
    {
      name: "Viral TikTok Campaign",
      probability: 0.08,
      effect: { users: 300, satisfaction: 15, innovation: 5, money: 0 },
      message: "Your marketing campaign went viral on TikTok!"
    },
    {
      name: "Enterprise Client Win",
      probability: 0.06,
      effect: { users: 50, satisfaction: 20, innovation: 15, money: 2000000 },
      message: "You secured a major enterprise client with a lucrative contract!"
    },
    {
      name: "Patent Approval",
      probability: 0.05,
      effect: { users: 0, satisfaction: 0, innovation: 50, money: 0 },
      message: "Your innovative technology received patent approval!"
    },
    {
      name: "Mentor Network Access",
      probability: 0.07,
      effect: { users: 0, satisfaction: 25, innovation: 30, money: 0 },
      message: "You gained access to a prestigious mentor network!"
    },
    {
      name: "Platform Optimization Success",
      probability: 0.08,
      effect: { users: 60, satisfaction: 20, innovation: 25, money: 0 },
      message: "Your platform optimization efforts resulted in 50% better performance!"
    },
    {
      name: "Community Building Success",
      probability: 0.09,
      effect: { users: 120, satisfaction: 35, innovation: 10, money: 0 },
      message: "Your user community has grown into a thriving ecosystem!"
    },
    {
      name: "Strategic Acquisition Offer",
      probability: 0.03,
      effect: { users: 0, satisfaction: 0, innovation: 0, money: 20000000 },
      message: "A major corporation made a strategic acquisition offer!"
    },
    {
      name: "Open Source Contribution",
      probability: 0.06,
      effect: { users: 40, satisfaction: 15, innovation: 35, money: 0 },
      message: "Your open source contributions gained recognition in the developer community!"
    },
    {
      name: "User Retention Breakthrough",
      probability: 0.08,
      effect: { users: 0, satisfaction: 30, innovation: 20, money: 0 },
      message: "You discovered the secret to dramatically improving user retention!"
    },
    {
      name: "Cost Optimization Success",
      probability: 0.07,
      effect: { users: 0, satisfaction: 10, innovation: 15, money: 1500000 },
      message: "Your cost optimization efforts saved significant operational expenses!"
    },
    {
      name: "Brand Partnership",
      probability: 0.05,
      effect: { users: 200, satisfaction: 25, innovation: 10, money: 0 },
      message: "A major brand wants to partner with your startup!"
    },
    {
      name: "Research Breakthrough",
      probability: 0.04,
      effect: { users: 0, satisfaction: 0, innovation: 60, money: 0 },
      message: "Your R&D team made a breakthrough that could revolutionize the industry!"
    },
    {
      name: "User-Generated Content Explosion",
      probability: 0.08,
      effect: { users: 150, satisfaction: 40, innovation: 5, money: 0 },
      message: "Users are creating amazing content about your product, driving organic growth!"
    },
    {
      name: "API Monetization Success",
      probability: 0.06,
      effect: { users: 0, satisfaction: 0, innovation: 20, money: 3000000 },
      message: "Your API monetization strategy is generating significant revenue!"
    },
    {
      name: "Sustainability Initiative",
      probability: 0.05,
      effect: { users: 80, satisfaction: 30, innovation: 25, money: 0 },
      message: "Your sustainability initiatives gained recognition and attracted eco-conscious users!"
    },
    {
      name: "Mobile App Store Feature",
      probability: 0.07,
      effect: { users: 250, satisfaction: 20, innovation: 15, money: 0 },
      message: "Your mobile app was featured on the App Store homepage!"
    },
    {
      name: "AI Integration Success",
      probability: 0.06,
      effect: { users: 100, satisfaction: 25, innovation: 45, money: 0 },
      message: "Your AI integration has significantly improved user experience!"
    },
    {
      name: "Global Recognition",
      probability: 0.04,
      effect: { users: 500, satisfaction: 50, innovation: 30, money: 0 },
      message: "Your startup received international recognition and media coverage!"
    },
    // Additional critical bug-like events
    {
      name: "Zero-Day Vulnerability",
      probability: 0.05,
      effect: { users: -150, satisfaction: -50, innovation: -20, money: -600000 },
      message: "A zero-day vulnerability was discovered in your core system, requiring immediate patching."
    },
    {
      name: "Memory Leak Explosion",
      probability: 0.08,
      effect: { users: -80, satisfaction: -40, innovation: -25, money: -200000 },
      message: "Critical memory leaks are causing system crashes every few minutes."
    },
    {
      name: "Database Deadlock Crisis",
      probability: 0.07,
      effect: { users: -100, satisfaction: -35, innovation: -15, money: -300000 },
      message: "Database deadlocks are preventing users from completing transactions."
    },
    {
      name: "API Rate Limit Exceeded",
      probability: 0.09,
      effect: { users: -60, satisfaction: -30, innovation: 0, money: -150000 },
      message: "You've exceeded API rate limits, breaking core functionality."
    },
    {
      name: "Cache Poisoning Attack",
      probability: 0.04,
      effect: { users: -200, satisfaction: -45, innovation: -10, money: -400000 },
      message: "A cache poisoning attack has corrupted your data and user sessions."
    },
    {
      name: "Load Balancer Failure",
      probability: 0.06,
      effect: { users: -120, satisfaction: -40, innovation: 0, money: -250000 },
      message: "Your load balancer has failed, causing massive service disruption."
    },
    {
      name: "SSL Certificate Expired",
      probability: 0.08,
      effect: { users: -90, satisfaction: -35, innovation: 0, money: -100000 },
      message: "Your SSL certificate expired, making your site appear unsafe to users."
    },
    {
      name: "Microservices Communication Breakdown",
      probability: 0.07,
      effect: { users: -70, satisfaction: -30, innovation: -20, money: -180000 },
      message: "Your microservices architecture has communication failures between services."
    },
    {
      name: "CDN Outage",
      probability: 0.08,
      effect: { users: -50, satisfaction: -25, innovation: 0, money: -120000 },
      message: "Your CDN provider is experiencing outages, slowing down your site globally."
    },
    {
      name: "Queue Processing Backlog",
      probability: 0.09,
      effect: { users: -40, satisfaction: -20, innovation: -10, money: -80000 },
      message: "Your message queue is backed up, causing delays in user actions."
    },
    {
      name: "Docker Container Crash Loop",
      probability: 0.06,
      effect: { users: -110, satisfaction: -40, innovation: -15, money: -220000 },
      message: "Your Docker containers are stuck in a crash loop, preventing service recovery."
    },
    {
      name: "Redis Cache Corruption",
      probability: 0.05,
      effect: { users: -80, satisfaction: -30, innovation: -10, money: -160000 },
      message: "Your Redis cache has become corrupted, causing data inconsistencies."
    },
    {
      name: "Elasticsearch Cluster Split",
      probability: 0.04,
      effect: { users: -60, satisfaction: -25, innovation: -20, money: -140000 },
      message: "Your Elasticsearch cluster has split, causing search functionality to fail."
    },
    {
      name: "Kubernetes Pod Eviction",
      probability: 0.07,
      effect: { users: -90, satisfaction: -35, innovation: -15, money: -200000 },
      message: "Kubernetes is evicting your pods due to resource constraints."
    },
    {
      name: "Message Broker Failure",
      probability: 0.06,
      effect: { users: -70, satisfaction: -30, innovation: -20, money: -180000 },
      message: "Your message broker has failed, breaking async processing."
    },
    {
      name: "Database Connection Pool Exhaustion",
      probability: 0.08,
      effect: { users: -100, satisfaction: -40, innovation: -10, money: -160000 },
      message: "Database connection pool is exhausted, preventing new user connections."
    },
    {
      name: "Third-Party Service Deprecated",
      probability: 0.05,
      effect: { users: -50, satisfaction: -20, innovation: -30, money: -300000 },
      message: "A critical third-party service you depend on has been deprecated."
    },
    {
      name: "Configuration Drift",
      probability: 0.07,
      effect: { users: -60, satisfaction: -25, innovation: -15, money: -120000 },
      message: "Configuration drift has caused your production environment to behave unexpectedly."
    },
    {
      name: "Network Partition",
      probability: 0.04,
      effect: { users: -130, satisfaction: -45, innovation: -20, money: -350000 },
      message: "A network partition has split your distributed system, causing data inconsistency."
    },
    {
      name: "Resource Starvation",
      probability: 0.08,
      effect: { users: -80, satisfaction: -35, innovation: -25, money: -200000 },
      message: "Your system is experiencing resource starvation, causing performance degradation."
    }
  // ]

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
            }
            
            // Score calculation with innovation bonus
            newState.score += Math.floor(newState.users * 0.05 * innovationFactor)
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

  const makeDecision = useCallback((decision: any) => {
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
        // Decision failed - still cost money but no benefits, sometimes additional losses
        const failurePenalty = Math.random() < 0.3 // 30% chance of additional penalty
        let additionalLoss = 0
        let additionalUserLoss = 0
        let additionalSatisfactionLoss = 0
        
        if (failurePenalty) {
          // Additional failure consequences
          additionalLoss = Math.floor(decision.cost * 0.2) // 20% additional cost
          additionalUserLoss = Math.floor(Math.random() * 20) + 5 // 5-25 user loss
          additionalSatisfactionLoss = Math.floor(Math.random() * 15) + 5 // 5-20 satisfaction loss
        }
        
        setGameState(prev => ({
          ...prev,
          money: prev.money - decision.cost - additionalLoss,
          users: Math.max(0, prev.users - additionalUserLoss),
          satisfaction: Math.max(0, prev.satisfaction - additionalSatisfactionLoss),
          decisions: [...prev.decisions, `${decision.title} (Failed${failurePenalty ? ' - Major Loss' : ''})`],
          score: prev.score - 50 - (failurePenalty ? 100 : 0),
          lastEvent: failurePenalty ? 
            `Decision failed catastrophically! Lost ${formatRupees(additionalLoss)} and ${additionalUserLoss} users` :
            `Decision failed - lost ${formatRupees(decision.cost)}`
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
                Make Strategic Decisions - Level {gameState.level}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Choose decisions to grow your startup. Each decision costs money but can increase users, satisfaction, or innovation.
                {gameState.level === 1 && " Start with basic growth strategies."}
                {gameState.level === 2 && " Scale up with advanced features and partnerships."}
                {gameState.level === 3 && " Face major challenges and high-stakes decisions."}
                {gameState.level >= 4 && " Navigate complex corporate-level strategies and risks."}
              </p>
              
              <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                {getDecisionsForLevel(gameState.level).map((decision) => (
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
                            {decision.effect.users ? (decision.effect.users.min > 0 ? '+' : '') + decision.effect.users.min + '-' + decision.effect.users.max : '0'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Satisfaction:</span>
                          <span className="text-yellow-400">
                            {decision.effect.satisfaction ? (decision.effect.satisfaction.min > 0 ? '+' : '') + decision.effect.satisfaction.min + '-' + decision.effect.satisfaction.max : '0'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Innovation:</span>
                          <span className="text-purple-400">
                            {decision.effect.innovation ? (decision.effect.innovation.min > 0 ? '+' : '') + decision.effect.innovation.min + '-' + decision.effect.innovation.max : '0'}
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
