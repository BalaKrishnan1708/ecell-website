"use client"

import { motion } from "framer-motion"
import { AnimatedHeading } from "@/components/ui/AnimatedHeading"
import { Button } from "@/components/ui/button"
import { Briefcase, Building2, Users, Target, Award, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function IncubationCenterPage() {
  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="page-hero relative z-20"
      >
        <div className="container mx-auto px-4 text-center relative z-40">
          <AnimatedHeading className="text-brand-primary mb-4 text-5xl md:text-6xl">Incubation Center</AnimatedHeading>
          <motion.p
            className="text-xl max-w-2xl mx-auto text-brand-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Transform your startup idea into a successful business with our comprehensive incubation program.
          </motion.p>
        </div>
      </motion.section>

      {/* What is Incubation Section */}
      <section className="page-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <AnimatedHeading className="text-brand-primary text-3xl mb-4">What is Our Incubation Center?</AnimatedHeading>
              <p className="text-brand-secondary text-lg leading-relaxed">
                Our Incubation Center is a dedicated space designed to nurture and accelerate early-stage startups. 
                We provide comprehensive support including mentorship, resources, funding opportunities, and a 
                collaborative environment for entrepreneurs to grow their businesses.
              </p>
              <p className="text-brand-secondary text-lg leading-relaxed">
                Through our MSME (Micro, Small & Medium Enterprises) focused approach, we help students and 
                young entrepreneurs develop sustainable business models and connect with industry experts and investors.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary">
                  Apply for Incubation
                </Button>
                <Button className="btn-secondary">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-xl transform transition duration-700 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center">
                  <Building2 className="w-32 h-32 text-indigo-400 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Provide Section */}
      <section className="page-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading className="text-brand-primary">Services We Provide</AnimatedHeading>
            <p className="text-brand-secondary max-w-2xl mx-auto mt-4">
              Comprehensive support to help your startup succeed from ideation to market launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <Users className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Mentorship</h3>
              <p className="text-brand-secondary mb-4">
                Connect with experienced entrepreneurs, industry experts, and business leaders who provide guidance and support.
              </p>
            </div>

            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <Briefcase className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Workspace</h3>
              <p className="text-brand-secondary mb-4">
                Access to modern co-working spaces, meeting rooms, and all necessary infrastructure for your startup operations.
              </p>
            </div>

            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <Target className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Business Development</h3>
              <p className="text-brand-secondary mb-4">
                Strategic planning, market research, and business model development to ensure sustainable growth.
              </p>
            </div>

            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <TrendingUp className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Funding Support</h3>
              <p className="text-brand-secondary mb-4">
                Assistance in securing funding through grants, investors, and government schemes for MSMEs.
              </p>
            </div>

            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <Award className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Legal Support</h3>
              <p className="text-brand-secondary mb-4">
                Help with company registration, IP protection, compliance, and other legal requirements for startups.
              </p>
            </div>

            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <Building2 className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Networking</h3>
              <p className="text-brand-secondary mb-4">
                Connect with fellow entrepreneurs, potential customers, and industry partners through our extensive network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incubation Process Section */}
      <section className="page-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading className="text-brand-primary">Our Incubation Process</AnimatedHeading>
            <p className="text-brand-secondary max-w-2xl mx-auto mt-4">
              A structured 6-month program designed to take your startup from idea to market-ready business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-secondary text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-brand-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-primary">Application & Selection</h3>
              <p className="text-brand-secondary">
                Submit your business idea and go through our selection process. We evaluate innovation, market potential, and team capability.
              </p>
            </div>

            <div className="card-secondary text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-brand-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-primary">Onboarding</h3>
              <p className="text-brand-secondary">
                Get introduced to our ecosystem, meet your mentors, and set up your workspace. We'll help you define your goals and milestones.
              </p>
            </div>

            <div className="card-secondary text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-brand-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-primary">Development Phase</h3>
              <p className="text-brand-secondary">
                Intensive development of your product/service, business model refinement, and market validation with regular mentor check-ins.
              </p>
            </div>

            <div className="card-secondary text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-brand-primary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-primary">Testing & Iteration</h3>
              <p className="text-brand-secondary">
                Launch your MVP, gather user feedback, and iterate based on market response. We provide testing facilities and user access.
              </p>
            </div>

            <div className="card-secondary text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-brand-primary">5</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-primary">Scaling Preparation</h3>
              <p className="text-brand-secondary">
                Prepare for scaling with financial planning, team building, and operational processes. Connect with potential investors and partners.
              </p>
            </div>

            <div className="card-secondary text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-brand-primary">6</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-primary">Graduation</h3>
              <p className="text-brand-secondary">
                Graduate from our program with a market-ready business. Continue to receive support through our alumni network and ongoing mentorship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="page-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading className="text-brand-primary">Success Stories</AnimatedHeading>
            <p className="text-brand-secondary max-w-2xl mx-auto mt-4">
              See how our incubated startups have grown and made their mark in the industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-secondary">
              <h3 className="text-2xl font-bold mb-4 text-brand-primary">TechStart Solutions</h3>
              <p className="text-brand-secondary mb-4">
                A student-founded startup that developed an AI-powered waste management system. 
                Now serving 50+ cities across India with 200+ employees.
              </p>
              <div className="flex items-center gap-2 text-brand-primary">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Successfully Graduated</span>
              </div>
            </div>

            <div className="card-secondary">
              <h3 className="text-2xl font-bold mb-4 text-brand-primary">EduTech Innovations</h3>
              <p className="text-brand-secondary mb-4">
                Created an online learning platform for rural students. 
                Raised $2M in funding and now serves 10,000+ students nationwide.
              </p>
              <div className="flex items-center gap-2 text-brand-primary">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Successfully Graduated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section">
        <div className="container mx-auto px-4 text-center">
          <div className="card-secondary max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">Ready to Incubate Your Idea?</h2>
            <p className="text-brand-secondary text-lg mb-8">
              Join our incubation program and turn your innovative idea into a successful business. 
              We provide the support, resources, and mentorship you need to succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="btn-primary">
                Apply Now
              </Button>
              <Button size="lg" className="btn-secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



