import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ZeldaTP({navigation, route}) {

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
        
        <Image style={styles.ima} source={require('../assets/zeldatp.jpg')} />
        <View
          style={{
            backgroundColor: '#C3B1E1', padding:10
          }}>
          <Text style={{ color: 'white', textAlign: 'center', margin: 5}}>
            Link embarca numa aventura para prevenir que sua terra natal, Hyrule, seja engolfada por uma dimensão paralela corrompida conhecida como Twilight Realm, o Reino do Crepúsculo. Para isso, Link obtêm as formas tanto de um hyliano quanto a de um lobo e é ajudado por uma criatura misteriosa chamada Midna.
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
    height: 156,
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
