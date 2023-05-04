import { View, Text } from "react-native";
import React from "react";
import { useState, useContext } from "react";
import DropDownList from "../../components/DropDownList";
import { AuthContext } from "../../context/AuthProvider";

const DropDownLists = (props) => {
  const universitiesList = [
    { label: "كليات ومعاهد الجبيل", value: 1, key: 1 },
    { label: "جامعة الملك سعود", value: "2", key: "2" },
    { label: "جامعة الملك عبدالعزيز", value: "3", key: "3" },
    { label: "جامعة الملك فهد للبترول والمعادن", value: "4", key: "4" },
    { label: "جامعة أم القرى", value: "5", key: "5" },
    { label: "جامعة الملك خالد", value: "6", key: "6" },
    { label: "جامعة الملك فيصل", value: "7", key: "7" },
  ];
  const genders = [
    { label: "ذكر", value: 1, key: 1 },
    { label: "أنثى", value: "2", key: "2" },
  ];
  const { university, setUniversity, gender, setGender } =
    useContext(AuthContext);
  return (
    <View className="pt-4">
      <DropDownList
        itemsList={universitiesList}
        title="الجامعة"
        searchTitle="إختر الجامعة"
        searchability={true}
        value={university}
        setValue={setUniversity}
      />
      <View className="py-3"></View>
      <DropDownList
        itemsList={genders}
        title="الجنس"
        searchTitle="حدد الجنس"
        value={gender}
        setValue={setGender}
      />
    </View>
  );
};

export default DropDownLists;
