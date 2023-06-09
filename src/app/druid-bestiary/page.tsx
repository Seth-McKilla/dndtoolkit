import { sql } from "@vercel/postgres"

import BeastCards, { type Props as BeastCardsProps } from "./BeastCards"

export default async function DruidBestiaryPage() {
  const { rows } = (await sql`
    SELECT Beast, SUBSTRING(HP, '^[0-9]+')::integer as hp, "CR#" as cr, Fly, Swim
    FROM beasts 
    ORDER BY BEAST ASC;
  `) as BeastCardsProps

  return (
    <div className="flex flex-col w-full" style={{ height: "calc(100vh - 80px)" }}>
      <h1 className="text-4xl md:text-6xl font-bold text-center mt-2 mb-4 md:mt-0">
        Druid Bestiary
      </h1>
      <BeastCards rows={rows} />
    </div>
  )
}
