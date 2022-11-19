import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthLoading from "./AuthLoading";
import Login from "./Login";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthLoading" component={AuthLoading} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
export default AuthStack;
