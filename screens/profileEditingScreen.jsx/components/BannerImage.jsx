import { View, Text, Image } from "react-native";
import React from "react";

const BannerImage = () => {
  return (
    <View className="py-6">
      <Image
        source={require("../../../assets/imgs/profileBanner.png")}
        className="h-32 w-full rounded-l-none rounded-2xl"
      />
    </View>
  );
};

export default BannerImage;
