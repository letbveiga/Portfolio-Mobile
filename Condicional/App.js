import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [dados, setDados] = useState(false);
  const [formacao, setFormacao] = useState(false);
  const [experiencia, setExperiencia] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        style={{
          backgroundColor: '#DE3163',
          width: 200,
          padding: 10,
          borderRadius: 25,
          color: 'white',
          fontWeight: 'bold',
          fontSize: 25,
          marginBottom: 15,
        }}>
        Currículo 2025
      </Text>

      <Image style={styles.logo} source={require('./assets/icone.jpg')} />

      <Text
        style={{
          width: 200,
          backgroundColor: '#DE3163',
          padding: 10,
          color: 'white',
          fontSize: 15,
          marginBottom: 15,
          alignItems: 'center',
          textAlign: 'justify',
        }}>
        Olá pessoa, bem vinda ao meu currículo! Para ver as informações pertinentes, favor selecionar os botões abaixo.
      </Text>

      <TouchableOpacity onPress={() => setDados(!dados)}>
        <Text style={styles.botao}>Ver Dados Pessoais</Text>
      </TouchableOpacity>

      {dados ? (
        <View style={styles.texto}>
          <Text style={styles.texto}>
            <strong>Nome</strong>: Fulana Beltranis Sicranela
          </Text>
          <Text style={styles.texto}>
            <strong>Nascimento</strong>: 28/08/1988
          </Text>
          <Text style={styles.texto}>
            <strong>CPF</strong>: 45877206855
          </Text>
          <Text style={styles.texto}>
            <strong>RG</strong>: 541418630
          </Text>
          <Text style={styles.texto}>
            <strong>Endereço</strong>: Avenida Tamo Perdido
          </Text>
          <Text style={styles.texto}>
            <strong>Bairro</strong>: Pra lá do Morro
          </Text>
          <Text style={styles.texto}>
            <strong>Estado</strong>: Além do Rio
          </Text>
        </View>
      ) : null}

      <TouchableOpacity onPress={() => setFormacao(!formacao)}>
        <Text style={styles.botao}>Ver Formação Acadêmica</Text>
      </TouchableOpacity>

      {formacao ? (
        <View style={styles.texto}>
          <Text style={styles.texto}>
            <strong>Bacharel</strong>: Artes Visuais - 2022 - PUCCAMP
          </Text>
          <Text style={styles.texto}>
            <strong>Técnico</strong>: Desenvolvimento de Sistemas - 2025 - ETEC
            SJC
          </Text>
        </View>
      ) : null}

      <TouchableOpacity onPress={() => setExperiencia(!experiencia)}>
        <Text style={styles.botao}>Ver Experiência Profissional</Text>
      </TouchableOpacity>

      {experiencia ? (
        <View>
          <Text style={styles.texto}>
            <strong>Cores da Floresta</strong>: Programadora, roteirista e
            designer - 2021 a 2023
          </Text>
          <Text style={styles.texto}>
            <strong>Ske'Umbra</strong>: Programadora, roteirista e designer -
            2023 a 2024
          </Text>
          <Text style={styles.texto}>
            <strong>Casa do Síndico</strong>: Assistente de Design - 2024 a 2025
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefce4',
    padding: 8,
  },

  botao: {
    width: 200,
    padding: 10,
    marginVertical: 10,
    fontSize: 15,
    borderWidth: 3,
    borderColor: '#DE3163',
    borderRadius: 10,
    backgroundColor: '#4c907b',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  texto: {
    width: 150,
    margin: 5,
    alignItems: 'center',
    textAlign: 'justify',
    color: '#DE3163',
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 15,
    alignItems: 'center',
    textAlign: 'justify',
    borderWidth: 5,
    borderColor: '#DE3163',
    borderRadius: '10%',
  },
});
