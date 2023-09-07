import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function TodoItem({ item,pressHandler }) {
  return (
    <TouchableOpacity onPress={()=> pressHandler(item.key)}>
      <Text style={styles.item}>{item.name}</Text>
    </TouchableOpacity>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10
  }
});
