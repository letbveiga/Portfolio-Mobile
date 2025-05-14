import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RadioButton, Provider as PaperProvider } from 'react-native-paper';

const QuestaoRB = ({
  questao = "?",
  pergunta = "?",
  opcao1 = "?",
  opcao2 = "?",
  opcao3 = "?",
  opcao4 = "?",
  correta = "?",
  onRespostaCorreta = () => {},
}) => {
  const [checked, setChecked] = useState('');
  const [respostaCorreta, setRespostaCorreta] = useState(false);

  useEffect(() => {
    // Função para verificar acerto/erro
    if (checked && checked === correta && !respostaCorreta) {
      onRespostaCorreta();
      setRespostaCorreta(true);
    } else if (respostaCorreta && checked !== correta) {
      setRespostaCorreta(false);
    }
  }, [checked]);

  return (
    <View>
      <Text style={styles.title}>
        <strong>Questão {questao}:</strong> {pergunta}
      </Text>
      
      <PaperProvider>
        <View style={styles.radioGroup}>
          <RadioButton.Item
            label={opcao1}
            value="opcao1"
            status={checked === 'opcao1' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('opcao1')}
            color="#ff0039"
            position="leading"
            labelStyle={{textAlign: 'left', flex: 1}}
          />
          <RadioButton.Item
            label={opcao2}
            value="opcao2"
            status={checked === 'opcao2' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('opcao2')}
            color="#ff0039"
            position="leading"
            labelStyle={{textAlign: 'left', flex: 1}}
          />
          <RadioButton.Item
            label={opcao3}
            value="opcao3"
            status={checked === 'opcao3' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('opcao3')}
            color="#ff0039"
            position="leading"
            labelStyle={{textAlign: 'left', flex: 1}}
          />
          <RadioButton.Item
            label={opcao4}
            value="opcao4"
            status={checked === 'opcao4' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('opcao4')}
            color="#ff0039"
            position="leading"
            labelStyle={{textAlign: 'left', flex: 1}}
          />
        </View>
      </PaperProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  radioGroup: {
    alignItems: 'left',
    backgroundColor: '#a2efef',
    padding: 10,
    width: '95%',
    marginVertical: 10,
    fontFamily: 'century gothic',
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#ff0039',
    fontWeight: 'bold',
  },

  title: {
    fontSize: 20,
    marginTop: 20,
    color: '#a2efef',
    fontWeight: 'bold',
  },
});

export default QuestaoRB;