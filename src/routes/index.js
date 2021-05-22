import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

import MainScreen from '../screens/main';

export default () => {
    return(
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 1,
                    paddingBottom: 5,
                    height: 60,
                },
                activeTintColor: '#7159c2',
                inactiveTintColor: '#000',
            }}
        >
            <Screen 
                name='Following'
                component={MainScreen}
                options={{
                    tabBarIcon: ({size, color}) => <Ionicons name='md-heart' color={color} size={size}/>
                }} 
            />
            <Screen 
                name='Discover'
                component={MainScreen}
                options={{
                    tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='compass-outline' color={color} size={size}/>
                }} 
            />
            <Screen 
                name='Browse'
                component={MainScreen}
                options={{
                    tabBarIcon: ({size, color}) => <Ionicons name='md-browsers' size={size} color={color} />
                }} 
            />
            <Screen 
                name='Esports'
                component={MainScreen}
                options={{
                    tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='trophy-outline' color={color} size={size}/>
                }} 
            />
        </Navigator>
    );
};