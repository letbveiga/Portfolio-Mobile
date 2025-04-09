import { Text, TextInput, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [rg, setRg] = useState("")
  const [email, setEmail] = useState("")
  const [uf, setUf] = useState("")
  const [cep, setCep] = useState("")
  const msgEnvioDados = ()=> {alert('Dados enviados com sucesso!')};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./Assets/aula6-icone.jpg')} />
        <View style={{flexDirection:'column'}}>
          <Text style={{
            width:170,
            marginLeft: '25%',
            marginTop: '12%',
            fontSize: 35,
            lineHeight: 30,
            color: 'white',
            fontWeight: 'bold',
            }}>
            Okami Inc</Text>
          <Text style={{
            marginLeft: '30%',
            marginTop: '2%',
            fontSize: 10,
            color: 'white',
            fontWeight: 'bold',
            }}>Sistema de Cadastro</Text>
        </View>

      </View>
        
      <View style={styles.body}>

        <Text
          style={{
            width: '70%', backgroundColor: '#DE3163', padding:10, marginHorizontal: 'auto', marginTop:50,
            color: 'white', fontSize: 16, textAlign: 'justify',
            borderWidth: 3, borderColor: 'beige', borderRadius: 10,
          }}>
          Olá pessoa, bem vinda à <strong>Okami Inc</strong>! Para efetuar seu cadastro, favor preencher os dados abaixo e enviá-los ao final.
        </Text>

        <View style={{marginTop:25}}>
          <View style={{flexDirection:'row', justifyContent: 'space-around', alignItems:'center'}}>
            <Text style={styles.info}>Nome</Text>

            <TextInput
              style = {styles.input}
              value = {nome}
              placeholder = "Digite seu nome aqui"
              placeholderTextColor = "#ce7865"
              onChangeText = {setNome}/>
          </View>

          <View style={{flexDirection:'row', justifyContent: 'space-around', alignItems:'center'}}>
            <Text style={styles.info}>CPF</Text>

            <TextInput
              style = {styles.input}
              value = {cpf}
              placeholder = "Digite seu CPF aqui"
              placeholderTextColor = "#ce7865"
              onChangeText = {setCpf}/>
          </View>

          <View style={{flexDirection:'row', justifyContent: 'space-around', alignItems:'center'}}>
            <Text style={styles.info}>RG</Text>

            <TextInput
              style = {styles.input}
              value = {rg}
              placeholder = "Digite seu RG aqui"
              placeholderTextColor = "#ce7865"
              onChangeText = {setRg}/>
          </View>

          <View style={{flexDirection:'row', justifyContent: 'space-around', alignItems:'center'}}>
            <Text style={styles.info}>E-mail</Text>

            <TextInput
              style = {styles.input}
              value = {email}
              placeholder = "Digite seu e-mail aqui"
              placeholderTextColor = "#ce7865"
              onChangeText = {setEmail}/>
          </View>

          <View style={{flexDirection:'row', justifyContent: 'space-around', alignItems:'center'}}>
            <Text style={styles.info}>Estado</Text>

            <TextInput
              style = {styles.input}
              value = {uf}
              placeholder = "Digite seu Estado aqui"
              placeholderTextColor = "#ce7865"
              onChangeText = {setUf}/>
          </View>

          <View style={{flexDirection:'row', justifyContent: 'space-around', alignItems:'center'}}>
            <Text style={styles.info}>CEP</Text>

            <TextInput
              style = {styles.input}
              value = {cep}
              placeholder = "Digite seu CEP aqui"
              placeholderTextColor = "#ce7865"
              onChangeText = {setCep}/>
          </View>
          <TouchableOpacity onPress = {()=> msgEnvioDados()}>
            <Text style = {styles.button}> 
              Enviar dados 
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={{            
            width:'100%',
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 'auto',
            }}>
            2025</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  header:{
    flex: 2,
    flexDirection:'row',
    backgroundColor: 'brown',
  },

  body:{
    flex: 12,
    backgroundColor: 'pink',
  },

  footer:{
    flex: 1,
    backgroundColor: 'brown',
  },

  logo: {
    width: 40,
    height: 40,
    marginHorizontal: '9%',
    marginTop: '7%',
    borderWidth: 3,
    borderColor: 'beige',
    borderRadius: '10%',
  },

  info: {
    width: '100%', margin: 5, padding: 3,
    textAlign: 'center', color: '#DE3163', fontWeight:'bold',
    borderWidth: 2, borderColor: "#FFFACD", borderRadius: 5,
  },

  input: {
    width: '100%', margin: 5, padding: 3, backgroundColor: "brown",
    borderWidth: 2, borderColor: "pink", borderRadius: 5,
    color: "white",
  },

  button: {
    borderWidth:2, borderRadius:5, borderColor:"brown",
    textAlign:"center", color:"brown", fontSize:18, fontWeight:600,
    backgroundColor:"#FFFACD", padding:5, marginVertical:15, marginHorizontal:85,
  },
});
