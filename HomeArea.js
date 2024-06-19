import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Featured_jobs from './Featured_jobs';
import Popular_jobs from './Popular_jobs';

function HomeArea({ route }) {
  const { name, email } = route.params;

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
    <View style={styles.container}>
        <View style={{marginRight: 120}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        </View>
      <Image style={{marginLeft: 10}}source={require('./assets/Ellipse.png')} />
    </View>
    <Featured_jobs />

    <Popular_jobs />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  name: {
    fontSize: 24,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#0D0D26',
  },
  email: {
    fontSize: 20,
    marginBottom: 10,
    color: '#95969D',
  },
});

export default HomeArea;
