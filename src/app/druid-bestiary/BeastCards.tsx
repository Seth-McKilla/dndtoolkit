"use client"

import { useState } from "react"

import { slugify } from "@/utils/common"
import BeastCard, { type Beast } from "./BeastCard"

export type Props = {
  rows: Beast[]
}

export default function BeastCards({ rows }: Props) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortKey, setSortKey] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")

  const filteredRows = rows.filter((row) =>
    row.beast.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSort = (key: string) => {
    if (key === sortKey) {
      // If the same key is clicked again, toggle the sort order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      // If a new key is clicked, set the sort key and default to ascending order
      setSortKey(key)
      setSortOrder("asc")
    }
  }

  const compareValues = (key: string, order = "asc") => {
    return function (a: any, b: any) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // Property doesn't exist on either object
        return 0
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key]
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key]

      let comparison = 0
      if (varA > varB) {
        comparison = 1
      } else if (varA < varB) {
        comparison = -1
      }

      return order === "desc" ? comparison * -1 : comparison
    }
  }

  const sortedRows = sortKey
    ? filteredRows.slice().sort(compareValues(sortKey, sortOrder))
    : filteredRows

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center mb-2 mx-auto w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="input bg-transparent border border-white text-white placeholder-white p-2 rounded w-full md:w-[350px]"
          placeholder="Search beasts..."
        />

        <div className="mt-4">
          <label htmlFor="sortSelect" className="mr-2 text-white">
            Sort:
          </label>
          <select
            id="sortSelect"
            value={sortKey}
            onChange={(event) => handleSort(event.target.value)}
            className="input bg-black border border-white text-white"
          >
            <option value="">None</option>
            <option value="hp">HP</option>
            <option value="cr">CR#</option>
          </select>
          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
            className="input bg-black border border-white text-white ml-2"
          >
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 overflow-auto flex-grow py-4 items-start justify-start mt-2">
        {sortedRows.map((row, index) => (
          <BeastCard key={index} href={`/druid-bestiary/${slugify(row.beast)}`} {...row} />
        ))}
      </div>
    </div>
  )
}
