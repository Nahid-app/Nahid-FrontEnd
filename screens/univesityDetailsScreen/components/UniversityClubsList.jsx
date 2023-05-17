import React, { useContext, useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import Group from "../../../assets/svg/Group";
import UniversityClubsData from "./UniversityClubsData";
import ClubCard from "./ClubCard";
import { UniContext } from "../../../context/UniProvider";

const UniversityClubsList = ({ navigation }) => {
  // const { clubs, GETClubs } = useContext(UniContext);
  // // console.log(clubs[0]);

  // function clubName() {
  //   GETClubs();
  // }
  // useEffect(() => {
  //   clubName();
  // }, []);

  return (
    <View className="flex-1 ">
      {UniversityClubsData.map((university, index) => (
        <ClubCard key={index} item={university} navigation={navigation} />
      ))}
    </View>
  );
};

export default UniversityClubsList;
