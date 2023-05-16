"use client"

import { useState } from "react"

import { slugify } from "@/utils/common"
import BeastCard from "./BeastCard"

export type Props = {
  rows: { beast: string }[]
}

export default function BeastCards({ rows }: Props) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredRows = rows.filter((row) =>
    row.beast.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col">
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="input bg-transparent border border-white text-white placeholder-white mx-auto block p-2 rounded w-full md:max-w-lg"
        placeholder="Search beasts..."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 overflow-auto flex-grow py-4 items-start justify-start mt-2">
        {filteredRows.map((row, index) => (
          <BeastCard key={index} href={`/druid-bestiary/${slugify(row.beast)}`} name={row.beast} />
        ))}
      </div>
    </div>
  )
}
