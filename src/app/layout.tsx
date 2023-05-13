import { Inter } from "next/font/google"
import Link from "next/link"
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "D&D Toolkit",
  description: "Nifty tools for tabletop dungeons and dragons players.",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // if (process.env.NODE_ENV === "development") (await import("@/lib/seed")).seed() // Uncomment to seed the db

  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${inter.className}`}>
        <nav className="flex items-center justify-center p-4">
          <Link href="/" className="flex items-center justify-center text-2xl">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-sm">
              D <WrenchScrewdriverIcon className="h-4 w-4" /> D
            </div>
          </Link>
        </nav>
        <main className="flex min-h-screen flex-col items-center justify-between p-4 pt-16 md:p-24 -mt-20">
          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
