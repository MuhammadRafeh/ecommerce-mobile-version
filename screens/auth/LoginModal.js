import React, { useRef, useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/UI/Button';
import CloseButton from '../../components/UI/CloseButton';
import FullScreenIndicator from '../../components/UI/FullScreenIndicator';
import colors from '../../constants/colors';
import { useEcommerceContext } from '../../contexts/ContextProvider';
import GoogleSignin from './GoogleSignin'
import FacebookSignin from './FacebookSignin'
import firebase from "firebase";

const LoginModal = props => {
    const { setAuth, auth, allData, setAllData, isAuth, setIsAuth } = useEcommerceContext();
    const fromTailor = props?.route?.params?.fromTailor;
    const [selected, setSelected] = useState('no');
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isInIncorrect, setIsIncorrect] = useState(false);

    const emailRef = useRef(null);

    const onBlur = () => {
        setSelected('no');
    }

    const onCloseButtonPress = () => {
        setIsIncorrect(false);
        setUsernameOrEmail('');
        setPassword('');
        emailRef.current.focus();
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 70, backgroundColor: colors.offWhite, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 70, height: 70, top: 4 }} onPress={() => props.navigation.goBack()}>
                    <Icon name={'ios-arrow-up-outline'} size={20} color={'#969292'} />
                    <Text style={{ color: '#a6a1a1', fontSize: 14.5, letterSpacing: -0.3 }}>
                        Go back
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', marginHorizontal: 20 }} keyboardShouldPersistTaps={'handled'}>
                <Image style={{ width: '50%' }} resizeMode={'contain'} />
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>
                        {
                            fromTailor ? 'Welcome Tailor' : 'Welcome back'
                        }
                    </Text>
                </View>
                <View style={{ marginBottom: 30 }}>
                    <Text style={{ letterSpacing: -0.2, fontSize: 14, color: 'grey' }} adjustsFontSizeToFit={true} numberOfLines={1}>
                        {
                            fromTailor ? 'Sign in back in order to handle different e-commerce items.' : 'Sign in to e-commerce to pick up exactly where you left off.'
                        }
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <FacebookSignin navigation={props.navigation} />

                    <GoogleSignin navigation={props.navigation} />

                </View>

                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <Text style={{ letterSpacing: -0.2, fontSize: 14, color: 'grey' }}>
                        or sign in with email
                    </Text>
                </View>


                <View style={{ marginBottom: 40 }}>
                    <TextInput
                        ref={(ref) => { emailRef.current = ref; }}
                        placeholder='Email or username'
                        value={usernameOrEmail}
                        onChangeText={setUsernameOrEmail}
                        style={{ color: 'black', borderBottomWidth: 1, borderColor: isInIncorrect ? 'red' : selected == 'email' ? colors.primary : 'grey', paddingBottom: 0, paddingLeft: 0, fontSize: 16 }}
                        placeholderTextColor={isInIncorrect ? 'red' : selected == 'email' ? colors.primary : 'grey'}
                        onFocus={() => {
                            setSelected('email')
                        }}
                        onBlur={onBlur}
                    />
                    {
                        isInIncorrect && <CloseButton onPress={onCloseButtonPress} />
                    }

                </View>

                <View style={{ marginBottom: isInIncorrect ? 0 : 30 }}>
                    <TextInput
                        placeholder='Password'
                        value={password}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        style={{ color: 'black', borderBottomWidth: 1, borderColor: isInIncorrect ? 'red' : selected == 'password' ? colors.primary : 'grey', paddingBottom: 0, paddingLeft: 0, fontSize: 16 }}
                        placeholderTextColor={isInIncorrect ? 'red' : selected == 'password' ? colors.primary : 'grey'}
                        onFocus={() => {
                            setSelected('password')
                        }}
                        onBlur={onBlur}
                    />
                </View>

                {
                    isInIncorrect && <View style={{ marginVertical: 10, marginBottom: 20 }}>
                        <Text style={{ color: 'red', fontSize: 12, letterSpacing: -0.2 }}>
                            Email/username or password is incorrect.
                        </Text>
                    </View>
                }

                <Button normalText title={'Continue'} style={{ marginBottom: 20, borderRadius: 8 }} onPress={async () => {
                    firebase
                        .auth()
                        .signInWithEmailAndPassword(usernameOrEmail, password)
                        .then((object) => {
                            if (!object.user.emailVerified) {
                                alert('Please verify your email!')
                                firebase.auth().signOut();
                                return
                            }
                            // dispatch(authenticate(object.user.uid, email.toLowerCase(), false, false))
                            setIsAuth(false)
                        })
                        .catch(error => alert(error.message));
                }} />

                <TouchableOpacity style={{ marginBottom: 24, alignItems: 'flex-end' }} onPress={() => props.navigation.navigate('Signup')}>
                    <Text style={{ color: colors.primary, fontWeight: 'bold' }}>
                        Create Account
                    </Text>
                </TouchableOpacity>

            </ScrollView>

            {
                isLoading && <FullScreenIndicator />
            }

        </View>
    );
}

export default LoginModal;
