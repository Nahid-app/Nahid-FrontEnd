import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "./components/SearchBarComponent";
import ArrowRight from "../../assets/svg/arrowRight";
import FilterButtons from "./components/FilterButtons";
import universities from "./components/universities";
import UniversitiesList from "./components/UniversitiesList";

export default function UniversitiesScreen() {
  return (
    <SafeAreaView
      edges={["top", "bottom", "left", "right"]}
      className="flex-1 bg-white py-4"
    >
      <SearchBar />
      <View className="flex-1 w-full px-6 content-center pt-6">
        <UniversitiesList />
      </View>
    </SafeAreaView>
  );
}
