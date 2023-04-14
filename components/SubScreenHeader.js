import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BlackRightArrow from "../assets/svg/BlackRightArrow";

export default function SubScreenHeader(props) {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      className="bg-white px-px pt-4 flex-row items-center"
    >
      <BlackRightArrow />
      <View className="px-4">
        <Text className="font-[TajawalBold] text-h5 text-left">
          {props.screenTitle}
        </Text>
      </View>
    </SafeAreaView>
  );
}
