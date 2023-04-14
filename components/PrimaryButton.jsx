import { Text, View } from "moti";
import * as React from "react";
import { Platform } from "react-native";

let marginTop = Platform.OS === "ios" ? 4 : null;
const PrimaryButton = () => (
  <View className="bg-primary px-2 rounded-full ">
    <Text
      className="text-white font-[TajawalBold] py-1.5 px-2 text-center text-sBold"
      style={{ marginTop: marginTop }}
    >
      متابعة
    </Text>
  </View>
);

export default PrimaryButton;
