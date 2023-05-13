import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DnD Toolkit",
  description: "Nifty tools for tabletop dungeon and dragons players.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (process.env.NODE_ENV === "development") {
    const { seed } = await import("@/lib/seed");

    try {
      await seed();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
