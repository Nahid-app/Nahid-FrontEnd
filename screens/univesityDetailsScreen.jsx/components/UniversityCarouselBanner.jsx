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
          className="h-32 w-full rounded-2xl"
        />
        <View className=" flex-row pt-5">
          <Image
            className="rounded-full"
            source={require("../../../assets/imgs/logos/jic.png")}
            style={{ width: 64, height: 64 }}
          />
          <View className="pl-5 justify-center">
            <Text className="font-[TajawalMedium] text-gray900 text-h6 p-px">
              كلية الجبيل الصناعية
            </Text>
            <Text className="font-[TajawalMedium] text-gray700 text-left p-px">
              Jubail Industrial College
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UniversityCarouselBanner;
