import React from "react";
import { Text,StyleSheet,View } from "react-native";

const ComponentScreen=()=>{
    const name=<Text style={{fontSize:20}}>Kadir Karayiğit</Text>
return (
    <View>
        <Text style={style.textStyle}>SSD ram taktı</Text>
        {name}

    </View>

);
};
const style=StyleSheet.create({
    textStyle:{
        fontSize:30
    }
});
export default ComponentScreen;