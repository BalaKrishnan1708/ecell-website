import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-20 bg-gradient-to-br from-primary/5 via-white to-secondary/10 min-h-screen relative">
      {/* College Logo Top Right */}
      <div className="absolute top-6 right-8 z-50">
        <Image src="/svce.jpg" alt="SVCE College Logo" width={120} height={30} className="object-contain" />
      </div>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 flex items-center justify-center">
          <Image src="/logo.jpg" alt="E-cell SVCE Logo" width={164} height={104} className="object-contain mx-auto" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">About Us</h1>
          <p className="text-2xl max-w-2xl mx-auto font-medium drop-shadow">
            E-cell SVCE is dedicated to empowering students to become future entrepreneurs and leaders.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Who We Are</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                The Entrepreneurship Cell (E-cell) at Sri Venkateswara College of Engineering is a vibrant, student-driven community that nurtures innovation, creativity, and leadership. Our mission is to inspire and support students in transforming their ideas into impactful ventures.
              </p>
              <p className="text-muted-foreground mb-6 text-lg">
                Since 2015, E-cell SVCE has championed entrepreneurship through hands-on events, workshops, and mentorship. We believe entrepreneurship is a mindset—one that values curiosity, resilience, and collaboration.
              </p>
              <ul className="space-y-4 mb-8 list-none">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" />
                  <span>Fostering innovation and entrepreneurial thinking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" />
                  <span>Providing resources, mentorship, and networking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" />
                  <span>Organizing workshops, seminars, and competitions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent mt-1 flex-shrink-0" />
                  <span>Connecting students with industry experts and investors</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
            <div className="relative">
              <div className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-xl">
                <Image src="/placeholder.svg?height=1000&width=800" alt="E-cell Team" fill className="object-cover" />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-border/50">
              <h3 className="text-2xl font-bold mb-6 text-primary">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To create a vibrant entrepreneurial ecosystem within the college that nurtures innovation, creativity,
                and leadership among students. We aim to provide a platform for students to explore their
                entrepreneurial potential and equip them with the necessary skills and resources to turn their ideas
                into reality.
              </p>
              <p className="text-muted-foreground">
                We strive to bridge the gap between academic knowledge and practical application by facilitating
                interactions with industry experts, successful entrepreneurs, and investors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-border/50">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Our Vision</h3>
              <p className="text-muted-foreground mb-6">
                To be recognized as a premier student-run entrepreneurship cell that fosters innovation and
                entrepreneurship not just within the college but across the region. We envision creating a community of
                student entrepreneurs who contribute to economic growth and social development.
              </p>
              <p className="text-muted-foreground">
                We aspire to see our college as a hub for startups and innovations, where students are motivated to
                think beyond conventional career paths and explore entrepreneurship as a viable option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Achievements</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-border/50 text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <p className="text-muted-foreground">Events Organized</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-border/50 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
              <p className="text-muted-foreground">Students Impacted</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-border/50 text-center">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground">Startups Incubated</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-border/50 text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Industry Collaborations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Partners</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-lg border border-border/50 flex items-center justify-center"
              >
                <Image
                  src="/placeholder-logo.svg"
                  alt={`Partner ${i}`}
                  width={150}
                  height={75}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Become a part of E-cell SVCE and embark on an exciting journey of entrepreneurship and innovation.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Join Now
          </Button>
        </div>
      </section>
    </div>
  )
}
