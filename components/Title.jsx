import { StyleSheet } from "react-native";
import { STYLE_COLOR_PRIMARY } from "../constants";
import Text from "./Text";

const Title = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    color: STYLE_COLOR_PRIMARY,
    marginVertical: 10,
    fontWeight: "600",
  },
});
