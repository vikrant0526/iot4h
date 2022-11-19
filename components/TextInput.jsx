import { useState } from "react";
import { StyleSheet, TextInput as RNTextInput, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { STYLE_COLOR_PRIMARY, STYLE_FONT_SIZE_SM } from "../constants";
import Text from "./Text";

const TextInput = ({ placeholder, value, onChangeText, style, type = "text", label, options }) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={options?.formGroupStye}>
      {label && (
        <Text sm style={styles.label}>
          {label}
        </Text>
      )}
      <View style={styles.textinputContainer}>
        <RNTextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[styles.textInput, style]}
          secureTextEntry={type === "password" && !visible}
        />
        {type === "password" && (
          <PasswordEye visible={visible} setVisible={() => setVisible((v) => !v)} />
        )}
      </View>
    </View>
  );
};

export default TextInput;

const PasswordEye = ({ visible, setVisible }) => {
  return (
    <TouchableOpacity onPress={setVisible} style={styles.iconButton}>
      {visible ? (
        <Entypo name="eye-with-line" size={24} color={STYLE_COLOR_PRIMARY} />
      ) : (
        <Entypo name="eye" size={24} color={STYLE_COLOR_PRIMARY} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: STYLE_FONT_SIZE_SM,
    padding: 10,
    flex: 1,
  },
  textinputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: STYLE_COLOR_PRIMARY,
    alignItems: "center",
    paddingHorizontal: 5,
  },
  iconButton: {
    padding: 5,
  },
  label: {
    color: STYLE_COLOR_PRIMARY,
  },
});
