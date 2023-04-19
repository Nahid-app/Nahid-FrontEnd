import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const TextField = (props) => {
  return (
    <View className="pt-4">
      <Text className="font-[TajawalBold] text-h5 text-grey900 pb-3 text-left pt-1">
        {props.textFieldTitle}
      </Text>
      <View className="flex-row items-center pb-1">
        <TextInput
          placeholder={props.textFieldPlaceHolder}
          className="font-[TajawalMedium] text-h6 pb-2 flex-1"
          textAlign="right"
          selectTextOnFocus={false}
          placeholderTextColor="#212121"
          editable={props.editable}
          textContentType={props.textContentType}
          passwordRules={props.passwordRules}

        />
        {props.icon}
      </View>
      <View className="flex-row w-full h-0.5 bg-primary "></View>
    </View>
  );
};

export default TextField;
