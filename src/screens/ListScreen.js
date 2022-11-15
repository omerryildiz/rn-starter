import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 20 },
        { name: 'Friend #2', age: 45 },
        { name: 'Friend #3', age: 56 },
        { name: 'Friend #4', age: 32 },
        { name: 'Friend #5', age: 23 },
        { name: 'Friend #6', age: 29 },
        { name: 'Friend #7', age: 45 },
        { name: 'Friend #8', age: 46 }

    ];
    return (
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friends) => friends.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={style.textStyle}>{item.name} - Age {item.age}</Text>;
            }} />
    );
};
const style = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        marginVertical: 50
    }
});
export default ListScreen;