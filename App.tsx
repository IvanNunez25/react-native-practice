import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native'
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.text}>First App</Text>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({ 
  mainContainer: {
    marginLeft: 15,
    paddingTop: 20
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  }
})

export default App;
