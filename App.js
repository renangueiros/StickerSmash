import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import * as ImagePicker from "expo-image-picker";

import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("Você não selecionou nenhuma imagem.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Escolha uma foto"
          onPress={pickImageAsync}
        />
        <Button label="Use esta foto" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#25292e",
    flex: 1,
  },
  footerContainer: {
    alignItems: "center",
    flex: 1 / 3,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
