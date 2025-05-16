import type React from "react"
import "./globals.css"
import { Press_Start_2P } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-press-start",
})

export const metadata = {
  title: "Chaos Monkey Game",
  description: "A retro-style game combining Pac-Man and Snake",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={pressStart2P.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
