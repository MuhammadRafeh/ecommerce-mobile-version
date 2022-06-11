import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigators/AuthNavigator';
import { ContextProvider, useEcommerceContext } from './contexts/ContextProvider';
import StackDrawerNavigator from './navigators/StackDrawerNavigator';

App = () => {
  const { isAuth } = useEcommerceContext();

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
