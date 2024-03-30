import React, { useState } from "react";
import { ScrollView, Text, View, StyleSheet, Image } from "react-native";

export default function ExibirContainer(props) {
  const { params } = props.route;

  const [image, setImage] = useState(0);

  const { cover, title, genre, format, author, rating, synopsis } = params;

  const configImage = { uri: cover };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={configImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Título: {title}</Text>
        <Text style={styles.genre}>Gênero: {genre}</Text>
        <Text style={styles.author}>Autor(a): {author}</Text>
        <Text style={styles.format}>Tipo: {format}</Text>
        <Text style={styles.rating}>{rating}</Text>
        <ScrollView style={styles.synopsis}>
          <Text>{synopsis}</Text>
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  image: {
    width: "60%",
    height: 350,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  genre: {
    fontStyle: "italic",
    marginBottom: 2,
  },
  author: {
    marginBottom: 2,
  },
  format: {
    marginBottom: 2,
  },
  rating: {
    marginBottom: 2,
  },
  synopsis: {
    marginBottom: 2,
  },
});
