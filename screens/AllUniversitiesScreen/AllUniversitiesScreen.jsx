import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "./components/Item";
import SearchBar from "./components/SearchBarComponent";
import ArrowRight from "../../assets/svg/arrowRight";
import FilterButtons from "./components/FilterButtons";
import universities from "./universities";

export default function AllUniversitiesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white py-4">
      <SearchBar />
      <View className="flex-1 w-full px-6 content-center pt-7">
        <FlatList
          data={universities}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View className="pt-3" />}
        />
      </View>
    </SafeAreaView>
  );
}
