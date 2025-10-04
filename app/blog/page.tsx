"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedHeading } from "@/components/ui/AnimatedHeading"

function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white"
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

const numStageOne = 50;
const numStageTwo = 135;
const monthsOrder = ["April", "May", "June", "July", "August", "September", "October", "November", "December"];

function generateBlogPosts() {
  // April 6, 2025 is the start date for 1.png (stage one)
  const startDate = new Date(2025, 3, 6); // Month is 0-indexed, so 3 = April
  const blogPosts: any[] = [];
  for (let i = 0; i < numStageOne; i++) {
    const date = new Date(startDate.getTime());
    date.setDate(startDate.getDate() + i);
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    const image = `/stage one/${i + 1}.png`;
    blogPosts.push({
      date,
      dateString: `${month} ${day}, ${year}`,
      month,
      year,
      image,
      content: `Blog ${month} ${day}, ${year}`,
    });
  }
  // Continue with stage two: 1-135
  // The next day after the last stage one image
  let stageTwoStartDate = new Date(startDate.getTime());
  stageTwoStartDate.setDate(startDate.getDate() + numStageOne);
  for (let i = 1; i <= numStageTwo; i++) {
    const date = new Date(stageTwoStartDate.getTime());
    date.setDate(stageTwoStartDate.getDate() + (i - 1));
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.getDate();
    const year = date.getFullYear();
    const image = `/stage two/${i}.png`;
    blogPosts.push({
      date,
      dateString: `${month} ${day}, ${year}`,
      month,
      year,
      image,
      content: `Blog ${month} ${day}, ${year}`,
    });
  }
  return blogPosts;
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
      <div className="min-h-screen flex items-center justify-center bg-[#0b1b34]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl text-blue-300 font-bold"
        >
          Loading Blog...
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen relative overflow-hidden mt-24">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ filter: "brightness(0.45)" }}
      >
        <source src="/your-ai-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="fixed inset-0 z-10 bg-[#0b1b34]/60 pointer-events-none" />
      <div className="fixed inset-0 z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100%_3px] pointer-events-none" />

      <div className="relative z-20 py-12 px-4 pb-32">
        <div className="max-w-3xl mx-auto">
          <AnimatedHeading className="text-blue-300 mb-8 pb-2">Blog - 2025</AnimatedHeading>

          {monthsOrder.map(
            (month) =>
              postsByMonth[month]?.length > 0 && (
                <motion.div
                  key={month}
                  className="mb-12"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <motion.button
                    className={`w-full text-left text-3xl font-bold px-4 py-3 rounded-lg transition-all duration-300 mb-2 border-b-2 ${openMonth === month ? "bg-white/10 text-blue-300 border-blue-500" : "bg-black/30 text-blue-200 border-blue-900/60"}`}
                    onClick={() => setOpenMonth(openMonth === month ? null : month)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {month} 2025
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {openMonth === month && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <div className="flex flex-wrap gap-2 py-4">
                          {postsByMonth[month]?.map((post, idx) => (
                            <motion.button
                              key={post.dateString}
                              className={`rounded px-3 py-1 border font-medium text-sm ${selectedDay?.month === month && selectedDay?.idx === idx ? "bg-blue-500 text-white border-blue-500" : "bg-black/40 text-blue-300 border-blue-700 hover:bg-white/10"}`}
                              onClick={() => setSelectedDay({ month, idx })}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {post.date.getDate()}
                            </motion.button>
                          ))}
                        </div>

                        <AnimatePresence>
                          {selectedDay?.month === month && (
                            <motion.div
                              key={postsByMonth[month][selectedDay.idx].dateString}
                              className="bg-white/10 rounded-xl shadow-lg p-6 mt-4 border-t-4 border-blue-500"
                              initial={{ opacity: 0, y: 30 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 30 }}
                              transition={{ duration: 0.5 }}
                            >
                              <div className="flex items-center gap-4 mb-4">
                                <AnimatedHeading className="text-2xl mb-0 text-blue-300">
                                  {postsByMonth[month][selectedDay.idx].dateString}
                                </AnimatedHeading>
                                <span className="inline-block bg-white/10 text-blue-300 font-semibold rounded-full px-4 py-1 text-lg border border-blue-500">
                                  Day Streak:{" "}
                                  {blogPosts.findIndex(
                                    (p) => p.dateString === postsByMonth[month][selectedDay.idx].dateString,
                                  ) + 1}
                                </span>
                              </div>

                              <motion.div
                                className="w-full h-96 bg-gray-800/60 rounded-lg flex items-center justify-center mb-6 overflow-hidden cursor-zoom-in"
                                onClick={() =>
                                  setModalImg({
                                    src: postsByMonth[month][selectedDay.idx].image,
                                    alt: `Blog ${postsByMonth[month][selectedDay.idx].dateString}`,
                                  })
                                }
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <img
                                  src={postsByMonth[month][selectedDay.idx].image || "/placeholder.svg"}
                                  alt={`Blog ${postsByMonth[month][selectedDay.idx].dateString}`}
                                  className="object-contain max-h-96 w-auto mx-auto"
                                />
                              </motion.div>

                              <div className="text-gray-200 text-lg font-medium">
                                {postsByMonth[month][selectedDay.idx].content}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ),
          )}
        </div>
      </div>

      {modalImg && (
        <ImageModal src={modalImg.src || "/placeholder.svg"} alt={modalImg.alt} onClose={() => setModalImg(null)} />
      )}
    </div>
  )
}
