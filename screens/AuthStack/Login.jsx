import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import AuthLayout from "../../components/AuthLayout";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Text from "../../components/Text";
import TextInput from "../../components/TextInput";
import Title from "../../components/Title";
import { STYLE_CARD, STYLE_COLOR_PRIMARY } from "../../constants";
import { tempLogin } from "../../store/slices/authSlice";

const Login = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  return (
    <AuthLayout>
      <View style={styles.container}>
        <Title style={styles.title}>Welcome Back!</Title>
        <View style={styles.card}>
          <Text lg style={styles.headerText}>
            Let's roll
          </Text>
          <TextInput
            placeholder="xroll-ecommerce"
            label="Username / email"
            options={textInputOptions}
            value={formData.email}
            onChangeText={(value) => setFormData((state) => ({ ...state, email: value }))}
          />
          <TextInput
            placeholder="password"
            label="Password"
            options={textInputOptions}
            type="password"
            value={formData.password}
            onChangeText={(value) => setFormData((state) => ({ ...state, password: value }))}
          />
          <View style={styles.linkContainer}>
            <Link text="Forget Password" onPress={() => {}} />
            <Link text="Don't have an account?" onPress={() => {}} />
          </View>
          <Button
            onPress={() => {
              dispatch(tempLogin());
            }}
            color="primary"
            title="Login"
            style={styles.loginButton}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "#FFF",
    marginBottom: 40,
  },
  formGroup: {
    marginTop: 20,
    paddingHorizontal: 5,
  },
  card: {
    ...STYLE_CARD,
  },
  linkContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  loginButton: {
    marginTop: 15,
  },
  headerText: {
    color: STYLE_COLOR_PRIMARY,
    paddingHorizontal: 5,
    fontWeight: "500",
    textAlign: "right",
  },
});

const textInputOptions = { formGroupStye: styles.formGroup };
