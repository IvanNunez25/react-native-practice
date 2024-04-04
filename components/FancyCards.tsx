import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

export default function FancyCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending</Text>
      <View>
        <View style={styles.cardBody}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Cowboy Carter</Text>
            <Text style={styles.cardYear}>(2024)</Text>
          </View>
          <Text style={styles.cardLabel}>Beyoncé</Text>
        </View>        
        <Image 
          source={{
            uri: 'https://i.scdn.co/image/ab67616d0000b2731572698fff8a1db257a53599'
          }}
          style={styles.cardImage}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 70
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30
  },
  cardImage: {    
    height: 400,
    width: '97%',
    borderRadius: 5
  },
  cardBody: {
    marginTop: 10
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cardTitle: {
    fontSize: 22,
    marginRight: 10
  },
  cardYear: {    
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 15,
    marginBottom: 18
  }
})