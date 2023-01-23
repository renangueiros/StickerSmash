import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import ImageViewer from "./components/ImageViewer";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Escolha uma foto" />
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
