import { ScrollView, View } from "react-native";
import React, { useContext, useEffect } from "react";
import FeaturedClubs from "./components/FeaturedClubs";
import StudentClubs from "./components/StudentClubs";
import ClubsActivities from "./components/ClubsActivities";
import FeaturedClubsEvents from "./components/FeaturedClubsEvents";
import CommercialBanner from "./components/CommercialBanner";
import Header from "../../components/Header";
import { UniContext } from "../../context/UniProvider";
import { AuthContext } from "../../context/AuthProvider";

export default function HomeScreen({ navigation }) {

  return (
    <View className="bg-white flex-1">
      <Header />
      <ScrollView>
        {/* Commercial Banner */}
        <CommercialBanner />
        {/* Featured Header */}
        <FeaturedClubs navigation={navigation} />
        {/* Student Clubs | الأندية الطلابية */}
        <StudentClubs navigation={navigation} />
        {/* Featured Events */}
        <FeaturedClubsEvents navigation={navigation} />
        {/* Clubs Activities | الأنشطة الطلابية*/}
        <ClubsActivities navigation={navigation} />
      </ScrollView>
    </View>
  );
}
