import { StyleSheet, TouchableOpacity } from "react-native";
import { STYLE_COLOR_PRIMARY } from "../constants";
import Text from "./Text";

const Link = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text xs style={styles.linkText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  linkText: {
    color: STYLE_COLOR_PRIMARY,
  },
});
