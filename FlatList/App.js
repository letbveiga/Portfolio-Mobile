import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image } from 'react-native';
// dados da lista
const countriesData = [
  { id: 1, url: 'https://science.nasa.gov/wp-content/uploads/2023/10/exoplanets1.jpg?w=1920', name: 'Confins de Zuminila', localidade: 'Delta', investigacao:'Aguardando tecnologia necessária' },
  { id: 2, name: 'Arabelina Espectral', url: 'https://cff2.earth.com/uploads/2022/01/17150446/Planet-scaled.jpg', localidade: 'Gama', investigacao:'Ativa', amistozidade:4 }, 
  { id: 3, name: 'Argoz', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZDJDQLjo1qRYcTN4OJl7RI1arg9Jwl6myw&s', localidade: 'Alfa', investigacao:'Pausada', amistozidade:80, toxicidade:4 },
  { id: 4, name: 'Ruptura Eterna', url: 'https://i2.wp.com/www.mesonstars.com/wp-content/uploads/2023/05/cosmos-7900553_1280.jpg?fit=866%2C577&ssl=1', localidade: 'Delta', investigacao:'Ativa', toxicidade:5 },
  { id: 5, name: 'Confinamento 3465', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGC66mdp8p1vY6mzE3qGeCePEtl0Ly5liIlw&s', localidade: 'Gama', investigacao:'Aguardando tecnologia necessária' },
  { id: 6, name: 'Pseudo Pangéia', url: 'https://www.earth.com/assets/_next/image/?url=https%3A%2F%2Fcff2.earth.com%2Fuploads%2F2024%2F02%2F08080007%2Fsuper-earth_water-rich_hubble_nasa_1m-1400x850.jpg&w=1200&q=75', localidade: 'Gama', investigacao:'Pausada', amistozidade:60, toxicidade:55 },
  { id: 7, name: 'Netuniane Rosa', url: 'https://imageio.forbes.com/blogs-images/billretherford/files/2017/12/GSFC_20171208_Archive_e001417_medium-1200x675.jpg?height=399&width=711&fit=bounds', localidade: 'Delta', investigacao:'Aguardando tecnologia necessária' },
  { id: 8, name: 'Vivídae Sílica', url: 'https://i.ytimg.com/vi/dNXMJEkxen0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAM0Gtnb0zOkkpCzqm61VNJEf0LeA', localidade: 'Gama', investigacao:'Ativa', amistozidade:75 },
  { id: 9, name: 'Mortífia', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyt53eHEov10Jk56XpcUQW3GibAp5MVvRQmg&s', localidade: 'Alfa', investigacao:'Pausada', amistozidade:90, toxicidade:85, },
  { id: 10, name: 'Astral 08', url: 'https://cdn.pixabay.com/photo/2023/03/14/11/58/exoplanet-7852186_640.jpg', localidade: 'Alfa', investigacao:'Ativa', amistozidade:25, toxicidade:12, },
];

const App = () => {
  //state
  const [countries, setCountries] = useState(countriesData);
  // search (name)
  const [searchTerm, setSearchTerm] = useState('');
  // define conteúdo de state para procura
  const search = (text) => { // Pega o texto digitado na caixa e transfere para o set
    setSearchTerm(text);
  };
  // search (setor)
  const [buscaSetor, setBuscaSetor] = useState('');
  // define conteúdo de state para procura
  const busca = (setor) => { // Pega o texto digitado na caixa e transfere para o set
    setBuscaSetor(setor);
  };

  useEffect(() => {
    // define filteredCountries
    const filteredCountries = countriesData.filter((country) => // 'Data' é a estrutura original, 'filter' é o método que irá filtrar os países
    // filtra por letra inicial
      country.name.toLowerCase().startsWith(searchTerm.toLowerCase()) && country.localidade.toLowerCase().startsWith(buscaSetor.toLowerCase())// 'startWith' vai comparar o iput de texto procurado apartir do início da string 'name', ou seja, não irá achar nada se buscar por termos/letras que não iniciam 'name'
    );
    //atualiza os dados do flatlist
    setCountries(filteredCountries);
  }, [searchTerm, buscaSetor]);

// renderiza um item específicio
  const renderCountry = ({ item }) => { // item será 1 elemento por vez (1 país = id + name + etc), precisa vir dentro de chave '{item}'
    return (
      <View style={styles.countryContainer}>
        <Text style={styles.countryText}> {item.id} - {item.name}</Text>
        <View style={{ flexDirection: 'row', alignItems:"center" }}>
          <View style={{display:'flex', alignItems: 'center', padding: 20,}}>
            <Image
              source={{ uri: item.url }}
              style={{ width: 120, height: 120, borderRadius:5 }}
            />
          </View>
          <View style={{flex: 1, padding: 20, }}>
            {item.localidade=='Alfa' ? <Text style={styles.countryTextInfo, {color:'pink'}}><strong>Localização</strong>: Setor {item.localidade}</Text> : item.localidade=='Gama' ? <Text style={styles.countryTextInfo, {color:'#87CEEB'}}><strong>Localização</strong>: Setor {item.localidade}</Text> : <Text style={styles.countryTextInfo, {color:'#66CDAA'}}><strong>Localização</strong>: Setor {item.localidade}</Text>}
            {item.investigacao!=null ? <Text style={styles.countryTextInfo}><strong>Investigação</strong>: {item.investigacao}</Text> : null}
            {item.amistozidade!=null ? <Text style={styles.countryTextInfo}><strong>Porcetagem de espécimes amigáveis</strong>: {item.amistozidade}%</Text> : null}
            {item.toxicidade!=null ? <Text style={styles.countryTextInfo}><strong>Porcetagem ambiental tóxica</strong>: {item.toxicidade}%</Text> : null}        
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar realidade alternativa..."
        value={searchTerm}
        onChangeText={search}
      />
      <TextInput
        style={styles.input}
        placeholder="Pesquisar setor..."
        value={buscaSetor}
        onChangeText={busca}
      />
      <FlatList
        data={countries}
        renderItem={renderCountry}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000080',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 8,
    marginBottom: 16,
    color: 'white'
  },
  countryContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'pink',
    
  },
  countryText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  countryTextInfo: {
    fontSize: 12,
    color: 'beige'
  }
});

export default App;
 