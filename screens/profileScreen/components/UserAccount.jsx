import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const UserAccount = ({ navigation }) => {
  return (
    <View className="flex-row justify-between items-center pb-3">
      <View className=" flex-row ">
        <Image
          className="rounded-full"
          source={require("./../../../assets/imgs/profile_picture.jpg")}
          style={{ width: 64, height: 64 }}
        />
        <View className="pl-5 justify-center">
          <Text className="font-[TajawalBold] text-gray900 text-h5">
            فيصل يغمور
          </Text>
          <Text className="font-[TajawalMedium] text-gray700 text-left">
            admin@example.com
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProfileEditingScreen")}
      >
        <View className="bg-primary w-24 h-8 rounded-full justify-center ">
          <Text className="font-[TajawalMedium] text-mSemiBold text-white text-center">
            عدل حسابي
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserAccount;
