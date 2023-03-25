import { View, Text, Image } from "react-native";
import React from "react";

const UserAccount = () => {
  return (
    <View className="flex-row justify-between items-center pb-3">
      <View className=" flex-row">
        <Image
          className="rounded-full"
          source={{
            uri: "https://media.licdn.com/dms/image/C4E03AQFsr05tUGaLeQ/profile-displayphoto-shrink_200_200/0/1653581028839?e=1684972800&v=beta&t=BYiIYD5Q2PHylqQlYniN3MfmxJlzQgETs9gHogaIRD4",
          }}
          style={{ width: 64, height: 64 }}
        />
        <View className="pl-5 justify-centerlu">
          <Text className="font-[TajawalBold] text-gray900 text-h5">
            فيصل يغمور
          </Text>
          <Text className="font-[TajawalMedium] text-gray700 text-left">
            @FaisalYaghmur
          </Text>
        </View>
      </View>
      <View className="bg-primary w-24 h-8 rounded-full justify-center">
        <Text className="font-[TajawalMedium] text-mSemiBold text-white text-center">
          عدل حسابي
        </Text>
      </View>
    </View>
  );
};

export default UserAccount;
