import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import ClubCarouselBanner from "./components/ClubCarouselBanner";
import ClubJoinButton from "./components/ClubJoinButton";
import SubScreenHeader from "../../components/SubScreenHeader";
import TabBar from "./components/TabBar";
import { ScrollView } from "moti";
import EventClubAccount from "../eventDetailsScreen/components/EventClubAccount";

import { useNavigation } from "@react-navigation/native";

const ClubDetailsScreen = ({ navigation, route }) => {
  return (
    <View className="flex-1 bg-white justify-center px-6">
      {/* Screen Header */}
      <SubScreenHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Club Images */}
        <ClubCarouselBanner />
        {/* Club Club */}
        <EventClubAccount route={route} />
        {/* Tab Bar */}
        <TabBar route={route} navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default ClubDetailsScreen;
