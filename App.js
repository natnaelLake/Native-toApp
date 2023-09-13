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
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import Sandbox from "./components/sandbox";

export default function App() {
  const [todos, setTodos] = useState("");
  const [person, setPerson] = useState([
    {
      name: "Welcome to the Native",
      key: "1"
    },
    {
      name: "Helow the net gangs of ethiopia",
      key: "2"
    },
    {
      name: "React native is the miracle fo coding",
      key: "3"
    },
    {
      name: "you must learn how can to type",
      key: "4"
    },
    {
      name: "there are other ways if you want",
      key: "5"
    },
    {
      name: "start now and go fast and forward",
      key: "6"
    }
  ]);
  const deleteItems = (value) => {
    setPerson((prev) => {
      return prev.filter((todo) => todo.key != value);
    });
  };

  const submitHandler = (data) => {
    setPerson((prev) => {
      return [{ name: data, key: Math.random().toString() }, ...prev];
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={person}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={deleteItems} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20
  },
  content: {
    padding: 40,
    flex:1
  },
  list: {
    marginTop: 20,
    flex:1,
  }
});
