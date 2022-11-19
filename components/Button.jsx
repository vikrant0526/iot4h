import { useMemo } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import {
  STYLE_COLOR_PRIMARY,
  STYLE_COLOR_SECONDARY,
  STYLE_FONT_SIZE_NM,
  STYLE_SHADOW,
} from "../constants";

const Button = ({ title, onPress, style, color = "default" }) => {
  const colorStyle = useMemo(() => styles[color], [color]);
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, colorStyle, style]}>
      <Text style={[styles.buttonText, colorStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
    ...STYLE_SHADOW,
  },
  buttonText: {
    fontWeight: "500",
    fontSize: STYLE_FONT_SIZE_NM,
  },
  default: {
    backgroundColor: "#fff",
    color: "#000",
  },
  primary: {
    backgroundColor: STYLE_COLOR_PRIMARY,
    color: "#FFF",
  },
  secondary: {
    backgroundColor: STYLE_COLOR_SECONDARY,
    color: "#FFF",
  },
});
