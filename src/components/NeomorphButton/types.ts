import type { StyleProp, ViewStyle } from 'react-native';

export interface NeomorphButtonProps {
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  fontSize?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  backgroundColor?: string;
  shadowBlur?: number;
  shadowOffset?: number;
  shadowPadding?: number;
}
