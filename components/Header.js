import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";
export default function Header() {
  return (
    <View style = {styles.header}>
      <Text style={styles.title}>
        My Todos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header:{
        height:80,
        padding:38,
        backgroundColor:'coral',
        marginTop:-20
    },title:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
    }
});