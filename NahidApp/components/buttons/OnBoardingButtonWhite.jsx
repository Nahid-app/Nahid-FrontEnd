import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import React from "react";

export default function OnBoardingButtonWhite({ onPress, title }) {
  return (
    <Animated.View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={onPress}
        className="flex-row justify-center items-center py-5 px-4 w-80 bg-[#F0EDFF]"
        style={styles.button}
        activeOpacity={0.7}
      >
        <Text className="text-primary font-[TajawalMedium]">{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderBottomLeftRadius: 35,
    borderBottomEndRadius: 35,
    borderBottomWidth: 6,
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    borderColor: "#C3B6FF",
    borderRadius: 100,
  },
});
