"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedHeading } from "@/components/ui/AnimatedHeading"
import { Calendar, ChevronRight } from "lucide-react"

// Image modal with zoom & fade animation
function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white/10 object-contain"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
        />
        <motion.button
          className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white text-2xl sm:text-3xl font-bold bg-black/60 rounded-full px-4 py-2 hover:bg-black/90 transition"
          onClick={onClose}
          aria-label="Close image"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          &times;
        </motion.button>
      </motion.div>
    </AnimatePresence>
  )
}

// BLOG CONTENT GENERATOR - Bound from April 6, 2025 to January 13, 2026 (Academic Year 2025-2026)
const numStageOne = 50
const numStageTwo = 205
const totalImages = numStageOne + numStageTwo
const monthsOrder = ["April", "May", "June", "July", "August", "September", "October", "November", "December", "January"]

function generateBlogPosts() {
  const startDate = new Date(2025, 3, 6) // April 6, 2025
  const endDate = new Date(2026, 0, 13) // January 13, 2026 (Removed Jan 14 to March 27)
  
  const totalDays = Math.max(1, Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1) // ~283 days
  const blogPosts: any[] = []
  let imageIndex = 0
  
  for (let i = 0; i < totalDays; i++) {
    const date = new Date(startDate.getTime())
    date.setDate(startDate.getDate() + i)
    
    // Stop if past Jan 13, 2026
    if (date > endDate) break

    const month = date.toLocaleString("en-US", { month: "long" })
    const day = date.getDate()
    const year = date.getFullYear()
    
    // Skip Jan 14 onwards if generated date slips beyond bounds
    if (year === 2026 && month === "January" && day > 13) continue
    if (year === 2026 && (month === "February" || month === "March")) continue

    const imagePath = (imageIndex < totalImages)
      ? (imageIndex < numStageOne 
          ? `/stage one/${imageIndex + 1}.png` 
          : `/stage two/${imageIndex - numStageOne + 1}.png`)
      : `/stage one/1.png`

    blogPosts.push({
      date,
      dateString: `${month} ${day}, ${year}`,
      month,
      year,
      image: imagePath,
      content: `Official daily blog update & venture insight for SVCE E-Cell community archive - ${month} ${day}, ${year}.`,
    })
    
    imageIndex = (imageIndex + 1) % totalImages
  }
  return blogPosts
}

function groupPostsByMonth(blogPosts: any[]) {
  const postsByMonth: Record<string, any[]> = {}
  monthsOrder.forEach((month) => {
    postsByMonth[month] = blogPosts.filter((post) => post.month === month)
  })
  return postsByMonth
}

export default function BlogPage() {
  const [openMonth, setOpenMonth] = useState<string | null>(null)
  const [selectedDay, setSelectedDay] = useState<{ month: string; idx: number } | null>(null)
  const [modalImg, setModalImg] = useState<{ src: string; alt: string } | null>(null)
  const [postsByMonth, setPostsByMonth] = useState<Record<string, any[]> | null>(null)
  const [blogPosts, setBlogPosts] = useState<any[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const posts = generateBlogPosts()
    setBlogPosts(posts)
    const grouped = groupPostsByMonth(posts)
    setPostsByMonth(grouped)
    setOpenMonth(monthsOrder[0])
    setLoading(false)
  }, [])

  if (loading || !postsByMonth || !blogPosts) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <div className="text-xl font-bold text-indigo-400 animate-pulse">Loading Blog Archive...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden pt-28 pb-32 flex flex-col page-container bg-grid">
      <div className="relative z-40 px-4 sm:px-6 flex-1">
        <div className="max-w-4xl mx-auto">
          
          {/* Header & Academic Year Banner */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-bold text-indigo-400 uppercase tracking-widest mb-6">
              <Calendar size={14} /> Academic Year 2025 – 2026
            </div>
            <AnimatedHeading className="text-white text-4xl sm:text-5xl md:text-6xl mb-4">
              Blog Archive
            </AnimatedHeading>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto font-medium">
              Daily logs, milestone updates, and venture stories across Academic Year 2025–2026.
            </p>
          </div>

          {/* Academic Year Grouping Container */}
          <div className="glass-card rounded-[2.5rem] p-4 sm:p-8 border border-white/10 shadow-2xl">
            <div className="border-b border-white/10 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Academic Year 2025–2026</h2>
                <p className="text-xs text-gray-400 font-medium">April 2025 to January 13, 2026</p>
              </div>
              <span className="text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold px-4 py-1.5 rounded-full w-fit">
                {blogPosts.length} Entries Logged
              </span>
            </div>

            {/* Months Accordion */}
            <div className="space-y-6">
              {monthsOrder.map(
                (month) =>
                  postsByMonth[month]?.length > 0 && (
                    <div key={month} className="border-b border-white/5 pb-4 last:border-0">
                      <button
                        className={`w-full text-left text-xl sm:text-3xl font-black uppercase tracking-tighter px-4 py-3 sm:px-6 sm:py-4 transition-all duration-300 rounded-2xl flex items-center justify-between ${
                          openMonth === month 
                            ? "text-indigo-400 bg-indigo-500/10 border border-indigo-500/20" 
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                        onClick={() => setOpenMonth(openMonth === month ? null : month)}
                      >
                        <span className="flex items-center gap-3">
                          {month} {month === "January" ? "2026" : "2025"}
                          <span className="text-xs font-bold text-gray-500 lowercase bg-black/40 px-3 py-1 rounded-full border border-white/5">
                            {postsByMonth[month].length} posts
                          </span>
                        </span>
                        <ChevronRight className={`w-6 h-6 transition-transform duration-300 ${openMonth === month ? "rotate-90 text-indigo-400" : "text-gray-500"}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {openMonth === month && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            {/* Day Selection Grid */}
                            <div className="flex flex-wrap gap-2 py-6 px-2">
                              {postsByMonth[month]?.map((post, idx) => (
                                <button
                                  key={post.dateString}
                                  className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center border transition-all ${
                                    selectedDay?.month === month && selectedDay?.idx === idx 
                                      ? "bg-indigo-600 text-white border-indigo-400 shadow-[0_0_15px_rgba(79,70,229,0.5)] scale-105" 
                                      : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
                                  }`}
                                  onClick={() => setSelectedDay({ month, idx })}
                                >
                                  {post.date.getDate()}
                                </button>
                              ))}
                            </div>

                            {/* Active Day Post Card */}
                            <AnimatePresence mode="wait">
                              {selectedDay?.month === month && postsByMonth[month][selectedDay.idx] && (
                                <motion.div
                                  key={postsByMonth[month][selectedDay.idx].dateString}
                                  className="bg-black/50 border border-white/10 rounded-3xl p-6 sm:p-8 mt-2 shadow-2xl"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter">
                                      {postsByMonth[month][selectedDay.idx].dateString}
                                    </h3>
                                    <span className="text-indigo-400 font-bold text-xs uppercase tracking-widest px-4 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20 w-fit">
                                      Day Streak: {blogPosts.findIndex((p) => p.dateString === postsByMonth[month][selectedDay.idx].dateString) + 1}
                                    </span>
                                  </div>

                                  <div
                                    className="w-full aspect-video bg-white/5 rounded-2xl flex items-center justify-center mb-6 overflow-hidden cursor-zoom-in border border-white/10 group relative"
                                    onClick={() =>
                                      setModalImg({
                                        src: postsByMonth[month][selectedDay.idx].image,
                                        alt: `Blog ${postsByMonth[month][selectedDay.idx].dateString}`,
                                      })
                                    }
                                  >
                                    <img
                                      src={postsByMonth[month][selectedDay.idx].image}
                                      alt={`Blog ${postsByMonth[month][selectedDay.idx].dateString}`}
                                      className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-bold uppercase tracking-widest text-white">
                                      Click to view full size
                                    </div>
                                  </div>

                                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
                                    {postsByMonth[month][selectedDay.idx].content}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>

      {modalImg && (
        <ImageModal src={modalImg.src} alt={modalImg.alt} onClose={() => setModalImg(null)} />
      )}
    </div>
  )
}
