// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './Paginas/HomePage'; 
import Hakuouki from './Paginas/Hakuouki'; 
import AliceMR from './Paginas/AliceMR';
import ZeldaTP from './Paginas/ZeldaTP'; 
import Reckoning from './Paginas/Reckoning';
import Okami from './Paginas/Okami';
import OLBA from './Paginas/OLBA';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{ 
          headerStyle: { backgroundColor: '#663399' },
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'bold', fontSize:30 },
        }}>
        
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: 'Home Page ' }}
        />

        <Stack.Screen
          name="Hakuouki"
          component={Hakuouki}
          options={{ title: 'Hakuouki Shinsengume Kitan' }}
        />

        <Stack.Screen
          name="AliceMR"
          component={AliceMR}
          options={{ title: 'Alice Madness Returns' }} 
        />

        <Stack.Screen
          name="ZeldaTP"
          component={ZeldaTP}
          options={{ title: 'Zelda Twilight Princess' }}
        />

        <Stack.Screen
          name="Reckoning"
          component={Reckoning}
          options={{ title: 'Reckoning: Kingdoms of Amalur' }}
        />

        <Stack.Screen
          name="Okami"
          component={Okami}
          options={{ title: 'Okami' }}
        />

        <Stack.Screen 
          name="OLBA"
          component={OLBA}
          options={{ title: 'Our Life: Beginnings & Always' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
