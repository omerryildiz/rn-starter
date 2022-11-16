import React, { useState }  from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const ColorOptionScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
           <ColorCounter color="Kırmızı"/>
           <ColorCounter color="Yeşil"/>
           <ColorCounter color="Mavi"/>
        </View>

    );
};

const styles = StyleSheet.create({});

export default ColorOptionScreen;