import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from '../../components/CustomButton';

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Your login logic here
    navigation.navigate('Home')
  }

  const handleSwitchSignUpScreen = () => {
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26, fontWeight: 600 }}>Welcome Back</Text>
      <Text style={styles.title}>signin to IOT system</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={{ paddingVertical: 30, width: '100%' }}>
        <CustomButton title="login" onPress={handleLogin} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>Don't have account?</Text>
        <TouchableOpacity onPress={handleSwitchSignUpScreen}>
          <Text style={{ color: 'green', fontWeight: '600' }}> Create a new account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 30
  },
  title: {
    fontSize: 13,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});

export default SignInScreen;
