import { View, Text, TextInput } from "react-native";
import React from "react";
import { I18nManager } from "react-native";
import PrimaryColorButton from "../../components/buttons/PrimaryColorButton";
import InputText from "../../components/buttons/inputs/InputText";

export default function LoginScreen() {
  const [text, onChangeText] = React.useState("email");
  const [number, onChangeNumber] = React.useState("password");
  return (
    <View className="flex-1 w-ful flex-col justify-between content-center items-center p-4 bg-white">
      <View className="items-start w-full justify-between">
        <Text className="font-[TajawalBold] text-h3 items-start py-8 ">
          أهلا بك 👋
        </Text>
        <View className="w-full">
          <InputText
            title={"البريد الإلكتروني"}
            placeholder={"ايميل ✉️"}
            textContentType={"emailAddress"}
            autoComplete={"emailAddress"}
            autoFocus={true}
            keyboardType={"email-address"}
          />
        </View>
        <View className="w-full">
          <InputText
            title={"الرقم السري"}
            placeholder={"الرقم السري 👀"}
            textContentType={"password"}
            autoComplete={"password"}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View>
        <PrimaryColorButton title={"سجل الدخول"} onPress={{}}/>
      </View>
    </View>
  );
}
