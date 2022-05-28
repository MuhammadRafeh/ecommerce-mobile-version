import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

var firebaseConfig = {
    apiKey: "AIzaSyAlrE8-Hgu-tnYB-JwT6c-eOUL0zE7KbFQ",
    storageBucket: "shopnstich.appspot.com",
    databaseURL: "https://shopnstich-default-rtdb.firebaseio.com",
    projectId: "shopnstich",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export { firebase };