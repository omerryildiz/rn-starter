import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Anasayfa</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')}
        title="Components demoya git"
      /> 
      <Button
      onPress={()=>props.navigation.navigate('List')}
      title='Listeye Git'
      />
      {/* <TouchableOpacity onPress={()=>props.navigation.navigate('List')}>
        <Text style={styles.text}>Listeye gitt</Text>
      </TouchableOpacity> */}
    </View>

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
