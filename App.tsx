import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { HomeComponent } from './src/pages/Home';
import Icon from '@expo/vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {


  const ScreenTwoView = ()=> {
    return (

      <Tabs.Navigator>

        <Tabs.Screen name='Home' options={{
          tabBarIcon: ({focused})=> { return focused ? <Icon name='home' size={26} /> : <Icon name='home-outline' size={26} /> },
          tabBarShowLabel: false,
        }} component={HomeComponent} />

        <Tabs.Screen name='Histories' options={{
          
          tabBarIcon: ({focused})=> {return focused ? <Icon name='time' size={26} /> : <Icon name='time-outline' size={26} />  },
          tabBarShowLabel: false,

        }}  component={ScreenTwoView} />

        <Tabs.Screen name='About' options={{
          
          tabBarIcon: ()=> {return <Icon name='heart-outline' size={26} /> },
          tabBarShowLabel: false,
        }} component={ScreenThreeView} />

        <Tabs.Screen name='Profile' options={{

          tabBarIcon: ()=> {return <Icon name='person-outline' size={26} /> },
          tabBarShowLabel: false

        }} component={ScreenFourView} />

      </Tabs.Navigator>
    )
  }


  const ScreenThreeView = ()=> {
    return (
      <View>
        <Text>Screen Three</Text>
      </View>
    )
  }

  const ScreenFourView = ()=> {
    return (
      <View>
        <Text>Screen Four</Text>
      </View>
    )
  }


  return (
    
    <NavigationContainer>

      <SafeAreaView style={{flex: 1}}>

      <Drawer.Navigator>

          <Drawer.Screen name="Homes" component={HomeComponent} />
          <Drawer.Screen name="History" component={ScreenTwoView} />

        </Drawer.Navigator>


      </SafeAreaView>

    </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})