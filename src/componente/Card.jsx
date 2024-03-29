import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Card({ item, action }) {
  const { cover, title, genre, format, author, rating, synopsis } = item;

  const configImage = { uri: cover[0] };

  return (
    <Pressable onPress={() => action(item)}>
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
            {author}
          </Text>
          <Text style={styles.format} key={`${item.id}_format`}>
            {format}
          </Text>
          <Text style={styles.rating} key={`${item.id}_rating`}>
            {rating}
          </Text>
          <Text style={styles.synopsis} key={`${item.id}_synopsis`}>
            {synopsis}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    shadowColor: "#000",
    shadowRadius: 1.84,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#FFF",
  },
  imageContainer: {
    marginRight: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 1,
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
