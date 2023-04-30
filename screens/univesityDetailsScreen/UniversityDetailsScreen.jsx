import { View, Text } from "react-native";
import React from "react";
import UniversityCarouselBanner from "./components/UniversityCarouselBanner";
import UniversityDetailsTable from "./components/UniversityDetailsTable";
import UniversityClubsList from "./components/UniversityClubsList";
import UniversityClubListHeader from "./components/UniversityClubListHeader";
import UniversityName from "./components/UniversityName";
import { ScrollView } from "react-native";
import SubScreenHeader from "../../components/SubScreenHeader";

const UniversityDetailsScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white px-6 ">
      {/* App Bar */}
      <SubScreenHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* University Banner */}
        <UniversityCarouselBanner />
        {/* University Name */}
        <UniversityName />
        {/* University Details Table */}
        <UniversityDetailsTable />
        {/* University Clubs List Header */}
        <UniversityClubListHeader />
        {/* University Clubs List */}
        <UniversityClubsList navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default UniversityDetailsScreen;
