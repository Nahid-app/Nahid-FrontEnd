import { View, Text } from "react-native";
import React from "react";
import ArrowLeft from "../../../assets/svg/ArrowLeft";

const FeaturedClubsActevities = () => {
  return (
    <View className="flex-row justify-between px-6 justify-between pb-2.5">
      <Text className="font-[TajawalBold] text-h4">الأنشطة الطلابية</Text>
      <View className="justify-center">
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

export default FeaturedClubsActevities;
