import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import Card from "../componente/Card";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LivrosExibidosPage from "./LivrosExibidosPage";
import Routes from "./Routes";

const Stack = createNativeStackNavigator();

const converter = (data) => {
  const ids = Object.keys(data);
  const livros = Object.values(data);
  const pegarLista = livros.map((livro, index) => {
    return { id: ids[index], ...livro };
  });
  return pegarLista;
};

export default function ListaLivrosPage(props) {
  const { navigation } = props;
  const [livros, setLivros] = useState([]);

  const url = "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com";
  const recurso = "/books.json";

  useEffect(() => {
    fetch(`${url}/${recurso}`)
      .then((response) => response.json())
      .then((data) => {
        const convertidoParaJson = converter(data);
        setLivros(convertidoParaJson);
      });
  }, []);

  const selecionarNavegador = (livro) => {
    navigation.navigate(Routes.LivrosExibidosPage, { livro });
  };

  const renderCard = ({ item }) => {
    return <Card item={item} action={selecionarNavegador} />;
  };

  const mostrarLivros = () => {
    if (livros.length > 0) {
      return (
        <FlatList
          data={livros}
          renderItem={renderCard}
          keyExtractor={(item) => item.id.toString()}
        />
      );
    } else {
      return <Text> Nenhum livro cadastrado </Text>;
    }
  };

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.ListaLivrosPage} component={mostrarLivros} />
      <Stack.Screen
        name={Routes.LivrosExibidosPage}
        component={LivrosExibidosPage}
      />
    </Stack.Navigator>
  );
}
