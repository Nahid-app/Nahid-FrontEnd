import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/svg/Logo";
import MagnifyingGlass from "../assets/svg/MagnifyingGlass";
import Notification from "../assets/svg/Notification";

export default function () {
  return (
    <SafeAreaView edges={["top", "left", "right"]} className="bg-white">
      <View className="flex-row justify-between pt-4 px-6 items-center">
        <View className="flex-row items-center">
          <View>
            <Logo />
          </View>
          <Text className="font-[TajawalBold] text-h5 px-4">ناهض</Text>
        </View>
        <View className="flex-row justify-between">
          <View className="pr-4">
            <MagnifyingGlass />
          </View>
          <Notification />
        </View>
      </View>
    </SafeAreaView>
  );
}
