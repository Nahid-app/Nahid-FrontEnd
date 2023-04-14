import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { MotiView } from "moti";

const FiltersButtons = ({ whiteButtonTitle, primaryButtonTitle }) => {
  return (
    <MotiView
      from={{
        translateY: -10,
      }}
      animate={{
        translateY: 0,
      }}
      className="w-full flex-row justify-evenly pb-7"
    >
      <TouchableOpacity>
        <View className="rounded-full px-16 py-2 " style={styles.whiteButton}>
          <Text className="text-primary font-[TajawalExtraBold] text-lLarge pt-1">
            {whiteButtonTitle}
          </Text>
        </View>
      </TouchableOpacity>
      <View className="px-2"></View>
      <TouchableOpacity>
        <View
          className="border rounded-full px-16 py-2 "
          style={styles.primaryButton}
        >
          <Text className="text-white font-[TajawalExtraBold] text-lLarge pt-1">
            {primaryButtonTitle}
          </Text>
        </View>
      </TouchableOpacity>
    </MotiView>
  );
};

export default FiltersButtons;

const styles = StyleSheet.create({
  whiteButton: {
    borderWidth: 2,
    backgroundColor: "white",
    borderColor: "#6949FF",
  },
  primaryButton: {
    borderWidth: 2,
    backgroundColor: "#6949FF",
    borderColor: "#6949FF",
  },
});
