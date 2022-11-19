import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import Home from "./Home";
import Account from "./Account";

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, tabBarIcon: () => <Entypo name="home" /> }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false, tabBarIcon: () => <Entypo name="user" /> }}
      />
    </Tab.Navigator>
  );
};
export default MainStack;
