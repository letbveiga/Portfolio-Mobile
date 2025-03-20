import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AliceMR({navigation, route}) {

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
        }}>
        
        <Image style={styles.ima} source={require('../assets/alicemr.webp')} />
        <View
          style={{
            backgroundColor: '#C3B1E1', padding:10
          }}>
          <Text style={{ color: 'white', textAlign: 'center', margin: 5}}>
            11 anos depois do primeiro jogo, em um País das Maravilhas ainda mais caótico do que da primeira vez, um misterioso trem corre todas as terras e espalha o caos por onde passa. Alice então percebe que aquele mundo está ruindo e isso significa que sua própria mente está em perigo. Assim, ela embarca em uma jornada para deter o trem e restaurar o equilíbrio desse país maravilhoso e, consequentemente, de sua própria mente.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomePage')}>
          <Text style={{ color:'white', fontWeight: 800,}}> Voltar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ima: {
    width: 300,
    resizeMode: 'contain',
    height: 191,
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
    fontWeight: 800,
    borderRadius: 10,
  },
});
