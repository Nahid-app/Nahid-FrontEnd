import { View, Text } from "react-native";
import React from "react";

const UserData = () => {
  return (
    <View className="pb-6">
      <View className="w-full bg-gray300 h-px"></View>
      <View className="flex-row justify-around items-center py-3 ">
        <View className="items-center">
          <Text className="font-[TajawalBold] text-h5 text-gray900 ">2</Text>
          <Text className="font-[TajawalMedium] text-lSemiBold">
            قيد الحضور
          </Text>
        </View>
        <View className="h-14 w-px bg-gray300"></View>
        <View className="flex-row justify-around">
          <View className="items-center">
            <Text className="font-[TajawalBold] text-h5 text-gray900">0</Text>
            <Text className="font-[TajawalMedium] text-lSemiBold">
              تم الحضور
            </Text>
          </View>
        </View>
      </View>
      <View className="w-full bg-gray300 h-px"></View>
    </View>
  );
};

export default UserData;
