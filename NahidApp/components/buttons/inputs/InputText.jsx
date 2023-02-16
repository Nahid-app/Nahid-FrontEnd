import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

export default function InputText({
  title,
  textContentType,
  placeholder,
  secureTextEntry,
  autoFocus,
  keyboardType,
  textAlign,
  autoComplete,
}) {
  const [text, onChangeText] = useState("");
  return (
    <View className="pb-8 w-full justify-start content-start items-start  ">
      <Text className="text-h6 font-[TajawalMedium] pb-5">{title}</Text>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        textContentType={textContentType}
        placeholder={placeholder}
        style={{ justifyContent: "start", alignContent: "start" }}
        className="border-b-2 border-primary text-gray900 h-8 w-full"
        secureTextEntry={secureTextEntry}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        textAlign={textAlign}
        autoComplete={autoComplete}
      />
    </View>
  );
}
