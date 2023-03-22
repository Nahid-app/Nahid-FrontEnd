import { View, Text } from "react-native";
import React from "react";
import Logo from "../../../assets/svg/Logo";
import Settings from "../../../assets/svg/Settings";

const ProfileHeader = () => {
  return (
    <View className="flex-row justify-between px-6 py-2 pb-3.5">
      <View className="flex-row">
        <View className="py-1.5">
          <Logo />
        </View>
        <Text className="font-[TajawalBold] text-h4 px-4">ناهض</Text>
      </View>
      <Settings />
    </View>
  );
};

export default ProfileHeader;
