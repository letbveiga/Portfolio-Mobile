import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import QuestaoRB from './componentes/radioButton.js';
import QuestaoCB from './componentes/checkBox.js';

export default function App() {
  const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  // Função para atualizar a pontuação
  const atualizarPontuacao = (pontos) => {
    setPontuacaoTotal(prev => prev + pontos);
  };

  // Função para validar o questionário
  const validarQuestionario = () => {
    setMostrarResultado(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View>
          <Text style={[styles.title, {color: '#ff0039', fontSize: 24}]}>
            Questionário de PAM
          </Text>

          <QuestaoRB
            questao="1"
            pergunta="Como o estado selected (do checkbox) é inicializado?"
            opcao1="useState([])"
            opcao2="useState({})"
            opcao3="useState(new Set())"
            opcao4="useState('')"
            correta="opcao3"
            onRespostaCorreta={() => atualizarPontuacao(6.7)}
          />

          <QuestaoCB
            questao="2"
            pergunta="Quais componentes do React Native são adequados para renderizar listas dinâmicas? (Marque todas que aplicar)"
            opcao1="FlatList"
            opcao2="ScrollView"
            opcao3="ListView"
            opcao4="SectionList"
            corretas={["opcao1", "opcao4"]}
            onRespostaCorreta={() => atualizarPontuacao(6.7)}
          />

          <QuestaoRB
            questao="3"
            pergunta="Qual propriedade do componente Image define a fonte da imagem?"
            opcao1="src"
            opcao2="url"
            opcao3="source"
            opcao4="uri"
            correta="opcao3"
            onRespostaCorreta={() => atualizarPontuacao(6.7)}
          />

          <QuestaoCB
            questao="4"
            pergunta="Quais são formas válidas de armazenar dados localmente no React Native? (Marque todas que aplicar)"
            opcao1="AsyncStorage.setItem('chave', valor)"
            opcao2="localStorage.setItem('chave', valor)"
            opcao3="SQLite"
            opcao4="Firebase Realtime Database"
            corretas={["opcao1", "opcao3"]}
            onRespostaCorreta={() => atualizarPontuacao(6.7)}
          />

          <QuestaoRB
            questao="5"
            pergunta="Qual propriedade do FlatList é usada para extrair a chave única de cada item?"
            opcao1="data"
            opcao2="renderItem"
            opcao3="extractKey"
            opcao4="keyExtractor"
            correta="opcao4"
            onRespostaCorreta={() => atualizarPontuacao(6.7)}
          />

          <QuestaoCB
            questao="6"
            pergunta="Quais estratégias podem ser usadas para renderizar componentes condicionalmente? (Marque todas que aplicar)"
            opcao1="{condition && <Componente/>}"
            opcao2="{condition ? <ComponenteA/> : <ComponenteB/>}"
            opcao3="<Componente visible={condition}/>"
            opcao4="if (condition) return <Componente/>"
            corretas={["opcao1", "opcao2", "opcao4"]}
            onRespostaCorreta={() => atualizarPontuacao(6.7)}
          />

          <QuestaoRB
            questao="7"
            pergunta="Qual propriedade do TouchableOpacity é usada para definir a ação ao pressionar o botão?"
            opcao1="onChange"
            opcao2="onPress"
            opcao3="onClick"
            opcao4="onSubmit"
            correta="opcao2"
            onRespostaCorreta={() => atualizarPontuacao(6.7)}
          />

          <QuestaoCB
            questao="8"
            pergunta="Quais são as formas corretas de atualizar um estado no React Native? (Marque todas que aplicar)"
            opcao1="setState(newValue)"
            opcao2="state = newValue"
            opcao3="useState(newValue)"
            opcao4="setState(prevState => [...prevState, newValue])"
            corretas={["opcao1", "opcao4"]}
            onRespostaCorreta={() => atualizarPontuacao(6.7)}
          />

          <QuestaoRB
            questao="9"
            pergunta="Qual método é usado para navegar para outra tela passando parâmetros no React Navigation?"
            opcao1="goBack()"
            opcao2="navigate('Tela', {params})"
            opcao3="push()"
            opcao4="replace()"
            correta="opcao2"
            onRespostaCorreta={() => atualizarPontuacao(6.7)}
          />

          <QuestaoCB
            questao="10"
            pergunta="Quais destes métodos são apropriados para renderizar listas de dados em React Native? (Marque todas que aplicar)"
            opcao1="Usar map() diretamente no JSX"
            opcao2="Usar FlatList"
            opcao3="Usar ScrollView com map() interno"
            opcao4="Usar SectionList para listas simples"
            corretas={["opcao1", "opcao2", "opcao3"]}
            onRespostaCorreta={() => atualizarPontuacao(6.7)}
          />

          <QuestaoRB
            questao="11"
            pergunta="Qual hook é ESPECIFICAMENTE projetado para lidar com efeitos colaterais em componentes React?"
            opcao1="useEffect"
            opcao2="useState"
            opcao3="useReducer"
            opcao4="useContext"
            correta="opcao1"
            onRespostaCorreta={() => atualizarPontuacao(6.7)}
          />

          <QuestaoCB
            questao="12"
            pergunta="Quais destas são boas práticas ao trabalhar com navegação em React Native? (Marque todas que aplicar)"
            opcao1="Passar funções completas como parâmetros entre telas"
            opcao2="Usar parâmetros de navegação para dados simples"
            opcao3="Centralizar a lógica de navegação em um serviço"
            opcao4="Armazenar dados complexos no AsyncStorage e passar apenas chaves"
            corretas={["opcao2", "opcao3", "opcao4"]}
            onRespostaCorreta={() => atualizarPontuacao(6.7)}
          />

          <QuestaoRB
            questao="13"
            pergunta="Qual método é usado para transformar um array de dados em componentes React Native durante a renderização?"
            opcao1="filter()"
            opcao2="reduce()"
            opcao3="forEach()"
            opcao4="map()"
            correta="opcao4"
            onRespostaCorreta={() => atualizarPontuacao(6.7)}
          />

          <QuestaoCB
            questao="14"
            pergunta="Quais destes são casos de uso adequados para o hook useEffect? (Marque todas que aplicar)"
            opcao1="Atualizar o título da tela"
            opcao2="Fazer chamadas à API quando o componente monta"
            opcao3="Sincronizar estado com armazenamento local"
            opcao4="Limpar subscriptions quando o componente desmonta"
            corretas={["opcao1", "opcao2", "opcao3", "opcao4"]}
            onRespostaCorreta={() => atualizarPontuacao(6.7)}
          />

          <QuestaoRB
            questao="15"
            pergunta="Qual é a forma CORRETA de acessar parâmetros passados entre telas no React Navigation?"
            opcao1="props.params"
            opcao2="navigation.state"
            opcao3="route.params"
            opcao4="useNavigation().params"
            correta="opcao3"
            onRespostaCorreta={() => atualizarPontuacao(6.7)}
          />

          <Button 
            style={{marginTop: 50,}}
            title="Validar Questionário" 
            onPress={validarQuestionario} 
            color="#ff0039"
          />

          {mostrarResultado && (
            <Text style={[styles.title, {marginTop: 20, color:"#ff0039"}]}>
              Pontuação Final: {pontuacaoTotal.toFixed(0)}%
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
    justifyContent: 'left',
    alignItems: 'left',
  },

  title: {
    fontSize: 20,
    marginTop: 20,
    color: '#a2efef',
    fontWeight: 'bold',
  },
});
