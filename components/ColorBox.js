import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ColorBox = (color) => {
  return (
    <View style={[styles.box, { backgroundColor: color }]}>
      <Text style={styles.boxText}>reusable color box</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 5,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ColorBox;
