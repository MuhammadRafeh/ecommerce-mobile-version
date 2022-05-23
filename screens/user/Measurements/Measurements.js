import React, { useRef, useState } from 'react';
import { Text, View, TextInput, Alert, Keyboard } from 'react-native';
import Button from '../../../components/UI/Button';
import CloseButton from '../../../components/UI/CloseButton';
import FullScreenIndicator from '../../../components/UI/FullScreenIndicator';
import colors from '../../../constants/colors';
import { useEcommerceContext } from '../../../contexts/ContextProvider';
import checkAndWriteFile from '../../../functions/checkAndWriteFile';
import validateEmail from '../../../functions/validateEmail';
import validatePassword from '../../../functions/validatePassword';
import validateUsername from '../../../functions/validateUsername';

const Signup = props => {
    const { auth, setAuth, allData, setAllData } = useEcommerceContext();

    const [selected, setSelected] = useState('email');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const emailRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);


    const handleSignup = async () => {
        setIsLoading(true);
        if (email.trim() && password.trim() && username.trim()) {
            let isAllTrue = true;
            if (!validateEmail(email)) {
                setIsEmailValid(false);
                isAllTrue = false;
            }
            if (!validateUsername(username) || username.length < 6) {
                setIsUsernameValid(false);
                isAllTrue = false;
            }
            if (!validatePassword(password)) {
                setIsPasswordValid(false);
                isAllTrue = false;
            }
            if (!isAllTrue) {
                setIsLoading(false);
                return;
            }
            Keyboard.dismiss();

            const newAuth = {
                ...auth,
                users: [...auth.users, { email: email.trim(), username: username.trim(), password: password.trim() }],
            }

            const newData = {
                ...allData,
                auth: newAuth
            }
            Alert.alert('Operation Success', 'You can now Login!', [{ text: 'Ok', style: 'destructive', onPress: () => props.navigation.goBack() }])

            await checkAndWriteFile(newData)
            setAllData(newData);

            setIsLoading(false);

            setAuth(newAuth)
            return;
        }
        setIsLoading(false);
    }

    const handleCloseButtonPress = type => { // email | username | password
        if (type == 'email') {
            setIsEmailValid(true);
            setEmail('');
            emailRef.current.focus();
        } else if (type == 'username') {
            setIsUsernameValid(true);
            setUsername('');
            usernameRef.current.focus();
        } else if (type == 'password') {
            setIsPasswordValid(true);
            setPassword('');
            passwordRef.current.focus();
        }
    }

    return (
        <View style={{ flex: 1, paddingTop: 18, marginTop: 2, paddingHorizontal: 20, backgroundColor: 'white' }}>
            <View style={{marginBottom: 20}}>
                <TextInput
                    ref={(ref) => { emailRef.current = ref; }}
                    placeholder='Bazu'
                    value={email}
                    onChangeText={setEmail}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red'}
                    autoFocus={true}
                    onFocus={setSelected.bind(null, 'email')}
                    onBlur={setSelected.bind(null, 'no')}
                />
                {
                    !isEmailValid && <CloseButton onPress={handleCloseButtonPress.bind(null, 'email')} />
                }
            </View>
            <View style={{marginBottom: 20}}>
                <TextInput
                    ref={(ref) => { emailRef.current = ref; }}
                    placeholder='Kamiz'
                    value={email}
                    onChangeText={setEmail}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red'}
                    autoFocus={true}
                    onFocus={setSelected.bind(null, 'email')}
                    onBlur={setSelected.bind(null, 'no')}
                />
                {
                    !isEmailValid && <CloseButton onPress={handleCloseButtonPress.bind(null, 'email')} />
                }
            </View>
            <View style={{marginBottom: 20}}>
                <TextInput
                    ref={(ref) => { emailRef.current = ref; }}
                    placeholder='Tera'
                    value={email}
                    onChangeText={setEmail}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red'}
                    autoFocus={true}
                    onFocus={setSelected.bind(null, 'email')}
                    onBlur={setSelected.bind(null, 'no')}
                />
                {
                    !isEmailValid && <CloseButton onPress={handleCloseButtonPress.bind(null, 'email')} />
                }
            </View>

            <View style={{marginBottom: 20}}>
                <TextInput
                    ref={(ref) => { emailRef.current = ref; }}
                    placeholder='Ghera'
                    value={email}
                    onChangeText={setEmail}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red'}
                    autoFocus={true}
                    onFocus={setSelected.bind(null, 'email')}
                    onBlur={setSelected.bind(null, 'no')}
                />
                {
                    !isEmailValid && <CloseButton onPress={handleCloseButtonPress.bind(null, 'email')} />
                }
            </View>

            <View style={{marginBottom: 20}}>
                <TextInput
                    ref={(ref) => { emailRef.current = ref; }}
                    placeholder='Neck'
                    value={email}
                    onChangeText={setEmail}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red'}
                    autoFocus={true}
                    onFocus={setSelected.bind(null, 'email')}
                    onBlur={setSelected.bind(null, 'no')}
                />
                {
                    !isEmailValid && <CloseButton onPress={handleCloseButtonPress.bind(null, 'email')} />
                }
            </View>

            <View style={{marginBottom: 20}}>
                <TextInput
                    ref={(ref) => { emailRef.current = ref; }}
                    placeholder='Chest'
                    value={email}
                    onChangeText={setEmail}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red'}
                    autoFocus={true}
                    onFocus={setSelected.bind(null, 'email')}
                    onBlur={setSelected.bind(null, 'no')}
                />
                {
                    !isEmailValid && <CloseButton onPress={handleCloseButtonPress.bind(null, 'email')} />
                }
            </View>

            <View style={{marginBottom: 20}}>
                <TextInput
                    ref={(ref) => { emailRef.current = ref; }}
                    placeholder='Waist'
                    value={email}
                    onChangeText={setEmail}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red'}
                    autoFocus={true}
                    onFocus={setSelected.bind(null, 'email')}
                    onBlur={setSelected.bind(null, 'no')}
                />
                {
                    !isEmailValid && <CloseButton onPress={handleCloseButtonPress.bind(null, 'email')} />
                }
            </View>

            <View style={{marginBottom: 20}}>
                <TextInput
                    ref={(ref) => { emailRef.current = ref; }}
                    placeholder='Shalwar'
                    value={email}
                    onChangeText={setEmail}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red'}
                    autoFocus={true}
                    onFocus={setSelected.bind(null, 'email')}
                    onBlur={setSelected.bind(null, 'no')}
                />
                {
                    !isEmailValid && <CloseButton onPress={handleCloseButtonPress.bind(null, 'email')} />
                }
            </View>

            <View style={{marginBottom: 20}}>
                <TextInput
                    ref={(ref) => { emailRef.current = ref; }}
                    placeholder='Paincha'
                    value={email}
                    onChangeText={setEmail}
                    style={{ color: 'black', borderBottomWidth: 1, borderColor: isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red', paddingBottom: 0, paddingLeft: 0, }}
                    placeholderTextColor={isEmailValid ? selected == 'email' ? colors.primary : 'grey' : 'red'}
                    autoFocus={true}
                    onFocus={setSelected.bind(null, 'email')}
                    onBlur={setSelected.bind(null, 'no')}
                />
                {
                    !isEmailValid && <CloseButton onPress={handleCloseButtonPress.bind(null, 'email')} />
                }
            </View>

            <Button normalText title={'Submit'} onPress={handleSignup} />

            {
                isLoading && <FullScreenIndicator />
            }

        </View>
    );
}

export default Signup;
