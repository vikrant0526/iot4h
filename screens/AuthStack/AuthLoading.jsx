import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AuthLayout from "../../components/AuthLayout";
import Text from "../../components/Text";
import { tempLogin, tryLocalSignIn } from "../../store/slices/authSlice";

const AuthLoading = ({ navigation }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      // dispatch(tryLocalSignIn());
      dispatch(tempLogin());
    }, 1000);
  }, []);

  // useEffect(() => {
  //   if (!auth.isLoading) if (!auth.authenticated) navigation.replace("Login");
  // }, [auth]);
  return (
    <AuthLayout>
      <View style={styles.container} />
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.text}>Loading nice things for you...</Text>
      </View>
      <View style={styles.container} />
    </AuthLayout>
  );
};
export default AuthLoading;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    color: "#fff",
    fontWeight: "500",
  },
});
