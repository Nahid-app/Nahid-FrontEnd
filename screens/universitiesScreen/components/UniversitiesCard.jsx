import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { MotiView } from "moti";
import LeftBlackArrow from "../../../assets/svg/LeftBlackArrow";

const UniversityCard = ({
  universityName,
  universityAvatar,
  UniversityLocation,
  clubsNumber,
  ...props
}) => {
  return (
    <>
      <TouchableOpacity onPress={() => alert("clicked")}>
        <MotiView
          from={{
            translateY: -10,
          }}
          animate={{
            translateY: 0,
          }}
          className="flex-1 flex-row items-center rounded-2xl px-3 py-4 border"
          style={styles.cardsBorder}
        >
          {/* image container */}
          <View className="mr-5">
            <Image
              source={universityAvatar}
              resizeMode="contain"
              style={styles.clubAvatar}
              resizeMethod="resize"
              className="rounded-full"
            />
          </View>
          <View className="flex-col items-start h-14 justify-center flex-grow flex-shrink">
            <Text className="text-h6 font-[TajawalBold] pb-1 pt-1 items-start">
              {universityName}
            </Text>
            {/* uni avatar */}
            <View className="flex-row items-center ">
              {/* uni name */}
              <View className="items-center justify-center">
                <Text className="font-[TajawalRegular] items-center text-gray700 pt-1 ">
                  الموقع: {UniversityLocation}
                </Text>
              </View>
              <Text className=" text-xsRegular font-[TajawalRegular] mt-0.5 px-2 text-gray700">
                {"\u25CF"}
              </Text>
              <View className="items-center justify-center pt-1">
                <Text className="font-[TajawalRegular] items-center justify-center text-gray700">
                  عدد الأندية: {clubsNumber}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <LeftBlackArrow />
          </View>
        </MotiView>
      </TouchableOpacity>
    </>
  );
};

export default UniversityCard;
const styles = StyleSheet.create({
  cardsBorder: { borderColor: "#EEEEEE", borderWidth: 1 },
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
