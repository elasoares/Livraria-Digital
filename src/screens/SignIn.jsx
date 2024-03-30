import { useState } from "react";
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { auth } from "../../config/firebase";
import Routes from "../../src/page/Routes";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);

        console.log("Login bem-sucedido!");
        navigation.navigate(Routes.DrawerNavigation);
      } catch (error) {
        console.error("Erro ao fazer login:", error.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.login}>Login</Text>
        <TextInput
          style={styles.textinput}
          label="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon icon="at" size={25} color="black" />}
        />

        <TextInput
          style={styles.textinput}
          label="senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon icon="lock" size={25} color="black" />}
          secureTextEntry={showPassword}
          right={
            showPassword ? (
              <TextInput.Icon
                onPress={() => setShowPassword(!showPassword)}
                icon="eye"
                size={25}
                color="black"
              />
            ) : (
              <TextInput.Icon
                onPress={() => setShowPassword(!showPassword)}
                icon="eye-off"
                size={25}
                color="black"
              />
            )
          }
        />

        <Button mode="contained" onPress={handleSignIn}>
          Logar
        </Button>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.SignUp)}
          style={styles.containerCriarConta}
        >
          <Text>Não tem uma conta?</Text>
          <Text style={styles.criarContaButton}>Crie uma</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "40%",
    alignSelf: "center",
    width: "90%",
  },
  login: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textinput: {
    marginBottom: 10,
    borderRadius: 10,
  },
  loginButton: {
    padding: 10,
    margin: 20,
    width: "50%",
    alignSelf: "center",
  },
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
