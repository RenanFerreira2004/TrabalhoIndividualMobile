import { View, StyleSheet, Image } from "react-native";
import Produto from "../../assets/1685004475c7880a7774cc7f20263a5d79f2e437ae_thumbnail_405x552.jpg";

export default function Produtos() {
  return(
    <>
    <View style={styles.container}>
    <Image style={styles.produto} source={Produto} />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  produto: {
    width: "50%",
    height: 50
  }
})