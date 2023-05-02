import { View, Text } from "react-native";
import React from "react";
import SearchBarComponent from "../../components/SearchBarComponent";
import ClubsList from "./components/ClubsList";
import { SafeAreaView } from "react-native-safe-area-context";
import FiltersButtons from "../../components/FiltersButtons";

export default function ClubsScreen({ navigation }) {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      className="flex-1 bg-white pt-4 px-6"
    >
      <SearchBarComponent title={"كل الأندية"} placeholder={"إبحث عن نادي"} />
      <View className="flex-1 w-full content-center pt-4">
        <ClubsList navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}
