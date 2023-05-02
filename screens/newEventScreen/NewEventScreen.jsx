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

export default function NewEventScreen({ navigation }) {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView className="bg-white flex-1 px-6 pt-5">
          {/* Profile Editing Header */}
          <ProfileEditingHeader navigation={navigation} />
          {/* Personal Image */}
          <EventCarouselBanner />
          {/* Divider */}
          <View className="w-full bg-gray300 h-px mt-6"></View>
          {/* User Info Form */}
          <EventInputFields />
          {/* Dropdown List */}
          <DropDownLists />
          <PrimaryColorButton title={"فعالية جديدة"} />
        </SafeAreaView>
      </ScrollView>
    </>
  );
}
