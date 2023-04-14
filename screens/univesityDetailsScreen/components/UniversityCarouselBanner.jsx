import { View, Text, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import UniversityImages from "./UniversityImages";

const UniversityCarouselBanner = () => {
  return (
    <View>
      <View className="mt-4">
        <Image
          source={{
            uri: "http://www.jic.edu.sa/en/about/PublishingImages/campus.png",
          }}
          className="h-[230] w-full rounded-2xl"
        />
        <View className=" flex-row pt-5">
          <Image
            className="rounded-full"
            source={require("../../../assets/imgs/logos/jic.png")}
            style={{ width: 64, height: 64 }}
          />
          <View className="pl-5 justify-center justify-around">
            <Text className="font-[TajawalBold] text-gray900 text-h6 p-px">
              كلية الجبيل الصناعية
            </Text>
            <View className="flex-row">
              <Text className="font-[TajawalMedium] text-gray700">الجبيل</Text>
              <Text className=" text-lMedium text-left font-[TajawalRegular] px-2 text-gray700">
                {"\u007C"}
              </Text>
              <Text className="font-[TajawalMedium] text-gray700 ">
                12 نادي
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UniversityCarouselBanner;
