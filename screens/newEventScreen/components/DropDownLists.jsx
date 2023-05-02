import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";

import DropDownList from "../../../components/DropDownList";

const DropDownLists = () => {
  const universitiesList = [
    { label: "كلية الجبيل الصناعية", value: "JIC" },
    { label: "المعهد التقني بالجبيل", value: "JTI" },
    { label: "جامعة محمد بن فهد", value: "PMU" },
    { label: "جامعة الإمام عبدالرحمن", value: "IAU" },
    { label: "جامعة الملك فيصل", value: "KFU" },
    { label: "جامعة الملك فهد", value: "KFUPM" },
  ];
  const genders = [
    { label: "ذكر", value: 1 },
    { label: "أنثى", value: 2 },
  ];
  const type = [
    { label: "فعالية", value: 1 },
    { label: "مسابقة", value: 2 },
    { label: "ندوة", value: 3 },
  ];

  return (
    <View className="pb-6">
      <DropDownList
        itemsList={universitiesList}
        title="الجامعة"
        searchTitle="إخترالجامعة"
        searchability={true}
      />
      <View className="py-3"></View>
      <DropDownList itemsList={genders} title="الجنس" searchTitle="حدد الجنس" />
    </View>
  );
};

export default DropDownLists;
