import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const TextField = (props) => {
  return (
    <View className="pt-4">
      <Text className="font-[TajawalBold] text-lBold text-grey900 pb-3">
        {props.textFieldTitle}
      </Text>
      <View className="flex-row justify-between">
        <TextInput
          placeholder={props.textFieldPlaceHolder}
          placeholderTextColor={"black"}
          className="font-[TajawalBold] text-h5 pb-2 flex-1"
          textAlign="right"
          editable={false}
          selectTextOnFocus={false}
        />
        {props.icon}
      </View>
      <View className="flex-row w-full h-0.5 bg-primary "></View>
    </View>
  );
};

export default TextField;
