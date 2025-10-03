"use client"

import { motion } from "framer-motion"
import { AnimatedHeading } from "@/components/ui/AnimatedHeading"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, Target, Users, BookOpen, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function EntrepreneurshipPage() {
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
          <AnimatedHeading className="text-brand-primary mb-4 text-5xl md:text-6xl">Entrepreneurship</AnimatedHeading>
          <motion.p
            className="text-xl max-w-2xl mx-auto text-brand-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Start your entrepreneurial journey with us. Learn, innovate, and build the future.
          </motion.p>
        </div>
      </motion.section>

      {/* What is Entrepreneurship Section */}
      <section className="page-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <AnimatedHeading className="text-brand-primary text-3xl mb-4">What is Entrepreneurship?</AnimatedHeading>
              <p className="text-brand-secondary text-lg leading-relaxed">
                Entrepreneurship is the process of designing, launching, and running a new business, which is typically 
                initially a small business. It involves taking risks, being innovative, and creating value in the market.
              </p>
              <p className="text-brand-secondary text-lg leading-relaxed">
                At E-cell SVCE, we believe entrepreneurship is not just about starting a business—it's about developing 
                a mindset that embraces challenges, seeks opportunities, and creates positive impact in society.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary">
                  Start Your Journey
                </Button>
                <Button className="btn-secondary">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-xl transform transition duration-700 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center">
                  <Lightbulb className="w-32 h-32 text-indigo-400 opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="page-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading className="text-brand-primary">Key Areas We Cover</AnimatedHeading>
            <p className="text-brand-secondary max-w-2xl mx-auto mt-4">
              Our comprehensive entrepreneurship program covers all essential aspects of starting and running a business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <Target className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Business Planning</h3>
              <p className="text-brand-secondary mb-4">
                Learn to create comprehensive business plans, market analysis, and financial projections that investors and stakeholders will value.
              </p>
            </div>

            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <Users className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Team Building</h3>
              <p className="text-brand-secondary mb-4">
                Master the art of building and leading high-performing teams that share your vision and drive your business forward.
              </p>
            </div>

            <div className="card-primary group hover:-translate-y-2 duration-3">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <BookOpen className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Market Research</h3>
              <p className="text-brand-secondary mb-4">
                Understand your target market, analyze competition, and identify opportunities that others might miss.
              </p>
            </div>

            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <TrendingUp className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Growth Strategy</h3>
              <p className="text-brand-secondary mb-4">
                Develop sustainable growth strategies that scale your business while maintaining quality and customer satisfaction.
              </p>
            </div>

            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <Lightbulb className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Innovation</h3>
              <p className="text-brand-secondary mb-4">
                Foster a culture of innovation and creativity to stay ahead of the competition and meet evolving market needs.
              </p>
            </div>

            <div className="card-primary group hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/30 transition">
                <ArrowRight className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Execution</h3>
              <p className="text-brand-secondary mb-4">
                Learn to execute your ideas effectively, manage resources, and overcome obstacles that come your way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="page-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading className="text-brand-primary">Our Programs</AnimatedHeading>
            <p className="text-brand-secondary max-w-2xl mx-auto mt-4">
              Join our structured programs designed to take you from idea to successful business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-secondary">
              <h3 className="text-2xl font-bold mb-4 text-brand-primary">Beginner's Bootcamp</h3>
              <p className="text-brand-secondary mb-6">
                A 4-week intensive program covering the fundamentals of entrepreneurship. Perfect for students who are new to business concepts.
              </p>
              <ul className="space-y-2 text-brand-secondary mb-6">
                <li>• Business idea validation</li>
                <li>• Basic financial planning</li>
                <li>• Market research techniques</li>
                <li>• Pitching fundamentals</li>
              </ul>
              <Button className="btn-primary w-full">
                Enroll Now
              </Button>
            </div>

            <div className="card-secondary">
              <h3 className="text-2xl font-bold mb-4 text-brand-primary">Advanced Workshop</h3>
              <p className="text-brand-secondary mb-6">
                For students with existing business ideas. Deep dive into advanced strategies and real-world implementation.
              </p>
              <ul className="space-y-2 text-brand-secondary mb-6">
                <li>• Advanced business modeling</li>
                <li>• Funding strategies</li>
                <li>• Legal and compliance</li>
                <li>• Scaling techniques</li>
              </ul>
              <Button className="btn-primary w-full">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section">
        <div className="container mx-auto px-4 text-center">
          <div className="card-secondary max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">Ready to Start Your Journey?</h2>
            <p className="text-brand-secondary text-lg mb-8">
              Join hundreds of students who have already started their entrepreneurial journey with E-cell SVCE. 
              Your next big idea could be just one workshop away.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="btn-primary">
                Get Started Today
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

