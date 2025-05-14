// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Erro = ({ navigation }) => {
  const [nome, setNome] = useState(''); // É necessário recuperar o state da variável na página em que será referenciada
  const [senha, setSenha] = useState('');

   
  useEffect(() => { // É necessário implementar o useEffect para a recuperação da variável desejada
    AsyncStorage.getItem('nome').then(
      (value) => setNome(value) 
    );
    AsyncStorage.getItem('senha').then(
      (value) => setSenha(value) 
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ color: 'white', textAlign: 'justify', margin: 5, fontSize: 30}}><strong>Erro!</strong></Text>

        <View style={{backgroundColor: '#ff0039', padding: 10, margin: 50, borderRadius: 10,}}>
            <Text style={{ color: 'white', textAlign: 'justify', margin: 5, }}>            
              Parece que você digitou a senha ou nome errados. Por favor retorne
              para a página de login e tente novamente.
            </Text>

            <Text style={{ color: 'white', textAlign: 'justify', margin: 5 }}>
              <strong>Nome digitado</strong>: {nome}
            </Text>

            <Text style={{ color: 'white', textAlign: 'justify', margin: 5 }}>
              <strong>Senha digitada</strong>: {senha}
            </Text>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('Pagina1')} style={styles.button}>
          <Text style={{ color: '#008080', fontWeight: 800 }}>VOLTAR</Text>
        </TouchableOpacity>
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
    marginTop: 22,
    fontFamily: 'century gothic',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#ff0039',
  },
});

export default Erro;
