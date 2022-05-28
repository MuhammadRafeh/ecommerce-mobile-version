import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Facebook from 'expo-facebook';
import { useEcommerceContext } from '../../contexts/ContextProvider';
import { Ionicons } from '@expo/vector-icons';

const FacebookSignin = props => {
    const { setAuth, auth, allData, setAllData } = useEcommerceContext();

    async function logIn(props) {
        try {
            await Facebook.initializeAsync({
                appId: '471321207933541',
            });
            const { type, token, expirationDate, permissions, declinedPermissions } =
                await Facebook.logInWithReadPermissionsAsync({
                    permissions: ['public_profile'],
                });
            if (type === 'success') {
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);

                const info = await response.json() //info.id and info.name

            } else {
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    return (
        <TouchableOpacity style={styles.container} onPress={logIn}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Text style={{ marginRight: 10 }}>
                    <Ionicons name={'logo-facebook'} size={20} color={'white'} />
                </Text>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Facebook
                </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        width: '47%',
        backgroundColor: '#002e78',
        height: 36,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FacebookSignin

