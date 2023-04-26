import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from '../../components/CustomButton';

const SignUpScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [error, setError] = useState({ isShow: false, message: '' });

    const handleSignUp = async () => {
        if (!username || !password || !confirmpassword) {
            setError({ isShow: true, message: 'Missing data!' })
            return
        }
        if (password != confirmpassword) {
            setError({ isShow: true, message: 'Repeat password not match!' })
            return
        }

        return fetch('http://10.0.2.2:4001/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        })
            .then(response => response.json())
            .then(json => {
                if (json.data) {
                    navigation.navigate('SignIn')
                }
                else setError({ isShow: true, message: json.message })
            })
            .catch(error => {
                console.error(error);
            });
    }
    const handleSwitchLoginScreen = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 26, fontWeight: 600 }}>Create Account</Text>
            <Text style={styles.title}>Create a new account</Text>
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
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmpassword}
                onChangeText={setConfirmPassword}
            />
            {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
            <View style={{ paddingVertical: 30, width: '100%' }}>
                <CustomButton title="Signup" onPress={handleSignUp} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Already have a account?</Text>
                <TouchableOpacity onPress={handleSwitchLoginScreen}>
                    <Text style={{ color: 'green', fontWeight: '600' }}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

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

export default SignUpScreen