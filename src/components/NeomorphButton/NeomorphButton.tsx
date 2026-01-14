import {
  Canvas,
  Group,
  RoundedRect,
  Shadow,
  Text as SkiaText,
  useFont,
} from "@shopify/react-native-skia";
import {
  TouchableOpacity,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { COLORS } from "../../constants/Colors";


export const NeomorphButton = ({
  text,
  onPress,
  style,
  fontSize = 20,
  paddingHorizontal = 32,
  paddingVertical = 16,
  backgroundColor = "#198c78",
  shadowBlur = 5,
  shadowOffset = 2,
  shadowPadding,
}: NeomorphButtonProps) => {
  const font = useFont(
    require("../../assets/fonts/Funnel_Sans/static/FunnelSans-Regular.ttf"),
    fontSize
  );

  if (!font) {
    return null;
  }

  const { width: textWidth, height: textHeight } = font.measureText(text);

  const buttonWidth = textWidth + paddingHorizontal * 2;
  const buttonHeight = textHeight + paddingVertical * 2;
  const radius = buttonHeight / 2;

  const extra = shadowPadding ?? shadowBlur * 2;

  const canvasWidth = buttonWidth + extra * 2;
  const canvasHeight = buttonHeight + extra * 2;

  const rectX = extra;
  const rectY = extra;

  const textX = rectX + (buttonWidth - textWidth) / 2;
  const textY = rectY + (buttonHeight + textHeight * 0.7) / 2;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={style}>
      <Canvas style={{ width: canvasWidth, height: canvasHeight }}>
        <Group>
          <Shadow
            dx={-shadowOffset}
            dy={-shadowOffset}
            blur={shadowBlur}
            color="rgba(255, 255, 255, 0.35)"
          />
          <Shadow
            dx={shadowOffset}
            dy={shadowOffset}
            blur={shadowBlur}
            color="rgba(0, 0, 0, 0.28)"
          />

          <RoundedRect
            x={rectX}
            y={rectY}
            width={buttonWidth}
            height={buttonHeight}
            r={radius}
            color={backgroundColor}
          />
        </Group>

        <SkiaText
          x={textX}
          y={textY}
          text={text}
          font={font}
          color={COLORS.mintWhite}
        />
      </Canvas>
    </TouchableOpacity>
  );
};

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