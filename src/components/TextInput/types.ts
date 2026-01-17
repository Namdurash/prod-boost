import type { ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import type { TextInputProps as RNTextInputProps } from 'react-native';

export type CleanRNProps = Omit<
  RNTextInputProps,
  'defaultValue' | 'onChangeText' | 'value' | 'onBlur'
>;

export type TextInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, 'render'> & CleanRNProps;
