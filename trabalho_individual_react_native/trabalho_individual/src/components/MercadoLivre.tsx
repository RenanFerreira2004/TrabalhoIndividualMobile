import { View, StyleSheet, Image } from 'react-native';
import Item from './Item';
import Logo from '../../assets/download-removebg-preview.png';
export function MercadoLivre() {
  return (
    <>
      <View style={styles.statusBar}>
        <Image style={styles.logo} source={Logo} />
      </View>
      <View style={styles.container}>
        <Item></Item>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: 'yellow',
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
  },
});
