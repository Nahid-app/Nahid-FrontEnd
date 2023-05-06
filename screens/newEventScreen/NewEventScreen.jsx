import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, ScrollView, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileEditingHeader from "./components/ProfileEditingHeader";
import EventInputFields from "./components/EventInputFields";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import DropDownLists from "./components/DropDownLists";
import BannerImage from "../profileScreen/components/BannerImage";
import EventCarouselBanner from "./components/EventCarouselBanner";
import PrimaryColorButton from "../../components/buttons/PrimaryColorButton";
import SubScreenHeader from "../../components/SubScreenHeader";
import { useContext } from "react";
import { ClubsContext } from "../../context/ClubsProvider";
import { useEffect } from "react";

export default function NewEventScreen({ navigation }) {
  const { isLoading, clubs, GETClubs } = useContext(ClubsContext);

  useEffect(() => {
    getUserData();
    console.log(clubs);
  }, []);

  function getUserData() {
    GETClubs();
  }

  return (
    <View className="bg-white flex-1 px-6 pt-5">
      {/* Event Editing Header */}
      <SubScreenHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Event Image */}
        <EventCarouselBanner />
        {/* Divider */}
        <View className="w-full bg-gray300 h-px mt-6"></View>
        {/* Event Info Form */}
        <EventInputFields />
        {/* Dropdown List */}
        <DropDownLists clubs={clubs} />
        {/* Event Creation Button */}
        <View className="pb-2">
          <PrimaryColorButton title={"فعالية جديدة"} />
        </View>
      </ScrollView>
    </View>
  );
}
