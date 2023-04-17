import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import ClubCarouselBanner from "./components/ClubCarouselBanner";
import ClubJoinButton from "./components/ClubJoinButton";
import SubScreenHeader from "../../components/SubScreenHeader";
import TabBar from "./components/TabBar";
import { ScrollView } from "moti";
import EventClubAccount from "../eventDetailsScreen/components/EventClubAccount";

const ClubDetailsScreen = () => {
  return (
    <View className="flex-1 bg-white justify-center px-6">
      {/* Screen Header */}
      <SubScreenHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Club Images */}
        <ClubCarouselBanner />
        {/* Club Club */}
        <EventClubAccount />
        {/* Tab Bar */}
        <TabBar />
      </ScrollView>
    </View>
  );
};

export default ClubDetailsScreen;
