import { Inter } from "next/font/google"
import Link from "next/link"
import PlausibleProvider from "next-plausible"

import SeedDB from "./SeedDB"
import "./globals.css"
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons"

import Icon from "@/components/Icon"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "D&D Toolkit",
  description: "Nifty tools for tabletop dungeons and dragons players.",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="dndtoolkit.vercel.app" />
      </head>
      <body className={`overflow-x-hidden ${inter.className}`}>
        {/* <SeedDB /> */}
        <nav className="flex items-center justify-center p-4">
          <Link href="/" className="flex items-center justify-center text-2xl">
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-sm p-0.5">
              D
              <Icon icon={faScrewdriverWrench} size={12} color="#ffffff" /> D
            </div>
          </Link>
        </nav>
        <main className="flex min-h-screen flex-col items-center justify-between p-4 pt-16 -mt-20">
          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8 w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
