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
    <View>
      <Text className="font-[TajawalBold] text-h6 text-gray900 mb-2">
        {props.textTitle}
      </Text>
      <ScrollView className="h-[10%]" showsVerticalScrollIndicator={false}>
        <Pressable onPress={toggleShowMore}>
          <Text
            className="font-[TajawalMedium] text-gray700 text-justify text-lSemiBold"
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
      </ScrollView>
    </View>
  );
};

export default TextWithReadMore;
