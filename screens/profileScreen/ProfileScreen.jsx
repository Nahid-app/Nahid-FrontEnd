import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileHeader from "./components/ProfileHeader";

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <ProfileHeader />
      {/* Banner Image */}
      <Image />
    </SafeAreaView>
  );
}
