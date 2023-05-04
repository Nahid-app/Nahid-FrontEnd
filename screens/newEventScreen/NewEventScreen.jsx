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

export default function NewEventScreen({ navigation }) {
  return (
    <View className="bg-white flex-1 px-6 pt-5">
      <SubScreenHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Event Editing Header */}
        {/* Event Image */}
        <EventCarouselBanner />
        {/* Divider */}
        <View className="w-full bg-gray300 h-px mt-6"></View>
        {/* Event Info Form */}
        <EventInputFields />
        {/* Dropdown List */}
        <DropDownLists />
        {/* Event Creation Button */}
        <View className="pb-2">
          <PrimaryColorButton title={"فعالية جديدة"} />
        </View>
      </ScrollView>
    </View>
  );
}
