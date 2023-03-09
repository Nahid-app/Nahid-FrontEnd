import { ScrollView, View } from "react-native";
import React from "react";
import AppHeader from "./components/AppHeader";
import FeaturedClubs from "./components/FeaturedClubs";
import StudentClubs from "./components/StudentClubs";
import FeaturedUniversities from "./components/FeaturedUniversities";
import Universities from "./components/Universities";
import FeaturedClubsActevities from "./components/FeaturedClubsActevities";
import ClubsActivities from "./components/ClubsActivities";

export default function HomeScreen() {
  return (
    <ScrollView>
      <View className="bg-white flex-1 justify-start">
        {/* Header */}
        <AppHeader />
        {/* Featured Header */}
        <FeaturedClubs />
        {/* Student Clubs | الأندية الطلابية */}
        <StudentClubs />
        {/* Featured Universities */}
        <FeaturedUniversities />
        {/* Featured Universities */}
        <Universities />
        {/* Featured Universities */}
        <FeaturedClubsActevities />
        {/* Clubs Activities | الأنشطة الطلابية*/}
        <ClubsActivities />
      </View>
    </ScrollView>
  );
}
