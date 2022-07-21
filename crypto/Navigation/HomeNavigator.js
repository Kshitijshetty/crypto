import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';


const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
    )
}

export default HomeNavigator
