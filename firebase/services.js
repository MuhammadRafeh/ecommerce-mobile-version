import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import Constants from 'expo-constants';
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { initializeAuth } from "firebase/auth";
import { initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from "firebase/auth/react-native";

if (!firebase.apps.length) {
    const defaultApp = firebase.initializeApp(Constants.manifest.extra.firebase)
    console.log(defaultApp, 'asd')
    initializeAuth(defaultApp, {
        persistence: getReactNativePersistence(AsyncStorage),
    });
}

export { firebase };
