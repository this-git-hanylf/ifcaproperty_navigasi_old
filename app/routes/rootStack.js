import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Home from '../components/Home';
import About from '../components/About';

import Screenhome from '../components/Home';
import Screenabout from '../components/About';

const rootStack = () => {
    return (
        <Stack.Navigator>


            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    )
}

export default rootStack;