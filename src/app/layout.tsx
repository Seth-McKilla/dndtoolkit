import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const isDev = process.env.NODE_ENV === "development";

export const metadata = {
  title: "D&D Toolkit",
  description: "Nifty tools for tabletop dungeons and dragons players.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // if (isDev) (await import("@/lib/seed")).seed(); // Uncomment to seed the db

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
