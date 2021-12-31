import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './navigators/RootStackNavigator';
import { ResultContextProvider } from './contexts/ContextProvider';

export default App = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </ContextProvider>
  )
}
