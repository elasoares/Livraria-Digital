import {
  Image,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const PilharODrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <ImageBackground
          source={require("../assests/imagens/backgroundPerfil.jpg")}
          style={{
            padding: 15,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              marginBottom: 10,
            }}
            source={require("../assests/imagens/FotoPerfil.jpg")}
          />
          <Text style={{ fontSize: 18, color: "#fff" }}>Elaine Soares</Text>
          <FontAwesome5 />
        </ImageBackground>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default PilharODrawer;
