import { View, Text } from "react-native";
import React from "react";
import Logo from "../../../assets/svg/Logo";
import MagnifyingGlass from "../../../assets/svg/MagnifyingGlass";
import Notification from "../../../assets/svg/Notification";
import { SafeAreaView } from "react-native-safe-area-context";

const AppHeader = () => {
  return (
    <SafeAreaView edges={["top", "left", "right"]} className="bg-white border">
      <View className="flex-row justify-between px-6 items-center">
        <View className="flex-row items-center">
          <View className="py-1">
            <Logo />
          </View>
          <Text className="font-[TajawalBold] text-h4 px-4">ناهض</Text>
        </View>
        <View className="flex-row justify-between ">
          <View className="px-4">
            <MagnifyingGlass />
          </View>
          <Notification />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppHeader;
