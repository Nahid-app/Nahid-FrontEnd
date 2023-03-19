import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ticket from "../../assets/svg/Ticket";
import Calender from "../../assets/svg/Calender1";
import data from "./data";

// Cards
const Activities = ({
  avatarUrl,
  title,
  date,
  type,
  imageUrl,
  clubName,
  clubId,
}) => {
  return (
    <>
      <TouchableOpacity>
        <View className="flex-row justify-center items-center ">
          <View
            className="w-1/3 max-h-28 "
            style={{
              borderRadius: 1,
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <Image
              source={imageUrl}
              className="max-h-28 w-full rounded-l-none  "
              resizeMode="cover"
              style={{
                borderRadius: 0,
                borderColor: "#EEEEEE",
                borderBottomLeftRadius: 12,
                borderTopLeftRadius: 12,
              }}
            />
          </View>
          <View
            className=" bg-white flex-row h-28 items-center content-center my-1 w-2/3"
            style={{
              borderWidth: 1,
              borderTopWidth: 1,
              borderRightWidth: 1,
              borderBottomRightRadius: 12,
              borderTopRightRadius: 12,
              borderColor: "#EEEEEE",
            }}
          >
            <View className="px-4 h-full content-center py-3 justify-between w-full ">
              <Text className="align-baseline border justify-center text-left font-[Tajawal] text-h6 pt-1">
                {title}
              </Text>
              <View
                className="flex-row items-center pt-3 content-center text-left"
                style={{ textAlignVertical: "center" }}
              >
                <Calender style={{ textAlignVertical: "center" }} />
                <Text className=" content-center pl-1 pr-1 font-[TajawalMedium]  text-gray700">
                  {date}
                </Text>
                <Ticket style={{ textAlignVertical: "center" }} />
                <Text className=" content-center pl-1  font-[TajawalMedium]  text-gray700">
                  {type}
                </Text>
              </View>
              <View className="font-[TajawalMedium] flex-row items-center ">
                <Image
                  source={avatarUrl}
                  className="h-5 w-5 rounded-xl"
                  resizeMode="stretch"
                />
                <View
                  className=" px-2 "
                  style={{ textAlignVertical: "center" }}
                >
                  <Text className="pl-2 font-[TajawalMedium] text-left flex flex-wrap ">
                    {clubName}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};
// Main All Activities
const ActivitiesList = () => {
  return (
    <View className="bg-white flex-1 px-6 ">
      <FlatList
        data={data}
        keyExtractor={(item) => item.clubId.toString()}
        renderItem={({ item }) => (
          <Activities
            avatarUrl={item.avatarUrl}
            clubName={item.clubName}
            title={item.title}
            date={item.date}
            imageUrl={item.imageUrl}
            type={item.type}
          />
        )}
        ItemSeparatorComponent={<View className="pt-4"></View>}
      />
    </View>
  );
};

export default ActivitiesList;
