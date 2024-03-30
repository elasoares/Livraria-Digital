import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PerfilScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <ImageBackground
        source={require("../assests/imagens/backgroundPerfil.jpg")}
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: 150,
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
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PerfilScreen;
