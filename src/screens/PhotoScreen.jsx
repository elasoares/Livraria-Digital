import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Routes from "../page/Routes";
import GaleriaPage from "../page/GaleriaPage";
import CameraPage from "../page/CameraPage";

const Tabs = createBottomTabNavigator();

const TabScreens = [
  {
    name: "Galeria",
    component: GaleriaPage,
    options: {
      tabIcon: ({ color }) => {
        return <Icon name="menu" size={22} color={color} />;
      },
    },
  },
  {
    name: "Camera",
    component: CameraPage,
    options: {
      tabIcon: ({ color }) => {
        return <Icon name="camera-outline" size={22} color={color} />;
      },
    },
  },
];

const PhotoScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {TabScreens.map((tabs, index) => {
        return <Tabs.Screen key={"tabs_" + index} {...tabs} />;
      })}
    </Tabs.Navigator>
  );
};

export default PhotoScreen;
