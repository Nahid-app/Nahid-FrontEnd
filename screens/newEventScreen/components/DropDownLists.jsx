import { View, Text } from "react-native";
import React from "react";

import DropDownList from "../../../components/DropDownList";
import { useState } from "react";

const DropDownLists = ({
  clubs,
  genderTargetHandler,
  eventTypeeHandler,
  clubIdHandler,
}) => {
  const [gender, setGender] = useState();
  const [eventType, setEventType] = useState();
  const [club, setClub] = useState();

  const ascendingData = () => {};

  const GenderHandler = (data) => {
    setGender(data);
    // console.log(data);
    genderTargetHandler(gender);
  };
  const eventTypeHandler = (data) => {
    setEventType(data);
    // console.log(data);
    eventTypeeHandler(eventType);
  };
  const clubHandler = (data) => {
    setClub(data);
    // console.log(data);
    clubIdHandler(club);
  };

  const genders = [
    { label: "ذكور", value: 1 },
    { label: "إناث", value: 2 },
    { label: "الكل", value: 3 },
  ];
  const type = [
    { label: "فعالية", value: 1 },
    { label: "مسابقة", value: 2 },
    { label: "ندوة", value: 3 },
    { label: "دورة", value: 4 },
    { label: "أخرى", value: 5 },
  ];

  return (
    <View className="pb-6">
      <DropDownList
        itemsList={genders}
        title="الفئة المستهدفة"
        searchTitle="حدد الفئة المستهدفة"
        handleValue={GenderHandler}
      />
      <View className="pb-5" />
      <DropDownList
        itemsList={type}
        title="نوع الفعالية"
        searchTitle="حدد نوع الفعالية"
        handleValue={eventTypeHandler}
      />
      <View className="pb-5" />
      <DropDownList
        itemsList={clubs}
        title="النادي"
        searchTitle="إختر النادي"
        searchability={true}
        handleValue={clubHandler}
      />
    </View>
  );
};

export default DropDownLists;
