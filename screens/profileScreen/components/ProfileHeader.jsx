import { View, Text } from "react-native";
import React from "react";
import Logo from "../../../assets/svg/Logo";
import Settings from "../../../assets/svg/Settings";

const ProfileHeader = () => {
  return (
    <View className="flex-row justify-between">
      <View className="flex-row">
        <View className="py-1.5">
          <Logo />
        </View>
        <Text className="font-[TajawalBold] text-h4 px-4">حسابي</Text>
      </View>
      <Settings />
    </View>
  );
};

export default ProfileHeader;
