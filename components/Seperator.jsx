import { FC, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { STYLE_COLOR_PRIMARY, STYLE_COLOR_SECONDARY, WIDHT } from "../constants";

const Seperator = ({ color = "default" }) => {
  const colorStyle = useMemo(() => styles[color], [color]);
  return <View style={[styles.seperator, colorStyle]} />;
};
export default Seperator;

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    width: "100%",
    borderRadius: WIDHT,
  },
  default: {
    backgroundColor: "#000",
  },
  primary: {
    backgroundColor: STYLE_COLOR_PRIMARY,
  },
  secondary: {
    backgroundColor: STYLE_COLOR_SECONDARY,
  },
});
