// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', backgroundColor: '#C3B1E1' }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <View style={{margin:20}}>
            <Text style={{color : 'white', fontSize:25, fontWeight:800, fontFamily: 'nunito', textAlign:'center'}}>Top 6 Jogos Favoritos para Computador</Text>
          </View>

          <Image
              style={styles.logo}
              source={require('../assets/icone.png')}
            />

          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Hakuouki')}>
              <Text style={styles.button_text}>Hakuouki</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('AliceMR')}>
              <Text style={styles.button_text}>AliceMR</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Okami')}>
              <Text style={styles.button_text}>Okami</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Reckoning')}>
              <Text style={styles.button_text}>Reckoning</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('ZeldaTP')}>
              <Text style={styles.button_text}>ZeldaTP</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('OLBA')}> {/* o verde aqui é o nome virtual da importação*/}
              <Text style={styles.button_text}>OLBA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#F8C8DC',
    padding: 10,
    width: 150,
    marginTop: 12,
    fontFamily: 'century gothic', textAlign: 'center',
    borderRadius: 20,
    borderColor: '#FFFACD',
    borderWidth: 4,
    
  },

  logo: {
    marginTop: 25,
    width: 140,
    resizeMode: 'contain',
    height: 140,
    borderColor: '#FFFACD',
    borderWidth: 5,
    borderRadius:'10%',
    backgroundColor: 'white'
  },

  button_text: {
      color:'white',
      fontWeight: 800,
      textShadowColor:'#DB7093',
      textShadowRadius:5
  }
});

export default HomePage;
