import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const TextWithReadMore = (props) => {
  const text = props.text;
  const readMore = "... المزيد";
  const readLess = "... القليل";
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <View className="mb-5">
      <Text className="font-[TajawalBold] text-h6 text-gray900 mb-2 p-px text-left">
        {props.textTitle}
      </Text>
      <Pressable onPress={toggleShowMore}>
        <Text
          // I've added this style since I couldn't have the direction rtl
          // and justify at the same time(this probelm occured with IOS only)
          style={{ writingDirection: "rtl" }}
          className="font-[TajawalMedium] text-gray700 text-justify text-lSemiBold leading-1"
          numberOfLines={showMore ? undefined : 3}
        >
          {showMore ? text : text.slice(0, 100)}
          {
            <Text className="font-[TajawalBold] text-success ">
              {showMore ? readLess : readMore}
            </Text>
          }
        </Text>
      </Pressable>
    </View>
  );
};

export default TextWithReadMore;
