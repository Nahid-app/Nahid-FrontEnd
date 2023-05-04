import { ScrollView, View } from "react-native";
import React from "react";
import EventClubAccount from "../../eventDetailsScreen/components/EventClubAccount";
import ClubDetailsTable from "./ClubDetailsTable";
import ClubDescription from "./ClubDescription";

const ClubDetailsTab = () => {
  return (
    <View>
      {/* Club Information */}
      <ClubDetailsTable />
      <View className="pt-4">
        {/* Description */}
        <ClubDescription />
      </View>
    </View>
  );
};

export default ClubDetailsTab;
