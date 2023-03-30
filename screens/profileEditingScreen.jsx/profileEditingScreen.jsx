import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileEditingHeader from "./components/ProfileEditingHeader";
import ProfileImage from "./components/ProfileImage";
import UserInputFields from "./components/UserInputFields";
import { useState } from "react";

import DropDownLists from "./components/DropDownLists";

export default function ProfileEditingScreen() {
  return (
    <>
      <SafeAreaView className="bg-white flex-1 px-6 pt-5">
        {/* Profile Editing Header */}
        <ProfileEditingHeader />
        {/* Personal Image */}
        <ProfileImage />
        {/* Divider */}
        <View className="w-full bg-gray300 h-px mt-6"></View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* User Info Form */}
          <UserInputFields />
          {/* Dropdown List */}
          <DropDownLists />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
