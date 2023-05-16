import LinkCard from "@/components/LinkCard"

export default async function HomePage() {
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold text-center mt-2 md:mt-0">D&D Toolkit</h1>
      <LinkCard href="/druid-bestiary">Druid Bestiary</LinkCard>
    </>
  )
}
