import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "../componente/Card";
import { ActivityIndicator, TextInput } from "react-native-paper";
import filter from "lodash.filter";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const url = "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com";
const recurso = "/books.json";
const uri = url + recurso;
const tratarError = (erro) => console.error(`Erro ao obter dados: ${erro}`);

const ListaContainer = ({ action }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [livros, setLivros] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [livrosFiltrados, setLivrosFiltrados] = useState([]);

  useEffect(() => {
    async function requisitarLivros() {
      try {
        const fetchRequisitar = await fetch(uri);
        const fetchParaJson = await fetchRequisitar.json();
        if (fetchParaJson) {
          const desestruturar = desestruturacao(fetchParaJson);
          setLivros(desestruturar);
          setLivrosFiltrados(desestruturar);
        }
        setIsLoading(false);
      } catch (erro) {
        tratarError(erro);
        setIsLoading(false);
      }
    }
    requisitarLivros();
  }, []);

  function desestruturacao(dados) {
    const ids = Object.keys(dados);
    const dadosLivros = Object.values(dados);
    return dadosLivros.map((valores, index) => {
      return { id: ids[index], ...valores };
    });
  }

  const contains = ({ title, autor, genre }, text) => {
    const lowerText = text.toLowerCase();
    return (
      (title && title.toLowerCase().includes(lowerText)) ||
      (genre && genre.toLowerCase().includes(lowerText)) ||
      (autor && autor.toLowerCase().includes(lowerText))
    );
  };

  const filtrando = () => {
    const livrosFiltrados = livros.filter(
      (livro) =>
        livro.title.toLowerCase().includes(pesquisa.toLowerCase()) ||
        livro.author.toLowerCase().includes(pesquisa.toLowerCase()) ||
        livro.genre.toLowerCase().includes(pesquisa.toLowerCase())
    );
    setLivrosFiltrados(livrosFiltrados);
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Pesquisar"
        clearButtonMode="always"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={pesquisa}
        onChangeText={(text) => {
          setPesquisa(text);
          filtrando();
        }}
        right={<TextInput.Icon size={40} icon="magnify" color="#ccc" />}
      />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#5500dc" />
        </View>
      ) : (
        <FlatList
          data={livrosFiltrados}
          renderItem={({ item }) => <Card item={item} action={action} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.flatlistContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7ede2",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  flatlistContent: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListaContainer;
