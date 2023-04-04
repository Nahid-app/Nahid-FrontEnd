import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const UniversityCard = ({
  universityName,
  universityAvatar,
  registeredStudentNumber,
  clubsNumber,
  ...props
}) => {
  return (
    <>
      <View
        className="flex-1 flex-row  items-center rounded-lg px-3 py-4"
        style={{ borderColor: "#EEEEEE", borderWidth: 1 }}
      >
        {/* image container */}
        <TouchableOpacity>
          <View className="mr-5">
            <Image
              source={universityAvatar}
              resizeMode="contain"
              style={styles.clubAvatar}
              resizeMethod="resize"
              className="rounded-full"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="flex-col items-start h-14 justify-between py-1">
            <Text className="text-h6 font-[TajawalBold] pb-1 pt-1 ">
              {universityName}
            </Text>
            {/* uni avatar */}
            <View className="flex-row items-start justify-between pt-1">
              {/* uni name */}
              <View className="items-start justify-center pt-1 ">
                <Text className="font-[TajawalRegular] items-center  ">
                  عدد الطلاب: {registeredStudentNumber}{" "}
                </Text>
              </View>
              <View className="items-start justify-center">
                <Text className="font-[TajawalRegular] pl-2 items-center pt-1">
                  عدد الأندية: {clubsNumber}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View className="ml-auto justify-center items-center ">
          <TouchableOpacity>
            <View className="bg-primary py-[6px] px-4 flex-col items-center justify-center rounded-[100px]">
              <Text className="text-white">المزيد</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default UniversityCard;
const styles = StyleSheet.create({
  clubAvatar: {
    height: 60,
    width: 60,
    maxHeight: 60,
    minHeight: 60,
    minWidth: 60,
  },
  universityAvatar: {
    height: 20,
    width: 20,
    maxHeight: 20,
    minHeight: 20,
    minWidth: 20,
  },
});
