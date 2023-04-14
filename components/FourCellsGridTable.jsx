import { View, Text } from "react-native";
import React from "react";

const FourCellsGridTable = (props) => {
  return (
    <View>
      <View>
        <View className="w-full bg-gray300 h-px"></View>
        <View className="flex-row justify-around items-center my-4 relative">
          <View className=" w-1/2 left-0">
            <View className="items-center justify-center">
              <Text className="font-[TajawalBold] text-h5 text-gray900 ">
                {props.topRightInfo}
              </Text>
              <Text className="font-[TajawalMedium] text-lSemiBold">
                {props.topRightTitle}
              </Text>
            </View>
          </View>
          <View className="h-14 w-px bg-gray300 left-1/2 absolute"></View>
          <View className=" w-1/2 left-0">
            <View className="items-center justify-center">
              <Text className="font-[TajawalBold] text-h5 text-gray900 ">
                {props.topLeftInfo}
              </Text>
              <Text className="font-[TajawalMedium] text-lSemiBold">
                {props.topLeftTitle}
              </Text>
            </View>
          </View>
        </View>
        <View className="w-full bg-gray300 h-px"></View>
        <View className="flex-row justify-around items-center my-4 relative">
          <View className=" w-1/2 left-0">
            <View className="items-center justify-center">
              <Text className="font-[TajawalBold] text-h5 text-gray900 ">
                {props.bottomRightInfo}
              </Text>
              <Text className="font-[TajawalMedium] text-lSemiBold">
                {props.bottomRightTitle}
              </Text>
            </View>
          </View>
          <View className="h-14 w-px bg-gray300 left-1/2 absolute"></View>
          <View className=" w-1/2 left-0">
            <View className="items-center justify-center">
              <Text className="font-[TajawalBold] text-h5 text-gray900 ">
                {props.bottomLeftInfo}
              </Text>
              <Text className="font-[TajawalMedium] text-lSemiBold">
                {props.bottomLeftTitle}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="w-full bg-gray300 h-px"></View>
    </View>
  );
};

export default FourCellsGridTable;
