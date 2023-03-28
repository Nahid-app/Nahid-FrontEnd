import { View, Text } from "react-native";
import React from "react";
import ArrowRight from "../../../assets/svg/ArrowRight";

const ProfileEditingHeader = () => {
  return (
    <View className="flex-row items-center">
      <ArrowRight />
      <Text className="font-[TajawalBold] text-h4 text-grey900 px-4">
        المعلومات الشخصية
      </Text>
    </View>
  );
};

export default ProfileEditingHeader;
