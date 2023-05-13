import { Inter } from "next/font/google"
import Link from "next/link"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "D&D Toolkit",
  description: "Nifty tools for tabletop dungeons and dragons players.",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const isDev = process.env.NODE_ENV === "development"; // Uncomment to seed the db
  // if (isDev) (await import("@/lib/seed")).seed(); // Uncomment to seed the db

  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${inter.className}`}>
        <nav className="flex items-center justify-center p-4">
          <Link href="/" className="text-2xl text-center">
            D&D
          </Link>
        </nav>
        <main className="flex min-h-screen flex-col items-center justify-between p-4 pt-12 md:p-24 -mt-16">
          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
