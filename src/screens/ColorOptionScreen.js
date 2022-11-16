import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;
const ColorOptionScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;

        }
    }
    return (<View>
        <ColorCounter
            onIncrease={() => setColor('red', (red + COLOR_INCREMENT))}
            onDecrease={() => setColor('red', (- 1 * COLOR_INCREMENT))}
            color="Kırmızı"
        />
        <ColorCounter
            onIncrease={() => setColor('green', (green + COLOR_INCREMENT))}
            onDecrease={() => setColor('green', (- 1 * COLOR_INCREMENT))}
            color="Yeşil"
        />
        <ColorCounter
            onIncrease={() => setColor('blue', (blue + COLOR_INCREMENT))}
            onDecrease={() => setColor('blue', (- 1 * COLOR_INCREMENT))}
            color="Mavi" />
        <View style={{
            height: 150,
            width: 150,
            backgroundColor: `rgb(${red},${green},${blue})`
        }}>

        </View>
        <Text style={styles.textStyle}>
            rgb:({red},{green},{blue})
        </Text>
    </View>)
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    }
});

export default ColorOptionScreen;