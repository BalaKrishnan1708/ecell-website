
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransitionLoader() {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    setShow(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShow(false), 300); // fade out
    }, 500); // 0.5 second
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="mb-6">
              <img src="/logo1.jpg" alt="Ecell Logo" className="h-20 w-20 mx-auto" />
            </div>
            <svg className="mx-auto" width="40" height="40" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="16" stroke="#222" strokeWidth="4" fill="none" opacity="0.2" />
              <path d="M20 4 a16 16 0 0 1 0 32" stroke="#222" strokeWidth="4" fill="none" strokeLinecap="round">
                <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.7s" repeatCount="indefinite" />
              </path>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
