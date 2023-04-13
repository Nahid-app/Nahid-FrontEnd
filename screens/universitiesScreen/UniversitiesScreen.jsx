import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBarComponent";
import UniversitiesList from "./components/UniversitiesList";

export default function UniversitiesScreen() {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      className="flex-1 bg-white pt-4"
    >
      <SearchBar title={"كل الجامعات"} placeholder={"إبحث عن جامعة"}/>
      <View className="flex-1 w-full px-6 content-center pt-6">
        <UniversitiesList />
      </View>
    </SafeAreaView>
  );
}
