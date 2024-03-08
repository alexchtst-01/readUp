import React from 'react'
import { Text, TouchableOpacity } from "react-native"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";

import { Splash, Login, Signup, Home, Bookmark, Settings, Test, Searchs } from "../screen"
import { HomeIcons, BookmarksIcons, SettingsIcons, AccountIcons, SearchIcons } from '../assets';
import { BLACK } from "../utils";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

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
    <Drawer.Navigator drawerContent={(props) => {
      return (
        <SafeAreaView>
          <Text style={{ fontWeight: 'bold', color: BLACK, paddingLeft: 10, paddingVertical: 20, fontSize: 20 }}>ReadUp</Text>
          <DrawerItemList {...props} />
        </SafeAreaView>
      )
    }}>
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{
          drawerLabel: "Home",
          title: 'ReadUp',
          headerTitleAlign: 'center',
          drawerIcon: () => (<HomeIcons width="24px" height="24px" />),
          headerRight: () => (
            <TouchableOpacity style={{paddingRight: 10}}> 
              <AccountIcons width="25px" height="25px" />
            </TouchableOpacity>
          )
        }}
      />
      <Drawer.Screen
        name='Bookmark'
        component={Bookmark}
        options={{
          drawerLabel: "Bookmarks",
          title: 'ReadUp',
          headerTitleAlign: 'center',
          drawerIcon: () => (<BookmarksIcons width="24px" height="24px" />),
          headerRight: () => (
            <TouchableOpacity style={{paddingRight: 10}}>
              <AccountIcons width="25px" height="25px" />
            </TouchableOpacity>
          )

        }}
      />
      <Drawer.Screen
        name='Search'
        component={Searchs}
        options={{
          drawerLabel: "Search",
          title: 'ReadUp',
          headerTitleAlign: 'center',
          drawerIcon: () => (<SearchIcons width="24px" height="24px" />),
          headerRight: () => (
            <TouchableOpacity style={{paddingRight: 10}}>
              <AccountIcons width="25px" height="25px" />
            </TouchableOpacity>
          )

        }}
      />
      <Drawer.Screen
        name='Settings'
        component={Settings}
        options={{
          drawerLabel: "Settings",
          title: 'ReadUp',
          headerTitleAlign: 'center',
          drawerIcon: () => (<SettingsIcons width="24px" height="24px" />),
          headerRight: () => (
            <TouchableOpacity style={{paddingRight: 10}}>
              <AccountIcons width="25px" height="25px" />
            </TouchableOpacity>
          )
        }}
      />
    </Drawer.Navigator>
  )
}


const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='MainApp'>
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name="GateWay" component={GateWayApp} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  )
}

export default Router