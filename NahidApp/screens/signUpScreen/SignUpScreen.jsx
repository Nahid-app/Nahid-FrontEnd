import { View, Text, Button, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ProgressBar, TextInput } from "react-native-paper";
import { Formik } from "formik";
import { register } from "../../api/register";
import PrimaryColorButton from "../../components/buttons/PrimaryColorButton";

export default function SignUpScreen({ navigation }) {
  const [steps, setStep] = useState(0.5);

  const handleClick = () => {
    if (steps === 1 || steps > 1) {
      setStep(0.5); // Reset count to its default value of 0
    } else setStep(steps + 0.5);
  };

  const form = {
    titleName: "الاسم الكامل",
    titleEmail: "البريد الإلكتروني",
    tilePassword: "الرقم السري",
    tileConPassword: "تأكيد الرقم السري",
    textContentType: {
      name: "text",
      email: "emailAddress",
      password: "password",
      password_confirmation: "password_confirmation",
    },
    autoComplete: {
      name: "name",
      email: "emailAddress",
      password: "password",
      password_confirmation: "password_confirmation",
    },
    keyboardType: {
      name: "text",
      email: "email-address",
      password: "password",
      password_confirmation: "password",
    },
    textAlign: "right",
    className: "border-b-2 border-primary text-gray900 h-8 w-full bg-white",
  };
  return (
    <View className=" flex-1 w-full flex-col content-center items-center p-6 bg-white h-full">
      <View className="w-60 pb-5 ">
        <ProgressBar
          style={{ height: 15, borderRadius: 10 }}
          progress={steps}
          color="#6949FF"
        />
      </View>
      <View className="justify-center content-center items-center">
        <Text className="text-h3 font-[TajawalBold]">إنشاء حساب ✏️</Text>
        <Text className="text-xlRegular font-[TajawalRegular] p-5">
          يرجى استكمال ملف التعريف الخاص بك. لا تقلق ، ستظل بياناتك خاصة وأنت
          فقط من يمكنه رؤيتها.
        </Text>
      </View>

      <View className="py-3 w-full items-start ">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            conFPassword: "",
          }}
          onSubmit={(values) => register(values, { navigation })}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View className="py-1 w-full content-start items-start ">
              <View className="  w-full content-start items-start">
                <Text className="text-h6 font-[TajawalMedium] pb-5  content-end items-end">
                  {form.titleName}
                </Text>
              </View>
              <View className="w-full ">
                <TextInput
                  title={form.titleName}
                  placeholder={form.titleName}
                  textContentType={form.textContentType.name}
                  textAlign={"right"}
                  className={form.className}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.fullName}
                  returnKeyType="next"
                  returnKeyLabel="التالي"
                  placeholderTextColor={"gray"}
                />
              </View>
              <View className=" pt-8 w-full content-start items-start">
                <Text className="text-h6 font-[TajawalMedium] pb-5  content-end items-end">
                  {form.titleEmail}
                </Text>
              </View>
              <View className="w-full ">
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
                  placeholderTextColor={"gray"}
                />
                <View className=" pt-8 w-full content-start items-start">
                  <Text className="text-h6 font-[TajawalMedium] pb-5  content-end items-end">
                    {form.tilePassword}
                  </Text>
                </View>
                <View className="w-full">
                  <TextInput
                    title={"الرقم السري"}
                    placeholder={"أدخل الرقم السري👀"}
                    textContentType={form.textContentType.password}
                    textAlign={"right"}
                    className={form.className}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    returnKeyType="next"
                    returnKeyLabel="التالي"
                    placeholderTextColor={"gray"}
                  />
                </View>
                <View className=" pt-8 w-full content-start items-start">
                  <Text className="text-h6 font-[TajawalMedium] pb-5  content-end items-end">
                    {form.tileConPassword}
                  </Text>
                </View>
                <View className="w-full pb-8">
                  <TextInput
                    title={form.tileConPassword}
                    placeholder={"أكد الرقم السري🔒"}
                    textContentType={form.textContentType["current-password"]}
                    textAlign={"right"}
                    className={form.className}
                    onChangeText={handleChange("password_confirmation")}
                    onBlur={handleBlur("password_confirmation")}
                    value={values.password_confirmation}
                    returnKeyType="done"
                    returnKeyLabel="التالي"
                    placeholderTextColor={"gray"}
                  />
                </View>
                <View className=" justify-between content-center items-center w-full    ">
                  <PrimaryColorButton
                    title={"سجل الدخول"}
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}
