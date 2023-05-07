import { View, Text } from "react-native";
import React from "react";
import TextField from "../../../components/TextField";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useState } from "react";
import Calendar from "../../../assets/svg/Calendar";
import NewEventTF from "../../../components/NewEventTF";
import DateTimePicker from "../../../components/DateTimePicker";

const EventInputFields = (props) => {
  const [eventTitle, setEventTitle] = useState();
  const [eventDescription, setEventDescription] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [registrationDeadline, setRegistrationDeadline] = useState();
  // const [dateTime, setDateTime] = useState();

  const eventTitleHandler = (data) => {
    props.titleHandler(data);
    setEventTitle(data);
    // console.log(eventTitle);
  };
  const eventDescriptionHandler = (data) => {
    props.descriptionHandler(data);
    setEventDescription(data);
    // console.log(eventDescription);
  };

  const startTimeHandler = (data) => {
    props.startTimeHandler(data);
    setStartTime(data);
    // console.log(startTime);
  };

  const endTimeHandler = (data) => {
    props.endTimeHandler(data);
    setEndTime(endTime);
    // console.log(endTime);
  };

  const endRegistrationHandler = (data) => {
    props.registrationDeadlineHandler(data);
    setRegistrationDeadline(data);
    // console.log(registrationDeadline);
  };

  // const DateTimeHandler = (data) => {
  //   setDateTime(data);
  //   console.log(data);
  // };

  return (
    <View className="pb-6">
      <NewEventTF
        textFieldTitle="عنوان الفعالية"
        textFieldPlaceHolder="أدخل العنوان هنا"
        textContentType={"name"}
        inputValue={eventTitleHandler}
      />
      <NewEventTF
        textFieldTitle="وصف الفعالية"
        textFieldPlaceHolder="أدخل وصف الفعالية هنا"
        multiline={true}
        inputValue={eventDescriptionHandler}
      />
      <DateTimePicker
        title={"توقيت بداية الفعالية"}
        placeHolder={"إختر تاريخ ووقت بداية الفعالية"}
        timeHandler={startTimeHandler}
      />
      <DateTimePicker
        title={"توقيت نهاية الفعالية"}
        placeHolder={"إختر تاريخ ووقت نهاية الفعالية"}
        timeHandler={endTimeHandler}
      />
      <DateTimePicker
        title={"توقيت آخر موعد للتسجيل"}
        placeHolder={"إختر تاريخ ووقت آخر موعد تسجيل"}
        timeHandler={endRegistrationHandler}
      />
    </View>
  );
};

export default EventInputFields;
