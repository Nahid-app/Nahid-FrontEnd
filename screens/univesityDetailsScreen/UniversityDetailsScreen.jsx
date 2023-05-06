import { View, Text } from "react-native";
import React from "react";
import UniversityCarouselBanner from "./components/UniversityCarouselBanner";
import UniversityDetailsTable from "./components/UniversityDetailsTable";
import UniversityClubsList from "./components/UniversityClubsList";
import UniversityClubListHeader from "./components/UniversityClubListHeader";
import UniversityName from "./components/UniversityName";
import { ScrollView } from "react-native";
import SubScreenHeader from "../../components/SubScreenHeader";

const UniversityDetailsScreen = ({ navigation, route }) => {
  return (
    <View className=" bg-white px-6 flex-1">
      {/* App Bar */}
      <SubScreenHeader navigation={navigation} />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* University Banner */}
        <UniversityCarouselBanner />
        {/* University Name */}
        <UniversityName route={route} />
        {/* University Details Table */}
        <UniversityDetailsTable route={route} />
        {/* University Clubs List Header */}
        <UniversityClubListHeader />
        {/* University Clubs List */}
        <UniversityClubsList route={route} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default UniversityDetailsScreen;
