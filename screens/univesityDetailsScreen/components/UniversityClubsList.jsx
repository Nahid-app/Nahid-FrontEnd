import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import Group from "../../../assets/svg/Group";
import UniversityClubsData from "./UniversityClubsData";
import ClubCard from "./ClubCard";

const UniversityClubsList = () => {
  return (
    <View className="flex-1">
      <FlatList
        data={UniversityClubsData}
        keyExtractor={(item) => item.ClubId.toString()}
        renderItem={({ item }) => <ClubCard item={item} />}
        ItemSeparatorComponent={<View className="py-2" />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default UniversityClubsList;
