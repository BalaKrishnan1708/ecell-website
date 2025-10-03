import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Toaster } from "@/components/ui/toaster" // Assuming a toast component for notifications
import { ThemeProvider } from "@/components/theme-provider" // A common provider for light/dark mode
import { cn } from "@/lib/utils" // A utility function for conditional class names

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AIAssistant from "@/components/AIAssistant"
import "./globals.css"

// --- Font Configuration ---
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Improves font loading performance
  variable: "--font-inter",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

// --- Enhanced Metadata for SEO and Social Sharing ---
export const metadata: Metadata = {
  title: {
    default: "E-cell SVCE | Entrepreneurship Cell",
    template: "%s | E-cell SVCE", // For dynamic titles in child pages
  },
  description: "The official hub for the Entrepreneurship Cell of Sri Venkateswara College of Engineering, fostering innovation and startup culture.",
  keywords: ["entrepreneurship", "E-cell", "SVCE", "startups", "innovation", "business", "engineering"],
  authors: [{ name: "E-cell SVCE", url: "https://ecellsvce.in" }], // Replace with actual URL
  // Open Graph metadata for social media cards (e.g., Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ecellsvce.in", // Replace with actual URL
    title: "E-cell SVCE | Entrepreneurship Cell",
    description: "Fostering the spirit of entrepreneurship at SVCE.",
    siteName: "E-cell SVCE",
    images: [
      {
        url: "/og-image.png", // Recommended size: 1200x630px
        width: 1200,
        height: 630,
        alt: "E-cell SVCE Logo and Banner",
      },
    ],
  },
  // Twitter-specific metadata for Twitter cards
  twitter: {
    card: "summary_large_image",
    title: "E-cell SVCE | Entrepreneurship Cell",
    description: "Join the hub of innovation and startup culture at SVCE.",
    creator: "@ecellsvce", // Replace with your Twitter handle
    images: ["/twitter-image.png"], // Recommended size: 1200x600px
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  generator: 'v0.dev'
}

// --- Root Layout Component ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const PageTransitionLoader = require("@/components/PageTransitionLoader").default;
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          inter.variable,
          poppins.variable
        )}
      >
        {/* ThemeProvider enables light/dark mode switching */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <PageTransitionLoader />
          <div className="relative flex min-h-screen flex-col page-container">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          {/* AI Assistant for all pages */}
          <AIAssistant />
          {/* Toaster component renders notifications anywhere in the app */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}