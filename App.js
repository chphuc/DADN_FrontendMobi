import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DefaultLayout from './components/DefaultLayout';
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={DefaultLayout} initialParams={{ title: "Home" }} />
        <Stack.Screen name="Notification" component={DefaultLayout} initialParams={{ title: "Notification" }} />
        <Stack.Screen name="Controll" component={DefaultLayout} initialParams={{ title: "Controll" }} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

