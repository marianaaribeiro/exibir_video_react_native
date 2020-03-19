import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//pages
import PageOne from './src/pages/Detailpages/PageOne'
import PageTwo from './src/pages/Detailpages/PageTwo'
import PageThree from './src/pages/Detailpages/PageThree'

const Stack = createStackNavigator();


export default class Router extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="PageOne"
                        component={PageOne}
                    />
                    <Stack.Screen
                        name="PageTwo"
                        component={PageTwo}
                    />
                    <Stack.Screen
                        name="PageThree"
                        component={PageThree}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}