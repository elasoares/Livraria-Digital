import { signOut } from "firebase/auth";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton } from "react-native-paper";
import { auth } from "../../config/firebase";

const SingOut = () => {
  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };
  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton icon="exit-to-app" onPress={handleLogOut} color="#6200ee" />
        <Text>Sair</Text>
      </View>
    </SafeAreaView>
  );
};

export default SingOut;

const styles = StyleSheet.create({
  containerCriarConta: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 5,
  },
  criarContaButton: {
    fontWeight: "bold",
    color: "#6200ee",
  },
});
