import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileEditingHeader from "./components/ProfileEditingHeader";
import ProfileImage from "./components/ProfileImage";
import UserInputFields from "./components/UserInputFields";
import { useState } from "react";

import DropDownLists from "./components/DropDownLists";
import SubScreenHeader from "../../components/SubScreenHeader";
import PrimaryColorButton from "../../components/buttons/PrimaryColorButton";

export default function ProfileEditingScreen({ navigation }) {
  return (
    <>
      <SafeAreaView className="bg-white flex-1 px-6 pt-5">
        {/* Profile Editing Header */}
        <SubScreenHeader navigation={navigation} />
        {/* Personal Image */}
        <ProfileImage />
        {/* Divider */}
        <View className="w-full bg-gray300 h-px mt-6"></View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* User Info Form */}
          <UserInputFields />
          {/* Dropdown List */}
          <DropDownLists />
          <View className="pb-2">
            <PrimaryColorButton title={"تحديث البيانات"} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
