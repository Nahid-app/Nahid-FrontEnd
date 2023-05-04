import { View, Text, Pressable } from "react-native";
import React from "react";
import ArrowRight from "../../../assets/svg/ArrowRight";

const ProfileEditingHeader = ({ navigation }) => {
  return (
    <View className="flex-row justify-between items-center">
      <Pressable onPress={() => navigation.goBack()}>
        <ArrowRight />
      </Pressable>
      <Text className="font-[TajawalBold] text-h5 align-center  text-grey900 px-4">
        المعلومات الشخصية
      </Text>
      <View className="w-3"></View>
    </View>
  );
};

export default ProfileEditingHeader;
