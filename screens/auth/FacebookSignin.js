import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Facebook from 'expo-facebook';
import { useEcommerceContext } from '../../contexts/ContextProvider';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { firebase } from '../../firebase/services'

const FacebookSignin = props => {
    const { setAuth, auth, allData, setAllData } = useEcommerceContext();

    async function logIn(props) {
        try {
            // await Facebook.initializeAsync({
            //     appId: '1058518701540571',
            // });
            // const { type, token, expirationDate, permissions, declinedPermissions } =
            //     await Facebook.logInWithReadPermissionsAsync({
            //         permissions: ['public_profile'],
            //     });
            // if (type === 'success') {
            //     const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);

            //     const info = await response.json() //info.id and info.name
            //     console.log(info)
            // } else {
            // }



            const appId = Constants.manifest.extra.facebook.appId;

            await Facebook.initializeAsync({
                appId: appId,
            });
            const { type, token, expirationDate, permissions, declinedPermissions } =
                await Facebook.logInWithReadPermissionsAsync({
                    permissions: ['public_profile', 'email']
                });
                console.log(permissions, expirationDate, token)
            if (type == 'success') {
                await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);  // Set persistent auth state
                const credential = firebase.auth.FacebookAuthProvider.credential(token);
                const facebookProfileData = await firebase.auth().signInWithCredential(credential);  // Sign in with Facebook credential

                console.log("facebookProfileData")
            } else {
                alert('Something Went Wrong!');
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

