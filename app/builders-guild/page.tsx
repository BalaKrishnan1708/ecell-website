"use client"
import { Wrench } from "lucide-react"

export default function BuildersGuildPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative bg-[#0b1b34] text-white">
      {/* Blueprint grid artwork */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      {/* Main content for the under-construction page */}
      <div className="relative text-center p-12 rounded-xl shadow-2xl bg-white border border-blue-100 backdrop-blur-sm">
        <div className="flex justify-center items-center gap-4 mb-8">
          <h1 className="text-6xl font-extrabold text-blue-700">Builders Guild</h1>
        </div>
        <p className="text-2xl text-gray-600 mb-4">This page is currently under construction.</p>
        <div className="flex justify-center my-8">
          <Wrench className="animate-spin-slow text-blue-700" size={80} />
        </div>
        <p className="mt-6 text-lg text-blue-700 font-semibold">Stay tuned for something amazing!</p>
      </div>
    </div>
  )
}
