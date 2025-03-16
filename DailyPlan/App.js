import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './nav/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style = {{flex: 1}}>
      <AppNavigator />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

