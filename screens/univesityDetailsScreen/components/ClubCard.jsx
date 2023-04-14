import { View, Text, Image } from "react-native";
import React from "react";
import UniversityClubsData from "./UniversityClubsData";
import Group from "../../../assets/svg/Group";

const ClubCard = (props) => {
  return (
    <View className="">
      <View className="border border-gray300 rounded-xl overflow-hidden">
        <View className="flex-row rounded-xl w-full items-center">
          <View className="relative">
            <Image
              className="rounded-full w-[60] h-[60] m-3 z-0"
              source={props.item.ClubImage}
            />
            <Image
              className="rounded-full w-[20] h-[20] m-3 absolute bottom-1 right-1 z-10 border border-white"
              source={props.item.ClubImage}
            />
          </View>
          <View className="overflow-hidden justify-center p-2 items-start justify-around ">
            <Text className="font-[TajawalBold] text-h6 text-gray900">
              {props.item.ClubTitle}
            </Text>
            <View className="flex-row items-center pt-2">
              <Group />
              <Text className="font-[TajawalMedium] text-gray700 pr-2">
                {props.item.ClubMajor}
              </Text>
              <Text className=" text-lMedium text-left font-[TajawalRegular] px-2 text-gray700">
                {"\u007C"}
              </Text>
              <View className="flex-row">
                <Text className="font-[TajawalMedium] text-gray700">
                  عدد الأعضاء:
                </Text>
                <Text className="font-[TajawalMedium] text-sSemiBold text-gray700 px-1">
                  {props.item.ClubMemberCount}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {props.item.ClubId === UniversityClubsData.length.toString() ? (
        <View className="py-2"></View>
      ) : undefined}
    </View>
  );
};

export default ClubCard;
