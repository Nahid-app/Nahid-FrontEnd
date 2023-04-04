import { View, Text } from "react-native";
import React from "react";

const FilterButtons = () => {
  return (
    <View className="flex-row justify-between px-1 py-6">
      <View className="bg-primary py-2 px-10  rounded-3xl">
        <Text
          className="text-[white] font-[TajawalBold]"
          style={{ color: "white" }}
        >
          خيار1
        </Text>
      </View>
      <View className="bg-primary py-2 px-10 rounded-3xl">
        <Text className="text-white font-[TajawalBold]">خيار2</Text>
      </View>
      <View className="bg-primary py-2 px-10 rounded-3xl">
        <Text className="text-white font-[TajawalBold]">خيار3</Text>
      </View>
    </View>
  );
};

export default FilterButtons;
