import { View, Text } from "react-native";
import React from "react";
import TextField from "../../../components/TextField";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useState } from "react";
import Calendar from "../../../assets/svg/Calendar";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const EventInputFields = () => {
  const [visiblity, setVisibility] = useState(false);
  let dateTimeText;
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

  const handleConfirm = (currentDate) => {
    let tempDate = new Date(currentDate);
    let formattedDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let min =
      tempDate.getMinutes().toString() == "0" ? "00" : tempDate.getMinutes();
    let formattedTime =
      tempDate.getHours() + ":" + min + ":" + tempDate.getSeconds();
    setDateText(formattedDate);
    setTimeText(formattedTime);
    let dateTimeText = formattedDate + " " + formattedTime;

    visibiltyStatus();
  };
  return (
    <View className="pb-6">
      <TextField
        textFieldTitle="عنوان الفعالية"
        textFieldPlaceHolder="أدخل العنوان هنا"
        textContentType={"name"}
      />
      <TextField
        textFieldTitle="وصف الفعالية"
        textFieldPlaceHolder="أدخل وصف الفعالية هنا"
        multiline={true}
      />
      <Pressable onPress={visibiltyStatus}>
        <TextField
          editable={false}
          textFieldTitle="تاريخ و وقت الفعالية"
          textFieldPlaceHolder={
            dateText === "" ? "أنقر لاختيار تاريخ والوقت" : timeAndDate()
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

export default EventInputFields;
