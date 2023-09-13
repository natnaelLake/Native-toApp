import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons  name="delete" size={'18px'} color={'#333'}/>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    flex:1,
    flexDirection:'row',
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10
  },
  itemText:{
    marginLeft:10,
  }
});
