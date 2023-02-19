import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { I18nManager } from "react-native";
import PrimaryColorButton from "../../components/buttons/PrimaryColorButton";
import InputText from "../../components/buttons/inputs/InputText";
import Checkbox from "expo-checkbox";
import axios from "axios";

export default function LoginScreen() {
  function postLogin(inputValue, inputPassword) {
    console.log(inputPassword, inputValue);
    axios
      .post(
        "https://3tivhvae37dhevdfev7qch7gha0zqora.lambda-url.me-south-1.on.aws/api/login/",
        {
          email: { inputValue },
          password: { inputPassword },
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const [inputValue, setInputValue] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const handleValueChange = (text) => {
    setInputValue(text);
    console.log(inputValue);
  };
  const handlePasswordChange = (text) => {
    setInputPassword(text);
    console.log(inputPassword);
  };

  return (
    <View className="flex-1 w-ful flex-col justify-between content-center items-center p-6 bg-white">
      <View className="items-start w-full justify-between">
        <Text className="font-[TajawalBold] text-h3 items-start py-8 ">
          أهلا بك 👋
        </Text>
        <View className="w-full">
          <InputText
            title={"البريد الإلكتروني"}
            placeholder={"أدخل بريدك الإلكتروني ✉️"}
            textContentType={"emailAddress"}
            autoComplete={"emailAddress"}
            autoFocus={true}
            keyboardType={"email-address"}
            textAlign={"right"}
            onChangeText={handleValueChange}
          />
          <Text>{inputValue}</Text>
        </View>
        <View className="w-full">
          <InputText
            title={"الرقم السري"}
            placeholder={"أدخل الرقم السري👀"}
            textContentType={"password"}
            autoComplete={"password"}
            secureTextEntry={true}
            textAlign={"right"}
            onChangeText={handlePasswordChange}
          />
        </View>
        <View className=" align-text-bottom flex-row border-b-2  border-gray200 w-full pb-8">
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox
              style={{ borderRadius: 6, textAlignVertical: "center" }}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#6949FF" : undefined}
            />
            <Text
              className="pl-4 font-[TajawalMedium] text-xlSemiBold"
              style={{ textAlignVertical: "center" }}
            >
              تذكرني
            </Text>
          </View>
        </View>
        <View className=" justify-center content-center items-center w-full pt-8 ">
          <TouchableOpacity>
            <Text className="text-primary text-h5 font-[TajawalBold]">
              نسيت الرقم السري؟
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <PrimaryColorButton
          title={"سجل الدخول"}
          onPress={() => postLogin(inputValue, inputPassword)}
        />
      </View>
    </View>
  );
}
