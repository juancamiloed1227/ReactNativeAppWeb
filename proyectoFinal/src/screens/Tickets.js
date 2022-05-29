import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import NumericInput from 'react-native-numeric-input';

const tipoBoletas =  ["Basic Pass Legends Fest", "Full Pass Legends Fest"]


export default function Tickets() {
  return (
     
      <View style={styles.container}>
       <View style={styles.row}>
      <View style={[styles.box]}>
          <Text style={styles.tituloT}>Tipo de boleta</Text>
          <RNPickerSelect 
            placeholder={{ label: "Seleccionar", value: null }}
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "Basic Pass Legends Fest", value: "" },
                     { label: "Full Pass Legends Fest", value: "" }
                 ]}
             />  
        </View>
        <View style={[styles.box]}>
      <Text style={styles.tituloT}>Cantidad</Text>
          <NumericInput type='up-down' onChange={value => console.log(value)} totalWidth={100} iconStyle={{ color: '#6495ED' }}minValue={0} />
          </View>
      </View>
      </View>
  );
}
const styles = StyleSheet.create({
  box: {
    flex: 1,
    height: 200,
    width: 200,
    padding:20,
  },
   row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start', //replace with flex-end or center
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  separadorH: {
    width: 0.1,
  },

  tituloT: {
    color: "black",
    fontSize: 20,
    marginRight: 5,
  },

  title: {
    height: 60,
    width: 200,
    marginLeft: 5,
    padding: 0,
  },

  /*Para el flex*/
  container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    box: {
      height: 200,
      width: 200,

    }
});
