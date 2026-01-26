import { Canvas, Group, RoundedRect, Shadow } from '@shopify/react-native-skia';
import { Controller } from 'react-hook-form';
import { TextInput as RNTextInput, View } from 'react-native';

import { COLORS } from '@app/constants/Colors';

import { styles } from './NeomorphTextInput.styles';

import type { NeomorphTextInputProps } from './NeomorphTextInput.types';
import type { FieldPath, FieldValues } from 'react-hook-form';

export const NeomorphTextInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  defaultValue,
  disabled = false,
  name,
  rules,
  containerStyle,
  canvasStyle,
  inputStyle,
  fontSize = 16,
  paddingHorizontal = 16,
  paddingVertical = 14,
  backgroundColor = COLORS.paleMint,
  shadowBlur = 6,
  shadowOffset = 2,
  width = 300,
  height = 50,
  ...textInputProps
}: NeomorphTextInputProps<TFieldValues, TName>) => {
  const radius = 12;

  const canvasWidth = width;
  const canvasHeight = height;

  const rectX = 0;
  const rectY = 0;

  return (
    <View style={containerStyle}>
      <View
        style={[
          styles.container,
          { width: canvasWidth, height: canvasHeight },
        ]}>
        <Canvas
          style={[
            styles.canvas,
            { width: canvasWidth, height: canvasHeight },
            canvasStyle,
          ]}>
          <Group>
            <Shadow
              dx={shadowOffset}
              dy={shadowOffset}
              blur={shadowBlur}
              color="rgba(0, 0, 0, 0.5)"
              inner
            />
            <Shadow
              dx={-shadowOffset}
              dy={-shadowOffset}
              blur={shadowBlur}
              color={COLORS.neumorphicShadowLight}
              inner
            />

            <RoundedRect
              x={rectX}
              y={rectY}
              width={width}
              height={height}
              r={radius}
              color={backgroundColor}
            />
          </Group>
        </Canvas>

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
              style={[
                styles.textInput,
                {
                  left: rectX + paddingHorizontal,
                  top: rectY + paddingVertical,
                  width: width - paddingHorizontal * 2,
                  height: height - paddingVertical * 2,
                  fontSize,
                  color: COLORS.deepTeal,
                },
                inputStyle,
              ]}
              {...textInputProps}
            />
          )}
        />
      </View>
    </View>
  );
};
