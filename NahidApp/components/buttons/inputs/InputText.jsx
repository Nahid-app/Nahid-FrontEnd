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
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (text) => {
    setInputValue(text);
    onValueChange(text);
  };

  return (
    <View className="pb-8 w-full justify-start content-start items-start  ">
      <Text className="text-h6 font-[TajawalMedium] pb-5">{title}</Text>
      <TextInput
        onChangeText={handleInputChange}
        value={inputValue}
        defaultValue={inputValue}
        textContentType={textContentType}
        placeholder={placeholder}
        style={{ justifyContent: "start" }}
        className="border-b-2 border-primary text-gray900 h-8 w-full cursor-vertical-text"
        secureTextEntry={secureTextEntry}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        textAlign={textAlign}
        autoComplete={autoComplete}
      />
    </View>
  );
}
