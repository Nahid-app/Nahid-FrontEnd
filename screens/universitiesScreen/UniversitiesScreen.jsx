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
    <View className="justify-center content-center ">
      <UniversitiesCard
        universitiesName={item.universitiesName}
        avatar={item.avatar}
        clubsNumber={item.clubsNumber}
        registeredStudentNumber={item.registeredStudentNumber}
      />
    </View>
  );
  return (
    <View className="bg-white flex-1 w-full content-center items-center ">
      <View className="flex-1 w-full px-6 content-center pt-6">
        <FlatList
          data={Universities}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View className="pt-6" />}
        />
      </View>
    </View>
  );
}
