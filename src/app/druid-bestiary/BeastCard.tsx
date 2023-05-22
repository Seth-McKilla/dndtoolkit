import { MedievalSharp } from "next/font/google"
import { faBurst, faFeather, faHeart, faWater } from "@fortawesome/free-solid-svg-icons"

import Icon from "@/components/Icon"
import LinkCard from "@/components/LinkCard"

const medievalSharp = MedievalSharp({ weight: "400", subsets: ["latin"] })

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
            <p className="flex">
              <Icon icon={faHeart} size={18} color="#fe4848" style={{ marginRight: 4 }} /> {hp}
            </p>
            <p className="flex ml-4">
              <Icon icon={faBurst} size={18} color="#fff266" style={{ marginRight: 4 }} /> {cr}
            </p>
          </div>
          <div className="flex">
            {fly && <Icon icon={faFeather} size={18} color="#ffffff" />}
            {swim && (
              <Icon icon={faWater} size={18} color="#4d8af5" style={{ marginLeft: fly ? 8 : 0 }} />
            )}
          </div>
        </div>
      </div>
      <div>
        <p className={`text-3xl font-bold py-2 ${medievalSharp.className}`}>{beast}</p>
      </div>
    </LinkCard>
  )
}
