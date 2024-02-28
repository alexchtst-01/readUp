import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from 'react'

import { Splash, Login, Signup, Home, Bookmark, Settings } from "../screen"

const Stack = createNativeStackNavigator();

const GateWayApp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
    </Stack.Navigator>
  )
}

const MainApp = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Bookmark' component={Bookmark} />
      <Stack.Screen name='Settings' component={Settings} />
    </Stack.Navigator>
  )
}


const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name="GateWay" component={GateWayApp} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  )
}

export default Router