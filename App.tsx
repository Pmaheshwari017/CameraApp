import { StyleSheet, } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NavigationStack from './src/Navigation/navigationStack'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationStack />
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})