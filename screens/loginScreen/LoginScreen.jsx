import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import { I18nManager } from "react-native";
import PrimaryColorButton from "../../components/buttons/PrimaryColorButton";
import InputText from "../../components/buttons/inputs/InputText";
import Checkbox from "expo-checkbox";
import axios from "axios";
import { Formik, handleSubmit } from "formik";
import { postLogin } from "../../api/login";
import { SafeAreaView } from "react-native-safe-area-context";
import { CommonActions } from "@react-navigation/native";
import { MotiSafeAreaView, MotiView, ScrollView } from "moti";
import SubScreenHeader from "../../components/SubScreenHeader";

export default function LoginScreen({ navigation }) {
  const [isChecked, setChecked] = useState(false);
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
    <MotiSafeAreaView
      from={{
        translateY: -10,
      }}
      animate={{
        translateY: 0,
      }}
      className="flex-1 bg-white"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MotiView
          from={{
            translateY: -10,
          }}
          animate={{
            translateY: 0,
          }}
          className=" flex-1 w-full flex-col px-6 bg-white"
        >
          <SubScreenHeader navigation={navigation} />
          <View className="items-start w-full justify-center ">
            <Text className="font-[TajawalBold] text-h3 items-start pt-6 ">
              أهلا بك 👋
            </Text>
          </View>
          <View className="items-start w-full ">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => postLogin(values, { navigation })}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
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
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      returnKeyType="next"
                      returnKeyLabel="التالي"
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
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        returnKeyType="next"
                        returnKeyLabel="التالي"
                      />
                    </View>
                    <View className=" align-text-bottom flex-row border-b-2  border-gray200 w-full pb-8">
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Checkbox
                          style={{
                            borderRadius: 6,
                            textAlignVertical: "center",
                          }}
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
                        onPress={() =>
                          navigation.dispatch(
                            CommonActions.reset({
                              index: 0,
                              routes: [{ name: "HomeScreen" }],
                            })
                          )
                        }
                      />
                    </View>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </MotiView>
      </TouchableWithoutFeedback>
    </MotiSafeAreaView>
  );
}
