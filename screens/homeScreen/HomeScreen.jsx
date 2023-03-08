import { View } from "react-native";
import React from "react";
import FeaturedHeader from "./components/FeaturedHeader";
import AppHeader from "./components/AppHeader";
import FeaturedUniversities from "./components/FeaturedUniversities";
import FeaturedClubs from "./components/FeaturedClubs";
import StudentClubs from "./components/StudentClubs";

export default function HomeScreen() {
  return (
    <View className="bg-white flex-1 justify-start">
      {/* Header */}
      <AppHeader />
      {/* Featured Header */}
      <FeaturedHeader />
      {/* Featured Universities */}
      <FeaturedUniversities />
      {/* Featured Header */}
      <FeaturedClubs />
      {/* Student Clubs | الأندية الطلابية */}
      <StudentClubs />
      {/* Clubs Activities | الأنشطة الطلابية*/}
    </View>
  );
}
