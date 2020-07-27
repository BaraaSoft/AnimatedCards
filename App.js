/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
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


import { CardView } from './src/cardview/CardView';
import { CardItem } from './src/CardItem'


const App = () => {
  return (

    <View style={styles.container}>
      <SafeAreaView />
      <CardView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'stretch'
  },
  scrollview: {
    height: 280,
  }
})


export default App;
