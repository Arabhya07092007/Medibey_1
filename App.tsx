import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './Navigators/StackNav';

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
