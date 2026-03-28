"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function PageTransitionLoader() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated Background Gradients */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full"
          />

          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.1, opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center relative z-10"
          >
            <div className="relative w-24 h-24 mb-10 group">
              <div className="absolute inset-[-20px] bg-indigo-500/20 blur-2xl rounded-full" />
              <Image 
                src="/logo.png" 
                alt="E-cell SVCE" 
                fill
                className="object-contain relative z-10 brightness-125" 
              />
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
