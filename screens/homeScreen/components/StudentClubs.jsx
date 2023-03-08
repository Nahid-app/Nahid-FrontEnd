import { View, Text, ScrollView } from "react-native";
import React from "react";
import { RTL } from "nativewind/dist/utils/selector";

const StudentClubs = () => {
  return (
    <View className="pb-3.5 pl-6">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexDirection: "row" }}
      >
        <View className="w-44 h-32 bg-primary rounded-2xl"></View>
        <View className="w-44 h-32 bg-primary rounded-2xl"></View>
        <View className="w-44 h-32 bg-primary rounded-2xl"></View>
        <View className="w-44 h-32 bg-primary rounded-2xl"></View>
      </ScrollView>
    </View>
  );
};

export default StudentClubs;
