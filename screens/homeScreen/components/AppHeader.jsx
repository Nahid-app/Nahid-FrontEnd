import { View, Text } from "react-native";
import React from "react";
import Logo from "../../../assets/svg/Logo";
import MagnifyingGlass from "../../../assets/svg/MagnifyingGlass";
import Notification from "../../../assets/svg/Notification";

const AppHeader = () => {
  return (
    <View className="flex-row justify-between px-6 pb-3.5">
      <View className="flex-row">
        <View className="py-1.5">
          <Logo />
        </View>
        <Text className="font-[TajawalBold] text-h4 px-4">ناهض</Text>
      </View>
      <View className="flex-row py-1.5 justify-between">
        <View className="px-4">
          <MagnifyingGlass />
        </View>
        <Notification />
      </View>
    </View>
  );
};

export default AppHeader;
