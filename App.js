/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Simples from './src/Simples'
import ParImpar from './src/ParImpar'
import { MegaSena } from './src/MegaSena';

    
const App: () => React$Node = () => {
  return (
    <>
          <Simples texto="propriedade interpolada"></Simples>
      <StatusBar />
      <SafeAreaView style={styles.container}>
          <ParImpar numero={30}></ParImpar>
          <ParImpar numero={30}></ParImpar>
          <MegaSena numeros={4}></MegaSena>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    flex:1,
    alignItems:'center'
  }
});

export default App;
