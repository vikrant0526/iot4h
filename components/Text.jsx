import { useMemo } from "react";
import { StyleSheet, Text as RNText, TextStyle } from "react-native";
import {
  STYLE_FONT_SIZE_LG,
  STYLE_FONT_SIZE_MD,
  STYLE_FONT_SIZE_NM,
  STYLE_FONT_SIZE_SM,
  STYLE_FONT_SIZE_XL,
  STYLE_FONT_SIZE_XS,
} from "../constants";

const Text = ({ children, style, xl, lg, md, nm, sm, xs }) => {
  const fontSize = useMemo(() => {
    if (xl) return styles.xl;
    if (lg) return styles.lg;
    if (md) return styles.md;
    if (nm) return styles.nm;
    if (sm) return styles.sm;
    if (xs) return styles.xs;
    return styles.nm;
  }, [xl, lg, md, nm, sm, xs]);
  return <RNText style={[fontSize, style]}>{children}</RNText>;
};

export default Text;

const styles = StyleSheet.create({
  xl: {
    fontSize: STYLE_FONT_SIZE_XL,
  },
  lg: {
    fontSize: STYLE_FONT_SIZE_LG,
  },
  md: {
    fontSize: STYLE_FONT_SIZE_MD,
  },
  nm: {
    fontSize: STYLE_FONT_SIZE_NM,
  },
  sm: {
    fontSize: STYLE_FONT_SIZE_SM,
  },
  xs: {
    fontSize: STYLE_FONT_SIZE_XS,
  },
});
