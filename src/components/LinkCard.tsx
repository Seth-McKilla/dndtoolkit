import Link from "next/link"

interface Props {
  title: string
  href: string
}

export default function Card({ title, href }: Props) {
  return (
    <Link
      href={href}
      className="rounded border border-white text-white p-4 hover:bg-gray-200 hover:text-gray-800 w-full md:w-auto text-center"
    >
      {title}
    </Link>
  )
}
