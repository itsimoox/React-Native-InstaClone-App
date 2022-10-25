import React from 'react';
import { StatusBar } from 'react-native';
import { mainColor } from './utils/constants';
import { NavigationContainer } from '@react-navigation/native';
import { CartScreen, HomeScreen, SettingsScreen, WishlistScreen } from './screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createSharedElementStackNavigator();
const forFade = ({current}) => ({cardStyle: {opacity: current.progress}});

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false, cardStyleInterpolator: forFade}} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{}} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
    <StatusBar backgroundColor={mainColor} />
  </NavigationContainer>
);
export default App;