import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

const QuestaoCB = ({
  questao = "?",
  pergunta = "?",
  opcao1 = "?",
  opcao2 = "?",
  opcao3 = "?",
  opcao4 = "?",
  corretas = [],
  onRespostaCorreta = () => {},
}) => {
  const options = [opcao1, opcao2, opcao3, opcao4];
  const optionKeys = ['opcao1', 'opcao2', 'opcao3', 'opcao4'];
  const [selected, setSelected] = useState(new Set());
  const [respostaCorreta, setRespostaCorreta] = useState(false);

  useEffect(() => {
    const selectedArray = [...selected].sort();
    const corretasArray = [...corretas].sort();
    
    const estaCorreto = 
      selectedArray.length === corretasArray.length &&
      selectedArray.every((value, index) => value === corretasArray[index]);
    
    // Função para verificar acerto/erro
    if (estaCorreto && !respostaCorreta) {
      onRespostaCorreta();
      setRespostaCorreta(true);
    } else if (!estaCorreto && respostaCorreta) {
      setRespostaCorreta(false);
    }
  }, [selected]);

  const toggleOption = (optionKey) => {
    const newSelected = new Set(selected);
    newSelected.has(optionKey) ? newSelected.delete(optionKey) : newSelected.add(optionKey);
    setSelected(newSelected);
  };

  return (
    <View>
      <Text style={styles.title}>
        <strong>Questão {questao}:</strong> {pergunta}
      </Text>

      <View>
        {options.map((option, index) => (
          <View key={optionKeys[index]} style={styles.checkboxContainer}>
            <Checkbox
              value={selected.has(optionKeys[index])}
              onValueChange={() => toggleOption(optionKeys[index])}
              color={selected.has(optionKeys[index]) ? '#ff0039' : undefined}
            />
            <Text style={styles.label}>{option}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },

  label: {
    marginLeft: 8,
    color: 'white',
  },

  title: {
    fontSize: 20,
    marginTop: 20,
    color: '#a2efef',
    fontWeight: 'bold',
  },
});

export default QuestaoCB;