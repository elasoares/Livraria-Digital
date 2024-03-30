import { Camera } from "expo-camera";
import { useEffect, useState } from "react";
import { Pressable, Text, View, Image, StyleSheet } from "react-native";
import app from "../../config/firebase";
import { getStorage, uploadString } from "firebase/storage";
import { Button } from "react-native-paper";

const CameraPage = () => {
  const [hasPermission, setPermission] = useState(false);
  const [camera, setCamera] = useState(null);
  const [uri, setUri] = useState(null);
  const [msg, setMsg] = useState("");

  /*   const [hasPermission, setPermission] = Camera.useCameraPermissions(); */

  async function requestCamera() {
    const permission = await Camera.requestCameraPermissionsAsync();
    const { status } = permission;
    if (status == "granted") {
      setPermission(true);
    }
  }

  useEffect(() => {
    requestCamera();
  }, []);

  async function takePicture() {
    if (camera) {
      const photo = await camera.takePictureAsync();
      const { uri } = photo;
      setUri(uri);
    }
  }

  async function saveFoto() {
    try {
      const firebaseStorage = getStorage(app);
      const photoRef = ref(firebaseStorage, `foto ${new Date().getTime()}.png`);
      const uploadResult = await uploadString(photoRef, uri, "base64url", {
        contentType: "image/jpeg",
      });
      setUri(null);
    } catch (error) {
      setMsg(error.message);
    }
  }

  return (
    <View style={styles.container}>
      {hasPermission && !uri && (
        <>
          <Camera
            ref={(ref) => {
              setCamera(ref);
            }}
          />
          <Button mode="contained" onPress={takePicture}>
            {" "}
            Capiturar
          </Button>
        </>
      )}
      {uri && (
        <>
          <Image style={styles.foto} source={{ uri }} />
          <View style={styles.botoes}>
            <Button
              mode="contained"
              onPress={() => {
                saveFoto();
              }}
            >
              Salvar
            </Button>
            <Button mode="contained" onPress={() => {}}>
              Excluir
            </Button>
          </View>
        </>
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
  foto: {
    width: "100%",
    height: 500,
  },
  botoes: {
    gap: 20,
    flexDirection: "row",
  },
});
export default CameraPage;
