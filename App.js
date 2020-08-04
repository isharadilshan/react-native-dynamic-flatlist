import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerTex}>
          Here are some boxes of different colors
        </Text>
        <ColorBox color={'#2aa198'} />
        <ColorBox color={'#268bd2'} />
        <ColorBox color={'#d33682'} />
        <ColorBox color={'#cb4b16'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  headerTex: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  box: {
    margin: 5,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
});
export default App;
