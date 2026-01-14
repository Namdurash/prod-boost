import { TouchableOpacity } from "react-native"
import { Icons } from "../../constants/Icons"
import { styles } from "./Checkbox.styles"
import { COLORS } from "../../constants/Colors"

export const Checkbox = ({currentStatus, onCheckboxPress}: CheckboxProps) => {
  const statusStyle = currentStatus ? [styles.container, styles.filledBackground] : styles.container
  const iconColor = currentStatus ? COLORS.black : COLORS.pureWhite

  return (
    <TouchableOpacity style={statusStyle} onPress={onCheckboxPress}>
      <Icons.Check width={17} height={17} color={iconColor} />
    </TouchableOpacity>
  )
}

export interface CheckboxProps {
  currentStatus: boolean
  onCheckboxPress: () => void
}