import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [estado, setarEstado] = useState('leitura');
  const [anotacao, setarAnotacao] = useState("Minha anotação");


  if(estado == 'leitura'){
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.font}>Aplicativo de Anotações</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.fontBody}>{anotacao}</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={()=> setarEstado("atualizando")} style={styles.border}><Text style={styles.fontBorder}>+</Text></TouchableOpacity>
        </View>
      </View>
    );
  }else if(estado == "atualizando"){
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.font}>Aplicativo de Anotações</Text>
        </View>

        
        <View style={styles.button}>
          <TouchableOpacity style={styles.borderSalvar} onPress={()=> setarEstado("leitura")} ><Text style={styles.fontBorderSalvar}>Salvar</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 30,
    backgroundColor: '#069'
  },
  font: {
    color: "#fff",
    textAlign: 'center',
    fontSize: 30
  },
  fontBody: {
    fontSize: 20,
    color: "#333",
  },
  body: {
    padding: 20,
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'flex-end',
    padding: 20
  },
  border: {
    backgroundColor: '#069',
    width: 50,
    height: 50,
    borderRadius: 50
  },
  fontBorder: {
    fontSize: 50,
    flex: 1,
    textAlign: "center",
    position: 'relative',
    bottom: 10,
    color: "#fff"
  },
  borderSalvar: {
    backgroundColor: '#069',
    width: 100,
    height: 40
  },
  fontBorderSalvar: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff"
  },
});
