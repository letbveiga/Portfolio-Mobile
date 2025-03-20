import { TextInput, TouchableOpacity, SafeAreaView, Text, View, StyleSheet, Image} from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState("") // colocar dentro do App e antes do return
  const [apaixonar, setApaixonar] = useState("")
  const [barraco, setBarraco] = useState("")
  const [acao, setAcao] = useState("")
  const [feito, setFeito] = useState("")
  const [memoria, setMemoria] = useState("")
  const [jogolivro, setJogolivro] = useState("")
  const msgEnvioDados = ()=> {alert('Dados enviados com sucesso!')};

  return (
    <SafeAreaView style={{backgroundColor:'#feefd9'}}>
    <View style={{margin:20}}>
        <Text style={{color : 'brown', fontSize:25, fontWeight:800, fontFamily: 'monospace', textAlign:'center', textShadowColor:'#FFFACD',textShadowRadius:10}}>6 Coisas sobre você para que estranhos te conheçam melhor</Text>
    </View>

    <View style={{alignItems:'center'}}>
      <Image style={styles.logo} source={require('./assets/logo.webp')}/>
    </View>

    <View style={styles.container}>
      <TextInput
        style = {styles.input}
        value = {nome}
        placeholder = "Digite seu nome aqui"
        placeholderTextColor = "#ce7865"
        onChangeText = {setNome}
      />

      <TextInput
        style = {styles.input}
        value = {apaixonar}
        placeholder = "Quantas vezes você já se apaixonou (não romântico)?"
        placeholderTextColor = "#ce7865"
        onChangeText = {setApaixonar}
        keyboardType = "numeric"
      />

      <TextInput
        style = {styles.input}
        value = {barraco}
        placeholder = "Quantas vezes você já fez barraco pra proteger algo/alguém?"
        placeholderTextColor = "#ce7865"
        onChangeText = {setBarraco}
        keyboardType = "numeric"
      />

      <TextInput
        style = {styles.input}
        value = {acao}
        placeholder = "Quantas vezes você já participou de uma ação beneficiente/voluntária?"
        placeholderTextColor = "#ce7865"
        onChangeText = {setAcao}
        keyboardType = "numeric"
      />

      <TextInput
        style = {styles.input}
        value = {feito}
        placeholder = "Qual seu feito de que tem mais orgulho?"
        placeholderTextColor = "#ce7865"
        onChangeText = {setFeito}
        keyboardType = "numeric"
      />

      <TextInput
        style = {styles.input}
        value = {memoria}
        placeholder = "Qual sua memória favorita?"
        placeholderTextColor = "#ce7865"
        onChangeText = {setMemoria}
      />

      <TextInput
        style = {styles.input}
        value = {jogolivro}
        placeholder = "Qual seu jogo/livro favorito?"
        placeholderTextColor = "#ce7865"
        onChangeText = {setJogolivro}
      />

      <TouchableOpacity onPress = {()=> msgEnvioDados()}>
        <Text style = {styles.button}> 
          Enviar dados 
        </Text>
      </TouchableOpacity> 
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center',
    backgroundColor: '#feefd9', padding: 10,
  },
  
  input: {
    backgroundColor: "brown", padding: 5, margin: 3,
    borderWidth: 2, borderColor: "pink", borderRadius: 5,
    color: "white",
  },

  logo: {
    marginTop: 25,
    width: 140,
    resizeMode: 'contain',
    height: 140,
    borderColor: '#FFFACD',
    borderWidth: 5,
    borderRadius:'10%',
    backgroundColor: 'white',
  },

  button: {
    borderWidth:2, borderRadius:5, borderColor:"brown",
    textAlign:"center", color:"brown", fontSize:18, fontWeight:600,
    backgroundColor:"pink", padding:5, marginVertical:15, marginHorizontal:85,
  },
});
