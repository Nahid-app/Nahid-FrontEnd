import { View, Text, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import SlidesData from "./SlidesData";
import { useState } from "react";

const CommercialBanner = () => {
  const [index, setIndex] = useState(0);

  return (
    <View className="mx-6 mt-6 mb-4 h-44">
      <Swiper showsPagination={false} autoplay={true} autoplayTimeout={5}>
        {SlidesData.map((index) => (
          <View className="px-2" key={index.id}>
            <Image
              source={{ uri: index.image }}
              className="h-44 w-full rounded-l-none rounded-2xl"
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default CommercialBanner;
