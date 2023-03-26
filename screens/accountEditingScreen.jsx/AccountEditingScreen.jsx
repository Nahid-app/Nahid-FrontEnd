import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowRight from "../../assets/svg/arrowRight";
import { Image, Text, View, platform, Button } from "react-native";
import TextField from "./components/TextField";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

export default function AccountEditingScreen() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");
  return (
    <>
      <StatusBar />
      <SafeAreaView className="bg-white flex-1 px-6 pt-5">
        {/* Account Editing Header */}
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
      </SafeAreaView>
    </>
  );
}
