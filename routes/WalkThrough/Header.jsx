import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowRightBlack from "../../assets/svg/ArrowRightBlack";
import { MotiText } from "moti";

const Header = ({ title, navigation }) => {
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.navigate("WalkthroughScreen")}
      >
        <View style={{ paddingRight: 10 }}>
          <ArrowRightBlack />
        </View>
      </TouchableOpacity>
      <MotiText
        from={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "timing",
        }}
        className="font-[TajawalBold] text-h4 justify-center items-center pt-2 text-center"
        style={{
          paddingTop: Platform.OS === "ios" ? 8 : null,
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "TajawalBold",
          fontSize: 24,
          textAlign: "center",
        }}
      >
        {title}
      </MotiText>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "flex-start",
    width: "100%",
    paddingVertical: 12,
  },
});
