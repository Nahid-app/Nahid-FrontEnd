import {
  View,
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from "react-native";
import React from "react";

export default function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flexDirection: "row", height: 70 ,}}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 40, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.1, 1, 0.1],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
            className="bg-primary"
          />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
});
