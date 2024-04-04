import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} >
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>more...</Text>
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 10
  },
  cardElevated: {
    backgroundColor: '#a3a3a3',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowColor: '#333',
    shadowOpacity: 0.5
  }
})