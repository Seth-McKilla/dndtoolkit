import { faBurst, faFeather, faHeart, faWater } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
      <div className="flex justify-center items-center">
        <div className="flex w-full justify-between">
          <div className="flex justify-center items-center text-sm">
            <p>
              <FontAwesomeIcon icon={faHeart} style={{ color: "#fe4848" }} /> {hp}
            </p>
            <p className="ml-4">
              <FontAwesomeIcon icon={faBurst} style={{ color: "#fff266" }} /> {cr}
            </p>
          </div>
          <div className="flex">
            {fly && <FontAwesomeIcon icon={faFeather} style={{ color: "#ffffff" }} />}
            {swim && (
              <FontAwesomeIcon
                icon={faWater}
                style={{ color: "#4d8af5", marginLeft: fly ? 8 : 0 }}
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold py-2">{beast}</p>
      </div>
    </LinkCard>
  )
}
