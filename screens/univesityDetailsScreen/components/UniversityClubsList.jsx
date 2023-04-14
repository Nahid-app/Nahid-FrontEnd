import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import Group from "../../../assets/svg/Group";
import UniversityClubsData from "./UniversityClubsData";
import ClubCard from "./ClubCard";

const UniversityClubsList = () => {
  return (
    <View>
      {UniversityClubsData.map((university, index) => (
        <ClubCard key={index} item={university} />
      ))}
    </View>
  );
};

export default UniversityClubsList;
