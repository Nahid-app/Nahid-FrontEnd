import { View, Text } from "react-native";
import React from "react";

import Sort from "../../../assets/svg/Sort";

const EventsListHeader = () => {
  return (
    <View className="flex-row justify-between justify-between pb-4">
      <Text className="font-[TajawalBold] text-h5 text-gray900">الأنشطة</Text>
      <View className="justify-center">
        <View className="flex-row ">
          <Text className="font-[TajawalBold] text-h6 px-4 color-primary">
            ترتيب
          </Text>
          <View className="justify-center pt-1.5">
            <Sort />
          </View>
        </View>
      </View>
    </View>
  );
};

export default EventsListHeader;
