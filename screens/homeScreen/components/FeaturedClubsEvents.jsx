import { View, Text } from "react-native";
import React from "react";
import ArrowLeft from "../../../assets/svg/ArrowLeft";

const FeaturedClubsEvents = () => {
  return (
    <View className="flex-row justify-between px-6 items-center pb-2.5">
      <Text className="font-[TajawalBold] text-h5">آخر الأنشطة</Text>
      <View className="items-center">
        <View className="flex-row ">
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

export default FeaturedClubsEvents;
