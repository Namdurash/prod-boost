import React from "react"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import { COLORS } from "../../constants/Colors"

export const IconButton = ({ iconComponent, ...props }: IconButtonProps) => {
  return (
    <TouchableOpacity {...props} style={{ backgroundColor: COLORS.deepTeal, borderRadius: 16, padding: 10 }}>
      {iconComponent}
    </TouchableOpacity>
  )
}

export interface IconButtonProps extends TouchableOpacityProps {
  iconComponent: React.ReactNode
}