import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import app from "../../config/firebase";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

const GaleriaPage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getPhoto() {
    try {
      const firebaseStorage = getStorage(app);
      const photosRef = ref(firebaseStorage);
      const list = await listAll(photosRef);
      const urls = [...photos];
      for (let fileRef of list.items) {
        const photosRef = ref(firebaseStorage, fileRef);
        const url = await getDownloadURL(photosRef);
        if (!urls.includes(urls)) {
          urls.push(url);
        }
      }
      setPhotos(urls);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  /*   useFocusEffect(() => {
    setLoading(true);
    getPhoto();
  }, [getPhoto]);
 */
  useFocusEffect(
    useCallback(() => {
      getPhoto();
    }, [])
  );
  /*   useEffect(() => {
    getPhoto();
  }, []); */
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <View style={styles.photosContainer}>
          {photos.map((photoUrl, index) => (
            <Image
              key={index}
              source={{ uri: photoUrl }}
              style={styles.photo}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default GaleriaPage;
