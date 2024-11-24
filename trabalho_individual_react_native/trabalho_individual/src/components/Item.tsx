import {View, StyleSheet, Text} from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Item() {
  return(
    <View style={styles.menu}>

      <View style={styles.item}>
        <View style={styles.icone}>
          <SimpleLineIcons name="speedometer" size={55} color="black" />
        </View>
        <Text>Acessorios para veiculo</Text>
      </View>

       <View style={styles.item}>
        <View style={styles.icone}>
          <SimpleLineIcons name="plane" size={55}    color="black" /> 
        </View>
        <Text>Brinquedos e Hobbies</Text>
      </View>

      <View style={styles.item}>
        <View style={styles.icone}>
         <Ionicons name="shirt-outline" size={55} color="black" />
        </View>
        <Text>Calçados, Roupas e Bolsas</Text>
      </View>

      <View style={styles.item}>
        <View style={styles.icone}>
         <Ionicons name="car-sport-outline" size={55} color="black" />
        </View>
        <Text>Carros, Motos e Outros</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    icone: {
      width: 80,
      height: 80,
      backgroundColor: "white",
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center"
    },
    item: {
      width: 80,
      height: 100,
      gap: 5
    },
     menu: {
      backgroundColor: "#e8e8e8",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
})

