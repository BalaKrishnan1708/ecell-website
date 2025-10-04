"use client"

import { motion } from "framer-motion"
import { AnimatedHeading } from "@/components/ui/AnimatedHeading"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, Users, Award, Target, Lightbulb, Briefcase, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function OurServicesPage() {
  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="page-hero relative z-20"
      >
        <div className="container mx-auto px-4 text-center relative z-40">
          <AnimatedHeading className="text-brand-primary mb-4 text-5xl md:text-6xl">Our Services</AnimatedHeading>
          <motion.p
            className="text-xl max-w-2xl mx-auto text-brand-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Comprehensive support to help you grow your business ideas and entrepreneurial skills.
          </motion.p>
        </div>
      </motion.section>

      <section className="page-content">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading className="text-brand-primary">What We Offer</AnimatedHeading>
            <p className="text-brand-secondary max-w-2xl mx-auto mt-4">
              From workshops to mentorship, we provide everything you need to succeed as an entrepreneur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <BookOpen className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Workshops & Training</h3>
              <p className="text-brand-secondary mb-4">
                Regular workshops covering business fundamentals, advanced strategies, and industry-specific knowledge.
              </p>
              <Link href="/events" className="text-brand-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                View Workshops <TrendingUp size={16} />
              </Link>
            </div>

            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <Users className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Mentorship Program</h3>
              <p className="text-brand-secondary mb-4">
                One-on-one mentorship with successful entrepreneurs and industry experts to guide your journey.
              </p>
              <Link href="/contact" className="text-brand-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Get Mentored <Users size={16} />
              </Link>
            </div>

            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <Calendar className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Events & Competitions</h3>
              <p className="text-brand-secondary mb-4">
                Participate in hackathons, pitch competitions, and networking events to showcase your ideas.
              </p>
              <Link href="/events" className="text-brand-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Join Events <Calendar size={16} />
              </Link>
            </div>

            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <Briefcase className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Incubation Support</h3>
              <p className="text-brand-secondary mb-4">
                Comprehensive incubation program to help you develop and launch your startup successfully.
              </p>
              <Link href="/incubation-center" className="text-brand-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <Briefcase size={16} />
              </Link>
            </div>

            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <Award className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Recognition & Awards</h3>
              <p className="text-brand-secondary mb-4">
                Get recognized for your innovative ideas and achievements through our awards and recognition programs.
              </p>
              <Link href="/events" className="text-brand-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                View Awards <Award size={16} />
              </Link>
            </div>

            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <Target className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Career Guidance</h3>
              <p className="text-brand-secondary mb-4">
                Expert guidance on career paths in entrepreneurship and connections to job opportunities.
              </p>
              <Link href="/contact" className="text-brand-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Get Guidance <Target size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading className="text-brand-primary">Specialized Programs</AnimatedHeading>
            <p className="text-brand-secondary max-w-2xl mx-auto mt-4">
              Targeted programs designed for specific needs and skill levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-secondary">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary">Innovation Lab</h3>
              </div>
              <p className="text-brand-secondary mb-6">
                A dedicated space for students to experiment with new ideas, prototype solutions, and collaborate on innovative projects. 
                Access to cutting-edge technology and tools.
              </p>
              <ul className="space-y-2 text-brand-secondary mb-6">
                <li>• 3D printing and prototyping facilities</li>
                <li>• Software development tools</li>
                <li>• Design thinking workshops</li>
                <li>• Collaborative workspace</li>
              </ul>
              <Button className="btn-primary w-full">
                Join Innovation Lab
              </Button>
            </div>

            <div className="card-secondary">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary">Startup Accelerator</h3>
              </div>
              <p className="text-brand-secondary mb-6">
                Intensive 3-month program for advanced startups ready to scale. Includes funding opportunities, 
                investor connections, and advanced business development support.
              </p>
              <ul className="space-y-2 text-brand-secondary mb-6">
                <li>• Seed funding opportunities</li>
                <li>• Investor pitch preparation</li>
                <li>• Market expansion strategies</li>
                <li>• Legal and compliance support</li>
              </ul>
              <Button className="btn-primary w-full">
                Apply for Accelerator
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading className="text-brand-primary">Resources & Tools</AnimatedHeading>
            <p className="text-brand-secondary max-w-2xl mx-auto mt-4">
              Access to valuable resources that will help you succeed in your entrepreneurial journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-secondary text-center">
              <h4 className="text-lg font-bold mb-3 text-brand-primary">Business Templates</h4>
              <p className="text-brand-secondary text-sm">
                Ready-to-use templates for business plans, financial projections, and pitch decks.
              </p>
            </div>

            <div className="card-secondary text-center">
              <h4 className="text-lg font-bold mb-3 text-brand-primary">Market Research</h4>
              <p className="text-brand-secondary text-sm">
                Access to industry reports, market analysis tools, and competitive intelligence.
              </p>
            </div>

            <div className="card-secondary text-center">
              <h4 className="text-lg font-bold mb-3 text-brand-primary">Legal Resources</h4>
              <p className="text-brand-secondary text-sm">
                Guides for company registration, IP protection, and compliance requirements.
              </p>
            </div>

            <div className="card-secondary text-center">
              <h4 className="text-lg font-bold mb-3 text-brand-primary">Funding Database</h4>
              <p className="text-brand-secondary text-sm">
                Comprehensive database of funding opportunities, grants, and investor contacts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container mx-auto px-4 text-center">
          <div className="card-secondary max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">Ready to Get Started?</h2>
            <p className="text-brand-secondary text-lg mb-8">
              Choose the service that best fits your needs and start your entrepreneurial journey with E-cell SVCE. 
              We're here to support you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="btn-primary">
                Explore All Services
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



