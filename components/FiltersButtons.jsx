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
      <TouchableOpacity className="flex-1 px-1">
        <View
          className="rounded-full justify-center items-center "
          style={styles.whiteButton}
        >
          <Text className="text-primary font-[TajawalExtraBold] text-lLarge ">
            {whiteButtonTitle}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="flex-1 px-1">
        <View
          className="border rounded-full justify-center items-center "
          style={styles.primaryButton}
        >
          <Text className="text-white font-[TajawalExtraBold] text-lLarge">
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
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
  },
  primaryButton: {
    borderWidth: 2,
    backgroundColor: "#6949FF",
    borderColor: "#6949FF",
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
  },
});
