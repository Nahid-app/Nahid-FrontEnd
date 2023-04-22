import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import GrayCalender from "../../../assets/svg/GrayCalender";
import { MotiView } from "moti";

const EventCard = ({
  avatarUrl,
  title,
  daysLeft,
  location,
  imageUrl,
  clubName,
  navigation,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("EventsDetailsScreen")}
      >
        <MotiView
          className="flex-row justify-center items-center pb-4"
          from={{
            translateX: -10,
          }}
          animate={{
            translateX: 0,
          }}
        >
          <View
            className="w-1/3 max-h-28"
            style={ios ? styles.ImageStylingIOSContainer : null}
          >
            <Image
              source={imageUrl}
              className="max-h-28 w-full rounded-l-none  "
              resizeMode="cover"
              style={ios ? styles.ImageStylingIOS : styles.ImageStylingAndroid}
            />
            <View className="absolute bg-primary right-3 bottom-3 rounded-md px-2.5 py-1.5">
              <Text className="font-[TajawalMedium] text-white text-left">
                ندوة
              </Text>
            </View>
          </View>
          <View
            className=" bg-white flex-row h-28 items-center content-center  w-2/3 py-1"
            style={styles.CardStyling}
          >
            <View className="px-4 h-full items-start justify-evenly  w-full pt-1 ">
              <Text className="align-baseline justify-center text-left font-[TajawalBold] text-h6 ">
                {title}
              </Text>
              <View
                className="flex-row items-center justify-center text-left py-1"
                style={{ textAlignVertical: "center" }}
              >
                <View className="justify-center items-center pb-0.5">
                  <GrayCalender style={{ textAlignVertical: "center" }} />
                </View>
                <Text className=" text-center justify-center items-center px-1 font-[TajawalMedium] text-gray700">
                  {daysLeft}
                </Text>
                <Text className=" text-xsRegular font-[TajawalRegular] mt-0.5 px-1 text-gray700">
                  {"\u007C"}
                </Text>
                <Text className="content-center pl-1 font-[TajawalMedium] text-gray700 px-1">
                  {location}
                </Text>
              </View>
              <View className="font-[TajawalMedium] flex-row items-center justify-center ">
                <Image
                  source={avatarUrl}
                  className="h-5 w-5 rounded-xl relative"
                  resizeMode="center"
                />
                <View
                  className="flex-grow flex-wrap justify-center items-center pt-1 text-left pl-1"
                  style={{ textAlignVertical: "center" }}
                >
                  <Text className="font-[TajawalMedium] text-left flex-wrap text-mBold ">
                    {clubName}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </MotiView>
      </TouchableOpacity>
    </>
  );
};

export default EventCard;
const ios = Platform.OS === "ios";
const styles = StyleSheet.create({
  ImageStylingIOSContainer: {
    borderRadius: 1,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  ImageStylingIOS: {
    borderRadius: 0,
    borderColor: "#EEEEEE",
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
  },
  ImageStylingAndroid: {
    borderRadius: 0,
    borderColor: "#EEEEEE",
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
  },
  CardStyling: {
    borderWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    borderColor: "#EEEEEE",
  },
});
