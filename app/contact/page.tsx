// The file is already correct and valid. No changes needed.
"use client"

import { useState, ChangeEvent, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:bala.ramyaram@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setSubmitSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 4000);
  };

  return (
    <div className="pt-20 bg-gradient-to-br from-primary/5 via-white to-secondary/10 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <Mail className="w-[80%] h-[80%] mx-auto" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-2xl max-w-2xl mx-auto font-medium drop-shadow">
            We’d love to hear from you! Reach out for collaborations, queries, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-2xl p-10 border border-border/30 animate-slide-up">
            <h2 className="text-3xl font-bold mb-6 text-primary">Send us a message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-white font-bold shadow-lg hover:bg-accent/90 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitSuccess && (
                <div className="text-green-600 text-center font-semibold mt-2 animate-fade-in">
                  Thank you! Your message has been sent.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center bg-primary/5 rounded-xl p-10 border border-border/30 shadow-2xl animate-slide-up">
            <h2 className="text-2xl font-bold mb-6 text-primary">Contact Information</h2>
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="text-primary" />
              <span>Sri Venkateswara College of Engineering, Sriperumbudur, Tamil Nadu 602117</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Mail className="text-primary" />
              <span>bala.ramyaram@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Phone className="text-primary" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold">Follow us on social media</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
