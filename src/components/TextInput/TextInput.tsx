import { Controller } from 'react-hook-form';
import { TextInput as RNTextInput } from 'react-native';

import type { TextInputProps } from './types';
import type { FieldPath, FieldValues } from 'react-hook-form';

export const TextInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
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
        <RNTextInput
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          {...props}
        />
      )}
    />
  );
};
