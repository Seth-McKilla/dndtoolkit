"use client"

import { useState } from "react"

import LinkCard from "@/components/LinkCard"
import { slugify } from "@/utils/common"

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
        className="input bg-transparent border border-white text-white placeholder-white mx-auto block p-2 rounded"
        placeholder="Search beasts..."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-auto flex-grow p-4 items-start justify-start">
        {filteredRows.map((row, index) => (
          <LinkCard key={index} href={`/druid-bestiary/${slugify(row.beast)}`} title={row.beast} />
        ))}
      </div>
    </div>
  )
}
