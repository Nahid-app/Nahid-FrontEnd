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
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ProgressBar, TextInput } from "react-native-paper";
import { Formik } from "formik";
import { register } from "../../api/register";
import PrimaryColorButton from "../../components/buttons/PrimaryColorButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { MotiScrollView } from "moti";
import { CommonActions } from "@react-navigation/native";
import SubScreenHeader from "../../components/SubScreenHeader";
import TextField from "../../components/TextField";
import Calendar from "../../assets/svg/Calendar";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownLists from "./DropDownLists";

export default function SignUpScreen({ navigation }) {
  const [steps, setStep] = useState(0.5);
  const [error, setErrorEmail, errorPassword] = useState("");
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView
        className="flex-1 bg-white"
        edges={["bottom", "left", "right"]}
      >
        <MotiScrollView
          from={{
            translateY: -10,
          }}
          animate={{
            translateY: 0,
          }}
          className="flex-1 px-6"
          contentContainerStyle={{
            justifyContent: "space-between",
          }}
          showsVerticalScrollIndicator={false}
        >
          <SubScreenHeader navigation={navigation} />
          <View style={styles.header} className="w-full justify-center">
            <Text className="text-h3 font-[TajawalBold] text-center">
              إنشاء حساب ✏️
            </Text>
            <Text className="text-xlRegular font-[TajawalRegular] pt-3 text-left">
              يرجى استكمال ملف التعريف الخاص بك. لا تقلق ، ستظل بياناتك خاصة
              وأنت فقط من يمكنه رؤيتها.
            </Text>
          </View>
          <View className="pb-6">
            <TextField
              textFieldTitle="الاسم الكامل"
              textFieldPlaceHolder="أدخل اسمك الكامل"
              autoComplete={"name"}
            />
            <TextField
              textFieldTitle="الإيميل"
              textFieldPlaceHolder="user@user.com"
              textContentType="emailAddress"
              autoComplete={"email"}
            />
            <TextField
              textFieldTitle="الرقم السري"
              textFieldPlaceHolder="أدخل الرقم السري"
              // autoComplete={"new-password"}
              secureTextEntry={true}
            />
            <TextField
              textFieldTitle="إعادة الرقم السري"
              textFieldPlaceHolder="أدخل الرقم السري"
              // autoComplete={"new-password"}
              secureTextEntry={true}
            />
            <TextField
              textFieldTitle="رقم الجوال"
              textFieldPlaceHolder="+966 50 000 0000"
              autoComplete={"tel"}
            />
            <DropDownLists />
            <Pressable onPress={visibiltyStatus}>
              <TextField
                editable={false}
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
              textColor="black"
              onConfirm={handleConfirm}
              onCancel={visibiltyStatus}
            />
          </View>
          <View className=" justify-between content-center items-center w-full    ">
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
        </MotiScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
  },

  header: {
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "white",
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
