import { View, Text } from "react-native"
import Icon from '@expo/vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const TopTab = createMaterialTopTabNavigator();



export const HomeComponent = ()=> {


    const ChatComponent = () => {
        return (<Text>Chat Component</Text>)
    }

    const ContactComponent = () => {
        return (<Text>Contact Component</Text>)
    }

    const AlbumComponent = () => {
        return (<Text>Album Component</Text>)
    }

    return (

      <TopTab.Navigator>

        <TopTab.Screen name="Chat" component={ChatComponent} />
        <TopTab.Screen name="Contacts" component={ContactComponent} />
        <TopTab.Screen name="Album" component={AlbumComponent} />

      </TopTab.Navigator>

    )
}