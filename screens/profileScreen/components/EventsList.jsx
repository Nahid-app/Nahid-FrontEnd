import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import Group from "../../../assets/svg/Group";
import eventsData from "./eventsData";

const EventsList = (props) => {
  return (
    <>
      <FlatList
        data={eventsData}
        keyExtractor={(item) => item.eventId.toString()}
        renderItem={({ item }) => (
          <View className="border border-gray300 rounded-xl overflow-hidden">
            <View className="flex-row rounded-xl w-full">
              <Image
                source={{
                  uri: item.eventImage,
                }}
                style={{ width: 140, height: 107 }}
              />
              <View className="overflow-hidden justify-around px-4 items-start">
                <Text className="font-[TajawalBold] text-h6 text-gray900">
                  {item.eventTitle}
                </Text>
                <View className="flex-row items-center">
                  <Text className="font-[TajawalMedium] text-gray700 ">
                    {item.eventDate}
                  </Text>
                  <Text className=" text-xsRegular text-left font-[TajawalRegular] px-2 text-gray700">
                    {"\u25CF"}
                  </Text>
                  <Text className="font-[TajawalMedium] text-gray700">
                    عدد الحضور {item.eventAttendance}
                  </Text>
                  <Text></Text>
                </View>
                <View className="flex-row">
                  <Group />
                  <Text className="font-[TajawalMedium] text-sSemiBold text-gray800 px-2">
                    عام
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        ItemSeparatorComponent={<View className="py-2" />}
        showsVerticalScrollIndicator={false}
      />
      <View className="py-2"></View>
    </>
  );
};

export default EventsList;
