import { View, Text, Image, Animated, NativeEventEmitter } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import EventImages from "./components/EventImages";
import UserAccount from "./components/UserAccount";
import PrimaryColorButton from "../../components/buttons/PrimaryColorButton";

const EventDetailsScreen = () => {
  return (
    <View className="flex-1 bg-white px-6">
      {/* Event Images */}
      <View className=" mt-4 h-60 rounded-2xl overflow-hidden">
        <Swiper
          showsPagination={true}
          activeDotStyle={{ width: 24, backgroundColor: "#FFC107" }}
          paginationStyle={{ bottom: 15 }}
        >
          {EventImages.map((index) => (
            <View className="" key={index.id}>
              <Image source={{ uri: index.image }} className="h-60 w-full" />
            </View>
          ))}
        </Swiper>
      </View>
      {/* Event Title */}
      <Text className="font-[TajawalBold] text-h5 text-gray900 my-5">
        مقدمة في تطوير التطبيقات
      </Text>
      {/* Event Details */}
      <View>
        <View className="w-full bg-gray300 h-px"></View>
        <View className="flex-row justify-around items-center py-3 relative">
          <View className=" w-1/2 left-0">
            <View className="items-center justify-center">
              <Text className="font-[TajawalBold] text-h5 text-gray900 ">
                4:00 PM
              </Text>
              <Text className="font-[TajawalMedium] text-lSemiBold">
                وقت الحضور
              </Text>
            </View>
          </View>
          <View className="h-14 w-px bg-gray300 left-1/2 absolute"></View>
          <View className=" w-1/2 left-0">
            <View className="items-center justify-center">
              <Text className="font-[TajawalBold] text-h5 text-gray900 ">
                2nd of May
              </Text>
              <Text className="font-[TajawalMedium] text-lSemiBold">
                يوم الحضور
              </Text>
            </View>
          </View>
        </View>
        <View className="w-full bg-gray300 h-px"></View>
        <View className="flex-row justify-around items-center py-3 relative">
          <View className=" w-1/2 left-0">
            <View className="items-center justify-center">
              <Text className="font-[TajawalBold] text-h5 text-gray900 ">
                MIS Room 38
              </Text>
              <Text className="font-[TajawalMedium] text-lSemiBold">
                الموقع
              </Text>
            </View>
          </View>
          <View className="h-14 w-px bg-gray300 left-1/2 absolute"></View>
          <View className=" w-1/2 left-0">
            <View className="items-center justify-center">
              <Text className="font-[TajawalBold] text-h5 text-gray900 ">
                39
              </Text>
              <Text className="font-[TajawalMedium] text-lSemiBold">
                القدرة الإستيعابية
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="w-full bg-gray300 h-px"></View>
      {/* Event Club */}
      <UserAccount />
      {/* Description */}
      <View>
        <Text className="font-[TajawalBold] text-h6 text-gray900 mb-2">
          وصف الفعالية
        </Text>
        <Text className="font-[TajawalMedium] text-gray700 text-justify text-lSemiBold">
          وريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
          أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا .
        </Text>
      </View>
      {/* JoinButton */}
      {/* <View className="bottom-5 absolute w-full items-end border m-0">
        <PrimaryColorButton title={"إنضم للنشاط"} />
      </View> */}
    </View>
  );
};

export default EventDetailsScreen;
