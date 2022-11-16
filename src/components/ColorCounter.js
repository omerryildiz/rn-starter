import React, { useState }  from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColorCounter = ({color}) => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <View>
                <Text>{color}</Text>
                <Button
                    title={`"${color} +"`}
                />
                <Button
                    title={`"${color} -"`}
                    />
            </View>
          
        </View>

    );
};

const styles = StyleSheet.create({});

export default ColorCounter;