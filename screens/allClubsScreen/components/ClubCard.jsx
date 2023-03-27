import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const ClubCard = ({
  clubName,
  universityName,
  universityAvatar,
  clubAvatar,
}) => {
  return (
    <>
      <View className="flex-1 flex-row">
        {/* image container */}
        <TouchableOpacity>
          <View className="mr-5">
            <Image
              source={clubAvatar}
              resizeMode="contain"
              style={styles.clubAvatar}
              resizeMethod="resize"
            />
          </View>
        </TouchableOpacity>
        {/* Club name  */}
        <TouchableOpacity>
          <View className="flex-col items-start justify-between py-[3.5px] ">
            <Text className="text-h6 font-[TajawalBold] pb-1 pt-1 pl-">
              {clubName}
            </Text>
            {/* uni avatar */}
            <View className="flex-row items-start justify-between py-[3.5px]">
              <Image
                source={universityAvatar}
                resizeMode="contain"
                style={styles.universityAvatar}
                resizeMethod="resize"
                className="rounded-full"
              />
              {/* uni name */}
              <View className="items-start justify-center py-[3.5px] pl-2">
                <Text className="font-[TajawalRegular] ">{universityName}</Text>
              </View>
            </View>
            {/* register button */}
          </View>
        </TouchableOpacity>
        <View className="ml-auto justify-center items-center ">
          <TouchableOpacity>
            <View className="bg-primary py-[6px] px-4 flex-col items-center justify-center rounded-[100px]">
              <Text className="text-white">تابع</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
    /* <View className="flex-row">
        <View className="mr-1 items-center">
          <Image
            source={clubAvatar}
            resizeMode="contain"
            style={styles.clubAvatar}
            resizeMethod="resize"
          />
        </View>
        <View className="flex-col items-start justify-between py-[3.5px] w-56">
          <Text className="text-h6 font-[TajawalBold] pb-1 pt-1">
            {clubName}
          </Text>
          <View className="flex-row flex-wrap justify-center align-middle content-center items-center overflow-hidden">
            <Image
              source={universityAvatar}
              resizeMode="contain"
              style={styles.universityAvatar}
              resizeMethod="resize"
              className="rounded-full"
            />
            <View className="ml-2 justify-center align-middle content-center items-baseline ">
              <Text className="font-[TajawalRegular] ">{universityName}</Text>
            </View>
          </View>
        </View>
        <View className="text-mSemiBold text-white justify-center items-center content-center h-5 rounded-md px-4 bg-primary">
          <Text className="text-mSemiBold text-white">تابع</Text>
        </View>
      </View> */
  );
};

export default ClubCard;
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
