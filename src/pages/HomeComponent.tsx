import { Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppSectionTitle, HomeScreenHeaderComponent, SearchBarComponent } from '../components/Components'
import { ScrollView } from 'react-native-gesture-handler'
import { useTheme } from '@react-navigation/native'
import { HorizontalScrollViewItems } from '../static/AppStaticItems'
import { AppSytles } from '../static/AppStyles'




const HomeComponent = () => {

  const {colors} = useTheme();
  const [activeScollButton, setActiveScrollButton] = React.useState(0);

  return (
    <SafeAreaView style={[styles.container, {gap: 30}]}>
        
      {/* Header */}
      <HomeScreenHeaderComponent />


      {/* Search Bar */}
      <SearchBarComponent />

      {/* App Section title */}
      <AppSectionTitle right={"View all"} left={"Popular places"} />


      {/* Horizontal Scroll View */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >

        {HorizontalScrollViewItems.map((item, index) => 

          <Pressable onPress={()=> setActiveScrollButton(index) } key={index} style={{height: 50, marginLeft: 15, paddingHorizontal: 20, borderRadius: 20, backgroundColor: activeScollButton === index ? AppSytles.AppDarkColor : colors.border, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: "white", fontWeight: '500'}}> {item.title} </Text>
          </Pressable>
          
        )}


      </ScrollView>


    </SafeAreaView>
  )
}

export default HomeComponent

const styles = StyleSheet.create({

    container: {
        flex: 1
    }

})