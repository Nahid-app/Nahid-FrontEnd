import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const TextField = (props) => {
  return (
    <View className="pt-6">
      <Text className="font-[TajawalBold] text-grey900 pb-4">
        {props.textFieldTitle}
      </Text>
      <TextInput
        placeholder={props.textFieldPlaceHolder}
        placeholderTextColor={"black"}
        className="font-[TajawalBold] text-h5 pb-2"
        style={styles.bottomBorderStyle}
        textAlign="right"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBorderStyle: { borderBottomWidth: 1, borderBottomColor: "#6949FF" },
});

export default TextField;
