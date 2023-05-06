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

  function clubName(universityID) {
    GETClubs(universityID);
  }
  useEffect(() => {
    clubName(universityID);
  }, []);
  const { universityLogo } = route.params;

  return (
    <View className="flex-1 pb-6">
      {clubs.map((university, index) =>
        university ? (
          <ClubCard
            key={university.id}
            item={university}
            navigation={navigation}
            route={route}
          />
        ) : (
          <View />
        )
      )}
    </View>
  );
};

export default UniversityClubsList;
