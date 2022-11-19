import { StatusBar } from "expo-status-bar";
import { Image, ImageBackground, KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { bgDark, bgLight, logo } from "../assets";
import { STYLE_SHADOW, WIDHT } from "../constants";

const LOGO_SIZE = Math.floor(WIDHT / 5);

const AuthLayout = ({ children }) => {
  const darkMode = useSelector((state) => state.ui.darkMode);
  return (
    <ImageBackground source={darkMode ? bgDark : bgLight} style={styles.backgroundContainer}>
      <KeyboardAvoidingView style={[styles.container]} behavior="padding">
        <SafeAreaView style={[styles.container]}>
          <View style={styles.logoContainer}>
            <View style={styles.logoBackground}>
              <Image source={logo} style={styles.logo} />
            </View>
          </View>
          <View style={styles.content}>{children}</View>
        </SafeAreaView>
      </KeyboardAvoidingView>
      <StatusBar animated={true} style="light" />
    </ImageBackground>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  logo: {
    height: LOGO_SIZE,
    width: LOGO_SIZE,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoBackground: {
    backgroundColor: "#fff",
    borderRadius: 150,
    padding: 25,
    ...STYLE_SHADOW,
  },
  content: {
    flex: 1,
    width: "100%",
  },
});
