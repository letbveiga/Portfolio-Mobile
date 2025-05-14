import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Pagina1 from './Paginas/pag1'; 
import Pagina2 from './Paginas/pag2'; 
import Erro from './Paginas/erro'; 

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator
        initialRouteName="Pagina1"
        screenOptions={{ 
          headerStyle: { backgroundColor: '#a2efef' },
          headerTintColor: '#008080',
          headerTitleStyle: { fontWeight: 'bold', fontSize:30 },
        }}>

        <Stack.Screen
          name="Pagina1"
          component={Pagina1}
          options={{ title: 'Login' }}
        />

        <Stack.Screen
          name="Pagina2"
          component={Pagina2}
          options={{ title: 'Finalização do Registro' }} 
        />

        <Stack.Screen
          name="Erro"
          component={Erro}
          options={{ title: 'Falha no Login' }} 
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;