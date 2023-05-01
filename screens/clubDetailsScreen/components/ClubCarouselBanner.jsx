import { View, Text, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import EventData from "./ClubImages";

const EventCarouselBanner = () => {
  return (
    <View className=" mt-4 h-60 rounded-2xl overflow-hidden ">
      <Swiper
        showsPagination={true}
        activeDotStyle={{ backgroundColor: "#FFC107" }}
        paginationStyle={{ bottom: 15 }}
      >
        {EventData.map((index) => (
          <View className="" key={index.id}>
            <Image source={{ uri: index.image }} className="h-60 w-full" />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default EventCarouselBanner;
