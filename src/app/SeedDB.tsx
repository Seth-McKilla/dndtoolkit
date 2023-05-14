"use client"

import { useEffect } from "react"

export default function SeedDB() {
  const handleClick = async () => {
    try {
      await fetch("/api", { method: "POST" })
    } catch (error: any) {
      console.error(error)
    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  if (process.env.NODE_ENV !== "development") return null

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black">
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Seed Database
      </button>
    </div>
  )
}
