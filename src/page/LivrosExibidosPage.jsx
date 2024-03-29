import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function LivrosExibidosPage(props) {
  const { params } = props.route;

  const { cover, title, genre, format, author, rating, synopsis } = params;

  const configImage = { uri: cover[0] };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={configImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.genre}>{genre}</Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.format}>{format}</Text>
        <Text style={styles.rating}>{rating}</Text>
        <ScrollView style={styles.synopsis}>{synopsis}</ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
