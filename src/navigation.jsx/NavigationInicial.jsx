import { createDrawerNavigator } from "@react-navigation/drawer";
import Routes from "../page/Routes";
import Icon from "react-native-vector-icons/Ionicons";
import HomePage from "../page/HomePage";
import PilhaNavigationInicial from "../componente/PilhaNavigationInicial";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SingUp";
import PhotoScreen from "../screens/PhotoScreen";
import PerfilScreen from "../screens/PerfilScreen";
import PhotoScreeen from "../screens/PhotoScreen";
import FavoritosScreens from "../screens/FavoritosScreens";
import LendoScreens from "../screens/LendoScreens";
import SingOut from "../screens/SingOut";
import ConfiguracaoScreen from "../screens/ConfiguracaoScreen";

const Drawer = createDrawerNavigator();

const DrawerScreens = [
  {
    name: Routes.HomePage,
    component: HomePage,
    options: {
      drawerIcon: ({ color }) => {
        return <Icon name="menu" size={22} color={color} />;
      },
    },
  },
  {
    name: Routes.PhotoScreen,
    component: PhotoScreeen,
    options: {
      drawerIcon: ({ color }) => {
        return <Icon name="image-outline" size={22} color={color} />;
      },
    },
  },
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
    name: Routes.SignIn,
    component: SignIn,
    options: {
      drawerIcon: ({ color }) => {
        return <Icon name="enter-outline" size={22} color={color} />;
      },
    },
  },
  {
    name: Routes.SignUp,
    component: SignUp,
    options: {
      drawerIcon: ({ color }) => {
        return <Icon name="enter-outline" size={22} color={color} />;
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
      drawerContent={(props) => <PilhaNavigationInicial {...props} />}
      screenOptions={{
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
