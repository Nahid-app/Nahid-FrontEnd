import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { UniversitiesCard } from "./components/UniversitiesCard";
import { StatusBar } from "expo-status-bar";
import GridFlatList from "grid-flatlist-react-native";
import Universities from "./universities";

export default function UniversitiesScreen() {
  //   card should be here
  const Item = ({ item }) => (
    <View style={styles.item} className="w-1/2">
      <UniversitiesCard title={item.title} avatar={item.avatar} />
    </View>
  );
  return (
    <View className="bg-white flex-1 w-full content-center items-center">
      <View className="bg-white flex-1 w-full  ">
        <FlatList
          data={Universities}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});
