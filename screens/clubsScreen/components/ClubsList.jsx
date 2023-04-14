import { View, Text, FlatList } from "react-native";
import React from "react";
import ClubsCard from "./ClubsCard";
import ClubsData from "./ClubsData";

const RenderItem = ({ item }) => {
  return (
    <View className="justify-center content-center ">
      <ClubsCard
        UniversityAvatar={item.UniversityAvatar}
        ClubAvatar={item.ClubAvatar}
        ClubName={item.ClubName}
        StudentRegistered={item.StudentRegistered}
        ClubTypeTitle={item.ClubTypeTitle}
        ClubTypeIcon={item.ClubTypeIcon}
      />
    </View>
  );
};
const ClubsList = () => {
  return (
    <FlatList
      data={ClubsData}
      renderItem={({ item }) => <RenderItem item={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className="pt-7" />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ClubsList;
