import { Text, TextStyle, TouchableOpacity, TouchableOpacityProps } from "react-native"


export const Button = ({ text, textStyles, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity {...props}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  )
}

export interface ButtonProps extends TouchableOpacityProps {
  text: string
  textStyles?: TextStyle | TextStyle[]
}