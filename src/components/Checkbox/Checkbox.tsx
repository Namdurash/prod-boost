import { TouchableOpacity } from 'react-native';

import { COLORS } from '@app/constants/Colors';
import { Icons } from '@app/constants/Icons';

import { styles } from './Checkbox.styles';

export const Checkbox = ({ currentStatus, onCheckboxPress }: CheckboxProps) => {
  const statusStyle = currentStatus
    ? [styles.container, styles.filledBackground]
    : styles.container;
  const iconColor = currentStatus ? COLORS.black : COLORS.pureWhite;

  return (
    <TouchableOpacity style={statusStyle} onPress={onCheckboxPress}>
      <Icons.Check width={17} height={17} color={iconColor} />
    </TouchableOpacity>
  );
};

export interface CheckboxProps {
  currentStatus: boolean;
  onCheckboxPress: () => void;
}
