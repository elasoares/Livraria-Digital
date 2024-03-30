import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import Routes from "../../src/page/Routes";
import { Camera } from "expo-camera";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function SignUp({ navigation }) {
  const [nome, setnome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    getCameraPermission();
  }, []);

  const getCameraPermission = async () => {
    const permission = await Camera.requestCameraPermissionsAsync();
  };

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigation.navigate(Routes.DrawerNavigation);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {msg && <Text>{msg}</Text>}
      <View>
        <Text style={styles.criarTitulo}>Criar conta</Text>
        <TextInput
          style={styles.textinput}
          label="Nome"
          mode="flat"
          value={nome}
          onChangeText={(text) => setnome(text)}
          left={<TextInput.Icon icon="account" size={25} color="black" />}
        />
        <TextInput
          style={styles.textinput}
          label="E-mail"
          mode="flat"
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

        <Button mode="contained" onPress={handleSubmit}>
          Criar
        </Button>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.SignIn)}
          style={styles.containerEntrarConta}
        >
          <Text>Já tem uma conta?</Text>
          <Text style={styles.entrarContaButton}>Faça o login</Text>
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
  criarTitulo: {
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
  containerEntrarConta: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    gap: 5,
  },
  entrarContaButton: {
    fontWeight: "bold",
    color: "#6200ee",
  },
});
