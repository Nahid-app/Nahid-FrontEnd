import { View, Text, Image } from "react-native";
import React from "react";

const UniversityName = ({ route, navigation }) => {
  const { universityName } = route.params;
  return (
    <View>
      <View className=" flex-row pt-5">
        <Image
          className="rounded-full"
          source={require("../../../assets/imgs/logos/jic.png")}
          style={{ width: 64, height: 64 }}
        />
        <View className="pl-5 items-start pt-[4] flex-1 justify-center">
          <Text className="font-[TajawalBold] text-gray900 text-h6 p-px  ">
            {universityName}
          </Text>
          <View className="flex-row p-1">
            <Text className="font-[TajawalMedium] text-gray700">الجبيل</Text>
            <Text className=" text-lMedium text-left font-[TajawalRegular] px-2 text-gray700">
              {"\u007C"}
            </Text>
            <Text className="font-[TajawalMedium] text-gray700">12 نادي</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UniversityName;
