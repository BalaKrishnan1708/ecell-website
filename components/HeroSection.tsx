"use client";
import { motion } from "framer-motion";

export default function HeroSection({
  background,
  title,
  subtitle,
}: {
  background: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative w-full h-screen flex items-center justify-start overflow-hidden">
      <img
        src={background}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-contain md:object-cover object-center z-0"
        style={{ filter: "none" }}
      />
      <motion.div
        className="relative z-20 text-left px-8 py-10 max-w-xl bg-transparent"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-indigo-400 drop-shadow-xl tracking-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-300 drop-shadow-lg">
          {subtitle}
        </p>
        <motion.button
          className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-bold rounded-full shadow-lg hover:from-indigo-600 hover:to-indigo-700 transition text-lg"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >Explore</motion.button>
      </motion.div>
    </div>
  );
}
