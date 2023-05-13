import Card from "@/components/Card"

export default async function HomePage() {
  return (
    <>
      <p className="text-4xl md:text-6xl font-bold text-center mt-2 md:mt-0">D&D Toolkit</p>
      <Card title="Druid Bestiary" href="/druid-bestiary" />
    </>
  )
}
