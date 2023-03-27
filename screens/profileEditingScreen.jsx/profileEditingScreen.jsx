import React from "react";
import { StatusBar } from "expo-status-bar";
import ArrowRight from "../../assets/svg/arrowRight";
import { Image, Text, View, platform, Pressable } from "react-native";
import TextField from "./components/TextField";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Calendar from "../../assets/svg/Calendar";

export default function ProfileEditingScreen() {
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

    console.warn("A date has been picked: ", formattedDate);

    visibiltyStatus();
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView className="bg-white flex-1 px-6 pt-5">
        {/* Profile Editing Header */}
        <View className="flex-row items-center">
          <ArrowRight />
          <Text className="font-[TajawalBold] text-h4 text-grey900 px-4">
            المعلومات الشخصية
          </Text>
        </View>
        {/* Personal Image */}
        <View className="items-center pt-6">
          <View className="rounded-full bg-primary w-32 h-32">
            <Image
              className="rounded-full"
              source={{
                uri: "https://media.licdn.com/dms/image/C4E03AQFsr05tUGaLeQ/profile-displayphoto-shrink_200_200/0/1653581028839?e=1684972800&v=beta&t=BYiIYD5Q2PHylqQlYniN3MfmxJlzQgETs9gHogaIRD4",
              }}
              style={{ width: 128, height: 128 }}
            />
          </View>
        </View>
        {/* Divider */}
        <View className="w-full bg-gray300 h-px mt-6"></View>
        {/* User Info Form */}
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
      </SafeAreaView>
    </>
  );
}
