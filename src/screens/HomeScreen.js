import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Anasayfa</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Components demoya git"
      /> 
      <Button
      onPress={()=>navigation.navigate('List')}
      title='Listeye Git'
      />
      <Button
      title="Resim ekranına git"
      onPress={()=>navigation.navigate('ImageScreen')}
      />
        <Button
      title="Sayac Uygulaması"
      onPress={()=>navigation.navigate('Counter')}
      />
       <Button
      title="Renk Uygulaması"
      onPress={()=>navigation.navigate('Color')}
      />
      <Button
      title="Renk Ayarı uygulaması"
      onPress={()=>navigation.navigate('ColorOptions')}
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
