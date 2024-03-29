import { StatusBar } from "expo-status-bar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ListaLivrosPage from "./src/page/ListaLivrosPage.jsx";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="ListaLivrosPage" component={ListaLivrosPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


