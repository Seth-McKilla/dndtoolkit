import { sql } from "@vercel/postgres"

import { toTitleCase } from "@/utils/common"

export default async function DruidBestiaryPage({ params }: { params: { slug: string } }) {
  const beast = toTitleCase(params.slug)

  const { rows } = await sql`
    SELECT *
    FROM beasts
    WHERE beast = ${beast};
  `
  const beastInfo = rows[0]

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 80px)" }}>
      <h1 className="text-4xl md:text-6xl font-bold text-center mt-2 mb-4 md:mt-0">{beast}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-auto flex-grow p-4">
        {beastInfo &&
          Object.keys(beastInfo).map((key, index) => {
            return (
              <div key={index} className="flex flex-col">
                <h2 className="text-xl font-bold">{key}</h2>
                <p className="text-lg">{beastInfo[key]}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}
