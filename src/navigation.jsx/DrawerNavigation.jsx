import { createDrawerNavigator } from "@react-navigation/drawer";
import PerfilScreen from "../screens/PerfilScreen";
import FavoritosScreens from "../screens/FavoritosScreens";
import LendoScreens from "../screens/LendoScreens";
import SingOut from "../screens/SingOut";
import Routes from "../page/Routes";
import PilharODrawer from "../componente/PilharODrawer";
import Icon from "react-native-vector-icons/Ionicons";
import ConfiguracaoScreen from "../screens/ConfiguracaoScreen";

const Drawer = createDrawerNavigator();

const DrawerScreens = [
  {
    name: Routes.PerfilScreen,
    component: PerfilScreen,
    options: {
      drawerIcon: ({ color }) => {
        return <Icon name="person-outline" size={22} color={color} />;
      },
    },
  },
  {
    name: Routes.FavoritosScreens,
    component: FavoritosScreens,
    options: {
      drawerIcon: ({ color }) => {
        return <Icon name="heart-outline" size={22} color={color} />;
      },
    },
  },
  {
    name: Routes.LendoScreens,
    component: LendoScreens,
    options: {
      drawerIcon: ({ color }) => {
        return <Icon name="book-outline" size={22} color={color} />;
      },
    },
  },
  {
    name: Routes.ConfiguracaoScreen,
    component: ConfiguracaoScreen,
    options: {
      drawerIcon: ({ color }) => {
        return <Icon name="settings-outline" size={22} color={color} />;
      },
    },
  },
  {
    name: Routes.SingOut,
    component: SingOut,
    options: {
      drawerIcon: ({ color }) => {
        return <Icon name="exit-outline" size={22} color={color} />;
      },
    },
  },
];

const DrawerNavigation = (props) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <PilharODrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}
    >
      {DrawerScreens.map((screens, index) => {
        return <Drawer.Screen key={"screens_" + index} {...screens} />;
      })}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
