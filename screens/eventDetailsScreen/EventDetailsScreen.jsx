import { ScrollView, View } from "react-native";
import React from "react";
import EventCarouselBanner from "./components/EventCarouselBanner";
import EventTitle from "./components/EventTitle";
import EventJoinButton from "./components/EventJoinButton";
import EventDescription from "./components/EventDescription";
import EventClubAccount from "./components/EventClubAccount";
import EventDetailsTable from "./components/EventDetailsTable";
import SubScreenHeader from "../../components/SubScreenHeader";

const EventDetailsScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white px-6">
      <SubScreenHeader navigation={navigation} />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Event Images */}
        <EventCarouselBanner />
        {/* Event Title */}
        <EventTitle />
        {/* Event Information */}
        <EventDetailsTable />
        {/* Event Club */}
        <EventClubAccount />
        {/* Description */}
        <EventDescription />
        {/* JoinButton */}
      </ScrollView>
      <EventJoinButton />
    </View>
  );
};

export default EventDetailsScreen;
