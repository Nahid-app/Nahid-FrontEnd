import { View, Text } from "react-native";
import React from "react";
import ArrowRight from "../../../assets/svg/ArrowRight";

const ProfileEditingHeader = () => {
  return (
    <View className="flex-row justify-between items-center">
      <ArrowRight />
      <Text className="font-[TajawalBold] text-h5 align-center  text-grey900 px-4">
        المعلومات الشخصية
      </Text>
      <View className="w-3"></View>
    </View>
  );
};

export default ProfileEditingHeader;
