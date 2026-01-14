import { Controller, ControllerProps, FieldPath, FieldValues } from 'react-hook-form';
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps } from 'react-native';

export const TextInput = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  defaultValue,
  disabled = false,
  name,
  rules,
  ...props
}: TextInputProps<TFieldValues, TName>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      disabled={disabled}
      render={({ field: { onChange, onBlur, value } }) => (
        <RNTextInput onBlur={onBlur} onChangeText={onChange} value={value} {...props} />
      )}
    />
  );
};

type CleanRNProps = Omit<RNTextInputProps, 'defaultValue' | 'onChangeText' | 'value' | 'onBlur'>;

export type TextInputProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Omit<
  ControllerProps<TFieldValues, TName>,
  'render'
> &
  CleanRNProps;
