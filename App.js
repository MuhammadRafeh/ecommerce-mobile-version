import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './navigators/RootStackNavigator';
import { ContextProvider } from './contexts/ContextProvider';
import firebase from "firebase/app";

export default App = () => {
  var config = {
    apiKey: "AIzaSyAlrE8-Hgu-tnYB-JwT6c-eOUL0zE7KbFQ",
    storageBucket: "shopnstich.appspot.com",
    databaseURL: "https://shopnstich-default-rtdb.firebaseio.com",
    projectId: "shopnstich",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  } else {
    firebase.app();
  }

  return (
    <ContextProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </ContextProvider>
  )
}
