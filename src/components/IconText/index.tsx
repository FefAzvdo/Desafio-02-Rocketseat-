import React from 'react'
import { IconTextWrapper } from './styles'

interface IconTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  color?: string
  icon: React.ReactNode
}

export function IconText({ icon, text, color }: IconTextProps) {
  return (
    <IconTextWrapper color={color}>
      <span>{icon}</span>
      <p>{text}</p>
    </IconTextWrapper>
  )
}
