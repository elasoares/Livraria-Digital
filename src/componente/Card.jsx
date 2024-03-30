import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Card({ item, action }) {
  const { cover, title, genre, format, author, rating, synopsis } = item;

  const configImage = { uri: cover };

  return (
    <Pressable onPress={() => action(item)} style={[styles.container]}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={configImage} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} key={`${item.id}_title`}>
            {title}
          </Text>
          <Text style={styles.genre} key={`${item.id}_genre`}>
            {genre}
          </Text>
          <Text style={styles.author} key={`${item.id}_author`}>
            Autor(a): {author}
          </Text>
          <Text style={styles.format} key={`${item.id}_format`}>
            Formato: {format}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "47%",
    margin: 5,
  },
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    width: "100%",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    aspectRatio: 0.7,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
    marginVertical: 15,
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
