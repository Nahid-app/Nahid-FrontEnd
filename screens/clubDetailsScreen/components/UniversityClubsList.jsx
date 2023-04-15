import React from "react";
import { FlatList, View, ScrollView } from "react-native";
import UniversityClubsData from "./UniversityClubsData";
import ClubCard from "./ClubCard";

const UniversityClubsList = () => {
  return (
    <FlatList
      className="pt-5"
      data={UniversityClubsData}
      renderItem={({ item }) => <ClubCard item={item} />}
      keyExtractor={(item) => item.clubId}
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
    />

    /* <View className="h-full border">
      {UniversityClubsData.map((university, index) => (
        <ClubCard key={index} item={university} />
      ))}
    </View> */
  );
};

export default UniversityClubsList;
