import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {

    return (
        <View>
            <View>
                <Text>{color}</Text>
                <Button
                    onPress={(() => onIncrease())}
                    title={`"${color} +"`}
                />
                <Button
                    onPress={(() => onDecrease())}
                    title={`"${color} -"`}
                />
            </View>

        </View>

    );
};

const styles = StyleSheet.create({});

export default ColorCounter;