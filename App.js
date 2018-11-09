import React from 'react';
//import AppRegistry from react-native
import {StyleSheet, Text, View, AppRegistry} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import NoteScreem from './screens/NoteScreen';


const appNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            title: "My Notes",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#AB47BC'
            },
        })
    },
    Note: {
        screen: NoteScreem,
        navigationOptions: ({navigation}) => ({
            title: "Note",
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#AB47BC'
            },
        })

    }

})

export default appNavigator
//AppRegistry.registerComponent('NavitaionReact', () => appNavigator)