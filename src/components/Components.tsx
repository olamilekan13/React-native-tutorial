import { View, Text, Image, TextInput } from "react-native"
import { AppSytles } from "../static/AppStyles"
import { useTheme } from "@react-navigation/native"
import Icon from "@expo/vector-icons/Feather"


// Home Screen Header Component
export const HomeScreenHeaderComponent = () => {

    const {colors} = useTheme();


    return (

        <View style={{paddingHorizontal: AppSytles.HorizontalPadding, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', paddingTop: AppSytles.HorizontalPadding}}>
            
            {/* Header Right */}
            <View style={{gap: 6}}>
                <Text style={{fontSize: 28, fontWeight: '500'}}>Hi, David 👋</Text>
                <Text style={{fontSize: 18, fontWeight: '400', opacity: 0.5}}>Explore the world!</Text>
            </View>
            
            {/* Header Left */}
            <View>
                <Image 
                    source={require('../../assets/dp1.jpeg')} 
                    style={{width: AppSytles.CircularImageWidthAndHeight, height: AppSytles.CircularImageWidthAndHeight, borderRadius: 30}}
                />
            </View>

        </View>

    )

}


// Search Bar Component
export const SearchBarComponent = () => {

    const {colors} = useTheme();

    return (
        <View style={{paddingHorizontal: AppSytles.HorizontalPadding}}>

            <View style={{ borderWidth: 1, borderColor: AppSytles.AppBorderColor, width: '100%', paddingHorizontal: AppSytles.HorizontalPadding, flexDirection: 'row', borderRadius: 20, height: 58, justifyContent: 'space-between', alignItems: 'center' }}>
            
                <TextInput
                    placeholder="Search places"
                    style={{flexBasis: '90%'}}
                />

                <Icon name="filter" color={"#888888"} size={20} />

            </View>

        </View>
    )

}



// App Section title
export const AppSectionTitle = ({left, right}) => {

    const {colors} = useTheme();

    return (
        <View style={{ paddingHorizontal: AppSytles.HorizontalPadding, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{fontSize: 20, fontWeight: '500'}}> {left} </Text>
            <Text style={{opacity: 0.7, fontSize: 16}}> {right} </Text>
        </View>
    )

}

