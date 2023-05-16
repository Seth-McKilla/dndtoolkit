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
  return (
    <LinkCard href={href}>
      <div className="flex justify-center align-items-center text-sm">
        <div className="flex w-full justify-between">
          <p className="flex">
            HP {hp} | CR {cr}
          </p>
          <div className="flex">
            {fly && "fly"}
            {swim && "swim"}
          </div>
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold py-2">{beast}</p>
      </div>
    </LinkCard>
  )
}
