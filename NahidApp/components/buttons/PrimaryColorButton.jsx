import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const PrimaryColorButton = ({ onPress, title }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={onPress}
        className="flex-row justify-center items-center py-5 px-4 bg-primary w-80"
        style={styles.button}
      >
        <Text className="text-white font-[TajawalMedium]">{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryColorButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderBottomLeftRadius: 35,
    borderBottomEndRadius: 35,
    borderBottomWidth: 6,
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    borderColor: "#543ACC",
    borderRadius: 100,
  },
});
