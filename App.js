import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/page/Routes.jsx";
import SignUp from "./src/screens/SingUp.jsx";
import SignIn from "./src/screens/SignIn.jsx";
import useAuth from "./hooks/useAuth.js";
import DrawerNavigation from "./src/navigation.jsx/DrawerNavigation.jsx";
import NavigationInicial from "./src/navigation.jsx/NavigationInicial.jsx";
const Stack = createNativeStackNavigator();

export default function App() {
  const { user } = useAuth();
  if (user) {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <NavigationInicial />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
