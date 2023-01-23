import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 18,
    height: 440,
    width: 320,
  },
});
