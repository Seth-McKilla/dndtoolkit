import Link from "next/link"

type Props = {
  children: React.ReactNode
  href: string
}

export default function LinkCard({ children, href }: Props) {
  return (
    <Link
      href={href}
      className="rounded border border-white text-white p-4 hover:bg-gray-400 hover:text-black w-full md:w-auto text-center"
    >
      {children}
    </Link>
  )
}
