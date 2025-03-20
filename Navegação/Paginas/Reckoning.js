import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Angular({navigation, route}) {

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
        
        <Image style={styles.ima} source={require('../assets/reckoning.webp')} />

        <View
          style={{
            backgroundColor: '#C3B1E1', padding:10
          }}>
          <Text style={{ color: 'white', textAlign: 'center', margin: 5,}}>
            Você assume o papel de uma guerreira que morre logo nos momentos inicias do jogo, somente para ser revivida pouco depois de forma misteriosa. Isso lhe garante o poder de romper o ciclo normal da natureza, permitindo realizar mudanças na maneira como as coisas deveriam acontecer. Isso torna você uma arma poderosa contra o exército conhecido como Tuatha Deon, criaturas sinistras que querem dominar o mundo e tirar sua nova vida a qualquer custo.
          </Text>
        </View>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomePage')}>
          <Text style={{color:'white', fontWeight: 800}}> Voltar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ima: {
    width: 300,
    resizeMode: 'contain',
    height: 176,
    margin: 25,
    borderColor: 'pink',
    borderWidth: 5,
    borderRadius:'10%',
    backgroundColor: 'white'
  },

  button: {
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#C3B1E1',
    padding: 10,
    width: 150,
    marginTop: 12,
    fontFamily: 'century gothic',
    borderRadius: 10,
  },
});
