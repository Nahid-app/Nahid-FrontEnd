import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UniversityCard from "./UniversityCard";
import universities from "./universities";

const RenderItem = ({ item }) => {
  return (
    <View className="justify-center content-center p-2">
      <UniversityCard
        universityName={item.universitiesName}
        universityAvatar={item.avatar}
        clubsNumber={item.clubsNumber}
        registeredStudentNumber={item.registeredStudentNumber}
      />
    </View>
  );
};

const UniversitiesList = () => (
  <FlatList
    data={universities}
    renderItem={({ item }) => <RenderItem item={item} />}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={() => <View className="pt-5" />}
    showsVerticalScrollIndicator={false}
  />
);

export default UniversitiesList;
