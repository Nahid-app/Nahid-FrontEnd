import { View, Text, Image } from "react-native";
import React from "react";

const UserAccount = () => {
  return (
    <View className="flex-row justify-between items-center my-5">
      <View className=" flex-row ">
        <Image
          className="rounded-full"
          source={require("../../../assets/imgs/logos/jic.png")}
          style={{ width: 64, height: 64 }}
        />
        <View className="pl-5 justify-center">
          <Text className="font-[TajawalBold] text-gray900 text-h6">
            نادي الحاسب الآلي
          </Text>
          <Text className="font-[TajawalMedium] text-gray700 text-left">
            كلية الجبيل الصناعية
          </Text>
        </View>
      </View>
      <View className="bg-primary w-16 h-9 rounded-full justify-center ">
        <Text className="font-[TajawalMedium] text-mSemiBold text-white text-center p-2">
          تابع
        </Text>
      </View>
    </View>
  );
};

export default UserAccount;
