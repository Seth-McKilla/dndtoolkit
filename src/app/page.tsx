import Card from "@/components/Card";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8 mt-4 md:mt-0">
        <p className="text-4xl md:text-6xl font-bold text-center mt-2 md:mt-0">D&D Toolkit</p>
        <Card title="Druid Bestiary" href="/druid-bestiary" />
      </div>
    </main>
  );
}
