import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "./Routes";
import ListaContainer from "../container/ListaContainer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LivrosExibidosPage from "./LivrosExibidosPage";

const Stack = createNativeStackNavigator();

const converter = (data) => {
  const ids = Object.keys(data);
  const livros = Object.values(data);
  const pegarLista = livros.map((livro, index) => {
    return { id: ids[index], ...livro };
  });
  return pegarLista;
};

export default function HomePage(props) {
  const { navigation } = props;
  const [livros, setLivros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com";
  const recurso = "books.json";

  useEffect(() => {
    setIsLoading(true);
    fetch(`${url}/${recurso}`)
      .then((response) => response.json())
      .then((data) => {
        const convertidoParaJson = converter(data);
        setLivros(convertidoParaJson);
        setIsLoading(false);
      });
  }, []);

  const selecionarNavegador = (livro) => {
    navigation.navigate(Routes.LivrosExibidosPage, livro);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <SafeAreaProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name={Routes.ListaContainer}>
              {() => (
                <ListaContainer livros={livros} action={selecionarNavegador} />
              )}
            </Stack.Screen>
            <Stack.Screen
              name={Routes.LivrosExibidosPage}
              component={LivrosExibidosPage}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ede2",
  },
});
