import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BlackRightArrow from "../assets/svg/BlackRightArrow";

export default function SubScreenHeader(props, { navigation }) {
  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      className="bg-white px-px pt-4 flex-row items-center px-6"
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BlackRightArrow />
      </TouchableOpacity>
      <View className="px-4">
        <Text className="font-[TajawalBold] text-h5 text-left">
          {props.screenTitle}
        </Text>
      </View>
    </SafeAreaView>
  );
}
