import { useSelector } from "react-redux";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const RootNavigator = () => {
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
  return isAuthenticated ? <MainStack /> : <AuthStack />;
};

export default RootNavigator;
