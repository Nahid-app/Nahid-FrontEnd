import { View, Text } from "react-native";
import React from "react";
import OnBoardingButtonWhite from "../../components/buttons/OnBoardingButtonWhite";

export default function SignUpScreen() {
  return (
    <View className="flex-1 justify-center items-center content-center">
      <View>
        <Text>Progress bar</Text>
        <Text>إختار نوع الحساب اللي حاب تنشأه</Text>
        <Text>طالب</Text>
        <Text>نادي</Text>
        <Text>غير ذلك</Text>
      </View>
      <OnBoardingButtonWhite title={"تخطى"} />
    </View>
  );
}
