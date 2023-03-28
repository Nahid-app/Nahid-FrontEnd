import { View, Text } from "react-native";
import React from "react";
import TextField from "../../../components/TextField";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useState } from "react";
import Calendar from "../../../assets/svg/Calendar";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const UserInputFields = () => {
  const [visiblity, setVisibility] = useState(false);
  const [dateText, setDateText] = useState("");

  const visibiltyStatus = () => {
    setVisibility(!visiblity);
  };

  const handleConfirm = (currentDate) => {
    let tempDate = new Date(currentDate);

    let formattedDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setDateText(formattedDate);
    visibiltyStatus();
  };
  return (
    <View className="pb-6">
      <TextField
        textFieldTitle="الإسم الشخصي"
        textFieldPlaceHolder="فيصل يغمور"
      />
      <TextField
        textFieldTitle="الإيميل"
        textFieldPlaceHolder="Faisalyaghmur@gmail.com"
      />
      <TextField
        textFieldTitle="رقم الجوال"
        textFieldPlaceHolder="+966 54 264 9369"
      />
      <Pressable onPress={visibiltyStatus}>
        <TextField
          textFieldTitle="تاريخ الميلاد"
          textFieldPlaceHolder={
            dateText === "" ? "لايوجد" : dateText.toString() + " مـ"
          }
          icon={<Calendar />}
        />
      </Pressable>
      <DateTimePickerModal
        isVisible={visiblity}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={visibiltyStatus}
      />
    </View>
  );
};

export default UserInputFields;
