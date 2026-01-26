import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import type {
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type CleanRNProps = Omit<
  RNTextInputProps,
  'defaultValue' | 'onChangeText' | 'value' | 'onBlur' | 'style'
>;

export type NeomorphTextInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, 'render'> &
  CleanRNProps & {
    containerStyle?: StyleProp<ViewStyle>;
    canvasStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    fontSize?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    backgroundColor?: string;
    shadowBlur?: number;
    shadowOffset?: number;
    shadowPadding?: number;
    width?: number;
    height?: number;
  };
