import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/svg/Logo";
import MagnifyingGlass from "../assets/svg/MagnifyingGlass";
import Notification from "../assets/svg/Notification";

export default function () {
  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row justify-between px-6 items-center">
        <View className="flex-row">
          <View className="py-1.5">
            <Logo />
          </View>
          <Text className="font-[TajawalBold] text-h4 px-4">ناهض</Text>
        </View>
        <View className="flex-row justify-bet ween">
          <View className="pr-4">
            <MagnifyingGlass />
          </View>
          <Notification />
        </View>
      </View>
    </SafeAreaView>
  );
}
