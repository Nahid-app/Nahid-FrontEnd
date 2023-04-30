import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversitiesList from "./components/UniversitiesList";
import SearchBarComponent from "../../components/SearchBarComponent";

export default function UniversitiesScreen({ navigation }) {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      className="flex-1 bg-white pt-4 px-6"
    >
      <SearchBarComponent title={"كل الجامعات"} placeholder={"إبحث عن جامعة"} />
      <View className="flex-1 w-full content-center pt-6">
        <UniversitiesList navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}
