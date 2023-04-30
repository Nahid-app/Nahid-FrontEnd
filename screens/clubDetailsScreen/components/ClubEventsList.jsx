import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Group from "../../../assets/svg/Group";
import eventsData from "./ClubEventsData";

const EventsList = ({ navigation }) => {
  return (
    <>
      <FlatList
        className="pt-5"
        data={eventsData}
        keyExtractor={(item) => item.eventId.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetailsRoute", {
                screen: "EventDetailsScreen",
              })
            }
          >
            <View className="border border-gray300 rounded-xl overflow-hidden">
              <View className="flex-row rounded-xl w-full">
                <View className="relative">
                  <Image
                    source={{
                      uri: item.eventImage,
                    }}
                    style={{ width: 140, height: 107 }}
                  />
                  <View className="absolute bg-primary w-[40] h-[28] bottom-3 right-3 rounded-md items-center justify-center">
                    <Text className="font-[TajawalMedium] text-mSemiBold text-white">
                      ندوة
                    </Text>
                  </View>
                </View>
                <View className="overflow-hidden justify-around px-4 items-start overflow-hidden">
                  <Text className="font-[TajawalBold] text-h6 text-gray900 text-left break words">
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
                      {item.eventAttendance}
                    </Text>
                    <Text></Text>
                  </View>
                  <View className="flex-row">
                    <Image
                      className="h-[20] w-[20] rounded-full"
                      source={require("../../../assets/imgs/logos/jic.png")}
                    />
                    <Text className="font-[TajawalMedium] text-sSemiBold text-gray800 px-2">
                      كلية الجبيل الصناعية
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={<View className="py-2" />}
        showsVerticalScrollIndicator={false}
      />
      <View className="py-2"></View>
    </>
  );
};

export default EventsList;
