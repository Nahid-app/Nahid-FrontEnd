import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ProgressBar, TextInput } from "react-native-paper";
import { Formik } from "formik";
import { register } from "../../api/register";
import PrimaryColorButton from "../../components/buttons/PrimaryColorButton";
let handleSubmit;

export default function SignUpScreen({ navigation }) {
  const [steps, setStep] = useState(0.5);
  const [error, setErrorEmail, errorPassword] = useState("");

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.header}>
            <ProgressBar
              style={{ height: 15, borderRadius: 10 }}
              progress={steps}
              color="#6949FF"
            />
            <Text className="text-h3 font-[TajawalBold]">إنشاء حساب ✏️</Text>
            <Text className="text-xlRegular font-[TajawalRegular] pt-3">
              يرجى استكمال ملف التعريف الخاص بك. لا تقلق ، ستظل بياناتك خاصة
              وأنت فقط من يمكنه رؤيتها.
            </Text>
          </View>
          <View style={styles.header}>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                conFPassword: "",
              }}
              onSubmit={(values) =>
                register(
                  values,
                  { navigation },
                  error,
                  setErrorEmail,
                  errorPassword
                )
              }
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View className="py-1 w-full content-start items-start ">
                  <View className="  w-full content-start items-start">
                    <Text className="text-h6 font-[TajawalMedium] pb-5  content-end items-end">
                      {form.titleName}
                    </Text>
                  </View>
                  <View className="w-full">
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
                    <Text>{error}</Text>
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
                      <Text>{error}</Text>
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
                        textContentType={
                          form.textContentType["current-password"]
                        }
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
                  </View>
                  <View className=" justify-between content-center items-center w-full    ">
                    <PrimaryColorButton
                      title={"سجل الدخول"}
                      onPress={handleSubmit}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inner: {
    justifyContent: "space-around",
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: "center",
    alignContent: "center",

    backgroundColor: "white",

    padding: 10,
  },
  body: {
    alignItems: "center",
    alignContent: "center",
    borderColor: "black",
    borderWidth: 1,
    padding: 0,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});
