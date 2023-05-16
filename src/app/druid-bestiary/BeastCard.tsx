import LinkCard from "@/components/LinkCard"

export type Beast = {
  beast: string
  hp: string
  cr: number
  fly: boolean
  swim: boolean
}

type Props = {
  href: string
} & Beast

export default function BeastCard({ href, beast, hp, cr, fly, swim }: Props) {
  return <LinkCard href={href}>{beast}</LinkCard>
}
