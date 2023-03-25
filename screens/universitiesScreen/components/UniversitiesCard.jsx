import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export const UniversitiesCard = ({
  clubsNumber,
  universitiesName,
  avatar,
  registeredStudentNumber,
}) => {
  return (
    <TouchableOpacity>
      <View className="flex-row content-center items-center">
        <View className="pr-5">
          <Image
            source={avatar}
            resizeMode="contain"
            style={styles.avatar}
            resizeMethod="resize"
            className="rounded-full"
          />
        </View>
        <View className="flex-col items-start justify-between">
          <Text className="text-h6 font-[TajawalBold] pb-1 pt-1">
            {universitiesName}
          </Text>
          <View className="flex-row flex-wrap justify-center align-middle content-center items-baseline text-gray700">
            <Text className="text-left font-[TajawalRegular]  pt-1 text-gray700">
              عدد الأندية: {clubsNumber}
            </Text>
            <Text className=" text-xsRegular text-left font-[TajawalRegular] pl-1 text-gray700 pt-1">
              {"\u25CF"}
            </Text>
            <Text className="text-left font-[TajawalRegular] pl-1 text-gray700 pt-1">
              عدد الطلاب : {registeredStudentNumber}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatar: { height: 60, width: 60, maxHeight: 60, minHeight: 60, minWidth: 60 },
});
