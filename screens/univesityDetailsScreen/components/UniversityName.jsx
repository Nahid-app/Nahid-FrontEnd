import { View, Text, Image } from "react-native";
import React from "react";

const UniversityName = ({ route, navigation }) => {
  const {
    universityName,
    location,
    clubs_count,
    universityLogo,
    universityDescription,
  } = route.params;
  return (
    <View>
      <View className=" flex-row pt-5">
        <Image
          className="rounded-full"
          source={{ uri: universityLogo }}
          style={{ width: 64, height: 64 }}
        />
        <View className="pl-5 items-start pt-[4] flex-1 justify-center">
          <Text className="font-[TajawalBold] text-gray900 text-h6 p-px  ">
            {universityName}
          </Text>
          <View className="flex-row p-1">
            <Text className="font-[TajawalMedium] text-gray700">
              {universityDescription}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UniversityName;
