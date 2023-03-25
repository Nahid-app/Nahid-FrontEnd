import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BannerImage from "./components/BannerImage";
import EventsList from "./components/EventsList";
import EventsListHeader from "./components/EventsListHeader";
import ProfileHeader from "./components/ProfileHeader";
import UserAccount from "./components/UserAccount";
import UserData from "./components/UserData";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="pt-4 mx-6 flex-1">
      {/* Profile Header */}
      <ProfileHeader />
      {/* Banner Image */}
      <BannerImage />
      {/* User Account */}
      <UserAccount />
      {/* User Data */}
      <UserData />
      {/* List of Activities */}
      <EventsListHeader />
      {/* Events List */}
      <EventsList />
    </SafeAreaView>
  );
}
