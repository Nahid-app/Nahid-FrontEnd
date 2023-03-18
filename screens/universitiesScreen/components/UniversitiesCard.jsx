import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export const UniversitiesCard = ({ title, avatar }) => {
  return (
    <TouchableOpacity>
      <View
        className="bg-white rounded-xl justify-between max-w-xs "
        style={[
          {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
        ]}
      >
        <View className="p-2 bg-[#EEEEEE]">
          <Image
            source={avatar}
            className="w-full rounded-t-xl bg-[#EEEEEE] h-32"
            resizeMode="contain"
          />
        </View>
        <View className="h-20 align-middle justify-center content-center items-center w-full max-w-xs">
          <Text className="font-[Tajawal] w-full align-middle text-center p-3">
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
