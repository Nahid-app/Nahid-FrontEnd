import { View, Text } from "react-native";
import React from "react";
import UniversityCarouselBanner from "./components/UniversityCarouselBanner";
import UniversityDetailsTable from "./components/UniversityDetailsTable";
import UniversityClubsList from "./components/UniversityClubsList";
import UniversityClubListHeader from "./components/UniversityClubListHeader";

const UniversityDetailsScreen = () => {
  return (
    <>
      {/* University Banner */}
      <View className="bg-white ">
        <UniversityCarouselBanner />
      </View>
      <View className="flex-1 bg-white px-6 ">
        {/* University Details Table */}
        <UniversityDetailsTable />
        {/* University Clubs List Header */}
        <UniversityClubListHeader />
        {/* University Clubs List */}
        <UniversityClubsList />
      </View>
    </>
  );
};

export default UniversityDetailsScreen;
