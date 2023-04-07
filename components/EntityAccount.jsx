import { View, Text, Image } from "react-native";
import React from "react";

const EntityAccount = (props) => {
  return (
    <View className="flex-row justify-between items-center my-5">
      <View className=" flex-row ">
        <Image
          className="rounded-full"
          source={props.imageSource}
          style={{ width: 64, height: 64 }}
        />
        <View className="pl-5 justify-center">
          <Text className="font-[TajawalBold] text-gray900 text-h6 p-px">
            {props.name}
          </Text>
          <Text className="font-[TajawalMedium] text-gray700 text-left p-px">
            {props.accountName}
          </Text>
        </View>
      </View>
      <View className="bg-primary w-16 h-9 rounded-full justify-center ">
        <Text className="font-[TajawalMedium] text-mSemiBold text-white text-center p-2">
          {props.buttonTitle}
        </Text>
      </View>
    </View>
  );
};

export default EntityAccount;
