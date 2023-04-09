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
          <View className="">
            <View className="border border-gray300 rounded-xl overflow-hidden">
              <View className="flex-row rounded-xl w-full items-center">
                <Image
                  className="rounded-full w-[60] h-[60] m-3"
                  source={item.ClubImage}
                />
                <View className="overflow-hidden justify-center p-2 items-start justify-around ">
                  <Text className="font-[TajawalBold] text-h6 text-gray900">
                    {item.ClubTitle}
                  </Text>
                  <View className="flex-row items-center pt-2">
                    <Text className="font-[TajawalMedium] text-gray700">
                      الأعضاء {item.ClubAttendance}
                    </Text>
                    <Text className=" text-xsRegular text-left font-[TajawalRegular] px-2 text-gray700">
                      {"\u25CF"}
                    </Text>
                    <View className="flex-row">
                      <Text className="font-[TajawalMedium] text-gray700">
                        عدد الفعاليات
                      </Text>
                      <Text className="font-[TajawalMedium] text-sSemiBold text-gray700 px-1">
                        {item.ClubEventsNumber}
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row items-center pt-2">
                    <View className="flex-row">
                      <Image
                        className="rounded-full w-[20] h-[20] mr-1"
                        source={item.ClubImage}
                      />
                    </View>
                    <Text className="font-[TajawalMedium] text-gray700">
                      كلية الجبيل الصناعية
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
