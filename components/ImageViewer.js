import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ placeholderImageSource }) {
  return <Image source={placeholderImageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 18,
    height: 440,
    width: 320,
  },
});
