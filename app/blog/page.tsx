"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedHeading } from "@/components/ui/AnimatedHeading"

// Image modal with zoom & fade animation
function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white/10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
        />
        <motion.button
          className="absolute top-8 right-8 text-white text-3xl font-bold bg-black/60 rounded-full px-4 py-2 hover:bg-black/90 transition"
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

// BLOG CONTENT GENERATOR
const numStageOne = 50
const numStageTwo = 272
const totalImages = numStageOne + numStageTwo
const monthsOrder = ["April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March"]

function generateBlogPosts() {
  const startDate = new Date(2025, 3, 6) // April 6, 2025
  const endDate = new Date(2026, 2, 27) // March 27, 2026
  
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1 // 356
  const skipInterval = totalDays / (totalDays - totalImages) // 356 / 34 ≈ 10.47
  
  const blogPosts: any[] = []
  let imageIndex = 0
  
  for (let i = 0; i < totalDays && imageIndex < totalImages; i++) {
    const isMissed = (i % Math.round(skipInterval)) === 0 && (totalDays - i) > (totalImages - imageIndex) && i > 0 && i < totalDays - 1;
    
    const date = new Date(startDate.getTime())
    date.setDate(startDate.getDate() + i)
    
    if (!isMissed) {
      const month = date.toLocaleString("en-US", { month: "long" })
      const day = date.getDate()
      const year = date.getFullYear()
      const imagePath = imageIndex < numStageOne 
        ? `/stage one/${imageIndex + 1}.png` 
        : `/stage two/${imageIndex - numStageOne + 1}.png`
        
      blogPosts.push({
        date,
        dateString: `${month} ${day}, ${year}`,
        month,
        year,
        image: imagePath,
        content: `Blog update shared with the SVCE E-Cell community archive for ${month} ${day}, ${year}.`,
      })
      imageIndex++
    }
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
    const blogPosts = generateBlogPosts()
    setBlogPosts(blogPosts)
    setPostsByMonth(groupPostsByMonth(blogPosts))
    setOpenMonth(monthsOrder[0])
    setLoading(false)
  }, [])

  if (loading || !postsByMonth || !blogPosts) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <div className="text-xl font-bold text-indigo-400">Loading Blog...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden mt-24 flex flex-col page-container bg-grid">
      <div className="relative z-40 py-12 px-4 pb-32 flex-1">
        <div className="max-w-3xl mx-auto">
          <AnimatedHeading className="text-white mb-12 text-5xl">Blog Archive</AnimatedHeading>
          
          {monthsOrder.map(
            (month) =>
              postsByMonth[month]?.length > 0 && (
                <div key={month} className="mb-12">
                  <button
                    className={`w-full text-left text-3xl font-black uppercase tracking-tighter px-6 py-4 transition-all duration-300 mb-2 border-b-2 ${
                      openMonth === month 
                        ? "text-indigo-400 border-indigo-500" 
                        : "text-gray-400 border-white/5 hover:text-white"
                    }`}
                    onClick={() => setOpenMonth(openMonth === month ? null : month)}
                  >
                    {month} {month === "January" || month === "February" || month === "March" ? "2026" : "2025"}
                  </button>
                  <AnimatePresence initial={false}>
                    {openMonth === month && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <div className="flex flex-wrap gap-2 py-6">
                          {postsByMonth[month]?.map((post, idx) => (
                            <button
                              key={post.dateString}
                              className={`w-10 h-10 rounded flex items-center justify-center border transition-all ${
                                selectedDay?.month === month && selectedDay?.idx === idx 
                                  ? "bg-indigo-600 text-white border-indigo-500" 
                                  : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10"
                              }`}
                              onClick={() => setSelectedDay({ month, idx })}
                            >
                              {post.date.getDate()}
                            </button>
                          ))}
                        </div>
                        <AnimatePresence mode="wait">
                          {selectedDay?.month === month && (
                            <motion.div
                              key={postsByMonth[month][selectedDay.idx].dateString}
                              className="glass-card rounded-3xl p-8 mt-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                                  {postsByMonth[month][selectedDay.idx].dateString}
                                </h3>
                                <span className="text-indigo-400 font-bold text-xs uppercase tracking-widest px-4 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                                  Day Streak: {blogPosts.findIndex((p) => p.dateString === postsByMonth[month][selectedDay.idx].dateString) + 1}
                                </span>
                              </div>
                              <div
                                className="w-full aspect-video bg-white/5 rounded-2xl flex items-center justify-center mb-6 overflow-hidden cursor-zoom-in"
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
                                  className="object-contain h-full w-full"
                                />
                              </div>
                              <div className="text-gray-400 text-lg leading-relaxed">
                                {postsByMonth[month][selectedDay.idx].content}
                              </div>
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
      {modalImg && (
        <ImageModal src={modalImg.src} alt={modalImg.alt} onClose={() => setModalImg(null)} />
      )}
    </div>
  )
}
