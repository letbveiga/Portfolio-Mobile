import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, } from 'react-native';

import Dropdown from './Componentes/dropDown';
import Input from './Componentes/input';

export default MyComponent = () => {
  const [options, setOptions] = useState([
    { id: 'MG', title: 'Minas Gerais' },
    { id: 'BH', title: 'Bahia' },
    { id: 'AM', title: 'Amazonas' },
    { id: 'AC', title: 'Acre' },
    { id: 'AL', title: 'Alagoas' },
    { id: 'SP', title: 'São Paulo' },
    { id: 'MT', title: 'Mato Grosso' },
  ]);

  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const msgEnvioDados = () => {
    alert('Dados enviados com sucesso!');
  };

  return (
    <View style={{flex:1}}>
      <View style={styles.body}>
        <Text style={{color:'white', fontWeight:800, fontSize: 50, textAlign:'center', marginTop:20}}>Expo Cadastro</Text>
        <Text
          style={{
            width: '70%',
            backgroundColor: '#DE3163',
            padding: 10,
            marginHorizontal: 'auto',
            marginTop: 20,
            color: 'white',
            fontSize: 16,
            textAlign: 'justify',
            borderWidth: 3,
            borderColor: 'beige',
            borderRadius: 10,
          }}>
          Olá pessoa, a seguir você encontrará um pequeno formulário para{' '}
          <strong>cadastro</strong>. Favor preencher os dados necessários e
          enviá-los ao final.
        </Text>

        <View style={{ marginTop: 40 }}>
          <Input
            nomeCampo="Nome"
            nomeVariavel={nome}
            nomeSet={setNome}
            />

          <Input
            nomeCampo="Endereço"
            nomeVariavel={endereco}
            nomeSet={setEndereco}
            />

          <View style={{ flexDirection: 'row', alignItems: 'center', zIndex: 10,}}>
              <Input style={{ justifyContent: null, flex: 3 }}
                nomeCampo="Cidade"
                nomeVariavel={cidade}
                nomeSet={setCidade}
                />

            <Dropdown
              options={options}
              />

          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => msgEnvioDados()}>
              <Text style={styles.button}>Enviar dados</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 12,
    backgroundColor: 'pink',
  },

  buttonContainer: {
    alignItems: 'center',
    zIndex: 1, // Menor que o dropdown
    marginTop: 30,
  },

  button: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'brown',
    textAlign: 'center',
    color: 'brown',
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#FFFACD',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
