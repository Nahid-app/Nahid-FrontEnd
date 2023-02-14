import { View, Text, FlatList, Animated, TouchableOpacity } from "react-native";
import { React, useState, useRef } from "react";
import slides from "./slides";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import PrimaryColorButton from "../buttons/PrimaryColorButton";

const Onboarding = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoverPercentThreshold: 50 }).current;
  const scrollTo = () => {};
  const slidesRef = useRef(null);
  return (
    <View className=" flex-1 items-center align-baseline bg-white w-full">
      <View style={{ flex: 1 }} className=" items-center">
        {/*  */}
        <FlatList
          data={slides}
          renderItem={({ item }) => (
            <OnboardingItem item={item} scrollX={scrollX} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewableItemsChanged={viewConfig}
          ref={slidesRef}
        />
        {/* this is just an indicator for pages */}
        <Paginator data={slides} scrollX={scrollX} />
      </View>
    </View>
  );
};

export default Onboarding;

/**
 * !#Muath Al-Ghamdi:
 * in this code i did the following:
 * create onboard welcoming page
 * create animation for flatlist
 * create the onboard items
 * create the buttons for signing in or create
 * */
