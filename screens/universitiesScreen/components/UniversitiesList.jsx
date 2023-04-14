import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversitiesCard from "./UniversitiesCard";
import universities from "./universities";

const RenderItem = ({ item }) => {
  return (
    <View className="justify-center content-center p-2">
      <UniversitiesCard
        universityName={item.universitiesName}
        universityAvatar={item.avatar}
        clubsNumber={item.clubsNumber}
        UniversityLocation={item.UniversityLocation}
      />
    </View>
  );
};

const UniversitiesList = () => (
  <FlatList
    data={universities}
    renderItem={({ item }) => <RenderItem item={item} />}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={() => <View className="" />}
    showsVerticalScrollIndicator={false}
  />
);

export default UniversitiesList;
