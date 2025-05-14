// AsyncStorage in React Native to Store Data in Session
// https://aboutreact.com/react-native-asyncstorage/

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Text, TouchableOpacity, } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const Pagina2 = ({ navigation }) => {
  // state para armazenar nome
  const [nome, setNome] = useState(''); // É necessário recuperar o state da variável na página em que será referenciada
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');

  // função para salvar info
  const saveData = () => {
    // setItem método para armazenar chave valor
    AsyncStorage.setItem('cpf', cpf);
    setCpf('');
    
    AsyncStorage.setItem('rg', rg);
    setRg('');
  };

  //função para recuperar info
  const getData = () => {    
    // getItem método para recuperar valor a partir da chave
    AsyncStorage.getItem('cpf').then(
      (value) => setCpf(value) 
    );

    AsyncStorage.getItem('rg').then(
      (value) => setRg(value)
    );
  };

    useEffect(() => { // É necessário implementar o useEffect para a recuperação da variável desejada
      AsyncStorage.getItem('nome').then(
        (value) => setNome(value) 
      );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ color: 'white', textAlign: 'justify', margin: 5, fontSize: 30}}><strong>Bem vinda, {nome}!</strong></Text>

        <View style={{backgroundColor: '#ff0039', padding: 10, margin: 50, borderRadius: 10,}}>
          <Text style={{ color: 'white', textAlign: 'justify', margin: 5, }}>
            Registre abaixo os dados finais. Fique tranquila, eles serão guardados com muito cuidado em nosso sistema, se esquecê-los, basta clicar no botão de recuperar abaixo que seus dados voltarão para a ponta de seus dedos!
          </Text>
        </View>
        
        <View style={{marginBottom: 30}}>
          <TextInput
            placeholder="Digite seu CPF"
            value={cpf}
            onChangeText={setCpf}
            placeholderTextColor="#b7d4d3"
            style={styles.input}
            keyboardType="numeric"
          />
          
          <TextInput
            placeholder="Digite seu RG"
            value={rg}
            onChangeText={setRg}
            placeholderTextColor="#b7d4d3"
            style={styles.input}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity onPress={()=>saveData()} style={styles.button}>
          <Text style={{ color: '#008080', fontWeight: 800 }}>SALVAR</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>getData()} style={styles.button}>
          <Text style={{ color: '#008080', fontWeight: 800 }}>RECUPERAR</Text>
        </TouchableOpacity>

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

export default Pagina2;