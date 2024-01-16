import { View, Text, Button, TouchableOpacity } from "react-native";


export function IconComp ({icon, color}) {
    return(

        <View style={{
            backgroundColor: color, 
            borderRadius: 50, 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: 50, 
            width: 50
        }}>
            <Text style={{fontSize: 24, color: "white"}}>{icon}</Text>
        </View>
    )
}

export function AppButton ({title, backgroundColor}) {

    return (
        <TouchableOpacity>
            <View style={{backgroundColor: backgroundColor, borderRadius: 10, justifyContent: 'center', alignItems: 'center', height: 50, width: 150}}>
                <Text style={{fontSize: 20, color: "white"}}>{title}</Text>
            </View>
        </TouchableOpacity>
    )

}


// Create a component that receives props and defractures the properties
export function AppButton2 () {

    const name = "Olumide";
    const age = 25;
    return {name, age}

}


/* === 
    Conditional 
    Statements
=== */

// (1) If Statement
// (2) Tenary Operators (a)
// (3) Tenary Operators (b)
// (4) Switch statement


const name = "Olumide";
const age = 25;

if(name == 'Olumide'){
    console.log('Olumide');
}else{
    console.log('Not Olumide');
}


name == "Olumide" ? console.log('Olumide') : console.log('Not Olumide');

name && console.log(name);

!name && console.log("Name is not Olumide");


/* === 
    Conditional 
    Rendering
=== */