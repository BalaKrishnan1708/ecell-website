"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedHeading } from "@/components/ui/AnimatedHeading"

export default function AboutPage() {
  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="page-hero"
      >
        {/* subtle wave bottom */}
        <svg aria-hidden viewBox="0 0 1440 100" className="absolute bottom-0 left-0 w-full h-16 opacity-10">
          <path
            fill="currentColor"
            d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,64C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <div className="absolute inset-0 opacity-20 flex items-center justify-center animate-pulse-slow"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedHeading className="text-brand-primary mb-4 text-5xl md:text-6xl">About Us</AnimatedHeading>
          <motion.p
            className="text-2xl max-w-2xl mx-auto font-medium drop-shadow text-brand-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            E-cell SVCE is dedicated to empowering students to become future entrepreneurs and leaders.
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="page-content"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <AnimatedHeading className="text-brand-primary text-3xl mb-4">Who We Are</AnimatedHeading>
              <p className="text-brand-muted text-lg leading-relaxed">
                The Entrepreneurship Cell (E-cell) at Sri Venkateswara College of Engineering is a vibrant,
                student-driven community that nurtures innovation, creativity, and leadership. Our mission is to inspire
                and support students in transforming their ideas into impactful ventures.
              </p>
              <p className="text-brand-secondary text-lg leading-relaxed">
                Since 2018, E-cell SVCE has championed entrepreneurship through hands-on events, workshops, and
                mentorship. We believe entrepreneurship is a mindset—one that values curiosity, resilience, and
                collaboration.
              </p>
              <ul className="space-y-4">
                {[
                  [
                    "Fostering innovation and entrepreneurial thinking",
                    "Providing resources, mentorship, and networking",
                    "Organizing workshops, seminars, and competitions",
                    "Connecting students with industry experts and investors",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-2 hover:scale-[1.02]"
                    >
                      <CheckCircle2 className="text-brand-primary mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  )),
                ]}
              </ul>
              <Button size="lg" asChild className="animate-bounce-slow">
               
              </Button>
            </div>
            <div className="relative">
              <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-xl shadow-xl">
                <img
                  src="main.png"
                  className="object-contain w-full h-auto"
                  style={{ display: 'block' }}
                  alt="E-cell group"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="page-section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading className="text-brand-primary">Our Mission & Vision</AnimatedHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              [
                {
                  title: "Our Mission",
                  text1:
                    "To create a vibrant entrepreneurial ecosystem within the college that nurtures innovation, creativity, and leadership among students.",
                  text2:
                    "We strive to bridge the gap between academic knowledge and practical application by facilitating interactions with industry experts, successful entrepreneurs, and investors.",
                  color: "text-primary",
                },
                {
                  title: "Our Vision",
                  text1:
                    "To be recognized as a premier student-run entrepreneurship cell that fosters innovation and entrepreneurship across the region.",
                  text2:
                    "We aspire to see our college as a hub for startups and innovations, where students think beyond conventional career paths.",
                  color: "text-secondary",
                },
              ].map((box, i) => (
                <div
                  key={i}
                  className="card-secondary hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <AnimatedHeading className="text-brand-primary text-2xl mb-6">{box.title}</AnimatedHeading>
                  <p className="text-brand-secondary mb-6">{box.text1}</p>
                  <p className="text-brand-secondary">{box.text2}</p>
                </div>
              )),
            ]}
          </div>
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="page-section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <AnimatedHeading className="text-brand-primary">Our Achievements</AnimatedHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              [
                { number: "20+", text: "Events Organized", color: "text-primary" },
                { number: "1000+", text: "Students Impacted", color: "text-secondary" },
                { number: "15+", text: "Startups Incubated", color: "text-accent" },
                { number: "50+", text: "Industry Collaborations", color: "text-primary" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{ animationDelay: `${i * 0.2}s` }}
                  className="card-secondary text-center transform hover:scale-110 transition duration-500 animate-fade-in-up-scale"
                >
                  <div className="text-4xl font-bold mb-2 text-brand-primary">{item.number}</div>
                  <p className="text-brand-secondary">{item.text}</p>
                </div>
              )),
            ]}
          </div>
        </div>
      </motion.section>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in-up-scale {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes slide-up-scale {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-fade-in-up-scale { animation: fade-in-up-scale 1s ease-out both; }
        .animate-slide-up-scale { animation: slide-up-scale 1.2s ease-out both; }
        .animate-pulse-slow { animation: pulse-slow 4s infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
      `}</style>
    </div>
  )
}
