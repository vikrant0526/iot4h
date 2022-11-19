import { PixelRatio } from "react-native";

export const generateFontSizes = (width: number, height: number) => {
  const pixelRation = PixelRatio.get();
  const xl = pixelRation > 2 ? 40 : 36;
  const lg = pixelRation > 2 ? 32 : 28;
  const md = pixelRation > 2 ? 24 : 20;
  const nm = pixelRation > 2 ? 20 : 16;
  const sm = pixelRation > 2 ? 16 : 14;
  const xs = pixelRation > 2 ? 14 : 12;
  return {
    STYLE_FONT_SIZE_XL: xl,
    STYLE_FONT_SIZE_LG: lg,
    STYLE_FONT_SIZE_MD: md,
    STYLE_FONT_SIZE_NM: nm,
    STYLE_FONT_SIZE_SM: sm,
    STYLE_FONT_SIZE_XS: xs,
  };
};
