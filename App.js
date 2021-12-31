import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './navigators/RootStackNavigator';
import { ContextProvider } from './contexts/ContextProvider';

export default App = () => {
  return (
    <NavigationContainer>
      <ContextProvider>
        <RootStackNavigator />
      </ContextProvider>
    </NavigationContainer>
  )
}
