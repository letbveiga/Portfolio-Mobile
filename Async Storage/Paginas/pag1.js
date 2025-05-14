// AsyncStorage in React Native to Store Data in Session
// https://aboutreact.com/react-native-asyncstorage/

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Text, TouchableOpacity, } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function Pagina1({ navigation, route }) {
  // state para armazenar nome
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  // função para salvar nome
  const saveData = () => {
    // setItem método para armazenar chave valor
    AsyncStorage.setItem('nome', nome);
    setNome('');
  };

  const verificacaoLogin = () => {
    if (nome === 'Fulana' && senha === '008') {
      saveData()
      navigation.navigate('Pagina2');
    } else {
      saveData()
      AsyncStorage.setItem('senha', senha);
      setSenha('');
      navigation.navigate('Erro');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ color: 'white', textAlign: 'justify', margin: 5, fontSize: 30}}><strong>Olá!</strong></Text>

        <View style={{backgroundColor: '#ff0039', padding: 10, margin: 50, borderRadius: 10,}}>
          <Text style={{ color: 'white', textAlign: 'justify', margin: 5, }}>
            Que bom tê-la por aqui! Para prosseguir e finalizar seu registro, por favor faça seu login abaixo.
          </Text>
        </View>

        <View style={{ margin: 15, justifyContent: 'center', alignItems: 'center', }}>
          <TextInput
            style={styles.input}
            value={nome}
            placeholder="Digite seu nome aqui"
            placeholderTextColor="#b7d4d3"
            onChangeText={setNome}
            required
          />

          <TextInput
            style={styles.input}
            value={senha}
            placeholder="Digite sua senha aqui"
            placeholderTextColor="#b7d4d3"
            onChangeText={setSenha}
            keyboardType="numeric"
            required
          />

          <TouchableOpacity style={styles.button} onPress={verificacaoLogin}>
            <Text style={{ color: '#008080', fontWeight: 800 }}>
              {' '}
              CONTINUAR{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#a2efef',
    padding: 10,
    width: 150,
    marginTop: 30,
    fontFamily: 'century gothic',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#ff0039',
  },

  input: {
    backgroundColor: 'white',
    padding: 5,
    margin: 3,
    borderWidth: 2,
    borderColor: '#ff0039',
    borderRadius: 5,
    color: '#2f77a7',
  },
});