import { sql } from "@vercel/postgres"

import LinkCard from "@/components/LinkCard"
import { slugify } from "@/utils/common"

export default async function DruidBestiaryPage() {
  const { rows } = await sql`
    SELECT Beast 
    FROM beasts 
    ORDER BY BEAST ASC;
  `

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 80px)" }}>
      <h1 className="text-4xl md:text-6xl font-bold text-center mt-2 mb-4 md:mt-0">
        Druid Bestiary
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-auto flex-grow p-4">
        {rows.map((row, index) => (
          <LinkCard key={index} href={`/druid-bestiary/${slugify(row.beast)}`} title={row.beast} />
        ))}
      </div>
    </div>
  )
}
