"use client";

import type * as React from "react"
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4"
  delay?: number
}

export function AnimatedHeading({ as = "h2", className, children, delay = 0, ...rest }: Props) {
  const Tag = as
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [1, 0, 0, 1] 
      }}
    >
      <Tag 
        className={cn("font-black tracking-tighter text-pretty relative", className)} 
        {...rest}
      >
        {children}
      </Tag>
    </motion.div>
  )
}
