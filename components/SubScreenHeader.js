import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BoldStar from "../assets/svg/BoldStar";
import MoreIcon from "../assets/svg/MoreIcon";
import BlackArrowLeft from "../assets/svg/BlackArrowLeft";

export default function Header() {
  return (
    <SafeAreaView edges={["top", "left", "right"]} className="bg-white">
      <View className="flex-row justify-between pt-4 px-6 items-center">
        <View className="flex-row items-center ">
          <View className="pr-4">
            <BoldStar />
          </View>
          <MoreIcon />
        </View>
        <View className="flex-row justify-between">
          <BlackArrowLeft />
        </View>
      </View>
    </SafeAreaView>
  );
}
