import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BlackRightArrow from "../assets/svg/BlackRightArrow";

export default function Header() {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      className="bg-white px-6 pt-4"
    >
      <BlackRightArrow />
    </SafeAreaView>
  );
}
