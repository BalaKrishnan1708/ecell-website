"use client";
import { motion } from "framer-motion";

export default function SectionCard({
  children,
  heading,
}: {
  children: React.ReactNode;
  heading?: string;
}) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#181c2a] to-[#232742] rounded-xl shadow-2xl p-8 mb-8 border-t-8 border-pink-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {heading && (
        <h2 className="text-2xl font-bold text-pink-400 mb-4 text-center drop-shadow-lg">
          {heading}
        </h2>
      )}
      <div className="text-gray-200 text-lg font-medium text-center">
        {children}
      </div>
    </motion.div>
  );
}
