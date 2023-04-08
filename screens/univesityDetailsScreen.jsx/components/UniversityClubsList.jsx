import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import Group from "../../../assets/svg/Group";
import UniversityClubsData from "./UniversityClubsData";

const UniversityClubsList = () => {
  return (
    <View className="flex-1">
      <FlatList
        data={UniversityClubsData}
        keyExtractor={(item) => item.ClubId.toString()}
        renderItem={({ item }) => (
          <View>
            <View className="border border-gray300 rounded-xl overflow-hidden">
              <View className="flex-row rounded-xl w-full">
                <Image
                  className="rounded-full w-[64] h-[64] m-3"
                  source={item.ClubImage}
                />
                <View className="overflow-hidden justify-center p-px items-start">
                  <Text className="font-[TajawalBold] text-h6 text-gray900">
                    {item.ClubTitle}
                  </Text>
                  <View className="flex-row items-center pt-2">
                    <View className="flex-row">
                      <Group />
                      <Text className="font-[TajawalMedium] text-sSemiBold text-gray800 px-2">
                        {item.ClubCategory}
                      </Text>
                    </View>
                    <Text className=" text-xsRegular text-left font-[TajawalRegular] px-2 text-gray700">
                      {"\u25CF"}
                    </Text>
                    <Text className="font-[TajawalMedium] text-gray700">
                      الإشتراكات {item.ClubAttendance}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {item.ClubId === UniversityClubsData.length.toString() ? (
              <View className="py-2"></View>
            ) : undefined}
          </View>
        )}
        ItemSeparatorComponent={<View className="py-2" />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default UniversityClubsList;
