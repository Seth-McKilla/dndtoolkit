import fs from "fs";
import { sql } from "@vercel/postgres";
import { parse } from "csv-parse/sync";

export async function seed() {
  await sql`DROP TABLE IF EXISTS beasts`;

  await sql`
    CREATE TABLE IF NOT EXISTS beasts (
      id SERIAL PRIMARY KEY,
      Beast TEXT NOT NULL,
      CR TEXT,
      "CR#" FLOAT,
      "Basic Familiar" BOOLEAN,
      "Beast Companion" BOOLEAN,
      Size TEXT,
      XP TEXT,
      AC TEXT,
      HP TEXT,
      Speed TEXT,
      Fly BOOLEAN,
      Swim BOOLEAN,
      Skills TEXT,
      Senses TEXT,
      Ability1 TEXT,
      Ability2 TEXT,
      Ability3 TEXT,
      Ability4 TEXT,
      Multiattack TEXT,
      Attack1 TEXT,
      Attack2 TEXT,
      "Combat Notes" TEXT, 
      STR TEXT,
      DEX TEXT,
      CON TEXT,
      INT TEXT,
      WIS TEXT,
      CHA TEXT,
      "Saving Throws" TEXT,
      Environment TEXT,
      Alignment TEXT,
      Language TEXT,
      "SourceMaterial" TEXT,
      "MM Description" TEXT
    );
  `;

  console.log(`Created "beasts" table`);

  const csvFilePath = "src/data/beast_stats.csv";
  const csvFile = fs.readFileSync(csvFilePath, "utf-8");
  const records = parse(csvFile, {
    columns: true,
    skip_empty_lines: true,
  });

  const insertQueries = records.map(async (record: any) => {
    const query = sql`
      INSERT INTO beasts (Beast, CR, "CR#", "Basic Familiar", "Beast Companion", Size, XP, AC, HP, Speed, Fly, Swim, Skills, Senses, Ability1, Ability2, Ability3, Ability4, Multiattack, Attack1, Attack2, "Combat Notes", STR, DEX, CON, INT, WIS, CHA, "Saving Throws", Environment, Alignment, Language, "SourceMaterial", "MM Description")
      VALUES (${record.Beast}, ${record.CR}, ${record["CR#"]}, ${record["Basic Familiar"]}, ${record["Beast Companion"]}, ${record.Size}, ${record.XP}, ${record.AC}, ${record.HP}, ${record.Speed}, ${record.Fly}, ${record.Swim}, ${record.Skills}, ${record.Senses}, ${record.Ability1}, ${record.Ability2}, ${record.Ability3}, ${record.Ability4}, ${record.Multiattack}, ${record.Attack1}, ${record.Attack2}, ${record["Combat Notes"]}, ${record.STR}, ${record.DEX}, ${record.CON}, ${record.INT}, ${record.WIS}, ${record.CHA}, ${record["Saving Throws"]}, ${record.Environment}, ${record.Alignment}, ${record.Language}, ${record.SourceMaterial}, ${record["MM Description"]})
      ON CONFLICT DO NOTHING;
    `;
    return query;
  });

  const results = await Promise.all(insertQueries);
  const insertedCount = results.filter(
    (result) => result.rowCount === 1
  ).length;

  console.log(`Seeded ${insertedCount} beasts`);

  return {
    beasts: results,
  };
}
