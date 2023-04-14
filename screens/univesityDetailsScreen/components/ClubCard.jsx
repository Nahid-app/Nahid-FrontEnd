import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { MotiView } from "moti";
import Group from "../../../assets/svg/Group";
import PrimaryButton from "../../../components/PrimaryButton";

const ClubCard = (props) => {
  return (
    <View className="pb-4">
      <TouchableOpacity onPress={() => alert("clicked")}>
        <MotiView
          from={{
            translateY: -10,
          }}
          animate={{
            translateY: 0,
          }}
          className="flex-1 flex-row rounded-2xl px-3 py-4 items-center "
          style={styles.CardsBorder}
        >
          <View className="mr-5">
            <Image
              source={props.item.clubImage}
              resizeMode="contain"
              style={styles.clubAvatar}
              resizeMethod="resize"
              className="rounded-full"
            />
            <Image
              source={props.item.clubImage}
              resizeMode="contain"
              style={styles.universityAvatar}
              resizeMethod="resize"
              className="rounded-full"
            />
          </View>
          <View className="items-start justify-center flex-grow flex-shrink">
            <Text className="text-h6 font-[TajawalBold] py-1 items-start ">
              {props.item.clubTitle}
            </Text>
            {/* uni avatar */}
            <View className="flex-row items-center w-full flex-wrap">
              {/* uni name */}
              <View className="items-center justify-center flex-row text-center">
                <View className="justify-center align-middle items-end pt-1">
                  <View className="items-center justify-center pr-1">
                    <Group />
                  </View>
                </View>
              </View>
              <Text className="font-[TajawalRegular] text-gray700 pt-1 ">
                {props.item.clubMajor}
              </Text>
              {/* <Text className=" text-sRegular font-[TajawalBold] mt-0.5 pl-1 text-gray700">
                {"\u007C"}
              </Text> */}
              <Text className=" text-lMedium text-left font-[TajawalRegular] px-[3] text-gray700">
                {"\u007C"}
              </Text>
              <View className="items-center justify-center pt-1">
                <Text className="font-[TajawalRegular] items-center justify-center text-gray700">
                  عدد الطلاب: {props.item.clubMemberCount}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View className="h-full justify-center py-1 px-1">
              <PrimaryButton />
            </View>
          </TouchableOpacity>
        </MotiView>
      </TouchableOpacity>
    </View>
  );
};

export default ClubCard;

const styles = StyleSheet.create({
  CardsBorder: { borderColor: "#EEEEEE", borderWidth: 1 },
  clubAvatar: {
    height: 60,
    width: 60,
    maxHeight: 60,
    minHeight: 60,
    minWidth: 60,
  },
  universityAvatar: {
    position: "absolute",
    right: 0,
    bottom: 0,
    height: 20,
    width: 20,
    maxHeight: 20,
    minHeight: 20,
    minWidth: 20,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
  },
});
