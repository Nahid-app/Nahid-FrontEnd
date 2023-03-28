import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { fontScale } from "nativewind";
import DropDownList from "../../../components/DropDownList";

const DropDownLists = () => {
  const universitiesList = [
    { label: "كلية الجبيل الصناعية", value: "JIC" },
    { label: "المعهد التقني بالجبيل", value: "JTI" },
  ];
  const genders = [
    { label: "ذكر", value: "male" },
    { label: "أنثى", value: "female" },
  ];

  return (
    <View>
      <DropDownList itemsList={universitiesList} title="الجامعة" />
      <View className="py-3"></View>
      <DropDownList itemsList={genders} title="الجنس" />
    </View>
  );
};

export default DropDownLists;
