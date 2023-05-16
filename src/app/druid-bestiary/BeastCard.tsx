import LinkCard from "@/components/LinkCard"

type Props = {
  href: string
  name: string
}

export default function BeastCard({ href, name }: Props) {
  return <LinkCard href={href}>{name}</LinkCard>
}
