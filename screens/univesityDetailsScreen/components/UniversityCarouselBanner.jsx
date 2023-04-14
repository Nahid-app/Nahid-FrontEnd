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
          className="h-[180] w-full rounded-2xl"
        />
      </View>
    </View>
  );
};

export default UniversityCarouselBanner;
