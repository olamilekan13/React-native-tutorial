import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomeScreenHeaderComponent } from '../components/Components'




const HomeComponent = () => {
  return (
    <SafeAreaView style={[styles.container, {}]}>
        
        <HomeScreenHeaderComponent />

    </SafeAreaView>
  )
}

export default HomeComponent

const styles = StyleSheet.create({

    container: {
        flex: 1
    }

})