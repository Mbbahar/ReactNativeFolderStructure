import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {LogInContainer, ProfileContainer} from '../containers';

const Stack = createStackNavigator();

function Router() {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='LogIn' component={LogInContainer}/>
      <Stack.Screen name='Profile' component={ProfileContainer} />
    </Stack.Navigator>
  </NavigationContainer>
  )
  
}
export default Router;