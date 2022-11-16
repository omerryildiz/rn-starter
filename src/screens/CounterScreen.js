import React,{useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const CounterScreen = () => {
   const[counter,setCounter]=useState(0);


    return (
        <View>
            <Button
                title="ARTTIR"
                onPress={() => {
                    // Don't do this
                    // counter++;
                    setCounter(counter + 1);
                }}
            />
            <Button
                title="AZALT"
                onPress={() => {
                    setCounter(counter - 1);
                }}
            />
            <Text style={{fontSize:20}}>SAYAÇ:{counter}</Text>
        </View>
    );
};
const styles = StyleSheet.create({});

export default CounterScreen;