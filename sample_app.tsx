import 'react-native-gesture-handler';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, NavigationContainer, Theme, useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useMemo } from 'react'
import Icon from '@expo/vector-icons/Ionicons';
import Diagonistics from './src/pages/Diagonistics';
import Home from './src/pages/Home';
import Settings from './src/pages/Settings';


const Tabs = createBottomTabNavigator();


const App = () => {

  const deviceScheme = useColorScheme();
  const {colors} = useTheme();

  // Change the app primary color to purple
  const AppTheme: Theme = useMemo(
    () =>
      deviceScheme ===  "dark"
        ? {
            ...DarkTheme,
            colors: {
              ...DarkTheme.colors,
              primary: "#4630eb",

            },
          }
        : {
            ...DefaultTheme,
            colors: {
              ...DefaultTheme.colors,
              primary: "#4630eb",
            },
          },
    [deviceScheme]
  );


  const HeaderTitleComp = ()=> {
    return (
      <View style={{paddingHorizontal: 5, flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-between'}}>
        
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <View style={{height: 35, width: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 5, borderColor: colors.border, borderWidth: 0.5}}>
            <Image source={require('./assets/applogo.png')} style={{width: 19, height: 19, borderRadius: 10}} />
          </View>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Expo Go</Text>
        </View>

        <TouchableOpacity style={{height: 40, paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 5, borderWidth: 0.5, borderColor: colors.border}}>
          <Text style={{fontSize: 16}}>Log In</Text>
        </TouchableOpacity>

      </View>
    )
  }


  return (
    
    <NavigationContainer theme={AppTheme}>

      <Tabs.Navigator screenOptions={{}}>

        <Tabs.Screen name='Home' component={Home} options={{
          headerStyle: {height: 120},
          headerTitle() {
            return (
              <HeaderTitleComp />
            )
          },

          tabBarIcon: ({ focused, color, size }) => (
            <Icon name={focused ? 'home' : 'home-outline'} color={color} size={28} />
          )

        }} />

        <Tabs.Screen name='Diagonistics' component={Diagonistics} options={{
          tabBarIcon: ({focused, size, color }) => (
            <Icon name={focused ? 'clipboard' : 'clipboard-outline' } color={color} size={28} />
          )
        }} />

        <Tabs.Screen name='Settings' component={Settings} options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Icon name={focused ? 'settings' : 'settings-outline'} color={color} size={28} />
          )
        }} />

      </Tabs.Navigator>

    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})