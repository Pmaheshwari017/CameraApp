import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CameraScreen from '../Screen/CameraScreen';

const Stacks = createNativeStackNavigator()
const StackNavigation = () => {
    return (

        <Stacks.Navigator initialRouteName='CameraScreen'>
            <Stacks.Screen name="CameraScreen" component={CameraScreen} options={{
                headerShown: false
            }} />
        </Stacks.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})