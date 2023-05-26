import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import PrimaryColorButton from "../../components/buttons/PrimaryColorButton";
import Checkbox from "expo-checkbox";
import { AuthContext } from "../../context/AuthProvider";
import { ActivityIndicator } from "react-native-paper";
import SubScreenHeader from "../../components/SubScreenHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen({ navigation }) {
  const [isChecked, setChecked] = useState(false);
  const { login, error, isLoading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const form = {
    titleEmail: "البريد الإلكتروني",
    tilePassword: "الرقم السري",
    textContentType: {
      email: "emailAddress",
      password: "password",
    },
    autoComplete: {
      email: "emailAddress",
      password: "password",
    },
    keyboardType: {
      email: "email-address",
      password: "password",
    },
    textAlign: "right",
    className:
      "border-b-2 border-primary text-gray900 h-8 w-full cursor-vertical-text ",
  };

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View className="flex-1 bg-white">
      <View className="mx-6">
        <SubScreenHeader navigation={navigation} />
      </View>
      <View className=" flex-1 w-full flex-col content-center items-center p-6 bg-white">
        <View className="items-start w-full justify-center ">
          <Text className="font-[TajawalBold] text-h3 items-start pt-6 ">
            أهلا بك 👋
          </Text>
        </View>
        <View className="items-start w-full ">
          <View className="py-8 w-full content-start items-start ">
            <Text className="text-h6 font-[TajawalMedium] pb-8 ">
              {form.titleEmail}
            </Text>
            <View className="w-full justify-evenly">
              <TextInput
                title={form.titleEmail}
                placeholder={"أدخل بريدك الإلكتروني ✉️"}
                textContentType={"emailAddress"}
                keyboardType={"email-address"}
                textAlign={"right"}
                className={form.className}
                value={email}
                returnKeyType="next"
                returnKeyLabel="التالي"
                onChangeText={setEmail}
              />
              <View className=" pt-8 w-full content-start items-start">
                <Text className="text-h6 font-[TajawalMedium] pb-5  content-end items-end">
                  {form.tilePassword}
                </Text>
              </View>
              <View className="w-full pb-8">
                <TextInput
                  title={"الرقم السري"}
                  placeholder={"أدخل الرقم السري👀"}
                  textContentType={form.textContentType.password}
                  secureTextEntry={true}
                  textAlign={"right"}
                  className={form.className}
                  value={password}
                  returnKeyType="next"
                  returnKeyLabel="التالي"
                  onChangeText={setPassword}
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
              <View className=" justify-between content-center items-center w-full py-8">
                <TouchableOpacity>
                  <Text className="text-primary text-h5 font-[TajawalBold]">
                    نسيت الرقم السري؟
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="  justify-between content-center items-center w-full    ">
                <PrimaryColorButton
                  title={"سجل الدخول"}
                  onPress={() => login(email, password)}
                />
                {error && <Text>{error}</Text>}
                {isLoading && (
                  <ActivityIndicator size="small" color="#6949FF" />
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
    /* </TouchableWithoutFeedback> */
  );
}
