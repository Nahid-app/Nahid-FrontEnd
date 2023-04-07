import { View, Text } from "react-native";
import React from "react";
import ArrowLeft from "../../../assets/svg/ArrowLeft";

const FeaturedClubs = () => {
  return (
    <View className="flex-row justify-between px-6 items-center pb-2.5">
      <Text className="font-[TajawalBold] text-h5 pt-2">أبرز الأندية</Text>
      <View className="items-center">
        <View className="flex-row items-center">
          <Text className="font-[TajawalBold] text-h6 px-4 color-primary">
            عرض الجميع
          </Text>
          <View className="justify-center pt-1.5">
            <ArrowLeft />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeaturedClubs;
