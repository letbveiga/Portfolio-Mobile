import React, {useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Okami({navigation, route}) {

// executa primeiro
 useEffect(() => {
 });
    
  return (

     <View
       style={{
        flex: 1,
        backgroundColor: '#FFFACD',       
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFACD',
          padding: 10,
        }}>
        
        <Image style={styles.ima} source={require('../assets/okami.jpg')} />
        <View
          style={{
            backgroundColor: '#C3B1E1', padding:10
          }}>
          <Text style={{ color: '#fff', textAlign: 'center', margin: 5}}>
            Okami conta a história de um lobo despertado em uma realidade apocalíptica no mundo fictício de Nippon. Com o objetivo de descobrirem o que está corrompendo e infectando Nippon, Amaterasu e o debochado companheiro Issun viajam por campos, montanhas e vilarejos a beira da ruína, procurando despertar treze deuses que detêm habilidades poderosas personificados em pincéis sagrados.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomePage')}>
          <Text style={{ color:'white', fontWeight: 800}}> Voltar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ima: {
    width: 300,
    resizeMode: 'contain',
    height: 173,
    margin: 25,
    borderColor: 'pink',
    borderWidth: 5,
    borderRadius:'10%',
    backgroundColor: 'white'
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#C3B1E1',
    padding: 10,
    width: 150,
    marginTop: 12,
    fontFamily: 'century gothic',
    borderRadius: 10,
  },
});
