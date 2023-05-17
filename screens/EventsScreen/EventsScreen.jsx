import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import data from "./data";
import { SafeAreaView } from "react-native-safe-area-context";
import GrayCalender from "../../assets/svg/GrayCalender";
import SearchBarComponent from "../../components/SearchBarComponent";
import FiltersButtons from "../../components/FiltersButtons";
import ArrowRightBlack from "../../assets/svg/ArrowRightBlack";
import EventListCard from "./components/EventListCard";
import CrossIcon from "../../assets/svg/CrossIcon";
import { useContext } from "react";
import { EventsContext } from "../../context/EventsProvider";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native-paper";

// Main All Activities
const EventsScreen = ({ navigation }) => {
  // const { error, isLoading, events, GETEvents } = useContext(EventsContext);

  // useEffect(() => {
  //   getUserData();
  // }, []);

  // function getUserData() {
  //   GETEvents();
  // }

  return (
    <SafeAreaView className="bg-white flex-1 px-6 pt-4">
      <View className="pb-5 justify-center items-center relative">
        <SearchBarComponent
          title={"الانشطة"}
          placeholder={"إبحث عن نشاط"}
          // RightArrow={<ArrowRightBlack />}
        />
      </View>
      <View>
        <EventListCard navigation={navigation} />
      </View>
      <TouchableOpacity
        className="bg-primary w-[48] h-[48] rounded-full items-center justify-center absolute bottom-[15] left-[20] z-20"
        onPress={() => navigation.navigate("NewEventScreen")}
      >
        <CrossIcon />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EventsScreen;
