import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AIAssistant from "@/components/AIAssistant"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "E-cell SVCE | Entrepreneurship Cell",
  template: "%s | E-cell SVCE",
  },
  description: "The official hub for the Entrepreneurship Cell of Sri Venkateswara College of Engineering, fostering innovation and startup culture.",
  keywords: ["entrepreneurship", "E-cell", "SVCE", "startups", "innovation", "business", "engineering"],
  authors: [{ name: "E-cell SVCE", url: "https://ecellsvce.in" }],
  openGraph: {
    type: "website",
    locale: "en_US",
  url: "https://ecellsvce.in",
    title: "E-cell SVCE | Entrepreneurship Cell",
    description: "Fostering the spirit of entrepreneurship at SVCE.",
    siteName: "E-cell SVCE",
    images: [
      {
  url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "E-cell SVCE Logo and Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-cell SVCE | Entrepreneurship Cell",
    description: "Join the hub of innovation and startup culture at SVCE.",
  creator: "@ecellsvce",
  images: ["/twitter-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  generator: 'v0.dev'
}

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
          <AIAssistant />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}