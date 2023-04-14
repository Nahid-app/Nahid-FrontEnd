import { View, Text } from "react-native";
import React from "react";
import Sort from "../../../assets/svg/Sort";

const UniversityClubListHeader = () => {
  return (
    <View className="flex-row justify-between py-5">
      <Text className="font-[TajawalBold] text-h5 text-gray900 pt-1 ">
        الأندية
      </Text>
      <View className="justify-center items-center">
        <View className="flex-row items-center justify-center ">
          <Text className="font-[TajawalBold] text-h6 px-4 color-primary">
            ترتيب
          </Text>
          <View className="justify-center items-center">
            <Sort />
          </View>
        </View>
      </View>
    </View>
  );
};

export default UniversityClubListHeader;
