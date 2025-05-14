import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Dropdown = ({
  options = [],
}) => {
  const [selectedOption, setSelectedOption] = useState('Estado');
  const [viewDropDown, setViewDropDown] = useState(false);
  const changeSelectedItem = (valor) => {
    setSelectedOption(valor);
    setViewDropDown(false);
    onSelect(valor);
  };

  return (
    <View style={{ flex: 1, marginLeft: 5 }}>
      <TouchableOpacity
        onPress={() => setViewDropDown(!viewDropDown)}
        style={styles.estadoContainer}>
        <Text style={styles.estadoText}>{selectedOption}</Text>
        <Image
          style={styles.estadoSeta}
          source={require('../assets/seta.png')}
        />
      </TouchableOpacity>

      {viewDropDown && (
        <View style={styles.dropdown}>
          {options.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => changeSelectedItem(item.id)}
              style={styles.dropdownItem}>
              <Text style={styles.dropdownItemText}>
                {item.id} - {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  estadoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
    padding: 3,
    borderWidth: 2,
    borderColor: '#FFFACD',
    borderRadius: 5,
    backgroundColor: 'transparent',
  },

  estadoText: {
    color: '#DE3163',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },

  estadoSeta: {
    height: 20,
    width: 20,
    marginRight: 5,
  },

  dropdown: {
    position: 'absolute',
    top: 40,
    left: 5,
    right: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFACD',
    backgroundColor: 'pink',
    elevation: 10,
    zIndex: 10,
  },

  dropdownItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#FFFACD',
  },

  dropdownItemText: {
    color: 'white',
  },
});

export default Dropdown;