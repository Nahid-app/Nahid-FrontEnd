import { ScrollView, View } from "react-native";
import React from "react";
import AppHeader from "./components/AppHeader";
import FeaturedClubs from "./components/FeaturedClubs";
import StudentClubs from "./components/StudentClubs";
import FeaturedUniversities from "./components/FeaturedUniversities";
import Universities from "./components/Universities";
import ClubsActivities from "./components/ClubsActivities";
import FeaturedClubsEvents from "./components/FeaturedClubsEvents";
import CommercialBanner from "./components/CommercialBanner";

export default function HomeScreen() {
  return (
    <View className="bg-white flex-1">
      <ScrollView>
        {/* Header */}
        {/* <AppHeader /> */}
        {/* Commercial Banner */}
        <CommercialBanner />
        {/* Featured Header */}
        <FeaturedClubs />
        {/* Student Clubs | الأندية الطلابية */}
        <StudentClubs />
        {/* Featured Events */}
        <FeaturedClubsEvents />
        {/* Clubs Activities | الأنشطة الطلابية*/}
        <ClubsActivities />
      </ScrollView>
    </View>
    // </SafeAreaView>
  );
}
