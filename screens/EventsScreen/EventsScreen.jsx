import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import data from "./data";
import { SafeAreaView } from "react-native-safe-area-context";
import GrayCalender from "../../assets/svg/GrayCalender";
import SearchBarComponent from "../../components/SearchBarComponent";
import FiltersButtons from "../../components/FiltersButtons";
import ArrowRightBlack from "../../assets/svg/ArrowRightBlack";
import EventListCard from "./components/EventListCard";

// Main All Activities
const EventsScreen = () => {
  return (
    <SafeAreaView className="bg-white flex-1 px-6 pt-6">
      <View className="pb-5 justify-center items-center">
        <SearchBarComponent
          title={"الانشطة"}
          placeholder={"إبحث عن نشاط"}
          RightArrow={<ArrowRightBlack />}
        />
      </View>
      <EventListCard />
    </SafeAreaView>
  );
};

export default EventsScreen;
