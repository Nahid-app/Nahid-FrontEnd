import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import slides from "./slides";
import Paginator from "./Paginator";

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      className="items-center align-center justify-center content-baseline bg-white "
      style={{ width, flex: 1 }}
    >
      <View>
        <Image source={item.image} className="aspect-auto" />
      </View>
      <View className="py-1 px-8 justify-center items-center ">
        <Text
          style={{ fontFamily: "TajawalBold" }}
          className="text-h3 pt-2 px-2 flex-wrap text-center"
        >
          {item.title}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingItem;
