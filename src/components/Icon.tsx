import { FontAwesomeIcon, type FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

type Props = {
  icon: FontAwesomeIconProps["icon"]
  size: number
  color: string
  style?: Record<string, unknown>
}

export default function Icon({ icon, size, color, style }: Props) {
  return (
    <FontAwesomeIcon
      icon={icon}
      style={{
        color,
        height: size,
        width: size,
        ...style,
      }}
    />
  )
}
