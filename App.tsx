import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import HomeComponent from './src/pages/HomeComponent';
import HistoryComponent from './src/pages/HistoryComponent';
import FavouriteComponent from './src/pages/FavouriteComponent';
import ProfileComponent from './src/pages/ProfileComponent';
import Icon from "@expo/vector-icons/Feather";
import { AppSytles } from './src/static/AppStyles';


// Initialization of React Bottom Navigation
const TabNavigation = createBottomTabNavigator();





const App = () => {



  return (
    
    <NavigationContainer>

      <TabNavigation.Navigator screenOptions={{
        headerShown: false, 
        tabBarShowLabel: false
      }}>

        {/* Home Component */}
        <TabNavigation.Screen name='Home' options={{

          tabBarIcon: ({focused}) => {
            return (
              <Icon name="home" style={{ opacity: focused ? 1 : 0.5 }} size={AppSytles.TabBarIconSize} />
            )
          }

        }}  component={HomeComponent}  />

        {/* History Component */}
        <TabNavigation.Screen name='History' options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon name="clock" style={{ opacity: focused ? 1 : 0.5 }} size={AppSytles.TabBarIconSize} />
            )
          }
        }} component={HistoryComponent}  />
        
        {/* Favourite Component */}
        <TabNavigation.Screen name='Favourite' options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon name="heart" style={{ opacity: focused ? 1 : 0.5 }} size={AppSytles.TabBarIconSize} />
            )
          }
        }} component={FavouriteComponent}  />
        
        {/* Profile Component */}
        <TabNavigation.Screen name='Profile' options={{
          tabBarIcon: ({focused}) => {
            return (
              <Icon name="user" style={{ opacity: focused ? 1 : 0.5 }} size={AppSytles.TabBarIconSize} />
            )
          }
        }} component={ProfileComponent}  />

      </TabNavigation.Navigator>

    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})