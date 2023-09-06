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

export default function App() {
  const [person, setPerson] = useState([
    {
      name: "abebe",
      key: "1"
    },
    {
      name: "kebede",
      key: "2"
    },
    {
      name: "aster",
      key: "3"
    },
    {
      name: "belete",
      key: "4"
    },
    {
      name: "dubale",
      key: "5"
    },
    {
      name: "alemu",
      key: "6"
    }
  ]);
  console.log(person);
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={person}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
      {/* <ScrollView>
        {person.map((man) => (
          <View key={man.key}>
            <Text style={styles.item}>{man.name}</Text>
          </View>
        ))}
      </ScrollView> */}
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
  item: {
    marginTop: 25,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal:10,
    marginTop:24,
  }
});
