import { View, Text } from "react-native"
import { AppSytles } from "../static/AppStyles"
import { useTheme } from "@react-navigation/native"

export const HomeScreenHeaderComponent = () => {

    const {colors} = useTheme();

    return (

        <View style={{paddingHorizontal: AppSytles.HorizontalPadding, paddingTop: AppSytles.HorizontalPadding}}>
            
            {/* Header Right */}
            <View style={{gap: 6}}>
                <Text style={{fontSize: 26, fontWeight: '500'}}>Hi, David 👋</Text>
                <Text style={{fontSize: 16, fontWeight: '400', opacity: 0.5}}>Explore the world!</Text>
            </View>
            
            {/* Header Left */}
            <View>

            </View>

        </View>

    )

}