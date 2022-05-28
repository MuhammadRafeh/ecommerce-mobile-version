import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigators/AuthNavigator';
import { ContextProvider, useEcommerceContext } from './contexts/ContextProvider';
import firebase from "firebase/app";
import StackDrawerNavigator from './navigators/StackDrawerNavigator';

App = () => {
  const { isAuth } = useEcommerceContext();
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
    <NavigationContainer>
      {
        isAuth ? (
          <AuthNavigator />
        ) : (
          <StackDrawerNavigator />
        )
      }
    </NavigationContainer>
  )
}

export default AppWrapper = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  )
}
