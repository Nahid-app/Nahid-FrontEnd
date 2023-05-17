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
import React, { useState, useContext } from "react";
import PrimaryColorButton from "../../components/buttons/PrimaryColorButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { CommonActions } from "@react-navigation/native";
import SubScreenHeader from "../../components/SubScreenHeader";
import TextField from "../../components/TextField";
import Calendar from "../../assets/svg/Calendar";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DropDownLists from "./DropDownLists";
import { AuthContext } from "../../context/AuthProvider";
import { ActivityIndicator } from "react-native-paper";
import { format, compareAsc } from "date-fns";
import DropDownList from "../../components/DropDownList";
import DropDownListSU from "../../components/DropDownListSU";

export default function SignUpScreen({ navigation }) {
  const [visiblity, setVisibility] = useState(false);
  const [date_birth, setDate_birth] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [phone, setPhone] = useState("");
  const [university, setUniversity] = useState("");
  const [gender, setGender] = useState("");

  const { error, isLoading, register } = useContext(AuthContext);
  const visibiltyStatus = () => {
    setVisibility(!visiblity);
  };

  const handleConfirm = (currentDate) => {
    let tempDate = format(new Date(currentDate), "Y-mm-dd");

    // let formattedDate =
    //   tempDate.getUTCDay() +
    //   "-" +
    //   (tempDate.getUTCMonth() + 1) +
    //   "-" +
    //   tempDate.getUTCFullYear();
    console.log(tempDate);
    setDate_birth(tempDate);
    visibiltyStatus();
  };

  return (
    <SafeAreaView
      className="flex-1 bg-white"
      edges={["right", "left", "bottom"]}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6">
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
              onChangeText={(text) => setName(text)}
              value={name}
              // keyboardType={"name"}
            />
            <TextField
              textFieldTitle="الإيميل"
              textFieldPlaceHolder="user@user.com"
              textContentType="emailAddress"
              autoComplete={"email"}
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType={"email-address"}
            />
            <TextField
              textFieldTitle="الرقم السري"
              textFieldPlaceHolder="أدخل الرقم السري"
              onChangeText={(text) => setPassword(text)}
              value={password}
              // autoComplete={"new-password"}
              secureTextEntry={true}
            />
            <TextField
              textFieldTitle="إعادة الرقم السري"
              textFieldPlaceHolder="أدخل الرقم السري"
              // autoComplete={"new-password"}
              secureTextEntry={true}
              onChangeText={(text) => setPassword_confirmation(text)}
              value={password_confirmation}
            />
            <TextField
              textFieldTitle="رقم الجوال"
              textFieldPlaceHolder="+966 50 000 0000"
              autoComplete={"tel"}
              onChangeText={(text) => setPhone(text)}
              value={phone}
            />
            <View className="pt-4">
              <DropDownListSU
                itemsList={universitiesList}
                title="الجامعة"
                searchTitle="إختر الجامعة"
                searchability={true}
                value={university}
                setValue={setUniversity}
              />
              <View className="py-3"></View>
              <DropDownListSU
                itemsList={genders}
                title="الجنس"
                searchTitle="حدد الجنس"
                value={gender}
                setValue={(text) => setGender(text)}
              />
            </View>
            <Pressable onPress={visibiltyStatus}>
              <TextField
                editable={false}
                textFieldTitle="تاريخ الميلاد"
                textFieldPlaceHolder={
                  date_birth === "" ? "لايوجد" : date_birth.toString() + " مـ"
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
                register(
                  name,
                  email,
                  password,
                  password_confirmation,
                  phone,
                  university,
                  gender,
                  date_birth
                )
              }
            />
            {error && <Text>{error}</Text>}
            {isLoading && <ActivityIndicator size="small" color="#6949FF" />}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
const universitiesList = [
  { label: "كليات ومعاهد الجبيل", value: 1 },
  { label: "جامعة الملك سعود", value: "2", key: "2" },
  { label: "جامعة الملك عبدالعزيز", value: "3", key: "3" },
  { label: "جامعة الملك فهد للبترول والمعادن", value: "4", key: "4" },
  { label: "جامعة أم القرى", value: "5", key: "5" },
  { label: "جامعة الملك خالد", value: "6", key: "6" },
  { label: "جامعة الملك فيصل", value: "7", key: "7" },
];
const genders = [
  { label: "ذكر", value: 1, key: 1 },
  { label: "أنثى", value: "2", key: "2" },
];
