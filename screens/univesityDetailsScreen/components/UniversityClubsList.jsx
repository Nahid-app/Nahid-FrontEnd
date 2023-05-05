import React, { useContext, useEffect, useLayoutEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import Group from "../../../assets/svg/Group";
import UniversityClubsData from "./UniversityClubsData";
import ClubCard from "./ClubCard";
import { UniContext } from "../../../context/UniProvider";
import UniversityName from "./UniversityName";

const UniversityClubsList = ({ navigation, route }) => {
  const { clubs, GETClubs } = useContext(UniContext);
  // const [clubsData, setClubsData] = useState(clubs);
  const { universityID } = route.params;
  console.log(clubs);

  function clubName(universityID) {
    GETClubs(universityID);
  }
  useEffect(() => {
    clubName(universityID);
  }, []);

  return (
    <View className="flex-1 ">
      {clubs.map((university, index) =>
        university ? (
          <ClubCard key={index} item={university} navigation={navigation} />
        ) : (
          <View />
        )
      )}
    </View>
  );
};

export default UniversityClubsList;
