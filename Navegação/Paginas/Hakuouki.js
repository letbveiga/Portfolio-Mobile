import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Hakuouki({navigation, route}) {

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
        
        <Image style={styles.ima} source={require('../assets/hakuouki.jpg')} />
        <View
          style={{
            backgroundColor: '#C3B1E1', padding:10
          }}>
          <Text style={{ color: 'white', textAlign: 'center', margin: 5}}>
            Yukimura Chizuru busca em Kyoto seu pai, um médico desaparecido, inventor de uma medicação poderosa. Na cidade, ao presenciar uma luta envolvendo samurais do Shinsengumi e algumas criaturas sedentas por sangue, Chizuru acaba sendo levada presa pelo grupo. Entretanto, ao descobrirem que a garota é filha do médico que procuram, resolvem deixar Chizuru no bando para ajudar na busca pelo seu pai. 
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
    height: 155,
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
