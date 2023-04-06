import { View } from "react-native";
import React from "react";
import EntityAccount from "../../components/EntityAccount";
import EventImages from "./components/EventImages";
import EventTitle from "./components/EventTitle";
import EventJoinButton from "./components/EventJoinButton";
import FourCellsGridTable from "../../components/FourCellsGridTable";
import TextWithReadMore from "../../components/TextWithReadMore";
import EventDescription from "./components/EventDescription";
import EventClubAccount from "./components/EventClubAccount";
import EventInformation from "./components/EventInformation";

const EventDetailsScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <View className="px-6">
        {/* Event Images */}
        <EventImages />
        {/* Event Title */}
        <EventTitle />
        {/* Event Information */}
        <EventInformation />
        {/* Event Club */}
        <EventClubAccount />
        {/* Description */}
        <EventDescription />
        {/* JoinButton */}
      </View>
      <EventJoinButton />
    </View>
  );
};

export default EventDetailsScreen;
