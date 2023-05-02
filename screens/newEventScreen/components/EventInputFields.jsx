import { View, Text } from "react-native";
import React from "react";
import TextField from "../../../components/TextField";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useState } from "react";
import Calendar from "../../../assets/svg/Calendar";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const EventInputFields = () => {
  const [visiblity, setVisibility] = useState(false);
  const [dateText, setDateText] = useState("");
  const [dateTime, setTimeText] = useState("");

  const visibiltyStatus = () => {
    setVisibility(!visiblity);
  };
  function timeAndDate() {
    return (
      "التاريخ: " +
      dateText.toString() +
      " مـ " +
      "الساعة: " +
      dateTime.toString()
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
    let formattedTime = tempDate.getHours() + ":" + min;
    setDateText(formattedDate);
    setTimeText(formattedTime);
    visibiltyStatus();
  };
  return (
    <View className="pb-6">
      <TextField
        textFieldTitle="عنوان الفعالية"
        textFieldPlaceHolder="بداية في علوم الحاسب"
        textContentType={"name"}
      />
      <TextField textFieldTitle="وصف الفعالية" multiline={true} />
      <Pressable onPress={visibiltyStatus}>
        <TextField
          editable={false}
          textFieldTitle="تاريخ الفعالية"
          textFieldPlaceHolder={dateText === "" ? "لايوجد" : timeAndDate()}
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
