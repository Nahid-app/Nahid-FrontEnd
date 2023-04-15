import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import ClubCarouselBanner from "./components/ClubCarouselBanner";
import ClubTitle from "./components/ClubTitle";
import ClubJoinButton from "./components/ClubJoinButton";
import ClubDescription from "./components/ClubDescription";
import ClubClubAccount from "./components/ClubAccount";
import ClubDetailsTable from "./components/ClubDetailsTable";
import SubScreenHeader from "../../components/SubScreenHeader";
import TabBar from "./components/TabBar";
import { ScrollView } from "moti";

const ClubDetailsScreen = () => {
  return (
    <View className="flex-1 bg-white justify-center px-6">
      <ScrollView>
        {/* Screen Header */}
        <SubScreenHeader />
        {/* Club Images */}
        <ClubCarouselBanner />
        {/* Tab Bar */}
        <TabBar />
      </ScrollView>
      {/* JoinCard */}
      <ClubJoinButton />
    </View>
  );
};

export default ClubDetailsScreen;
