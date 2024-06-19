import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native';
import Hello from './Hello';

function LoginArea({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name && email) {
      navigation.navigate(' ', { name, email });
    } else {
      alert('Please complete the form');
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.welcomeSect}>
        <Hello />
        </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Pressable style={styles.button} title="Log In" onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
        </Pressable>
        <Image source={require('./assets/ocw.png')} />
        <Image style={{marginTop: 10, alignSelf: 'center'}} source={require('./assets/accountIcons.png')} />
        <Image style={{marginTop: 10, alignSelf: 'center'}} source={require('./assets/lastText.png')} />
    </View>
  );
}

export default LoginArea;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 52,
    borderColor: '#AFB0B6',
    borderWidth: 1,
    width: 327,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  welcomeSect: {
    marginBottom: 40,

  },
  button: {
    backgroundColor: '#356899',
    padding: 15,
    borderRadius: 5,
    marginBottom: 50,
    
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },

});


