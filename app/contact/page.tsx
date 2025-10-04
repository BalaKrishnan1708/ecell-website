"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedHeading } from "@/components/ui/AnimatedHeading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    try {
      const res = await fetch("/api/contactMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitSuccess(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        const data = await res.json()
        alert("Failed to send message: " + (data.error || data.message))
      }
    } catch (err) {
      alert("Failed to send message. Please try again later.")
    }
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="page-hero relative z-20"
      >
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#3b82f6] rounded-full mix-blend-screen filter blur-xl opacity-20"
            animate={{ x: [-20, 20, -20], y: [-20, 20, -20], rotate: [0, 90, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#60a5fa] rounded-full mix-blend-screen filter blur-xl opacity-20"
            animate={{ x: [20, -20, 20], y: [20, -20, 20], rotate: [0, -90, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 5 }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-40">
          <AnimatedHeading className="text-brand-primary mb-4 text-5xl md:text-7xl">Get In Touch</AnimatedHeading>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl max-w-3xl mx-auto font-light text-brand-muted">
            We'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel
            free to reach out.
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content: Form & Info */}
      <section className="page-content">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="card-secondary"
          >
            <AnimatedHeading className="text-brand-primary text-3xl mb-8">Send Us a Message</AnimatedHeading>
            <motion.form
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
              onSubmit={handleFormSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="py-6 bg-gray-800 text-brand-secondary border-gray-700 placeholder:text-brand-muted"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="py-6 bg-gray-800 text-brand-secondary border-gray-700 placeholder:text-brand-muted"
                  />
                </motion.div>
              </div>
              <motion.div variants={itemVariants}>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="py-6 bg-gray-800 text-gray-200 border-gray-700 placeholder:text-gray-500"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="bg-gray-800 text-brand-secondary border-gray-700 placeholder:text-brand-muted"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full flex items-center gap-2 bg-[#3b82f6] text-black font-bold shadow-lg hover:shadow-xl hover:bg-[#2563eb] transition-all duration-300 transform"
                  disabled={isSubmitting}
                  asChild
                >
                  <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Send size={18} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </Button>
              </motion.div>

              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-green-400 bg-green-900 border border-green-800 text-center font-semibold mt-4 p-3 rounded-lg"
                  >
                    Thank you! Your message has been sent.
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.div>

          {/* Contact Info Section */}

        </div>
      </section>

      {/* About & Map Section */}
      <section className="page-section">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <AnimatedHeading className="text-brand-primary text-3xl mb-4">About the College</AnimatedHeading>
            <p className="text-brand-muted leading-relaxed mb-6">
              Sri Venkateswara College of Engineering (SVCE) is a premier institution known for academic excellence,
              innovative research, and a vibrant campus life. Our faculty and facilities are dedicated to nurturing
              students into skilled professionals ready to take on global challenges.
            </p>
            <AnimatedHeading className="text-brand-primary text-2xl mt-8 mb-3">How to Reach Us</AnimatedHeading>
            <p className="text-brand-muted leading-relaxed">
              We are conveniently located along the Chennai–Bengaluru Highway. Public transport and ride-hailing
              services are easily available. Ample parking space is also available for visitors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl shadow-gray-950 border-4 border-gray-700 h-[450px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.226308078517!2d79.9723236750757!3d12.95744478735848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528cd413b5e525%3A0x192d193074c86ac!2sSri%20Venkateswara%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1668589632873!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
