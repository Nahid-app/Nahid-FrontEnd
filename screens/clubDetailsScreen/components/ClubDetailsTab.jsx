import { ScrollView, View } from "react-native";
import React from "react";
import EventClubAccount from "../../eventDetailsScreen/components/EventClubAccount";
import ClubDetailsTable from "./ClubDetailsTable";
import ClubDescription from "./ClubDescription";

const ClubDetailsTab = () => {
  return (
    <View>
      {/* Club Club */}
      <EventClubAccount />
      {/* Club Information */}
      <ClubDetailsTable />
      {/* Description */}
      <ClubDescription />
    </View>
  );
};

export default ClubDetailsTab;
