import React from "react";
import { StyleSheet, Text, View, Alert,TouchableOpacity, Image} from "react-native";
import NumericInput from 'react-native-numeric-input';

const tipoBoletas = ["Basic Pass Legends Fest", "Full Pass Legends Fest"]

export default function Tickets() {
  return (
  
   <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <Text style={styles.tituloT}>Tipo de boleta</Text>
      <View style={{ backgroundColor: "#B277FF", padding: 10 ,width: 375, height: 200}}>
        <View style={{ flexDirection: "row",backgroundColor: "#8143D1", width: 350, height: 85, alignItems:"center", justifyContent:"center", borderRadius:6, padding: 6.5, marginLeft:3.2,justifyContent:'space-between', marginBottom: 10}}>
          <Image style={{width: 30, height: 30}}
          source={{uri: 'https://cdn-icons-png.flaticon.com/512/3702/3702886.png'}} />
          <Text style={styles.titulo}>Basic Pass Legends Fest</Text>
          <NumericInput type='up-down' onChange={value => console.log(value)} totalWidth={100} iconStyle={{ color: '#240252' }}minValue={0} />
        </View>
        
        <View style={{ flexDirection: "row",backgroundColor: "#8143D1", padding: 10, width: 350, height: 85, alignItems:"center", justifyContent:"center", borderRadius:6, padding: 6.5, marginLeft:3.2,justifyContent:'space-between', marginBottom: 10}}>
          <Image style={{width: 34, height: 34}}
          source={{uri: 'https://cdn-icons-png.flaticon.com/512/1061/1061702.png'}}/>
          <Text style={styles.titulo}>Full Pass Legends Fest   </Text>
          <NumericInput type='up-down' onChange={value => console.log(value)} totalWidth={100} iconStyle={{ color: '#240252' }}minValue={0} />
        </View>
      </View>

        <View style={{alignItems: "center",padding: 20}}>
          <TouchableOpacity onPress={() => Alert.alert('Se calculó el total de la compra')}>
            <View style={{
              backgroundColor: '#3B0285',
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: 10,
              width:150 ,
              padding: 10
          }}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Calcular</Text>
            </View>
        </TouchableOpacity>
        
      </View>
      <View style={{ backgroundColor: "#8143D1", borderColor: "#8143D1",borderRadius: 10,borderWidth: 3, padding: 15}} >
        <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold', alignItems: "center" , justifyContent: "center", marginLeft: 50}}>Resumen de la compra</Text>
        <View style={{ flexDirection: "row", width: 350, height: 50, padding: 6}}>
       <Image style={{ width: 30, height: 30, padding: 10, justifyContent: "flex-start" }}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3702/3702886.png' }} />
        <Text style={{ color: 'white', fontSize: 13, alignItems: "center" , justifyContent: "flex-start", padding: 10}}>Basic Pass Legends Fest</Text>
        <Text style={{ color: 'white', fontSize: 13, alignItems: "center" , justifyContent: "flex-end", padding: 10}}>$</Text>
        </View>
        <Text style={{ color: 'white', fontSize: 13, alignItems: "center", justifyContent: "flex-start", padding: 10 }}>Cantidad:</Text>
        <View style={{ flexDirection: "row", width: 350, height: 50, padding: 6}}>
       <Image style={{ width: 30, height: 30, padding: 10, justifyContent: "flex-start" }}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1061/1061702.png' }} />
        <Text style={{ color: 'white', fontSize: 13, alignItems: "center" , justifyContent: "flex-start", padding: 10}}>Full Pass Legends Fest   </Text>
        <Text style={{ color: 'white', fontSize: 13, alignItems: "center" , justifyContent: "flex-end", padding: 10}}>$</Text>
        </View>
        <Text style={{ color: 'white', fontSize: 13, alignItems: "center" , justifyContent: "flex-start", padding: 10}}>Cantidad:</Text>
      </View >

      <View style={{alignItems: "center",padding: 20}}>
          <TouchableOpacity onPress={() => Alert.alert('La compra se ha realizado con éxito')}>
            <View style={{
              backgroundColor: '#3B0285',
              alignItems: 'center', 
              justifyContent: 'center',
              borderRadius: 10,
              width:210 ,
              padding: 10
          }}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Comprar ahora</Text>
            </View>
        </TouchableOpacity>
      </View >
      <View style={{ backgroundColor: "#B277FF", padding: 15 ,width: 375, height: 50}}>
        <Text style={{alignContent: "center", justifyContent: "center", color: "#240252", marginLeft:110, fontSize:11}}>Terminos y condiciones</Text>
        <Text style={{alignContent: "center", justifyContent: "center", color: "#240252", marginLeft:84, fontSize:11}}>Copyright&copy; Legends Fest - 2022</Text>
      </View>
      </View>
  ); 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
   tituloT: {
    color: "#240252",
    fontSize: 20,
     marginRight: 5,
    marginBottom:12
  },
   titulo: {
    color: "white",
    fontSize: 15,
     marginRight: 5,
    padding: 10
  },
});