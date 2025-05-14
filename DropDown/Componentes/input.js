import {Text, TextInput, StyleSheet, View } from 'react-native';

const Input = ({
  nomeCampo="?",
  nomeVariavel="?",
  nomeSet="?",

}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
      <Text style={styles.info}>{nomeCampo}</Text>

      <TextInput
        style={styles.input}
        value={nomeVariavel}
        placeholder="Digite"
        placeholderTextColor="#ce7865"
        onChangeText={nomeSet}
      />
    </View> 
  );
};

const styles = StyleSheet.create({
  info: {
    flex: 1,
    margin: 5,
    padding: 3,
    textAlign: 'center',
    color: '#DE3163',
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: '#FFFACD',
    borderRadius: 5,
  },

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
});

export default Input;
