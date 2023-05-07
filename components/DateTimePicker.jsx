import { View, Text, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import NewEventTF from "./NewEventTF";
import Calendar from "../assets/svg/Calendar";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateTimePicker = (props) => {
  let dateTimeText;
  const [visiblity, setVisibility] = useState(false);
  const [dateText, setDateText] = useState("");
  const [timeText, setTimeText] = useState("");

  const visibiltyStatus = () => {
    setVisibility(!visiblity);
  };

  function timeAndDate() {
    return (
      "التاريخ: " +
      dateText.toString() +
      " مـ " +
      " الساعة: " +
      timeText.toString()
    );
  }

  // 2023-12-5 11:00:00

  const handleConfirm = (currentDate) => {
    let tempDate = new Date(currentDate);
    let formattedDate =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate();
    let min =
      tempDate.getMinutes().toString() == "0" ? "00" : tempDate.getMinutes();
    let formattedTime =
      tempDate.getHours() + ":" + min + ":" + tempDate.getSeconds();
    setDateText(formattedDate);
    setTimeText(formattedTime);
    let dateTimeText = formattedDate + " " + formattedTime;
    props.timeHandler(dateTimeText);
    visibiltyStatus();
  };
  return (
    <View>
      <Pressable onPress={visibiltyStatus}>
        <NewEventTF
          editable={false}
          textFieldTitle={props.title}
          textFieldPlaceHolder={
            dateText === "" ? props.placeHolder : timeAndDate()
          }
          icon={<Calendar />}
        />
      </Pressable>
      <DateTimePickerModal
        isVisible={visiblity}
        mode="datetime"
        textColor="black"
        onConfirm={handleConfirm}
        onCancel={visibiltyStatus}
      />
    </View>
  );
};

export default DateTimePicker;
