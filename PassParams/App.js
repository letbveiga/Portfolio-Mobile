import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

const Pagina1 = ({ navigation, route }) => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Vai disparar sempre que route.params mudar
    if (route.params?.nome) { {/* se o atributo 'nome' existir vai acessar */}
      setNome(route.params.nome);
    }
    if (route.params?.cpf) { {/* se o atributo 'cpf' existir vai acessar */}
      setCpf(route.params.cpf);
    }
    if (route.params?.rg) { {/* se o atributo 'rg' existir vai acessar */}
      setRg(route.params.rg);
    }
    if (route.params?.endereco) { {/* se o atributo 'endereco' existir vai acessar */}
      setEndereco(route.params.endereco);
    }
    if (route.params?.cidade) { {/* se o atributo 'cidade' existir vai acessar */}
      setCidade(route.params.cidade);
    }
    if (route.params?.estado) { {/* se o atributo 'estado' existir vai acessar */}
      setEstado(route.params.estado);
    }
    if (route.params?.email) { {/* se o atributo 'email' existir vai acessar */}
      setEmail(route.params.email);
    }
  }, [route.params?.nome, route.params?.cpf, route.params?.rg, route.params?.endereco, route.params?.cidade, route.params?.estado, route.params?.email]);

  const irParaPagina2 = () => {
    navigation.navigate('Página 2', { nome: nome, cpf:cpf, rg:rg, endereco:endereco, cidade:cidade, estado:estado, email:email }); {/* 'atributo : state' vai passar essa info pra pagina */}
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>
      <View style={styles.pagina2}>
      <Text style={styles.textoCaixa}><strong>Bem vinda à Página 1</strong></Text>
      <Text style={styles.textoCaixa}>Favor preencher os dados abaixo</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#ce7865"
        onChangeText={setNome}
        value={nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu cpf"
        placeholderTextColor="#ce7865"
        onChangeText={setCpf}
        value={cpf}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu RG"
        placeholderTextColor="#ce7865"
        onChangeText={setRg}
        value={rg}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu endereço"
        placeholderTextColor="#ce7865"
        onChangeText={setEndereco}
        value={endereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua cidade"
        placeholderTextColor="#ce7865"
        onChangeText={setCidade}
        value={cidade}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu Estado"
        placeholderTextColor="#ce7865"
        onChangeText={setEstado}
        value={estado}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
        placeholderTextColor="#ce7865"
        onChangeText={setEmail}
        value={email}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => irParaPagina2()}>
          <Text style={styles.button}>Prosseguir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Pagina2 = ({ navigation, route }) => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (route.params?.nome) {
      setNome(route.params.nome); {/* recupera o valor 'nome' */}
    }
    if (route.params?.cpf) {
      setCpf(route.params.cpf); {/* recupera o valor 'cpf' */}
    }
    if (route.params?.rg) {
      setRg(route.params.rg); {/* recupera o valor 'rg' */}
    }
    if (route.params?.endereco) {
      setEndereco(route.params.endereco); {/* recupera o valor 'endereco' */}
    }
    if (route.params?.cidade) {
      setCidade(route.params.cidade); {/* recupera o valor 'cidade' */}
    }
    if (route.params?.estado) {
      setEstado(route.params.estado); {/* recupera o valor 'estado' */}
    }
    if (route.params?.email) {
      setEmail(route.params.email); {/* recupera o valor 'email' */}
    }
  }, [route.params?.nome, route.params?.cpf, route.params?.rg, route.params?.endereco, route.params?.cidade, route.params?.estado, route.params?.email]);

  const voltarComValor = () => {
    navigation.navigate('Página 1', { nome: nome, cpf:cpf, rg:rg, endereco:endereco, cidade:cidade, estado:estado, email:email });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink'}}>
    <View style={styles.pagina2}>
      <Text style={styles.textoCaixa}><strong>Bem vinda à Página 2</strong></Text>
      <Text style={styles.textoCaixa}>Dados registrados: {nome}, {cpf}, {rg}, {endereco}, {cidade}, {estado}, {email}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Digite outro nome"
        placeholderTextColor="#ce7865"
        onChangeText={setNome}
        value={nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite outro cpf"
        placeholderTextColor="#ce7865"
        onChangeText={setCpf}
        value={cpf}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite outro RG"
        placeholderTextColor="#ce7865"
        onChangeText={setRg}
        value={rg}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite outro endereço"
        placeholderTextColor="#ce7865"
        onChangeText={setEndereco}
        value={endereco}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite outra cidade"
        placeholderTextColor="#ce7865"
        onChangeText={setCidade}
        value={cidade}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite outro Estado"
        placeholderTextColor="#ce7865"
        onChangeText={setEstado}
        value={estado}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite outro E-mail"
        placeholderTextColor="#ce7865"
        onChangeText={setEmail}
        value={email}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => voltarComValor()}>
          <Text style={styles.button}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Página 1">
        <Stack.Screen name="Página 1" component={Pagina1} />
        <Stack.Screen name="Página 2" component={Pagina2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 3,
    margin: 5,
    padding: 3,
    backgroundColor: 'brown',
    borderWidth: 2,
    borderColor: 'pink',
    borderRadius: 5,
    color: 'white',
  },

  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFACD',
    paddingHorizontal: 20,
    marginVertical: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'brown',
  },

  button: {
    textAlign: 'center',
    color: 'brown',
    fontSize: 18,
    fontWeight: '600',
  },

  pagina2: {
    width: '70%',
    backgroundColor: '#DE3163',
    padding: 10,
    marginHorizontal: 'auto',
    marginVertical: 20,
    borderWidth: 3,
    borderColor: 'beige',
    borderRadius: 10,
  },
  textoCaixa: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default App;
